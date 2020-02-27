import { IModel } from '../../../common/contracts';
import { IBlogPostCommentAuthor } from '.';

export interface IBlogPostComment extends IModel {
    approveDate?: string;
    author?: string;
    blogPostId: string;
    comment: string;
    email?: string;
    flagDate?: string;
    isApproved?: boolean;
    isFlaged?: boolean;
    isReported?: boolean;
    isSpam?: boolean;
    reportDate?: string;
    spamDate?: string;
    user?: IBlogPostCommentAuthor;
    userId?: string; 
}