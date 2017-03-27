import { IHttpHeaders, IHttpRequest } from './';

export interface IHttpResponse<ReturnType> {
    request: IHttpRequest,
    headers: IHttpHeaders,
    statusCode: number,
    statusText: string,
    data: ReturnType

}