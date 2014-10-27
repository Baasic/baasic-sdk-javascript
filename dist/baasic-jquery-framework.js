(function (app) {
    var AUTH_HEADER = "Authorization";

    if ((!$.support.cors || navigator.userAgent.indexOf("MSIE") != -1) && window.postMessage) {
        setupProxyTransport();
    } else {
        setupCORS();
    }

    function isApiCall(url) {
        return url.indexOf(app.get_apiUrl()) == 0;
    }

    function setupCORS() {
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
            if (isApiCall(options.url)) {
                prepareApiCall(options);
                if (options.crossDomain) {
                    options.xhrFields = {
                        withCredentials: true
                    };
                }
            }
        });
    }

    function setupProxyTransport() {
        var injectFrame = $('<div style="display:none"><iframe src="' + apiUrl + 'proxy/jquery"></iframe></div>');
        injectFrame.find("iframe").on("load", function () {
            var requestHash = new Object();
            var nextRequestId = 0;
            var iframe = this;
            $(window).on("message", function (e) {
                var event = e.originalEvent;
                if (event.source == iframe.contentWindow) {
                    var response = JSON.parse(event.data);
                    var originalRequest = requestHash[response.requestId];
                    if (originalRequest) {
                        delete requestHash[response.requestId];
                        originalRequest.completeCallback(response.status, response.statusText, {
                            text: response.responseText
                        }, response.responseHeaders);
                    }
                }
            });

            $.ajaxTransport("+*", function (options, originalOptions, jqXHR) {
                if (isApiCall(options.url)) {
                    prepareApiCall(originalOptions);
                    return {
                        requestId: nextRequestId++,
                        send: function (headers, completeCallback) {
                            requestHash[this.requestId] = {
                                completeCallback: completeCallback
                            };
                            var message = JSON.stringify({
                                requestId: this.requestId,
                                options: originalOptions
                            });
                            iframe.contentWindow.postMessage(message, apiUrl);
                        },
                        abort: function () {
                            delete requestHash[this.requestId];
                        }
                    };
                }
            });
        });
        $("body").append(injectFrame);
    }

    function prepareApiCall(options) {
        var authToken = app.get_accessToken();
        if (authToken != null) {
            var headers = options.headers || (options.headers = {});

            headers[AUTH_HEADER] = authToken.token_type + ' ' + authToken.access_token;
        }
    }

    function updateAuthenticationToken(jqXHR) {
        var authHeader = jqXHR.getResponseHeader(AUTH_HEADER);
        if (authHeader) {
            app.set_AccessToken(authHeader);
        }
    }

})(MonoSoftware.Baasic.Application);