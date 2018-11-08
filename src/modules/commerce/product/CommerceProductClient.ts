/* globals module */
/**  
 * @module commerceProductClient  
 * @description  Commerce Product Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `commerceProductClient` uses `commerceProductRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { CommerceProductRoute, TYPES as commerceTypes } from '../';
import { IProductOptions } from '../contracts';

@injectable()
export class CommerceProductClient {

    get routeDefinition(): CommerceProductRoute {
        return this.commerceProductRoute;
    }

    constructor(
        @inject(commerceTypes.CommerceProductRoute) protected commerceProductRoute: CommerceProductRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example commerceProductClient.find({   
                   pageNumber : 1,   
                   pageSize : 10,   
                   orderBy : '<field>',   
                   orderDirection : '<asc|desc>',   
                   search : '<search-phrase>',
                   productCategoryIds : [''],
                   productCategoryAbrvs: ['']   
               }) 
               .then(function (collection) {   
                   // perform success action here 
               },
                function (response, status, headers, config) {   
                    // perform error handling here 
               });                     
    **/
    find(options?: IProductOptions): PromiseLike<IHttpResponse<IQueryModel<any>>> {
        return this.apiClient.get(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example commerceProductClient.get()
                      .then(function (data) {   
                          // perform success action here 
                      },
                       function (response, status, headers, config) {   
                           // perform error handling here 
                      });                 
   **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.commerceProductRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example commerceProductClient.create({   
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
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `commerceProductRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceProduct); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceProduct is a resource previously fetched using get action. 
                        commerceProduct.shortDescription : '<short-description>'; 
                        commerceProductClient.update(commerceProduct)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `commerceProductRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceProduct);
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceProduct is a resource previously fetched using get action.				 
                    commerceProductClient.remove(commerceProduct)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
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