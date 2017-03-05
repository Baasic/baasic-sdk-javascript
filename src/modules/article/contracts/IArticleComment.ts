import { IBaasicModel } from 'common/contracts';
import { IArticleCommentMetadata } from 'modules/article/contracts';

export interface IArticleComment extends IBaasicModel, IArticleCommentMetadata {
    article?: Object,
    articleId: string,
    author?: string,
    comment?: string
}