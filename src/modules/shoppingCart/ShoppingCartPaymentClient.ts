/* globals module */
/**  
 * @module shoppingCartPaymentClient  
 * @description  Shopping Cart Payment Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Shopping Cart Payment Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { ShoppingCartPaymentRoute, TYPES as shoppingCartTypes, ICartPaymentRequest } from './';
import { IShoppingCartItem } from './contracts';

@injectable()
export class ShoppingCartPaymentClient {

    get routeDefinition(): ShoppingCartPaymentRoute {
        return this.shoppingCartPaymentRoute;
    }

    constructor(
        @inject(shoppingCartTypes.ShoppingCartPaymentRoute) protected shoppingCartPaymentRoute: ShoppingCartPaymentRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the calculateSummary action has been performed; this action calculateSummarys specified shopping cart item resources.                   
     * @method
     * @param data A collection of shopping cart item objects used to calculateSummary specified shopping cart item resources.
     * @returns A promise that is resolved once the calculateSummary action has been performed.                          
     * @example shoppingCartPaymentClient.calculateSummary(file)
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                   
    **/
    calculateSummary(data: ICartPaymentRequest): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.post<void>(this.routeDefinition.calculateSummary(data), this.routeDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the processCart action has been performed. This action will processCart shopping cart item resources from the system if successfully completed. Specified shopping cart items and all accompanying derived resources will be processCartd from the system.                   
     * @method
     * @param ids Collection of shopping cart item Id which uniquely identifies shopping cart item resources that need to be deleted.                         
     * @example // Remove original shopping cart item resources		 
                        shoppingCartPaymentClient.processCart(cartPaymentRequest)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });	 	                  
     **/
    processCart(data: ICartPaymentRequest): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.post<void>(this.routeDefinition.processCart(data), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */