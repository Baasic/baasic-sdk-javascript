import { IOptions } from '../../../common/contracts';

export interface IBlogPostFileOptions extends IOptions {
    ids?: string;
    blogPostIds?: string;
    fileIds?: string;
    from?: string;
    to?: string;
}