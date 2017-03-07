import { IBaasicModel, IRole } from 'common/contracts';
import { IUserAccess, IUserIdentity } from 'modules/membership/contracts';

export interface IAppUser extends IBaasicModel, IUserAccess, IUserIdentity {
    creationDate?: string,
    dashboardSettings?: any,
    name?: string
}