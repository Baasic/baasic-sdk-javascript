import { IBaasicModel } from 'common/contracts';
import { IArticle, IAuthor } from 'modules/article/contracts';

export interface IRating extends IBaasicModel {
    article?: IArticle,
    articleId: string,
    ratedOn?: string,
    rating: number,
    user?: IAuthor,
    userId: string
} 