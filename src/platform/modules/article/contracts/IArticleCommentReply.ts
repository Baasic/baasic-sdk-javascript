import { IModel } from 'common/contracts';;
import { IArticleComment, IArticleCommentMetadata } from './';

export interface IArticleCommentReply extends IModel, IArticleCommentMetadata {
    comment?: IArticleComment,
    commentId?: string,
    reply: string
}