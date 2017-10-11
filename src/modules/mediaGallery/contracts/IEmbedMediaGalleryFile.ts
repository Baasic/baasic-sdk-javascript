import { IModel } from '../../../common/contracts';
import { IEmbedFileEntry} from './';

export interface IEmbedMediaGalleryFile extends IModel {
    json?: string,
    mediaGalleryEntryId: string, 
    mediaGalleryId: string, 
    mediaGalleryEntry: IEmbedFileEntry
}