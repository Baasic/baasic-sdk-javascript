(function (window, document, $, undefined) {
    var MonoSoftware = window.MonoSoftware || (window.MonoSoftware = {}); /* exported extend */

    function extend(obj1, obj2) {
        for (var prop in obj2) {
            obj1[prop] = obj2[prop];
        }

        return obj1;
    }

    /* global $, extend */
    /* exported addEvent, triggerEvent */

    var addEvent = $ !== undefined ?
    function (evnt, elem, func) {
        $(elem).on(evnt, func);
    } : function (evnt, elem, func) {
        if (elem.addEventListener) {
            elem.addEventListener(evnt, func, false);
        }
        else if (elem.attachEvent) {
            elem.attachEvent('on' + evnt, func);
        }
        else {
            elem['on' + evnt] = func;
        }
    };

    var triggerEvent = $ !== undefined ?
    function (element, eventName, additionalData) {
        var event = extend($.Event(eventName), additionalData);
        $(element).trigger(event);
    } : function (element, eventName, additionalData) {
        var event; // The custom event that will be created

        if (CustomEvent && typeof CustomEvent === 'function') {
            event = extend(new CustomEvent(eventName));
            element.dispatchEvent(event);

            return;
        } else if (document.createEvent) {
            event = document.createEvent('CustomEvent');
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
            element.fireEvent('on' + event.eventType, event);

            return;
        }

        if (element.dispatchEvent) {
            element.dispatchEvent(event);
        } else if (element.fireEvent) {
            element.fireEvent('on' + event.eventType, event);
        } else {
            var handler = element['on' + event.eventType];
            if (handler) {
                handler(event);
            }
        }
    };

    /* global MonoSoftware, extend, addEvent, triggerEvent */

    (function (Baasic) {
        (function (Application) {
            var browserLanguage = navigator.language || navigator.userLanguage,
                messageBusKey = 'baasic-message-bus',
                messageTypes = {
                    tokenExpired: 'tokenExpired',
                    userChanged: 'userChanged'
                };

            function pushMessage(message) {
                localStorage.removeItem(messageBusKey);

                localStorage.setItem(messageBusKey, JSON.stringify(message));
            }

            function initialize(apiKey, options) {
                return new App(apiKey, options);
            }
            Application.init = initialize;

            function triggerTokenExpired(app) {
                triggerEvent(document, 'tokenExpired', {
                    app: app
                });

                pushMessage({
                    type: messageTypes.tokenExpired
                });
            }

            function App(apiKey, options) {
                var userInfoKey = 'baasic-user-info-' + apiKey,
                    tokenKey = 'baasic-auth-token-' + apiKey,
                    settings = {
                        useSSL: false,
                        defaultLanguage: 'en',
                        apiRootUrl: 'api.baasic.com',
                        apiVersion: 'v1',
                        storeToken: function (token) {
                            if (token === undefined || token === null) {
                                localStorage.removeItem(tokenKey);
                            } else {
                                localStorage.setItem(tokenKey, JSON.stringify(token));
                            }
                        },
                        readToken: function () {
                            return JSON.parse(localStorage.getItem(tokenKey));
                        },
                        storeUserInfo: function (userInfo) {
                            if (userInfo === undefined || userInfo === null) {
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

                var apiUrl = (settings.useSSL ? 'https' : 'http') + '://' + settings.apiRootUrl + '/' + settings.apiVersion + '/' + apiKey + '/',
                    token = settings.readToken(),
                    userAccessTokenTimer = null,
                    user = {
                        isAuthenticated: function () {
                            var token = app.getAccessToken();
                            return token !== undefined && token !== null && (token.expireTime === undefined || token.expireTime === null || (token.expireTime - new Date().getTime()) > 0);
                        }
                    };

                if (token) {
                    userAccessTokenTimer = setExpirationTimer(token);
                }

                addEvent('storage', window, function (e) {
                    e = e || event;
                    if (e.originalEvent) {
                        e = e.originalEvent;
                    }

                    if (e.key === messageBusKey) {
                        var value = e.newValue;
                        if (value && value !== '') {
                            var message = JSON.parse(value);

                            switch (message.type) {
                            case messageTypes.userChanged:
                                triggerEvent(document, 'userChange', {
                                    user: app.getUser(),
                                    app: app
                                });
                                break;
                            case messageTypes.tokenExpired:
                                syncToken(null);
                                triggerEvent(document, 'tokenExpired', {
                                    app: app
                                });
                                break;
                            }
                        }
                    }
                });

                this.getApiKey = function getApiKey() {
                    return apiKey;
                };

                this.getApiUrl = function getApiUrl() {
                    return apiUrl;
                };

                this.getAccessToken = function getAccessToken() {
                    return settings.readToken();
                };

                this.updateAccessToken = function updateAccessToken(value) {
                    syncToken(value);

                    settings.storeToken(value);

                    if (value === undefined || value === null) {
                        triggerTokenExpired(app);
                    }
                };

                this.getUser = function getUser() {
                    var userInfo = settings.readUserInfo();
                    if (userInfo) {
                        user.user = userInfo;
                    } else {
                        delete user.user;
                    }

                    return user;
                };

                this.setUser = function setUser(userDetails) {
                    settings.storeUserInfo(userDetails);

                    pushMessage({
                        type: messageTypes.userChanged
                    });
                };

                function setExpirationTimer(token) {
                    if (token && token !== null && token.expireTime) {
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
                    if (newToken !== undefined && newToken !== null) {
                        if (!newToken.expireTime) { /*jshint camelcase: false */
                            var expiresIn = newToken.expires_in;
                            var slidingWindow = newToken.sliding_window; /*jshint camelcase: true */
                            if (expiresIn) {
                                newToken.expireTime = new Date().getTime() + (expiresIn * 1000);
                            } else if (slidingWindow) {
                                newToken.expireTime = new Date().getTime() + (slidingWindow * 1000);
                            }
                        }
                        userAccessTokenTimer = setExpirationTimer(newToken);
                    }
                }

                this.getDefaultLanguage = function getDefaultLanguage() {
                    return settings.defaultLanguage;
                };

                this.getCurrentLanguage = function getCurrentLanguage() {
                    if (settings.language) {
                        return settings.language;
                    }
                    else if (browserLanguage) {
                        return browserLanguage;
                    } else {
                        return app.getDefaultLanguage();
                    }
                };
            }
        })(Baasic.Application || (Baasic.Application = {}));
    })(MonoSoftware.Baasic || (MonoSoftware.Baasic = {}));

}(window, document, window.jQuery));