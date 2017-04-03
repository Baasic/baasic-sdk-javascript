import { IStorageHandler, IEventHandler, IDefaultStorageConfig } from './';
import { IHttpClient } from '../../httpApi';

export interface IBaasicAppOptions extends IBaasicOptions {
    apiUrl?: URL
}

export interface IBaasicOptions {
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    enableHALJSON?: boolean,
    storageHandler?: () => IStorageHandler | IDefaultStorageConfig,
    httpClient?: () => IHttpClient,
    eventHandler?: () => IEventHandler,
    promiseFactory?: <RType>(resolve: (data: RType) => void, reject: (data: any) => void) => PromiseLike<RType>
}