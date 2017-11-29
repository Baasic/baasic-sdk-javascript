/* globals module */
/**  
 * @module shoppingCartItemBatchRoute  
 * @description Baasic Shopping Cart Item Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Shopping Cart Item Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IShoppingCartItem } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class ShoppingCartItemBatchRoute extends BaseRoute {

    public readonly updateRoute: string = 'commerce/carts/items/batch';

    public readonly deleteRoute: string = 'commerce/carts/items/batch';

    public readonly createRoute: string = 'commerce/carts/items/batch';
    
    
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                          
     * @example shoppingCartItemBatchRoute.update();                                  
     **/
    update(): any {
        return super.baseUpdate(this.updateRoute, {});
    }

    /**                     
     * Parses create route; this URI template does not expose any additional options.                     
     * @method                          
     * @example shoppingCartItemBatchRoute.create();                                  
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                     
     * Parses remove route; this URI template does not expose any additional options.                                             
     * @method                           
     * @example shoppingCartItemBatchRoute.delete();                                 
     **/
    delete(): any {
        return super.baseDelete(this.deleteRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */