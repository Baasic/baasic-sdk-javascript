import { IBaasicModel } from 'contracts';

export interface INewPassword extends IBaasicModel {
    newPassword: string,
    sendEmailNotification?: boolean,
    siteUrl?: string
}