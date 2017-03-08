import { IHttpHeaders, IHttpRequest } from 'httpApi';

export interface IHttpResponse<ReturnType> {
    request: IHttpRequest,
    headers: IHttpHeaders,
    statusCode: number,
    statusText: string,
    data: ReturnType

}