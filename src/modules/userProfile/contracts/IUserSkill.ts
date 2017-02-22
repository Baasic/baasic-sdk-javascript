import { IBaasicModel } from 'common/contracts';
import { ISkill } from 'modules/userProfile/contracts';

export interface IUserSkill extends IBaasicModel {
    skill?: ISkill,
    skillId?: string,
    skillName?: string,
    userId?: string
}