import { IModel } from '../../../common/contracts';
import { ICustomer } from './';

export interface ICartPaymentRequest extends IModel {
    customerId?: string,
    customer?: ICustomer,
    systemName: string,
    coupon? : string,
    json?: string
}