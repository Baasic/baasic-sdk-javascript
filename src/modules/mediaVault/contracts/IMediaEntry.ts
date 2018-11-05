import { IModel } from 'common/contracts';;
import { IUserInfo } from '../../membership/contracts';
import { IMediaVaultDerivedEntry } from './';

export interface IMediaEntry extends IModel {
    derivedEntries?: IMediaVaultDerivedEntry[],
    description?: string,
    fileExtensions?: string,
    fileName?: string,
    fileSize?: number,
    height?: number,
    metaData?: Object,
    ownerUser?: IUserInfo,
    ownerUserId?: string,
    path: string,
    width?: number
}