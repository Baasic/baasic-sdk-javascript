import { IModel } from '../../../common/contracts';;
import { IUser } from './';

export interface IUserSubscription extends IModel {
    channel: string,
    user?: IUser,
    userId: string
}