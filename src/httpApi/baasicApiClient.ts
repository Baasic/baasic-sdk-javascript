import { IHttpHeaders, IHttpRequest, IHttpResponse, IHttpClient, TYPES as httpTYPES } from 'httpApi';
import { ITokenStore, IAppOptions, TYPES as coreTYPES } from 'core';
import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class BaasicApiClient {
    constructor(
        @inject(coreTYPES.IAppOptions) private appOptions: IAppOptions,
        @inject(httpTYPES.IHttpClient) private httpClient: IHttpClient,
        @inject(coreTYPES.ITokenStore) private tokenStore: ITokenStore
    ) {

    }

    request<TResponse>(request: IHttpRequest): PromiseLike<IHttpResponse<TResponse>> {
        var authToken = this.tokenStore.get();
        if (authToken) {
            var headers = request.headers || (request.headers = {});
            /*jshint camelcase: false */
            headers["AUTHORIZATION"] = `BEARER ${authToken.token}`;
        }

        return this.httpClient<TResponse>(request);
    }

    get<TResponse>(url: URL | string, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest(this.compileUrl(url), "GET", undefined, headers);
    }

    delete<TResponse>(url: URL | string, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest(url, "DELETE", undefined, headers);
    }

    post<TResponse>(url: URL | string, data: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest(url, "GET", data, headers);
    }

    put<TResponse>(url: URL | string, data: any, headers?: IHttpHeaders): PromiseLike<IHttpResponse<TResponse>> {
        return this.internalRequest(url, "PUT", data, headers);
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

        return this.request(request);
    }
};