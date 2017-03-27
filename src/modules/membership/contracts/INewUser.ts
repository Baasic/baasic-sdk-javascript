import { IModel } from '../../../common/contracts';;
import { IAppUser, IUserIdentity } from './';

export interface INewUser extends IModel, IAppUser, IUserIdentity {
    autoCreatedPassword?: boolean,
    confirmPassword: string,
    password: string,
    mailUrl?: string,
    sendEmailNotification?: boolean,
    allowDashboardAccess?: boolean
}