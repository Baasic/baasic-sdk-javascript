import { IModel } from '../../../common/contracts';
import { IProduct, IUser } from './';

export interface IShoppingCartItem extends IModel {
    productId?: string,
    product?: IProduct,
    quantity: number,
    timeStamp? : string,
    json?: string,
    user?: IUser,
    userId?: string
}