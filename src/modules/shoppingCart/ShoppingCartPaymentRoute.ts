/* globals module */
/**  
 * @module shoppingCartPaymentRoute  
 * @description Baasic Shopping Cart Payment Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Shopping Cart Payment Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { ICartPaymentRequest } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class ShoppingCartPaymentRoute extends BaseRoute {

    public readonly calculateSummaryRoute: string = 'commerce/carts/users/{customerId}/summary';

    public readonly processCartRoute: string = 'commerce/carts/users/{customerId}/payment';
   
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses claculate summary route; this URI template does not expose any additional options.                     
     * @method                          
     * @example shoppingCartPaymentRoute.calculateSummaryRoute();                                  
     **/
    calculateSummary(data: ICartPaymentRequest): any {
        return super.baseCreate(this.calculateSummaryRoute, data);
    }

    /**                     
     * Parses process Route; this URI template does not expose any additional options.                     
     * @method                          
     * @example shoppingCartPaymentRoute.processCart();                                  
     **/
    processCart(data: ICartPaymentRequest): any {
        return super.baseCreate(this.processCartRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */