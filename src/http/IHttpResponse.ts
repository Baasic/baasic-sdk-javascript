import {IHttpHeaders} from 'http';

export interface IHttpResponse<ReturnType>
{
    headers: IHttpHeaders,
    statusCode: number,
    statusText: string,
    body: ReturnType

}