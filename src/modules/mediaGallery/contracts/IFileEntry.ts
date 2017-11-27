import { IModel } from '../../../common/contracts';
import { IDerivedEntry, IFileUserInfo } from './';

export interface IFileEntry extends IModel {
    derivedEntries?: IDerivedEntry[],
    description?: string,
    fileExtension?: string,
    fileName?: string,
    fileSize: number,
    height?: number,
    json?: string, 
    metaData?: Object,
    ownerUser?: IFileUserInfo,
    ownerUserId?: string,
    path?: string,
    width?: number
}