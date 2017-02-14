import { IBaasicModel } from 'contracts';

export interface IPasswordRecovery extends IBaasicModel {
    newPassword: string,
    sendEmailNotification?: boolean,
    siteUrl?: string
}