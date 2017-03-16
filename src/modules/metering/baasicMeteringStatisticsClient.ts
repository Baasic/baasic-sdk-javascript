/* globals module */
/**  
 * @module baasicMeteringStatisticsClient  
 * @description Baasic Metering Statistics Client provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringStatisticsClient` uses `baasicMeteringStatisticsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicMeteringStatisticsRouteDefinition, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringData } from 'modules/metering/contracts';

@injectable()
export class BaasicMeteringStatisticsClient {

    constructor(
        @inject(meteringTypes.BaasicMeteringStatisticsRouteDefinition) protected baasicMeteringStatisticsRouteDefinition: BaasicMeteringStatisticsRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                    
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                    
     * @method  
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example baasicMeteringClient.find({     
                    pageNumber : 1,     
                    pageSize : 10,     
                    orderBy : '<field>',     
                    orderDirection : '<asc|desc>',     
                    category: 'Requests',     
                    rateBy : '<minute,hour,day,week,month,year>',     
                    from: '2 days ago',     
                    to: 'now'   
                })
                .then(function (collection) {     
                    // perform success action here   
                },
                 function (response, status, headers, config) {     
                     // perform error handling here   
                });                      
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringData>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IMeteringData>>(this.baasicMeteringStatisticsRouteDefinition.find(options));
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