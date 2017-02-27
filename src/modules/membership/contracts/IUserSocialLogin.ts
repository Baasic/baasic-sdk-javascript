import { IBaasicModel } from 'common/contracts';

export interface IUserSocialLogin extends IBaasicModel {
    abrv: string,
    isConfigured: boolean,
    isConnected: boolean,
    name: string
}