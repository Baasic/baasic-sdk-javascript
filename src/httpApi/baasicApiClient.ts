import { injectable, inject } from "inversify";
import { IHttpHeaders, IHttpRequest, IHttpResponse, IHttpClient, httpTYPES } from './';
import { ITokenHandler, IAppOptions, TYPES as coreTYPES } from '../core/contracts';
import { IHALParser, TYPES as commonTYPES } from '../common';

@injectable()
export class ApiClient {
    private static readonly httpTest = new RegExp("^(http|https)://", "i");
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
        this.createPromise = httpClient.createPromise;
    }

    createPromise: <TData>(deferFn: (resolve: (data?: TData | undefined) => void, reject: (data?: any) => void) => void) => PromiseLike<TData>;

    request<TResponse>(request: IHttpRequest): PromiseLike<IHttpResponse<TResponse>> {
        if (request && request.url) {
            request.url = this.compileUrl(request.url);
        }

        var headers = request.headers || (request.headers = {});
        var authToken = this.tokenHandler.get();
        var syncToken = false;
        if (authToken) {
            syncToken = authToken.sliding_window !== undefined;
            /*jshint camelcase: false */
            headers["AUTHORIZATION"] = `BEARER ${authToken.token}`;
        }

        if (request.data && !this.headerExists(headers, 'Content-Type')) {
            headers['Content-Type'] = 'application/json; charset=UTF-8';
        }

        if (this.appOptions.enableHALJSON) {
            if (!this.headerExists(headers, 'Accept')) {
                headers["Accept"] = 'application/hal+json; charset=UTF-8';
            }
        }

        var self = this;
        var promise = this.httpClient.request<TResponse>(request);
        promise.then<IHttpResponse<TResponse>>(function (data) {
            if (syncToken) self.tokenHandler.store(authToken);
            var contentType = self.getHeader(data.headers, 'Content-Type');
            if (contentType && contentType.toLowerCase().indexOf('application/hal+json') !== -1) {
                data.data = self.halParser.parse(data.data);
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
        return promise;
    }

    get<TResponse>(url: string, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(url, "GET", undefined, headers);
    }

    delete<TResponse>(url: string, headers?: IHttpHeaders, data?: any): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(url, "DELETE", data, headers);
    }

    post<TResponse>(url: string, data: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(url, "POST", data, headers);
    }

    put<TResponse>(url: string, data: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(url, "PUT", data, headers);
    }

    patch<TResponse>(url: string, data: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(url, "PATCH", data, headers);
    }

    private compileUrl(url: string): string {
        if (!ApiClient.httpTest.test(url)) {
            let rootUrl = this.appOptions.apiUrl;
            if (url.indexOf(rootUrl) < 0) {
                return `${rootUrl}${url}`;
            }
        }
        return url;
    }

    private internalRequest<TResponse>(url: string, method: string, data?: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        url = this.compileUrl(url);

        let request: IHttpRequest = {
            url: url,
            method: method
        };

        if (data) {
            request.data = data;
        }

        if (headers) {
            request.headers = headers;
        }

        return this.request<TResponse>(request);
    }

    private unquote(quotedString: string): string {
        return quotedString.substr(1, quotedString.length - 2).replace(/(?:(?:\r\n)?[ \t])+/g, ' ');
    }

    private headerExists(headers: any, key: string): boolean {
        return headers && (headers.hasOwnProperty(key) || headers.hasOwnProperty(key.toLowerCase()));
    }

    private getHeader(headers: any, key: string): string {
        if (headers) {
            var header = headers[key] || headers[key.toLowerCase()];
            if (Array.isArray(header)) {
                header = header.join(';');
            }
            return header;
        }
        return undefined;
    }

    private parseWWWAuthenticateHeader(value: string | string[]) {
        var tokens;
        if (typeof value === 'string') {
            tokens = value.match(this.wwwAuthenticateTokenizer);
        } else if (Array.isArray(value)) {
            tokens = value[0].split(' ').concat(value.slice(1));
        }
        
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
};