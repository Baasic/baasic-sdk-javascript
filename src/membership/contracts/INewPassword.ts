import { IBaasicModel } from 'common/contracts';

export interface INewPassword extends IBaasicModel {
    newPassword: string,
    sendEmailNotification?: boolean,
    siteUrl?: string
}