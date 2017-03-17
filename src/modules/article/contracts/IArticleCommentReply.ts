import { IModel } from 'common/contracts';
import { IArticleComment, IArticleCommentMetadata } from 'modules/article/contracts';

export interface IArticleCommentReply extends IModel, IArticleCommentMetadata {
    comment?: IArticleComment,
    commentId?: string,
    reply: string
}