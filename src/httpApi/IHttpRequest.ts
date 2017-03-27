import { IHttpHeaders } from './';

export interface IHttpRequest {
    headers?: IHttpHeaders,
    url: URL,
    method: string
    data?: any;
}