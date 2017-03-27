import { IModel } from '../../../common/contracts';;
import { IUser } from './';

export interface IUserRegistration {
    provider: string,
    providerData: string,
    user?: IUser,
    userId: string
}