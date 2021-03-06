import { IModel } from '../../../../common/contracts';;
import { IMembership, IProfileAvatar, IUserEducation, IUserProfileSkill, IUserProfileWork } from './';

export interface IUserProfile extends IModel {
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
    skills?: IUserProfileSkill[],
    timestamp?: string,
    timeZoneId?: string,
    webSites?: string,
    work?: IUserProfileWork[],
    zipCode?: string
}