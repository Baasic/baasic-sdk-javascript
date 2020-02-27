import { IOptions } from '../../../common/contracts';

export interface IBlogPostCommentOptions extends IOptions {
    ids?: string;
    from?: string;
    to?: string;
    blogPostIds?: string;
}