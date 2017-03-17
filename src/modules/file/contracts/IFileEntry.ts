import { IModel } from 'common/contracts';
import { IFileEntryMetadata, IPolicy } from 'modules/file/contracts';

export interface IFileEntry extends IModel, IFileEntryMetadata {
    policies?: IPolicy[]
}