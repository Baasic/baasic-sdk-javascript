/* globals module */
/**  
 * @module meteringStatisticsClient  
 * @description  Metering Statistics Client provides an easy way to consume  Metering REST API end-points. In order to obtain a needed routes `meteringStatisticsClient` uses `meteringStatisticsRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MeteringStatisticsRoute, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringData } from 'modules/metering/contracts';

@injectable()
export class MeteringStatisticsClient {

    /**                 
      * Provides direct access to `meteringStatisticsRoute`.                 
      * @method                        
      * @example meteringStatisticsClient.routeDefinition.get(expandObject);                 
      **/
    get routeDefinition(): MeteringStatisticsRoute {
        return this.meteringStatisticsRoute;
    }

    constructor(
        @inject(meteringTypes.MeteringStatisticsRoute) protected meteringStatisticsRoute: MeteringStatisticsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                    
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                    
     * @method  
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example meteringClient.find({     
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IMeteringData>>> {
        return this.apiClient.get<IQueryModel<IMeteringData>>(this.routeDefinition.find(options));
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