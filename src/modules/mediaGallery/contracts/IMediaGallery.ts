import { IModel } from '../../../common/contracts';
import { IMediaGalleryFile, IFileUserInfo } from './';

export interface IMediaGallery extends IModel {
    description?: string,
    json?: string,
    name: string,
    abrv?: string,
    userId: string,
    user?: IFileUserInfo,
    fileEntries?: IMediaGalleryFile[];
}