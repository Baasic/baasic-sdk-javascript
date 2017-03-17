/* globals module */
/**  
 * @module meteringSettingsClient  
 * @description  Metering Settings Client provides an easy way to consume  Metering REST API end-points. In order to obtain a needed routes `meteringSettingsClient` uses `meteringSettingsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { MeteringSettingsRouteDefinition, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringSettings } from 'modules/metering/contracts';

@injectable()
export class MeteringSettingsClient {

    get routeDefinition(): MeteringSettingsRouteDefinition {
        return this.meteringSettingsRouteDefinition;
    }

    constructor(
        @inject(meteringTypes.MeteringSettingsRouteDefinition) protected meteringSettingsRouteDefinition: MeteringSettingsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
     * @method                        
     * @example meteringSettingsClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                      function (response, status, headers, config) {   
                          // perform error handling here 
                    });                 
     **/
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringSettings>> {
        return this.apiClient.get<IMeteringSettings>(this.meteringSettingsRouteDefinition.get(options));
    }

    /**                  
     * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `meteringSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(meteringSettings); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method 
     * @param data An meteringSetting object used to update specified MeteringSetting resource.
     * @returns A promise that is resolved once the update metering action has been performed.                         
     * @example // meteringSettings is a resource previously fetched using get action. 
                    meteringSettings.dataRetentionPeriod = 60; 
                    meteringSettingsClient.update(meteringSettings)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMeteringSettings): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.meteringSettingsRouteDefinition.update(data), this.meteringSettingsRouteDefinition.updateParams(data));
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