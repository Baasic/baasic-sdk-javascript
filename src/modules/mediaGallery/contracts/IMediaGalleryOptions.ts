import { IOptions } from 'common/contracts';

export interface IMediaGalleryOptions extends IOptions {
    ids?: string,
    from?: string,
    to: string,
    fileName: string,
    minFileSize?: number,
    maxFileSize?: number
}