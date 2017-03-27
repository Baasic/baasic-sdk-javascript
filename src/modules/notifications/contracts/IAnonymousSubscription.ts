import { IModel } from '../../../common/contracts';;
import { IAnonymousRegistration } from 'modules/notifications/contracts';

export interface IAnonymousSubscription extends IModel {
    channel: string,
    registration?: IAnonymousRegistration,
    registrationId: string
}