/* globals module */
/**  
 * @module baasicMeteringCategoryBatchClient  
 * @description Baasic Metering Category Batch Client provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringCategoryBatchClient` uses `baasicMeteringCategoryBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicMeteringCategoryBatchRouteDefinition, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringCategory } from 'modules/metering/contracts';

@injectable()
export class BaasicMeteringCategoryBatchClient {

    get routeDefinition(): BaasicMeteringCategoryBatchRouteDefinition {
        return this.baasicMeteringCategoryBatchRouteDefinition;
    }

    constructor(
        @inject(meteringTypes.BaasicMeteringCategoryBatchRouteDefinition) protected baasicMeteringCategoryBatchRouteDefinition: BaasicMeteringCategoryBatchRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the create category action has been performed; this action creates new category resources.                   
     * @method
     * @param data An MeteringCategory objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create category action has been performed.                        
     * @example  baasicMeteringCategoryBatchClient.create([{     
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
        return this.baasicApiClient.post<IMeteringCategory[]>(this.baasicMeteringCategoryBatchRouteDefinition.create(), this.baasicMeteringCategoryBatchRouteDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the update category action has been performed; this action updates specified category resources.                   
     * @method
     * @param data An MeteringCategory objects used to update specified MeteringCategory resources.
     * @returns A promise that is resolved once the update category action has been performed.                      
     * @example   baasicMeteringCategoryClient.update(companies)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });                   
     **/
    update(data: IMeteringCategory[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicMeteringCategoryBatchRouteDefinition.update(), this.baasicMeteringCategoryBatchRouteDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the remove action has been performed. This action will remove category resources from the system if successfully completed.                   
     * @method
     * @param ids MeteringCategory ids which uniquely identify MeteringCategory resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                         
     * @example baasicCompanyClient.remove(companyIds)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });		                  
     **/
    delete(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicMeteringCategoryBatchRouteDefinition.delete(), this.baasicMeteringCategoryBatchRouteDefinition.deleteParams(ids));
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