import { IModel } from '../../../common/contracts';;
import { IFileEntryMetadata } from '../../file/contracts';

export interface IArticleFileEntry extends IModel, IFileEntryMetadata {
    articleId?: string,
    parentId?: string
}