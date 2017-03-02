import { IBaasicModel } from 'common/contracts';
import { IUserInfo } from 'modules/files/contracts';
import { IMediaVaultDerivedEntry } from 'modules/mediaVault/contracts';

export interface IMediaEntry extends IBaasicModel {
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