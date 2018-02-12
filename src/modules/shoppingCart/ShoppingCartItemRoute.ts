/* globals module */
/**  
 * @module ShoppingCartItemRoute  
 * @description Baasic Shopping Cart Item Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicShopping Cart Item Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import {    
    TYPES as shoppingCartTypes,
    ShoppingCartItemBatchRoute
} from './';
import { IShoppingCartItem } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class ShoppingCartItemRoute extends BaseRoute {

    public readonly findRoute: string = 'commerce/carts/items/{?searchQuery,userId,ids,from,to,page,rpp,sort,embed,fields}';

    public readonly findByUserIdRoute: string = 'commerce/carts/users/{userId}/products/{?page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'commerce/carts/items/{id}/{?embed,fields}';

    public readonly getbyUserIdAndProductIdRoute: string = 'commerce/carts/users/{userId}/products/{productId}/{?embed,fields}';

    public readonly updateRoute: string = 'commerce/carts/items/{id}';

    public readonly updateByUserIdAndProductIdRoute: string = 'commerce/carts/users/{userId}/products/{productId}';

    public readonly deleteRoute: string = 'commerce/carts/items/{id}';

    public readonly deleteByUserIdAndProductIdRoute: string = 'commerce/carts/users/{userId}/products/{productId}';

    public readonly createRoute: string = 'commerce/carts/items';

    public readonly createByUserIdAndProductIdRoute: string = 'commerce/carts/users/{userId}/products/{productId}';

    public readonly purgeRoute: string = 'commerce/carts/purge';
    

    get batch(): ShoppingCartItemBatchRoute {
        return this.shoppingCartItemBatchRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(shoppingCartTypes.ShoppingCartItemBatchRoute) protected shoppingCartItemBatchRoute: ShoppingCartItemBatchRoute,     
    ) { super(appOptions); }

    /**                 
     * Parses delete route; this route should be expanded with the Id of shopping cart item resource.                 
     * @method 
     * @param id Shopping Cart Id of specific Shopping Cart item resource in the system. 
     * @example shoppingCartItemRoute.delete(<id>);                               
     **/
    delete(id: string): any {
        return super.baseDelete(this.deleteRoute, id);
    }

    /**                 
     * Parses delete route; this route should be expanded with the Id of shopping cart item resource.                 
     * @method 
     * @param userId User Id of the User resource that the Shopping Cart resource in the system bellongs to. 
     * @param productId Product Id of the Product resource that the Shopping Cart resource in the system is linked to. 
     * @example shoppingCartItemRoute.delete(<user-id>, <product-id>);                               
     **/
    deleteByUserIdAndProductId(userId: string, productId: string): any {
        var data = {
            userId: userId,
            productId: productId
        }
        return super.baseDelete(this.deleteByUserIdAndProductIdRoute, data);
    }

     /**
     * Parses create route; this URI template doesnt support any additional options.
     * @method
     * @example shoppingCartItemRoute.create();
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }


     /**
     * Parses create route; this URI template doesnt support any additional options.
     * @method
     * @param data An shopping cart item  object that needs to be inserted into the system.
     * @example shoppingCartItemRoute.create(data);
     **/
    createByUserIdAndProductId(data: IShoppingCartItem): any {
        return super.baseCreate(this.createByUserIdAndProductIdRoute, data);
    }

    /**                     
     * Parses purge route; this URI template does not expose any additional options.                                             
     * @method                           
     * @example shoppingCartItemRoute.purge();                                 
     **/
    purge(): any {
        return super.baseDelete(this.purgeRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */