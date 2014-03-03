var MonoSoftware;
(function (MonoSoftware) {
    (function (Baasic) {
        var AUTH_HEADER = "Authorization";
        (function (Application) {
            var apiUrl;
            var apiKey;
            var isInitialized = false;
            var userInfoKey = "baasic-user-info";
			var browserLanguage = navigator.language || navigator.userLanguage;

			var settings = {
                useSSL: false,
                defaultLanguage: "en",
                apiRootUrl: "api.baasic.com",
			    apiVersion: "v1"
            };

            var currentUser = JSON.parse(localStorage.getItem(userInfoKey));
            var userAccessTokenTimer = null;
            if (currentUser != null) {
                userAccessTokenTimer = setExpirationTimer(currentUser.token);
                updateCurrentUserObject(currentUser.user, currentUser.token);
            } else {
                updateCurrentUserObject(null, null);
            }
            
            function setExpirationTimer(token) {
                if (token && token != null && token.expire_time) {
                    var expiresIn = token.expire_time - new Date().getTime();
                    if (expiresIn > 0) {
                        return setTimeout(function () {
                            set_user(null, null);
                        },
                        expiresIn);
                    } else {
                        set_user(null, null);
                    }
                }

                return null;
            }

            $(window).on("storage", function (e) {
                switch (e.originalEvent.key) {
                    case userInfoKey:
                        var value = e.originalEvent.newValue;
                        if (value === undefined || value == null || value == '') {
                            updateCurrentUserObject(null, null);
                        } else {
                            var userObject = JSON.parse(value);
                            updateCurrentUserObject(userObject.user, userObject.token);
                        }
                        break;
                }
            })

            function initialize(apiKey, options) {
                if (!isInitialized) {
                    set_apiKey(apiKey);

                    $.extend(settings, options);

                    var scheme = settings.useSSL ? "https" : "http";
                    apiUrl = scheme + "://" + settings.apiRootUrl + "/" + settings.apiVersion + "/" + apiKey + "/";
                    
                    isInitialized = true;
                }

                return this;
            }
            Application.init = initialize;

            function get_apiKey() {
                return apiKey;
            }
            Application.get_apiKey = get_apiKey;
            function set_apiKey(apiKeyValue) {
                apiKey = apiKeyValue;
            }

            function get_apiUrl() {
                return apiUrl;
            }
            Application.get_apiUrl = get_apiUrl;
			
            function get_accessToken() {
                return currentUser.token;
            }
            Application.get_accessToken = get_accessToken;
            
			function update_accessToken(value) {
			    set_user(currentUser.user, value);
            }
			Application.update_accessToken = update_accessToken;

            function get_user() {
                return currentUser;
            }
            Application.get_user = get_user;

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

                $.event.trigger("userChange", { user: currentUser });
            }
            Application.set_user = set_user;

            function updateCurrentUserObject(userDetails, token) {
                var user = {
                    isAuthenticated: function () {
                        return this.token && this.token != null;
                    }
                };

                if (userDetails != null)
                    user.user = userDetails;

                if (token != null)
                {
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
            Application.get_currentLanguage = get_currentLanguage;

            function get_defaultLanguage() {
                return settings.defaultLanguage;
            }
            Application.get_defaultLanguage = get_defaultLanguage;

        })(Baasic.Application || (Baasic.Application = {}));
        var Application = Baasic.Application;
    })(MonoSoftware.Baasic || (MonoSoftware.Baasic = {}));
    var Baasic = MonoSoftware.Baasic;
})(MonoSoftware || (MonoSoftware = {}));