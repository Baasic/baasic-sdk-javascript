(function (window, document, $, undefined) {
    var MonoSoftware = window.MonoSoftware || (window.MonoSoftware = {});

    function extend(obj1, obj2) {
        for (var prop in obj2) {
            obj1[prop] = obj2[prop];
        }

        return obj1;
    }

    var addEvent = $ !== undefined ?
    function (evnt, elem, func) {
        $(elem).on(evnt, func);
    } : function (evnt, elem, func) {
        if (elem.addEventListener) elem.addEventListener(evnt, func, false);
        else if (elem.attachEvent) {
            elem.attachEvent("on" + evnt, func);
        }
        else {
            elem["on" + evnt] = func;
        }
    };

    var triggerEvent = $ !== undefined ?
    function (element, eventName, additionalData) {
        var event = extend($.Event(eventName), additionalData);
        $(element).trigger(event);
    } : function (element, eventName, additionalData) {
        var event; // The custom event that will be created

        if (CustomEvent && typeof CustomEvent === "function") {
            event = extend(new CustomEvent(eventName));
            element.dispatchEvent(event);

            return;
        }
        else if (document.createEvent) {
            event = document.createEvent("CustomEvent");
            event.initEvent(eventName, true, true);

            if (additionalData) {
                extend(event, additionalData);
            }

            if (element.dispatchEvent) {
                element.dispatchEvent(event);
            } else {
                document.dispatchEvent(event);
            }

            return;

        } else {
            event = document.createEventObject();
            event.eventType = eventName;

            if (additionalData) {
                extend(event, additionalData);
            }
            element.fireEvent("on" + event.eventType, event);

            return;
        }

        if (element.dispatchEvent) {
            element.dispatchEvent(event);
        } else if (element.fireEvent) {
            element.fireEvent("on" + event.eventType, event);
        } else {
            var handler = element["on" + event.eventType];
            if (handler) handler(event);
        }
    };

    (function (Baasic) {
        var AUTH_HEADER = "Authorization";
        (function (Application) {
            var browserLanguage = navigator.language || navigator.userLanguage,
                messageBusKey = "baasic-message-bus",
                messageTypes = {
                    tokenChanged: "tokenChanged",
                    userChanged: "userChanged"
                };

            function pushMessage(message) {
                localStorage.setItem(messageBusKey, JSON.stringify(message));
            }

            function initialize(apiKey, options) {
                return new App(apiKey, options);
            }
            Application.init = initialize;

            function triggerTokenExpired(app) {
                triggerEvent(document, "tokenExpired", {
                    app: app
                });
            }

            function App(apiKey, options) {
                var userInfoKey = "baasic-user-info-" + apiKey,
                    tokenKey = "baasic-auth-token-" + apiKey,
                    settings = {
                        useSSL: false,
                        defaultLanguage: "en",
                        apiRootUrl: "api.baasic.com",
                        apiVersion: "v1",
                        storeToken: function (token) {
                            if (token === undefined || token == null) {
                                localStorage.removeItem(tokenKey);
                            } else {
                                localStorage.setItem(tokenKey, JSON.stringify(token));
                            }
                        },
                        readToken: function () {
                            return JSON.parse(localStorage.getItem(tokenKey));
                        },
                        storeUserInfo: function (userInfo) {
                            if (userInfo === undefined || userInfo == null) {
                                localStorage.removeItem(userInfoKey);
                            } else {
                                localStorage.setItem(userInfoKey, JSON.stringify(userInfo));
                            }
                        },
                        readUserInfo: function () {
                            return JSON.parse(localStorage.getItem(userInfoKey));
                        }
                    },
                    app = this;

                extend(settings, options);

                var apiUrl = settings.useSSL ? "https" : "http" + "://" + settings.apiRootUrl + "/" + settings.apiVersion + "/" + apiKey + "/",
                    token = settings.readToken(),
                    userAccessTokenTimer = null,
                    user = {
                        isAuthenticated: function () {
                            var token = app.get_accessToken();
                            return token !== undefined && token !== null && (token.expireTime === undefined || token.expireTime === null || (token.expireTime - new Date().getTime()) > 0);
                        }
                    };

                if (token) {
                    userAccessTokenTimer = setExpirationTimer(token);
                }

                addEvent("storage", window, function (e) {
                    e = e || event;
                    if (e.originalEvent) e = e.originalEvent;

                    if (e.key === messageBusKey) {
                        var value = e.newValue;
                        if (value && value !== "") {
                            var message = JSON.parse(value);

                            switch (message.type) {
                            case messageTypes.userChanged:
                                triggerEvent(document, "userChange", {
                                    user: app.get_user(),
                                    app: app
                                });
                                break;
                            case messageTypes.tokenChanged:
                                syncToken(value !== "" ? JSON.parse(value) : null);
                                break;
                            }
                        }
                    }
                });

                this.get_apiKey = function get_apiKey() {
                    return apiKey;
                };

                this.get_apiUrl = function get_apiUrl() {
                    return apiUrl;
                };

                this.get_accessToken = function get_accessToken() {
                    return settings.readToken();
                };

                this.update_accessToken = function update_accessToken(value) {
                    syncToken(value);

                    settings.storeToken(value);

                    pushMessage({
                        type: messageTypes.tokenChanged
                    });
                };

                this.get_user = function get_user() {
                    var userInfo = settings.readUserInfo();
                    if (userInfo) {
                        user.user = userInfo;
                    } else {
                        delete user.user;
                    }

                    return user;
                };

                this.set_user = function set_user(userDetails) {
                    settings.storeUserInfo(userDetails);

                    pushMessage({
                        type: messageTypes.userChanged
                    });
                };

                function setExpirationTimer(token) {
                    if (token && token != null && token.expireTime) {
                        var expiresIn = token.expireTime - new Date().getTime();
                        if (expiresIn > 0) {
                            return setTimeout(function () {
                                triggerTokenExpired(app);
                            }, expiresIn);
                        }
                    }

                    return null;
                }

                function syncToken(newToken) {
                    clearTimeout(userAccessTokenTimer);
                    if (newToken === undefined || newToken == null) {
                        triggerTokenExpired(app);
                    } else {
                        if (!newToken.expireTime) {
                            if (newToken.expires_in) {
                                newToken.expireTime = new Date().getTime() + (newToken.expires_in * 1000);
                            } else if (newToken.sliding_window) {
                                newToken.expireTime = new Date().getTime() + (newToken.sliding_window * 1000);
                            }
                        }
                        userAccessTokenTimer = setExpirationTimer(newToken);
                    }
                }

                this.get_currentLanguage = function get_currentLanguage() {
                    if (settings.language) {
                        return settings.language;
                    }
                    else if (browserLanguage) {
                        return browserLanguage;
                    } else {
                        return get_defaultLanguage();
                    }
                };

                this.get_defaultLanguage = function get_defaultLanguage() {
                    return settings.defaultLanguage;
                };
            }

        })(Baasic.Application || (Baasic.Application = {}));
    })(MonoSoftware.Baasic || (MonoSoftware.Baasic = {}));

})(window, document, jQuery);