import { IBaasicModel } from 'common/contracts';
import { IFileEntryMetadata, IPolicy } from 'modules/file/contracts';

export interface IFileEntry extends IBaasicModel, IFileEntryMetadata {
    policies?: IPolicy[]
}