/* globals module */
/**  
 * @module meteringCategoryClient  
 * @description  Metering Category Client provides an easy way to consume  Metering REST API end-points. In order to obtain a needed routes `meteringCategoryClient` uses `meteringCategoryRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MeteringCategoryBatchClient, MeteringCategoryRoute, TYPES as meteringTypes } from './';
import { IMeteringCategory } from './contracts';

@injectable()
export class MeteringCategoryClient {

    get routeDefinition(): MeteringCategoryRoute {
        return this.meteringCategoryRoute;
    }

    get batch(): MeteringCategoryBatchClient {
        return this.meteringCategoryBatchClient;
    }

    constructor(
        @inject(meteringTypes.MeteringCategoryRoute) protected meteringCategoryRoute: MeteringCategoryRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
        @inject(meteringTypes.MeteringCategoryBatchClient) protected meteringCategoryBatchClient: MeteringCategoryBatchClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                          
     * @example meteringCategoryClient.find({   
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
        return this.apiClient.get(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
     * @method
     * @param id MeteringCategory id which uniquely identifies MeteringCategory resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example meteringCategoryClient.get(id)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringCategory>> {
        return this.apiClient.get(this.meteringCategoryRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.                  
     * @method 
     * @param data An MeteringCategory object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create metering action has been performed.                         
     * @example meteringCategoryClient.create({   
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
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `meteringCategoryRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapepr.updateParams(meteringCategory); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method 
     * @param data An meteringCategory object used to update specified MeteringCategory resource.
     * @returns A promise that is resolved once the remove action has been performed.                            
     * @example // meteringCategory is a resource previously fetched using get action. 
                    meteringCategory.defaultSamplingRate = 'Day'; 
                    meteringCategoryClient.update(meteringCategory)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMeteringCategory): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `meteringCategoryRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ```
     * let params = modelMapper.removeParams(meteringCategory); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method 
     * @param data An meteringCategory object used to update specified MeteringCategory resource. 
     * @returns A promise that is resolved once the remove action has been performed.                        
     * @example // meteringCategory is a resource previously fetched using get action.				 
                    meteringCategoryClient.remove(meteringCategory)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: IMeteringCategory): PromiseLike<IHttpResponse<void>> {
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