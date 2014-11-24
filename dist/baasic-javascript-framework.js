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
            var browserLanguage = navigator.language || navigator.userLanguage;

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
                var settings = {
                    useSSL: false,
                    defaultLanguage: "en",
                    apiRootUrl: "api.baasic.com",
                    apiVersion: "v1"
                },
                    app = this;

                extend(settings, options);

                var apiUrl = settings.useSSL ? "https" : "http" + "://" + settings.apiRootUrl + "/" + settings.apiVersion + "/" + apiKey + "/";
                var userInfoKey = "baasic-user-info-" + apiKey;
                var tokenKey = "baasic-auth-token-" + apiKey;

                var token = JSON.parse(localStorage.getItem(tokenKey));
                var currentUser = JSON.parse(localStorage.getItem(userInfoKey));
                var userAccessTokenTimer = null;
                if (token) {
                    updateCurrentUserObject(currentUser);
                    userAccessTokenTimer = setExpirationTimer(token);
                } else {
                    updateCurrentUserObject(null);
                }

                addEvent("storage", window, function (e) {
                    e = e || event;
                    if (e.originalEvent) e = e.originalEvent;

                    var value = e.newValue;
                    switch (e.key) {
                    case userInfoKey:
                        if (value === undefined || value === null || value === '') {
                            updateCurrentUserObject(null);
                        } else {
                            var userObject = JSON.parse(value);
                            updateCurrentUserObject(userObject.user);
                        }

                        triggerEvent(document, "userChange", {
                            user: currentUser,
                            app: app
                        });
                        break;
                    case tokenKey:
                        syncToken(value !== "" ? JSON.parse(value) : null);
                        break;
                    }
                });

                function get_apiKey() {
                    return apiKey;
                }
                this.get_apiKey = get_apiKey;

                function get_apiUrl() {
                    return apiUrl;
                }
                this.get_apiUrl = get_apiUrl;

                function get_accessToken() {
                    return token;
                }
                this.get_accessToken = get_accessToken;

                function update_accessToken(value) {
                    syncToken(value);

                    if (value === undefined || value == null) {
                        localStorage.removeItem(tokenKey);
                    } else {
                        localStorage.setItem(tokenKey, JSON.stringify(token));
                    }
                }
                this.update_accessToken = update_accessToken;

                function get_user() {
                    return currentUser;
                }
                this.get_user = get_user;

                function set_user(userDetails) {

                    if (userDetails === undefined || userDetails == null) {
                        localStorage.removeItem(userInfoKey);
                        updateCurrentUserObject(null);
                    } else {
                        updateCurrentUserObject(userDetails);
                        localStorage.setItem(userInfoKey, JSON.stringify(userDetails));
                    }
                }
                this.set_user = set_user;

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
                        token = undefined;
                        triggerTokenExpired(app);
                    } else {
                        token = newToken;
                        if (!token.expireTime) {
                            if (token.expires_in) {
                                token.expireTime = new Date().getTime() + (token.expires_in * 1000);
                            } else if (token.sliding_window) {
                                token.expireTime = new Date().getTime() + (token.sliding_window * 1000);
                            }
                        }
                        userAccessTokenTimer = setExpirationTimer(token);
                    }
                }

                function updateCurrentUserObject(userDetails) {
                    var user = {
                        isAuthenticated: function () {
                            return token !== undefined && token !== null && (token.expireTime === undefined || token.expireTime === null || (token.expireTime - new Date().getTime()) > 0);
                        }
                    };

                    if (userDetails) user.user = userDetails;

                    currentUser = user;
                }

                function get_currentLanguage() {
                    if (settings.language) {
                        return settings.language;
                    }
                    else if (browserLanguage) {
                        return browserLanguage;
                    } else {
                        return get_defaultLanguage();
                    }
                }
                this.get_currentLanguage = get_currentLanguage;

                function get_defaultLanguage() {
                    return settings.defaultLanguage;
                }
                this.get_defaultLanguage = get_defaultLanguage;
            }

        })(Baasic.Application || (Baasic.Application = {}));
    })(MonoSoftware.Baasic || (MonoSoftware.Baasic = {}));

})(window, document, jQuery);