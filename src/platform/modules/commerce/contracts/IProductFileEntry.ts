import { IModel } from '../../../common/contracts';;
import { IFileEntryMetadata } from '../../file/contracts';

export interface IProductFileEntry extends IModel, IFileEntryMetadata {
    productId?: string,
    parentId?: string
}