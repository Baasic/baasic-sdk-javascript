import { IBaasicOptions } from './';
import { IHttpClient } from '../../httpApi';

export interface IBaasicAppOptions extends IBaasicOptions {
    apiUrl?: string
}
