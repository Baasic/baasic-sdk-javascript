import { IModel } from '../../../../common/contracts';;
import { ISkill, IUserProfile, IUserProfileSkill } from './';

export interface IUserSkill extends IModel, IUserProfileSkill {
    userProfile?: IUserProfile
}