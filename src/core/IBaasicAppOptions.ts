import { IStorageHandler, IEventHandler } from 'core';
import { IHttpClient } from 'httpApi';

export interface IBaasicAppOptions {
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    apiUrl?: URL,
    storageHandler?: IStorageHandler,
    httpClient?: IHttpClient,
    eventHandler?: IEventHandler
}