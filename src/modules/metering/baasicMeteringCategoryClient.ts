/* globals module */
/**  
 * @module baasicMeteringCategoryClient  
 * @description  Metering Category Client provides an easy way to consume  Metering REST API end-points. In order to obtain a needed routes `baasicMeteringCategoryClient` uses `baasicMeteringCategoryRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { MeteringCategoryBatchClient, MeteringCategoryRouteDefinition, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringCategory } from 'modules/metering/contracts';

@injectable()
export class MeteringCategoryClient {

    get routeDefinition(): MeteringCategoryRouteDefinition {
        return this.baasicMeteringCategoryRouteDefinition;
    }

    get batch(): MeteringCategoryBatchClient {
        return this.baasicMeteringCategoryBatchClient;
    }

    constructor(
        @inject(meteringTypes.MeteringCategoryRouteDefinition) protected baasicMeteringCategoryRouteDefinition: MeteringCategoryRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient,
        @inject(meteringTypes.MeteringCategoryBatchClient) protected baasicMeteringCategoryBatchClient: MeteringCategoryBatchClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                          
     * @example baasicMeteringCategoryClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IMeteringCategory>>> {
        return this.baasicApiClient.get(this.baasicMeteringCategoryRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
     * @method
     * @param id MeteringCategory id which uniquely identifies MeteringCategory resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example baasicMeteringCategoryClient.get(id)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringCategory>> {
        return this.baasicApiClient.get(this.baasicMeteringCategoryRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.                  
     * @method 
     * @param data An MeteringCategory object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create metering action has been performed.                         
     * @example baasicMeteringCategoryClient.create({   
                    category : '<category-name>',   
                    unitName : 'Kb',   
                    unitFactor: 1,   
                    defaultSamplingRate: '<value>', - Defaults: Minute = 1,Hour = 2,Day = 3,Week = 4,Month = 5,Year = 6   
                    aggregateFunction: '<value>' - Defaults: None = 0,Count = 1,Avg = 2,Max = 3,Min = 4,Sum = 5 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    create(data: IMeteringCategory): PromiseLike<IHttpResponse<IMeteringCategory>> {
        return this.baasicApiClient.post(this.baasicMeteringCategoryRouteDefinition.create(), this.baasicMeteringCategoryRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringCategoryRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapepr.updateParams(meteringCategory); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method 
     * @param data An meteringCategory object used to update specified MeteringCategory resource.
     * @returns A promise that is resolved once the remove action has been performed.                            
     * @example // meteringCategory is a resource previously fetched using get action. 
                    meteringCategory.defaultSamplingRate = 'Day'; 
                    baasicMeteringCategoryClient.update(meteringCategory)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMeteringCategory): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicMeteringCategoryRouteDefinition.update(data), this.baasicMeteringCategoryRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringCategoryRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ```
     * let params = modelMapper.removeParams(meteringCategory); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method 
     * @param data An meteringCategory object used to update specified MeteringCategory resource. 
     * @returns A promise that is resolved once the remove action has been performed.                        
     * @example // meteringCategory is a resource previously fetched using get action.				 
                    baasicMeteringCategoryClient.remove(meteringCategory)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: IMeteringCategory): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicMeteringCategoryRouteDefinition.delete(data));
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