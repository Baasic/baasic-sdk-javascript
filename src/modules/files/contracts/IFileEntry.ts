import { IBaasicModel } from 'common/contracts';
import { IFileEntryMetadata, IPolicy } from 'modules/files/contracts';

export interface IFileEntry extends IBaasicModel, IFileEntryMetadata {
    policies?: IPolicy[]
}