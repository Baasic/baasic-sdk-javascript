import { IModel } from 'common/contracts';;
import { IUserIdentity } from './';

export interface IRegisterUser extends IModel, IUserIdentity {
    activationUrl?: string,
    challengeIdentifier?: string,
    challengeResponse?: string,
    password: string
}