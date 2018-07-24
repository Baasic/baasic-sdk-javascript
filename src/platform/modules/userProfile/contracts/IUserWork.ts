import { IModel } from 'common/contracts';;
import { IUserProfile, IUserProfileWork } from './';

export interface IUserWork extends IUserProfileWork, IModel {
    userProfile?: IUserProfile
}