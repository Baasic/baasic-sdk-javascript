/* globals module */
/**  
 * @module baasicApplicationSettingsClient  
 * @description Baasic Application Settings Client provides an easy way to consume Baasic Application Settings REST API end-points. In order to obtain needed routes `baasicApplicationSettingsClient` uses `baasicApplicationSettingsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicApplicationSettingsRouteDefinition, TYPES as applicationTypes } from 'modules/applicationSettings';
import { IApplication } from 'modules/applicationSettings/contracts';

@injectable()
export class BaasicApplicationSettingsClient {

    /**                 
     * Provides direct access to `baasicApplicationSettingsRouteDefinition`.                 
     * @method                        
     * @example BaasicApplicationSettingsClient.routeDefinition.get(options)                 
     **/
    get routeDefinition(): BaasicApplicationSettingsRouteDefinition {
        return this.baasicApplicationSettingsRouteDefinition;
    }

    constructor(
        @inject(applicationTypes.BaasicApplicationSettingsRouteDefinition) protected baasicApplicationSettingsRouteDefinition: BaasicApplicationSettingsRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the application settings resource.                 
     * @method
     * @param options Query resource options object.                        
     * @example baasicApplicationSettingsClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(options: IOptions): PromiseLike<IHttpResponse<IApplication>> {
        return this.baasicApiClient.get(this.baasicApplicationSettingsRouteDefinition.get(options));
    }

    /**                  
     * Returns a promise that is resolved once the update application settings action has been performed. This action updates the application setting resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't use `baasicApplicationSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(appSettings); 
     * let uri = params['model'].links('put').href;				 
     * ```                  
     * @method
     * @param data An application object used to update application settings of the specified application resource.                         
     * @example // appSettings is a resource previously fetched using get action. 
                    appSettings.allowAnyOrigin = true; 
                    baasicApplicationSettingsClient.update(appSettings)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IApplication): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.put(this.baasicApplicationSettingsRouteDefinition.update(data), this.baasicApplicationSettingsRouteDefinition.updateParams(data));
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