/* globals module */
/**  
 * @module meteringCategoryBatchClient  
 * @description  Metering Category Batch Client provides an easy way to consume  Metering REST API end-points. In order to obtain a needed routes `meteringCategoryBatchClient` uses `meteringCategoryBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { MeteringCategoryBatchRouteDefinition, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringCategory } from 'modules/metering/contracts';

@injectable()
export class MeteringCategoryBatchClient {

    get routeDefinition(): MeteringCategoryBatchRouteDefinition {
        return this.meteringCategoryBatchRouteDefinition;
    }

    constructor(
        @inject(meteringTypes.MeteringCategoryBatchRouteDefinition) protected meteringCategoryBatchRouteDefinition: MeteringCategoryBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the create category action has been performed; this action creates new category resources.                   
     * @method
     * @param data An MeteringCategory objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create category action has been performed.                        
     * @example  meteringCategoryBatchClient.create([{     
                    aggregateFunction : '<aggregateFunction>',     
                    category : '<name>',    
                     defaultSamplingRate: '<defaultSamplingRate>',     
                     slug: '<slug>',     
                     unitFactor: '<unitFactor>',     
                     unitName: '<unitName>'   
                }])
                .then(function (data) {     
                    // perform success action here   
                },
                 function (response, status, headers, config) {     
                     // perform error handling here   
                });                   
     **/
    create(data: IMeteringCategory[]): PromiseLike<IHttpResponse<IMeteringCategory[]>> {
        return this.apiClient.post<IMeteringCategory[]>(this.routeDefinition.create(), this.meteringCategoryBatchRouteDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the update category action has been performed; this action updates specified category resources.                   
     * @method
     * @param data An MeteringCategory objects used to update specified MeteringCategory resources.
     * @returns A promise that is resolved once the update category action has been performed.                      
     * @example   meteringCategoryClient.update(companies)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });                   
     **/
    update(data: IMeteringCategory[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.meteringCategoryBatchRouteDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the remove action has been performed. This action will remove category resources from the system if successfully completed.                   
     * @method
     * @param ids MeteringCategory ids which uniquely identify MeteringCategory resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                         
     * @example companyClient.remove(companyIds)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });		                  
     **/
    delete(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(), this.meteringCategoryBatchRouteDefinition.deleteParams(ids));
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