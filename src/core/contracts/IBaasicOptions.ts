import { IStorageHandler, IEventHandler, IDefaultStorageConfig } from './';
import { IHttpClient, IAbortSignal } from '../../httpApi';


export interface IBaasicOptions {
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    enableHALJSON?: boolean,
    storageHandler?: () => IStorageHandler | IDefaultStorageConfig,
    httpClient?: () => IHttpClient,
    abortSignal?: () => IAbortSignal,
    eventHandler?: () => IEventHandler
}