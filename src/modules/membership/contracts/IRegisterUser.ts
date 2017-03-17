import { IModel } from 'common/contracts';
import { IUserIdentity } from 'modules/membership/contracts';

export interface IRegisterUser extends IModel, IUserIdentity {
    activationUrl?: string,
    challengeIdentifier?: string,
    challengeResponse?: string,
    confirmPassword: string,
    password: string
}