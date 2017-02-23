import { ITokenStore } from 'core';
import { IHttpClient } from 'http';

export interface IBaasicAppOptions
{
    useSSL: boolean,
    apiRootUrl: string,
    apiVersion: string,
    tokenStore?: ITokenStore,
    httpClient?: IHttpClient
}