import { IBaasicModel } from 'common/contracts';
import { IDerivedEntry, IPolicy, IUserInfo } from 'modules/files/contracts';

export interface IFileEntry extends IBaasicModel {
    derivedEntries?: IDerivedEntry[],
    description?: string,
    fileExtension?: string,
    fileName?: string,
    fileSize?: string,
    height?: string,
    metaData?: string,
    ownerUser?: IUserInfo,
    ownerUserID?: string,
    path: string,
    policies?: IPolicy[],
    width?: number
}