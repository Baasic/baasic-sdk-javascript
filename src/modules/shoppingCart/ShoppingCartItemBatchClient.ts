/* globals module */
/**  
 * @module shoppingCartItemsBatchClient  
 * @description  Shopping Cart Item Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Shopping Cart Item Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { ShoppingCartItemBatchRoute, TYPES as shoppingCartTypes } from './';
import { IShoppingCartItem } from './contracts';

@injectable()
export class ShoppingCartItemBatchClient {

    get routeDefinition(): ShoppingCartItemBatchRoute {
        return this.shoppingCartItemBatchRoute;
    }

    constructor(
        @inject(shoppingCartTypes.ShoppingCartItemBatchRoute) protected shoppingCartItemBatchRoute: ShoppingCartItemBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified shopping cart item resources.                   
     * @method
     * @param data A collection of shopping cart item objects used to update specified shopping cart item resources.
     * @returns A promise that is resolved once the update action has been performed.                          
     * @example shoppingCartItemsBatchClient.update(files)
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                   
    **/
    update(data: IShoppingCartItem[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the remove action has been performed. This action will remove shopping cart item resources from the system if successfully completed. Specified shopping cart items and all accompanying derived resources will be removed from the system.                   
     * @method
     * @param ids Collection of shopping cart item Id which uniquely identifies shopping cart item resources that need to be deleted.                         
     * @example // Remove original shopping cart item resources		 
                        shoppingCartItemsBatchClient.remove([<shopping-cart-item-id>])
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });	 	                  
     **/
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.shoppingCartItemBatchRoute.delete(), undefined, ids);
    }

     /**                   
     * Returns a promise that is resolved once the create action has been performed; this action creates specified shopping cart item resources.                   
     * @method
     * @param data A collection of shopping cart item objects used to create specified shopping cart item resources.
     * @returns A promise that is resolved once the create action has been performed.                          
     * @example shoppingCartItemsBatchClient.create(files)
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                   
    **/
    create(data: IShoppingCartItem[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.post<void>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */