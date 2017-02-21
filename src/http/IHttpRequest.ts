import {IHttpHeaders} from 'http';

export interface IHttpRequest
{
    headers?: IHttpHeaders,
    url: URL,
    method: string
    body?: any; 
}