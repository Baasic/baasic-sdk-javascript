/* globals module */
/**  
 * @module shoppingCartClient  
 * @description Shopping Cart Item Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicShopping Cart Item Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
   ShoppingCartItemBatchClient,
   ShoppingCartItemRoute,
    TYPES as shoppingCartItemTypes
} from './';
import { IShoppingCartItem } from './contracts';

@injectable()
export class ShoppingCartItemClient {

    get routeDefinition():ShoppingCartItemRoute {
        return this.shoppingCartItemRoute;
    }

    get batch():ShoppingCartItemBatchClient {
        return this.shoppingCartItemBatchClient;
    }
    
    constructor(
        @inject(shoppingCartItemTypes.ShoppingCartItemRoute) protected shoppingCartItemRoute:ShoppingCartItemRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
        @inject(shoppingCartItemTypes.ShoppingCartItemBatchClient) protected shoppingCartItemBatchClient:ShoppingCartItemBatchClient      
    ) { }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove one shopping cart item resources from the system if successfully completed. Specified shopping cart item and all accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicShoppingCartItemRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(shoppingCartItem); 
     * let uri = params['id'].links('delete').href; 
     * ```                  
     * @method 
     * @param id Shopping Cart Item id used to delete specific Shopping Cart Item resource from the system.
     * @example // id is a shopping cart item resource id previously fetched using get action. The following action will remove the original shopping cart item resource and all accompanying derived shopping cart item resources.		
                   shoppingCartClient.remove(id)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       });                						
    **/
    remove(id: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(id));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove one shopping cart item resources from the system if successfully completed. Specified shopping cart item and all accompanying derived resources will be removed from the system.
     *                
     * @method 
     * @param userId User Id from the User that the Shopping Cart Item resource from the system belongs to.
     * @param productId Product id from the Product that the Shopping Cart Item contains.
     * @example // The following action will remove the original shopping cart item resource and all accompanying derived shopping cart item resources.		
                   shoppingCartClient.removeByUserIdAndProductId(userId, productId)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       });                						
    **/
    removeByUserIdAndProductId(userId: string, productId: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.deleteByUserIdAndProductId(userId, productId));
    }

    /**
     * Returns a promise that is resolved once the create shopping cart item action has been performed; this action creates a new shopping cart item.
     * @method
     * @param data Shopping Cart Item object.
     * @returns A promise that is resolved once the create shopping cart item action has been performed.
     * @example shoppingCartClient.create(shoppingCartItem)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });
     **/
    create(data: IShoppingCartItem): PromiseLike<IHttpResponse<IShoppingCartItem>> {
        return this.apiClient.post<IShoppingCartItem>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the create shopping cart item action has been performed; this action creates a new shopping cart item.
     * @method
     * @param data Shopping Cart Item object.
     * @returns A promise that is resolved once the create shopping cart item action has been performed.
     * @example shoppingCartClient.createByUserIdAndProductId(shoppingCartItem)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });
     **/
    createByUserIdAndProductId(data: IShoppingCartItem): PromiseLike<IHttpResponse<IShoppingCartItem>> {
        return this.apiClient.post<IShoppingCartItem>(this.routeDefinition.createByUserIdAndProductId(data), this.routeDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all shopping cart item resources from the system if successfully completed.
     * @method                     
     * @example // Remove original shopping cart item resources		 
                        shoppingCartClient.purge()
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });	 	                  
     **/
    purge(): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge());
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */