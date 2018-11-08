import { IModel } from '../../../../common/contracts';;
import { IAnonymousRegistration } from './';

export interface IAnonymousSubscription extends IModel {
    channel: string,
    registration?: IAnonymousRegistration,
    registrationId: string
}