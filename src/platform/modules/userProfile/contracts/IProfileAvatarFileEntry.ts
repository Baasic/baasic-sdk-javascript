import { IModel } from '../../../../common/contracts';;

export interface IProfileAvatarFileEntry extends IModel {
    derivedEntries?: Object[],
    description?: string,
    fileExtension?: string,
    fileName?: string,
    fileSize?: string,
    height?: number,
    metadata?: Object,
    ownerUser?: Object,
    ownerUserId?: string,
    path?: string,
    width?: number,
    profileId?: string
}