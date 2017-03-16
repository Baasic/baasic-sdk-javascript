/* globals module */
/**  
 * @module baasicCommerceProductClient  
 * @description Baasic Commerce Product Client provides an easy way to consume Baasic Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceProductClient` uses `baasicCommerceProductRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicCommerceProductRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class BaasicCommerceProductClient {

    get routeDefinition(): BaasicCommerceProductRouteDefinition {
        return this.baasicCommerceProductRouteDefinition;
    }

    constructor(
        @inject(commerceTypes.BaasicCommerceProductRouteDefinition) protected baasicCommerceProductRouteDefinition: BaasicCommerceProductRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected BaasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceProductClient.find({   
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
        return this.BaasicApiClient.get(this.baasicCommerceProductRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceProductClient.get()
                      .then(function (data) {   
                          // perform success action here 
                      },
                       function (response, status, headers, config) {   
                           // perform error handling here 
                      });                 
   **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.get(this.baasicCommerceProductRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example baasicCommerceProductClient.create({   
                    name : '<product-name>',   
                    slug : '<slug>',   
                    shortDescription : '<short-description>',   
                    recurringCyclePeriodTypeId: '<recurring-cycle-period-type-id>'   
                    planId : '<plan-id>',   
                    price: 100,   
                    published: true 
                }) 
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    create(data: any): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.post(this.baasicCommerceProductRouteDefinition.create(), this.baasicCommerceProductRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceProductRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceProduct); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceProduct is a resource previously fetched using get action. 
                        commerceProduct.shortDescription : '<short-description>'; 
                        baasicCommerceProductClient.update(commerceProduct)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.BaasicApiClient.put<void>(this.baasicCommerceProductRouteDefinition.update(data), this.baasicCommerceProductRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceProductRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceProduct);
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceProduct is a resource previously fetched using get action.				 
                    baasicCommerceProductClient.remove(commerceProduct)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.BaasicApiClient.delete<void>(this.baasicCommerceProductRouteDefinition.delete(data));
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