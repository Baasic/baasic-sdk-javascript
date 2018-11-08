import { IModel } from '../../../../common/contracts';;
import { IUserAccess, IUserIdentity, IRole } from './';

export interface IAppUser extends IModel, IUserAccess, IUserIdentity {
    creationDate?: string,
    dashboardSettings?: any,
    name?: string
}