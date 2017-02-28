/* globals module */
/**  
 * @module baasicMeteringSettingsClient  
 * @description Baasic Metering Settings Client provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringSettingsClient` uses `baasicMeteringSettingsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTYPES } from 'httpApi';
import { BaasicMeteringSettingsRouteDefinition, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringSettings } from 'modules/metering/contracts';

export class BaasicMeteringSettingsClient {

    get routeDefinition(): BaasicMeteringSettingsRouteDefinition {
        return this.baasicMeteringSettingsRouteDefinition;
    }

    constructor(
        @inject(meteringTypes.BaasicMeteringSettingsRouteDefinition) protected baasicMeteringSettingsRouteDefinition: BaasicMeteringSettingsRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
     * @method                        
     * @example baasicMeteringSettingsClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                      function (response, status, headers, config) {   
                          // perform error handling here 
                    });                 
     **/
    get(options: any): PromiseLike<IHttpResponse<IMeteringSettings>> {
        return this.baasicApiClient.get(this.baasicMeteringSettingsRouteDefinition.get(options));
    }

    /**                  
     * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(meteringSettings); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method 
     * @param data An meteringSetting object used to update specified MeteringSetting resource.
     * @returns A promise that is resolved once the update metering action has been performed.                         
     * @example // meteringSettings is a resource previously fetched using get action. 
                    meteringSettings.dataRetentionPeriod = 60; 
                    baasicMeteringSettingsClient.update(meteringSettings)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMeteringSettings): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicMeteringSettingsRouteDefinition.update(data), this.baasicMeteringSettingsRouteDefinition.updateParams(data));
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