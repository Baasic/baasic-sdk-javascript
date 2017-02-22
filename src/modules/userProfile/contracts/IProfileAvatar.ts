import { IBaasicModel } from 'common/contracts';
import { IFileEntry } from 'modules/userProfile/contracts'; 

export interface IProfileAvatar extends IBaasicModel {
    avatarFileEntry?: IFileEntry,
    avatarFileEntryId?: string
}