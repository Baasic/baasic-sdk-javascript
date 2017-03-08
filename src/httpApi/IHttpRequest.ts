import { IHttpHeaders } from 'httpApi';

export interface IHttpRequest {
    headers?: IHttpHeaders,
    url: URL,
    method: string
    data?: any;
}