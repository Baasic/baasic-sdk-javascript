import { IModel } from '../../../common/contracts';
import { IEmbedDerivedEntry, IEmbedFileUserInfo } from './';

export interface IEmbedFileEntry extends IModel {
    derivedEntries?: IEmbedDerivedEntry[],
    description?: string,
    fileExtension?: string,
    fileName?: string,
    fileSize: number,
    height?: number,
    json?: string, 
    metaData?: Object,
    ownerUser?: IEmbedFileUserInfo,
    ownerUserId?: string,
    path?: string,
    width?: number
}