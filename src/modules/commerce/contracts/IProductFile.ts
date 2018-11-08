import { IModel } from '../../../common/contracts';;
import { IProductFileEntry } from './';

export interface IProductFile extends IModel {
    productFileEntry?: IProductFileEntry,
    productFileEntryId?: string,
    productId?: string
}