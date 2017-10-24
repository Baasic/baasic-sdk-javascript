import { IHttpHeaders } from './';

export interface IHttpRequest {
    headers?: IHttpHeaders,
    url: string,
    method: string
    data?: any;
    responseType?: string
}