import { IBaasicModel } from 'common/contracts';
import { IUserProfile, IUserProfileWork } from 'modules/userProfile/contracts';

export interface IUserWork extends IUserProfileWork, IBaasicModel {
    userProfile?: IUserProfile
}