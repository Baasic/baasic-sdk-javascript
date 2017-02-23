import { IBaasicModel } from 'common/contracts';
import { ISkill } from 'modules/userProfile/contracts';

export interface IUserProfileSkill extends IBaasicModel {
    skill?: ISkill,
    skillId?: string,
    skillName?: string,
    userId?: string
}