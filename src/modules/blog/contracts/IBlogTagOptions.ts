import { IOptions } from '../../../common/contracts';

export interface IBlogTagOptions extends IOptions {
    ids?: string;
    from?: string;
    to?: string;
    blogIds?: string;
    blogSlugs?: string;           
}