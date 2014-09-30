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
        $(element).trigger(eventName, additionalData);
    } : function (element, eventName, additionalData) {
        var event; // The custom event that will be created

        if (CustomEvent && typeof CustomEvent === "function") {
            event = new CustomEvent(eventName, additionalData);
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

    ﻿ (function (Baasic) {
        var AUTH_HEADER = "Authorization";
        (function (Application) {
            var browserLanguage = navigator.language || navigator.userLanguage;

            function initialize(apiKey, options) {
                return new App(apiKey, options);
            }
            Application.init = initialize;

            function App(apiKey, options) {
                var settings = {
                    useSSL: false,
                    defaultLanguage: "en",
                    apiRootUrl: "api.baasic.com",
                    apiVersion: "v1"
                };

                extend(settings, options);

                var apiUrl = settings.useSSL ? "https" : "http" + "://" + settings.apiRootUrl + "/" + settings.apiVersion + "/" + apiKey + "/";
                var userInfoKey = "baasic-user-info-" + apiKey;

                var currentUser = JSON.parse(localStorage.getItem(userInfoKey));
                var userAccessTokenTimer = null;
                if (currentUser != null) {
                    userAccessTokenTimer = setExpirationTimer(currentUser.token);
                    updateCurrentUserObject(currentUser.user, currentUser.token);
                } else {
                    updateCurrentUserObject(null, null);
                }

                addEvent("storage", window, function (e) {
                    e = e || event;
                    if (e.originalEvent) e = e.originalEvent;

                    switch (e.key) {
                    case userInfoKey:
                        var value = e.newValue;
                        if (value === undefined || value == null || value == '') {
                            updateCurrentUserObject(null, null);
                        } else {
                            var userObject = JSON.parse(value);
                            updateCurrentUserObject(userObject.user, userObject.token);
                        }
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
                    return currentUser.token;
                }
                this.get_accessToken = get_accessToken;

                function update_accessToken(value) {
                    set_user(currentUser.user, value);
                }
                this.update_accessToken = update_accessToken;

                function get_user() {
                    return currentUser;
                }
                this.get_user = get_user;

                function set_user(userDetails, token) {
                    clearTimeout(userAccessTokenTimer);
                    if (token === undefined || token == null || userDetails === undefined || userDetails == null) {
                        localStorage.removeItem(userInfoKey);
                        updateCurrentUserObject(null, null);
                    } else {
                        updateCurrentUserObject(userDetails, token);
                        localStorage.setItem(userInfoKey, JSON.stringify(currentUser));
                        userAccessTokenTimer = setExpirationTimer(currentUser.token)
                    }

                    triggerEvent(document, "userChange", {
                        user: currentUser
                    });
                }
                this.set_user = set_user;

                function setExpirationTimer(token) {
                    if (token && token != null && token.expireTime) {
                        var expiresIn = token.expireTime - new Date().getTime();
                        if (expiresIn > 0) {
                            return setTimeout(function () {
                                set_user(null, null);
                            }, expiresIn);
                        } else {
                            set_user(null, null);
                        }
                    }

                    return null;
                }

                function updateCurrentUserObject(userDetails, token) {
                    var user = {
                        isAuthenticated: function () {
                            return this.token && this.token != null;
                        }
                    };

                    if (userDetails != null) user.user = userDetails;

                    if (token != null) {
                        if (!token.expireTime) {
                            if (token.expires_in) {
                                token.expireTime = new Date().getTime() + (token.expires_in * 1000);
                            } else if (token.sliding_window) {
                                token.expireTime = new Date().getTime() + (token.sliding_window * 1000);
                            }
                        }
                        user.token = token;
                    }

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