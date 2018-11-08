import { IModel } from '../../../../common/contracts';;
import { IUserIdentity, IAccountUser } from '.';

export interface IPlatformUser extends IModel, IUserIdentity {
    displayName: string,
    firstName: any,
    lastName: string,
    isSuperAdmin: boolean
    accounts: IAccountUser[],
    roles: string[]
}