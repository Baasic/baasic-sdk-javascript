import {
    ShoppingCartItemClient,
    ShoppingCartPaymentClient,
    TYPES
} from './';


import { injectable, inject } from "inversify";

@injectable()
export class Root {
    constructor(
        @inject(TYPES.ShoppingCartItemClient) public items: ShoppingCartItemClient,
        @inject(TYPES.ShoppingCartPaymentClient) public payment: ShoppingCartPaymentClient
    ) {
    }
}