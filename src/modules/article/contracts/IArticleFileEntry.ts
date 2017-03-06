import { IBaasicModel } from 'common/contracts';
import { IFileEntryMetadata } from 'modules/files/contracts';

export interface IArticleFileEntry extends IBaasicModel, IFileEntryMetadata {
    articleId?: string,
    parentId?: string
}