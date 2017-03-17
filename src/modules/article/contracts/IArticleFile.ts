import { IModel } from 'common/contracts';
import { IArticleFileEntry } from 'modules/article/contracts';

export interface IArticleFile extends IModel {
    articleFileEntry?: IArticleFileEntry,
    articleFileEntryId?: string,
    articleId?: string
}