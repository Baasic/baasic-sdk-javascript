import { IBaasicModel } from 'common/contracts';
import { IUser } from 'modules/notifications/contracts';

export interface IUserSubscription extends IBaasicModel {
    channel: string,
    user?: IUser,
    userId: string
}