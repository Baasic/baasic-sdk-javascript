import { IModel } from 'common/contracts';
import { IUser } from 'modules/notifications/contracts';

export interface IUserSubscription extends IModel {
    channel: string,
    user?: IUser,
    userId: string
}