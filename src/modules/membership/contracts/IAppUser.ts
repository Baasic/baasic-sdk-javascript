import { IModel } from '../../../common/contracts';;
import { IUserAccess, IUserIdentity, IRole } from 'modules/membership/contracts';

export interface IAppUser extends IModel, IUserAccess, IUserIdentity {
    creationDate?: string,
    dashboardSettings?: any,
    name?: string
}