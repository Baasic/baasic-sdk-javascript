import { IStorageHandler, IEventHandler, IDefaultStorageConfig } from './';
import { IURLFactory } from '../../common/contracts';
import { IHttpClient } from '../../httpApi';


export interface IBaasicOptions {
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    enableHALJSON?: boolean,
    storageHandler?: () => IStorageHandler | IDefaultStorageConfig,
    httpClient?: () => IHttpClient,
    eventHandler?: () => IEventHandler,
    urlFactory?: IURLFactory
}