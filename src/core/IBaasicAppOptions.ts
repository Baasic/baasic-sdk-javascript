import { ITokenHandler, IEventHandler } from 'core';
import { IHttpClient } from 'httpApi';

export interface IBaasicAppOptions {
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    apiUrl?: URL,
    tokenStore?: ITokenHandler,
    httpClient?: IHttpClient,
    eventHandler?: IEventHandler
}