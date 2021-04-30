import { IStorageHandler, IEventHandler, IDefaultStorageConfig } from './';
import { IHttpClient, IAbortSignal } from '../../httpApi';
import { ITokenHandler } from './ITokenHandler';


export interface IBaasicOptions {
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    enableHALJSON?: boolean,
    TokenHandler?: ITokenHandler,
    storageHandler?: () => IStorageHandler | IDefaultStorageConfig,
    httpClient?: () => IHttpClient,
    abortSignal?: () => IAbortSignal,
    eventHandler?: () => IEventHandler
}