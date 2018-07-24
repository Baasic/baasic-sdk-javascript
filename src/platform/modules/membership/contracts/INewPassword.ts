import { IModel } from 'common/contracts';;

export interface INewPassword extends IModel {
    newPassword: string,
    sendEmailNotification?: boolean,
    siteUrl?: string
}