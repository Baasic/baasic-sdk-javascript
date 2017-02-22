import { IBaasicModel } from 'common/contracts';
import { IMembership, IProfileAvatar, IUserEducation, IUserSkill, IUserWork } from 'modules/userProfile/contracts';

export interface IUserProfile extends IBaasicModel {
    aboutMySelf?: string,
    address?: string,
    avatar?: IProfileAvatar,
    city?: string,
    country?: string,
    displayName?: string,
    dob?: string,
    educations?: IUserEducation[],
    firstName?: string,
    lastName?: string,
    membership?: IMembership,
    mobilePhone?: string,
    skills?: IUserSkill[],
    timestamp?: string,
    timeZoneId?: string,
    webSites?: string,
    work?: IUserWork[],
    zipCode?: string
}