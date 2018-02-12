import { IModel } from '../../../common/contracts';
import { IUserAddress } from './';

export interface ICustomer extends IModel {
    billingAddress? : IUserAddress,
    billingAddressId? : string, 
    company?: string,
    email?: string, 
    firstName?: string, 
    lastName?: string, 
    json?: string,
    shippingAddress? : IUserAddress,
    shippingAddressId? : string, 
    vatId? : string
}