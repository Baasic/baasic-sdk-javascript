import { IBaasicModel } from 'common/contracts';

export interface ISocialLogin extends IBaasicModel {
    abrv: string,
    isConfigured: boolean,
    isConnected: boolean,
    name: string
}