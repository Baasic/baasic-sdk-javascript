import { IStorageHandler, IEventHandler, IDefaultStorageConfig } from 'core/contracts';
import { IHttpClient } from 'httpApi';

export interface IBaasicAppOptions {
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    apiUrl?: URL,
    enableHALJSON?: boolean,
    storageHandler?: () => IStorageHandler | IDefaultStorageConfig,
    httpClient?: () => IHttpClient,
    eventHandler?: () => IEventHandler,
    promiseFactory?: <RType>(resolve:(data: RType) => void, reject: (data: any) => void) => PromiseLike<RType>
}