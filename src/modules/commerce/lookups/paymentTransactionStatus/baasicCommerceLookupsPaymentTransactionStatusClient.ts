/* globals module */
/**  
 * @module baasicCommerceLookupsPaymentTransactionStatusClient  
 * @description Baasic Commerce Lookups PaymentTransactionStatus Client provides an easy way to consume Baasic Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceLookupsPaymentTransactionStatusClient` uses `baasicCommerceLookupsPaymentTransactionStatusRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicCommerceLookupsPaymentTransactionStatusBatchClient, BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class BaasicCommerceLookupsPaymentTransactionStatusClient {

    get routeDefinition(): BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition {
        return this.baasicCommerceLookupsPaymentTransactionStatusRouteDefinition;
    }

    get batch(): BaasicCommerceLookupsPaymentTransactionStatusBatchClient {
        return this.baasicCommerceLookupsPaymentTransactionStatusBatchClient;
    }

    constructor(
        @inject(commerceTypes.BaasicCommerceLookupsPaymentTransactionStatusBatchClient) protected baasicCommerceLookupsPaymentTransactionStatusBatchClient: BaasicCommerceLookupsPaymentTransactionStatusBatchClient,
        @inject(commerceTypes.BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition) protected baasicCommerceLookupsPaymentTransactionStatusRouteDefinition: BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected BaasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceLookupsPaymentTransactionStatusClient.find({   
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
        return this.BaasicApiClient.get(this.baasicCommerceLookupsPaymentTransactionStatusRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceLookupsPaymentTransactionStatusClient.get() 
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.get(this.baasicCommerceLookupsPaymentTransactionStatusRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsPaymentTransactionStatusRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commercePaymentTransactionStatus); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commercePaymentTransactionStatus is a resource previously fetched using get action. 
                    commercePaymentTransactionStatus.description = '<description>'; 
                    baasicCommerceLookupsPaymentTransactionStatusClient.update(commercePaymentTransactionStatus) 
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.BaasicApiClient.put<void>(this.baasicCommerceLookupsPaymentTransactionStatusRouteDefinition.update(data), this.baasicCommerceLookupsPaymentTransactionStatusRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example baasicCommerceLookupsPaymentTransactionStatusClient.create({    
                    name : '<name>',   
                    abrv: '<abbreviation>',   
                    description: '<description>' 
                }) 
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    create(data: any): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.post(this.baasicCommerceLookupsPaymentTransactionStatusRouteDefinition.create(), this.baasicCommerceLookupsPaymentTransactionStatusRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsPaymentTransactionStatusRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commercePaymentTransactionStatus); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commercePaymentTransactionStatus is a resource previously fetched using get action.				 
                        baasicCommerceLookupsPaymentTransactionStatusClient.remove(commercePaymentTransactionStatus) 
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });						
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.BaasicApiClient.delete<void>(this.baasicCommerceLookupsPaymentTransactionStatusRouteDefinition.delete(data));
    }
}

/**  
 * @copyright(c) 2017 Mono Ltd  
 * @license MIT 
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */