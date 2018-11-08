import { IModel } from '../../../../common/contracts';;

export interface IUserSocialLogin extends IModel {
    abrv: string,
    isConfigured: boolean,
    isConnected: boolean,
    name: string
}