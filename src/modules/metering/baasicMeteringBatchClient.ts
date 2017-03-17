/* globals module */
/**  
 * @module meteringBatchClient  
 * @description  Metering Batch Client provides an easy way to consume  Metering REST API end-points. In order to obtain a needed routes `meteringBatchClient` uses `baasicMeteringBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { MeteringBatchRouteDefinition, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringData } from 'modules/metering/contracts';

@injectable()
export class MeteringBatchClient {

    get routeDefinition(): MeteringBatchRouteDefinition {
        return this.baasicMeteringBatchRouteDefinition;
    }

    constructor(
        @inject(meteringTypes.MeteringBatchRouteDefinition) protected baasicMeteringBatchRouteDefinition: MeteringBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the create data action has been performed; this action creates new data resources.                   
     * @method
     * @param data An MeteringData objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create data action has been performed.                        
     * @example  meteringBatchClient.create([{     
                    applicationId : '<applicationId>',     
                    category : '<category>',     
                    name: '<name>',     
                    value: '<value>'   
                }])
                .then(function (data) {     
                    // perform success action here   
                },
                 function (response, status, headers, config) {     
                     // perform error handling here   
                });                   
     **/
    create(data: IMeteringData[]): PromiseLike<IHttpResponse<IMeteringData[]>> {
        return this.apiClient.post(this.baasicMeteringBatchRouteDefinition.create(), this.baasicMeteringBatchRouteDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the update data action has been performed; this action updates specified data resources.                   
     * @method
     * @param data An MeteringData objects used to update specified MeteringData resources.
     * @returns A promise that is resolved once the update data action has been performed.
     * @example   meteringBatchClient.update(companies)
                        .then(function (data) {     
                            // perform success action here   
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here   
                        });                   
     **/
    update(data: IMeteringData[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.baasicMeteringBatchRouteDefinition.update(), this.baasicMeteringBatchRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove data resources from the system if successfully completed.                  
     * @method   
     * @param ids MeteringData ids which uniquely identify MeteringData resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                    
     * @example meteringClient.remove(companyIds)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });		                  
     **/
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.baasicMeteringBatchRouteDefinition.delete(), undefined, ids);
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