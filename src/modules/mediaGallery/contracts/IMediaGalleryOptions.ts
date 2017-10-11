import { IOptions } from '../../../common/contracts';

export interface IMediaGalleryOptions extends IOptions {
    ids?: string,
    from?: string,
    to: string
}