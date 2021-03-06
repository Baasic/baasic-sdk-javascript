import { IModel } from '../../../common/contracts';;
import { IFileEntryMetadata, IPolicy } from './';

export interface IFileEntry extends IModel, IFileEntryMetadata {
    policies?: IPolicy[]
}