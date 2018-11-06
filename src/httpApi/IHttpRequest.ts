import { IHttpHeaders } from './';
import { IAbortSignal } from './';

export interface IHttpRequest {
    headers?: IHttpHeaders,
    abortSignal?: IAbortSignal,
    url: string,
    method: string
    data?: any;
    responseType?: string
}