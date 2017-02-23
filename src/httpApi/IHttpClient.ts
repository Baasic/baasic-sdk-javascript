import {IHttpRequest,IHttpResponse} from 'httpApi';

export interface IHttpClient
{
    <ResponseType>(request: IHttpRequest): PromiseLike<IHttpResponse<ResponseType>>
}