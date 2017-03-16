/* globals module */
/**  
 * @module baasicCommerceCustomerClient  
 * @description Baasic Commerce Customer Client provides an easy way to consume Baasic Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceCustomerClient` uses `baasicCommerceCustomerRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicCommerceCustomerRouteDefinition, BaasicCommerceCustomerPaymentMethodClient, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class BaasicCommerceCustomerClient {

    get paymentMethods(): BaasicCommerceCustomerPaymentMethodClient {
        return this.baasicCommerceCustomerPaymentMethodClient;
    }

    get routeDefinition(): BaasicCommerceCustomerRouteDefinition {
        return this.baasicCommerceCustomerRouteDefinition;
    }

    constructor(
        @inject(commerceTypes.BaasicCommerceCustomerPaymentMethodClient) protected baasicCommerceCustomerPaymentMethodClient: BaasicCommerceCustomerPaymentMethodClient,
        @inject(commerceTypes.BaasicCommerceCustomerRouteDefinition) protected baasicCommerceCustomerRouteDefinition: BaasicCommerceCustomerRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected BaasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceCustomerClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    search : '<search-phrase>' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                     
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>> {
        return this.BaasicApiClient.get(this.baasicCommerceCustomerRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceCustomerClient.get(id)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.get(this.baasicCommerceCustomerRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceCustomerRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = baasicApiClient.removeParams(commerceCustomer); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceCustomer is a resource previously fetched using get action. 
                    commerceCustomer.isDefault : true; 
                    baasicCommerceCustomerClient.update(commerceCustomer)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.BaasicApiClient.put<void>(this.baasicCommerceCustomerRouteDefinition.update(data), this.baasicCommerceCustomerRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceCustomerRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = baasicApiClient.removeParams(commerceCustomer); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceCustomer is a resource previously fetched using get action.				 
                    baasicCommerceCustomerClient.remove(commerceCustomer)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.BaasicApiClient.delete<void>(this.baasicCommerceCustomerRouteDefinition.delete(data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */