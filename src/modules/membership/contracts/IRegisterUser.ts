import { IModel } from '../../../common/contracts';;
import { IUserIdentity } from './';

export interface IRegisterUser extends IModel, IUserIdentity {
    activationUrl?: string,
    displayName: string,
    firstName?: string,
    lastName?: string,
    challengeIdentifier?: string,
    challengeResponse?: string,
    confirmPassword: string,
    password: string
}