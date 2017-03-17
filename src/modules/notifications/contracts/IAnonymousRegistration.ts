import { IModel } from 'common/contracts';

export interface IAnonymousRegistration extends IModel {
    expirationDate?: string,
    provider: string,
    providerData: Object
}