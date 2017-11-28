import { IModel } from '../../../common/contracts';

export interface ICartPaymentRequest extends IModel {
    customerId?: string,
    systemName: string,
    coupon? : string,
    json?: string
}