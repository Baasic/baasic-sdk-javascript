import { IModel } from '../../../common/contracts';
import { IEmbedMediaGalleryFile } from './';

export interface IMediaGallery extends IModel {
    description?: string,
    json?: string,
    name: string,
    abrv?: string,
    userId: string,
    // user?: IUser,
    fileEntries?: IEmbedMediaGalleryFile[];
}