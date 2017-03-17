import { IModel } from 'common/contracts';
import { IUserProfile, IUserProfileWork } from 'modules/userProfile/contracts';

export interface IUserWork extends IUserProfileWork, IModel {
    userProfile?: IUserProfile
}