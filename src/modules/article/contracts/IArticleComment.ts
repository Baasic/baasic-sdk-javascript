import { IModel } from '../../../common/contracts';;
import { IArticle, IArticleCommentMetadata } from 'modules/article/contracts';

export interface IArticleComment extends IModel, IArticleCommentMetadata {
    article?: IArticle,
    articleId: string,
    comment?: string
}