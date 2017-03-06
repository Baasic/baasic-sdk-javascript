import { IBaasicModel } from 'common/contracts';
import { IArticle, IArticleCommentMetadata } from 'modules/article/contracts';

export interface IArticleComment extends IBaasicModel, IArticleCommentMetadata {
    article?: IArticle,
    articleId: string,
    comment?: string
}