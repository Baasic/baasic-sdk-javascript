/* globals module */ 
/**  
 * @module baasicApplicationSettingsClient  
 * @description Baasic Application Settings Client provides an easy way to consume Baasic Application Settings REST API end-points. In order to obtain needed routes `baasicApplicationSettingsClient` uses `baasicApplicationSettingsRouteDefinition`. 
 */

import { BaasicApplicationSettingsRouteDefinition } from 'applicationSettings';
import { IApplication } from 'applicationSettings/contracts';
import { IOptions } from 'common/contracts';
import { ModelMapper } from '..';

export class BaasicApplicationSettingsClient {

    constructor(
        private modelMapper: ModelMapper,
        private baasicApplicationSettingsRouteDefinition: BaasicApplicationSettingsRouteDefinition
    ) {}

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the application settings resource.                 
     * @method                        
     * @example baasicApplicationSettingsClient.get()
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/ 
    get(options: IOptions): Promise<IApplication> {
        return this.baasicApiHttp.get(this.baaasicApplicationSettingsRouteDefinition.get().expand(this.modelMapper.getParams(undefined, options)))
                    .then(function (appSettings) { 
                        appSettings.origins = appSettings.origins || [];                         
                    });
    }

    /**                  
     * Returns a promise that is resolved once the update application settings action has been performed. This action updates the application setting resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't use `baasicApplicationSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(appSettings); 
     * let uri = params['model'].links('put').href;				 
     * ```                  
     * @method                         
     * @example // appSettings is a resource previously fetched using get action. 
                    appSettings.allowAnyOrigin = true; 
                    baasicApplicationSettingsClient.update(appSettings)
                        .success(function (data) {  
                            // perform success action here })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/	
    update(data: IApplication): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        let model = params[this.baasicConstants.modelPropertyName];
        return this.baasicApiHttp.put(this.baasicApplicationSettingsRouteDefinition.update(params), model);
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