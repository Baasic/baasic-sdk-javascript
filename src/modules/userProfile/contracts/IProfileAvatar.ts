import { IModel } from 'common/contracts';
import { IFileEntry } from 'modules/userProfile/contracts'; 

export interface IProfileAvatar extends IModel {
    avatarFileEntry?: IFileEntry,
    avatarFileEntryId?: string
}