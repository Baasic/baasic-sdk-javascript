import { IBaasicModel } from 'common/contracts';
import { IArticleComment, IArticleCommentMetadata } from 'modules/article/contracts';

export interface IArticleCommentReply extends IBaasicModel, IArticleCommentMetadata {
    comment?: IArticleComment,
    commentId?: string,
    reply: string
}