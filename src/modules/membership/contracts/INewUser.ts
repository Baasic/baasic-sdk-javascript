import { IModel } from 'common/contracts';;
import { IAppUser, IUserIdentity } from './';

export interface INewUser extends IModel, IAppUser, IUserIdentity {
    autoCreatePassword?: boolean,
    confirmPassword: string,
    password: string,
    mailUrl?: string,
    sendEmailNotification?: boolean,
    allowDashboardAccess?: boolean
}