import { IModel } from '../common/contracts';;
import { IArticle, IAuthor } from './';

export interface IRating extends IModel {
    article?: IArticle,
    articleId: string,
    ratedOn?: string,
    rating: number,
    user?: IAuthor,
    userId: string
} 