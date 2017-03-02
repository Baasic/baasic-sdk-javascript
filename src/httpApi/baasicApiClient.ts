import { injectable, inject } from "inversify";
import 'reflect-metadata';
import { IHttpHeaders, IHttpRequest, IHttpResponse, IHttpClient, TYPES as httpTYPES } from 'httpApi';
import { ITokenHandler, IAppOptions, TYPES as coreTYPES } from 'core/contracts';
import { IHALParser, HALParser, TYPES as commonTYPES } from 'common';


@injectable()
export class BaasicApiClient {

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
        });
    }

    get<TResponse>(url: URL | string, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(this.compileUrl(url), "GET", undefined, headers);
    }

    delete<TResponse>(url: URL | string, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest<TResponse>(this.compileUrl(url), "DELETE", undefined, headers);
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
};