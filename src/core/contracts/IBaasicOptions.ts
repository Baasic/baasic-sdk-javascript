import { IStorageHandler, IEventHandler, IDefaultStorageConfig } from './';
import { IHttpClient } from '../../httpApi';

export interface IBaasicOptions {
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    enableHALJSON?: boolean,
    storageHandler?: () => IStorageHandler | IDefaultStorageConfig,
    httpClient?: () => IHttpClient,
    eventHandler?: () => IEventHandler
}