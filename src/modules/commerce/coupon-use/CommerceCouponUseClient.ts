/* globals module */
/**  
 * @module commerceCouponUseClient  
 * @description  Commerce Coupon Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `commerceCouponUseClient` uses `commerceCouponRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { CommerceCouponUseRoute, TYPES as commerceTypes } from '../';
import { ICouponUseOptions } from '../contracts';

@injectable()
export class CommerceCouponUseClient {

    get routeDefinition(): CommerceCouponUseRoute {
        return this.commerceCouponUseRoute;
    }

    constructor(
        @inject(commerceTypes.CommerceCouponUseRoute) protected commerceCouponUseRoute: CommerceCouponUseRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example commerceCouponUseClient.find({   
                   pageNumber : 1,   
                   pageSize : 10,   
                   orderBy : '<field>',   
                   orderDirection : '<asc|desc>',   
                   search : '<search-phrase>',
                   couponCategoryId : '',
                   categoryAbrv: ''    
               }) 
               .then(function (collection) {   
                   // perform success action here 
               },
                function (response, status, headers, config) {   
                    // perform error handling here 
               });                     
    **/
    find(options?: ICouponUseOptions): PromiseLike<IHttpResponse<IQueryModel<any>>> {
        return this.apiClient.get(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example commerceCouponUseClient.get()
                      .then(function (data) {   
                          // perform success action here 
                      },
                       function (response, status, headers, config) {   
                           // perform error handling here 
                      });                 
   **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.routeDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example commerceCouponUseClient.create({   
                    name : '<coupon-name>',   
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
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `commerceCouponRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceCoupon); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceCoupon is a resource previously fetched using get action. 
                        commerceCoupon.shortDescription : '<short-description>'; 
                        commerceCouponUseClient.update(commerceCoupon)
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
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `commerceCouponRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceCoupon);
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceCoupon is a resource previously fetched using get action.				 
                    commerceCouponUseClient.remove(commerceCoupon)
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