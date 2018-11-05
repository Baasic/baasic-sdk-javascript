import { IModel } from 'common/contracts';;
import { IProfileAvatarFileEntry } from './';

export interface IProfileAvatar extends IModel {
    avatarFileEntry?: IProfileAvatarFileEntry,
    avatarFileEntryId?: string
}