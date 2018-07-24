import { IModel } from '../../../common/contracts';;
import { IUserIdentity } from '.';

export interface IPlatformUser extends IModel, IUserIdentity {
    displayName: string,
    firstName: any,
    lastName: string,
    isSuperAdmin: boolean
}