import {IHttpHeaders,IHttpRequest,IHttpResponse,IHttpClient} from 'http';
import {ITokenStore} from 'core';

export class BaasicApiClient {
    constructor (
        private httpClient: IHttpClient,
        private tokenStore: ITokenStore
    ) 
    {

    }

    request<TResponse>(request: IHttpRequest) : PromiseLike<IHttpResponse<TResponse>>
    {
        var authToken = this.tokenStore.get();
        if (authToken) {
            var headers = request.headers || (request.headers = {});
            /*jshint camelcase: false */
            headers["AUTHORIZATION"] = `BEARER ${ authToken.token }`;
        }

        return this.httpClient<TResponse>(request);
    }
    
    get<TResponse>(url: URL | string, headers? : IHttpHeaders) : PromiseLike<IHttpResponse<TResponse>>
    {
        return this.internalRequest(url, "GET", undefined, headers);
    }

    delete<TResponse>(url: URL | string, headers? : IHttpHeaders) : PromiseLike<IHttpResponse<TResponse>>
    {
        return this.internalRequest(url, "DELETE", undefined, headers);
    }

    post<TResponse>(url: URL | string, data: any, headers? : IHttpHeaders) : PromiseLike<IHttpResponse<TResponse>>
    {
        return this.internalRequest(url, "GET", data, headers);
    }

    put<TResponse>(url: URL | string, data: any,  headers? : IHttpHeaders) : PromiseLike<IHttpResponse<TResponse>>
    {
        return this.internalRequest(url, "PUT", data, headers);
    }

    private internalRequest<TResponse>(url: URL | string, method: string, data?: any, headers? : IHttpHeaders) : PromiseLike<IHttpResponse<TResponse>>
    {
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