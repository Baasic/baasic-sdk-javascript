/* globals module */
/**  
 * @module baasicCommerceLookupsRecurringCyclePeriodTypeClient  
 * @description  Commerce Lookups RecurringCyclePeriodType Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceLookupsRecurringCyclePeriodTypeClient` uses `baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { CommerceLookupsRecurringCyclePeriodTypeBatchClient, CommerceLookupsRecurringCyclePeriodTypeRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class CommerceLookupsRecurringCyclePeriodTypeClient {

    get routeDefinition(): CommerceLookupsRecurringCyclePeriodTypeRouteDefinition {
        return this.baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition;
    }

    get batch(): CommerceLookupsRecurringCyclePeriodTypeBatchClient {
        return this.baasicCommerceLookupsRecurringCyclePeriodTypeBatchClient;
    }

    constructor(
        @inject(commerceTypes.CommerceLookupsRecurringCyclePeriodTypeBatchClient) protected baasicCommerceLookupsRecurringCyclePeriodTypeBatchClient: CommerceLookupsRecurringCyclePeriodTypeBatchClient,
        @inject(commerceTypes.CommerceLookupsRecurringCyclePeriodTypeRouteDefinition) protected baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition: CommerceLookupsRecurringCyclePeriodTypeRouteDefinition,
        @inject(httpTYPES.ApiClient) protected ApiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceLookupsRecurringCyclePeriodTypeClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<any>>> {
        return this.ApiClient.get(this.baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceLookupsRecurringCyclePeriodTypeClient.get('<recurring-cycle-period-type-id>') 
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.ApiClient.get(this.baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceRecurringPeriodType); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceRecurringPeriodType is a resource previously fetched using get action. 
                        commerceRecurringPeriodType.description = '<description>'; 
                        baasicCommerceLookupsRecurringCyclePeriodTypeClient.update(commerceRecurringPeriodType) 
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.ApiClient.put<void>(this.baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition.update(data), this.baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example baasicCommerceLookupsRecurringCyclePeriodTypeClient.create({    
                    name : '<name>',   
                    abrv: '<abbreviation>',   
                    description: '<description>',   
                    monthFactor: '<month-factor'> 
                }) 
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    create(data: any): PromiseLike<IHttpResponse<any>> {
        return this.ApiClient.post(this.baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition.create(), this.baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceRecurringPeriodType); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceRecurringPeriodType is a resource previously fetched using get action.				 
                        baasicCommerceLookupsRecurringCyclePeriodTypeClient.remove(commerceRecurringPeriodType) 
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });						                   
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.ApiClient.delete<void>(this.baasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition.delete(data));
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