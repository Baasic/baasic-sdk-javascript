import { IModel } from 'common/contracts';
import { IFileEntry} from './';

export interface IMediaGalleryFile extends IModel {
    id?: string,
    filename?: string,
    description? : string,
    json?: string,
    mediaGalleryFileEntryId: string, 
    mediaGalleryId: string, 
    mediaGalleryEntry: IFileEntry,
    isCover: boolean,
    userId: string
}