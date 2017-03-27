import { IModel } from '../../../common/contracts';;
import { IFileEntry } from './'; 

export interface IProfileAvatar extends IModel {
    avatarFileEntry?: IFileEntry,
    avatarFileEntryId?: string
}