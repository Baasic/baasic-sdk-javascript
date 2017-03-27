import { IModel } from '../../../common/contracts';;
import { ISkill, IUserProfile, IUserProfileSkill } from 'modules/userProfile/contracts';

export interface IUserSkill extends IModel, IUserProfileSkill {
    userProfile?: IUserProfile
}