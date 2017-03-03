import { injectable, inject } from "inversify";
import 'reflect-metadata';
import { IHttpHeaders, IHttpRequest, IHttpResponse, IHttpClient, TYPES as httpTYPES } from 'httpApi';
import { ITokenHandler, IAppOptions, TYPES as coreTYPES } from 'core/contracts';
import { IHALParser, HALParser, TYPES as commonTYPES } from 'common';


@injectable()
export class BaasicApiClient {
    private wwwAuthenticateTokenizer = (function () {
        let ws = '(?:(?:\\r\\n)?[ \\t])+',
            token = '(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2E\\x30-\\x39\\x3F\\x41-\\x5A\\x5E-\\x7A\\x7C\\x7E]+)',
            quotedString = '"(?:[\\x00-\\x0B\\x0D-\\x21\\x23-\\x5B\\\\x5D-\\x7F]|' + ws + '|\\\\[\\x00-\\x7F])*"';

        return new RegExp(token + '(?:=(?:' + quotedString + '|' + token + '))?', 'g');
    })();

    constructor(
        @inject(coreTYPES.IAppOptions) private appOptions: IAppOptions,
        @inject(httpTYPES.IHttpClient) private httpClient: IHttpClient,
        @inject(coreTYPES.ITokenHandler) private tokenHandler: ITokenHandler,
        @inject(commonTYPES.IHALParser) private halParser: IHALParser
    ) {

    }

    request<TResponse>(request: IHttpRequest): PromiseLike<IHttpResponse<TResponse>> {
        var authToken = this.tokenHandler.get();
        if (authToken) {
            var headers = request.headers || (request.headers = {});
            /*jshint camelcase: false */
            headers["AUTHORIZATION"] = `BEARER ${authToken.token}`;
        }

        if (this.appOptions.enableHALJSON) {
            var headers = request.headers || (request.headers = {});
            //Do not override if exists
            if (!headers.hasOwnProperty("Accept")) {
                headers["Accept"] = 'application/hal+json; charset=UTF-8';
            }
        }

        var self = this;
        return this.httpClient<TResponse>(request).then<IHttpResponse<TResponse>>(function (data) {
            var contentType = data.headers['Content-Type'];
            if (contentType && contentType.toLowerCase().indexOf('application/hal+json') !== -1) {
                data.body = self.halParser.parse(data.body);
            }
            return data;
        },
            (response: IHttpResponse<any>) => {
                var wwwAuthenticate = this.parseWWWAuthenticateHeader(response.headers['WWW-Authenticate']);
                if (wwwAuthenticate) {
                    if (wwwAuthenticate.scheme.toLowerCase() === 'bearer') {
                        var details = wwwAuthenticate.details;
                        if (details) {
                            if (details.error) {
                                switch (details.error) {
                                    case 'invalid_token':
                                        this.tokenHandler.store(null);
                                        break;
                                    case 'invalid_request':
                                        /*jshint camelcase: false */
                                        switch (details.error_description) {
                                            /*jshint camelcase: true */
                                            case 'Missing or invalid session':
                                                this.tokenHandler.store(null);
                                                break;
                                        }
                                        break;
                                }
                            }
                        }
                    }
                }
                return response;
            });
    }

    get<TResponse>(url: URL | string, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(this.compileUrl(url), "GET", undefined, headers);
    }

    delete<TResponse>(url: URL | string, headers?: IHttpHeaders, data?: any): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(this.compileUrl(url), "DELETE", data, headers);
    }

    post<TResponse>(url: URL | string, data: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(this.compileUrl(url), "POST", data, headers);
    }

    put<TResponse>(url: URL | string, data: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(this.compileUrl(url), "PUT", data, headers);
    }

    patch<TResponse>(url: URL | string, data: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(this.compileUrl(url), "PATCH", data, headers);
    }

    private compileUrl(url: URL | string): URL {
        return new URL(`${this.appOptions.apiUrl.toString()}${url.toString()}`);
    }

    private internalRequest<TResponse>(url: URL | string, method: string, data?: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        if (typeof url === "string") url = new URL(url);

        let request: IHttpRequest = {
            url: url,
            method: method
        };

        if (data) {
            request.body = data;
        }

        if (headers) {
            request.headers = headers;
        }

        return this.request<TResponse>(request);
    }

    private unquote(quotedString: string): string {
        return quotedString.substr(1, quotedString.length - 2).replace(/(?:(?:\r\n)?[ \t])+/g, ' ');
    }

    private parseWWWAuthenticateHeader(value: string) {
        if (value) {
            var tokens = value.match(this.wwwAuthenticateTokenizer);
            if (tokens && tokens.length > 0) {
                var wwwAutheniticate: any = {
                    scheme: tokens[0]
                };

                if (tokens.length > 1) {
                    var details = {};
                    for (var i = 1, l = tokens.length; i < l; i++) {
                        var values = tokens[i].split('=');
                        details[values[0]] = this.unquote(values[1]);
                    }

                    wwwAutheniticate.details = details;
                }

                return wwwAutheniticate;
            }
        }
    }
};