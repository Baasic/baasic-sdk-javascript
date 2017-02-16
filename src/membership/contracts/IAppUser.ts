import { IBaasicModel } from 'common/contracts';
import { IRole, IUserAccess, IUserIdentity } from 'membership/contracts';

export interface IAppUser extends IBaasicModel, IUserAccess, IUserIdentity {
    creationDate?: string,
    dashboardSettings?: any,
    name?: string
}