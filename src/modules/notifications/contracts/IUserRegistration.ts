import { IModel } from 'common/contracts';
import { IUser } from 'modules/notifications/contracts';

export interface IUserRegistration {
    provider: string,
    providerData: string,
    user?: IUser,
    userId: string
}