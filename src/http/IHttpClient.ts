import {IHttpRequest,IHttpResponse} from 'http';

export interface IHttpClient
{
    <ResponseType>(request: IHttpRequest): PromiseLike<IHttpResponse<ResponseType>>
}