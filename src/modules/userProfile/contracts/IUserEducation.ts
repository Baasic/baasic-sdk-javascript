import { IBaasicModel } from 'common/contracts';
import { IOrganization, IUserProfile } from 'modules/userProfile/contracts';

export interface IUserEducation extends IBaasicModel {
    degree?: string,
    endDate?: string,
    grade?: string,
    organization?: IOrganization,
    organizationId?: string,
    organizationName?: string,
    startDate?: string,
    summary?: string,
    userId?: string,
    userProfile?: IUserProfile
}