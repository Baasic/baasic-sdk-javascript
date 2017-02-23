import {IHttpHeaders} from 'httpApi';

export interface IHttpResponse<ReturnType>
{
    headers: IHttpHeaders,
    statusCode: number,
    statusText: string,
    body: ReturnType

}