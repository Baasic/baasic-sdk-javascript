import { IBaasicModel } from 'common/contracts';
import { IRole, IUserAccess, IUserIdentity } from 'modules/membership/contracts';

export interface IAppUser extends IBaasicModel, IUserAccess, IUserIdentity {
    creationDate?: string,
    dashboardSettings?: any,
    name?: string
}