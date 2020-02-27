import { IModel } from '../../../common/contracts';;
import { IFileEntryMetadata } from '../../file/contracts';

export interface IBlogPostFileEntry extends IModel, IFileEntryMetadata {
    blogPostId?: string,
    parentId?: string
}