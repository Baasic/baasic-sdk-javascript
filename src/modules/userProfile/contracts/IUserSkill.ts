import { IBaasicModel } from 'common/contracts';
import { ISkill, IUserProfile, IUserProfileSkill } from 'modules/userProfile/contracts';

export interface IUserSkill extends IBaasicModel, IUserProfileSkill {
    userProfile?: IUserProfile
}