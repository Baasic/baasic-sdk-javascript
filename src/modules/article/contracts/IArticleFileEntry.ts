import { IBaasicModel } from 'common/contracts';
import { IFileEntryMetadata } from 'modules/file/contracts';

export interface IArticleFileEntry extends IBaasicModel, IFileEntryMetadata {
    articleId?: string,
    parentId?: string
}