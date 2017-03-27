import { IModel } from '../../../common/contracts';;
import { ISkill } from 'modules/userProfile/contracts';

export interface IUserProfileSkill extends IModel {
    skill?: ISkill,
    skillId?: string,
    skillName?: string,
    userId?: string
}