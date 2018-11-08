import { IModel } from '../../../common/contracts';;
import { IArticleFileEntry } from './';

export interface IArticleFile extends IModel {
    articleFileEntry?: IArticleFileEntry,
    articleFileEntryId?: string,
    articleId?: string
}