import { IModel } from '../../../common/contracts';;
import { IBlogPostFileEntry } from './';

export interface IBlogPostFile extends IModel {
    blogPostFileEntry?: IBlogPostFileEntry,
    blogPostFileEntryId?: string,
    blogPostId?: string
}