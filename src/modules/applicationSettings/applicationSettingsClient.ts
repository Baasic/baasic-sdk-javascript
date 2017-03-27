/* globals module */
/**  
 * @module applicationSettingsClient  
 * @description  Application Settings Client provides an easy way to consume  Application Settings REST API end-points. In order to obtain needed routes `applicationSettingsClient` uses `applicationSettingsRoute`. 
 */

import { injectable, inject } from "inversify";
import { IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { ApplicationSettingsRoute, TYPES as applicationTypes } from './';
import { IApplication } from './contracts';

@injectable()
export class ApplicationSettingsClient {

    /**                 
     * Provides direct access to `applicationSettingsRoute`.                 
     * @method                        
     * @example ApplicationSettingsClient.routeDefinition.get(options)                 
     **/
    get routeDefinition(): ApplicationSettingsRoute {
        return this.applicationSettingsRoute;
    }

    constructor(
        @inject(applicationTypes.ApplicationSettingsRoute) protected applicationSettingsRoute: ApplicationSettingsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the application settings resource.                 
     * @method
     * @param options Query resource options object.                        
     * @example applicationSettingsClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(options: IOptions): PromiseLike<IHttpResponse<IApplication>> {
        return this.apiClient.get<IApplication>(this.routeDefinition.get(options));
    }

    /**                  
     * Returns a promise that is resolved once the update application settings action has been performed. This action updates the application setting resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't use `applicationSettingsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(appSettings); 
     * let uri = params['model'].links('put').href;				 
     * ```                  
     * @method
     * @param data An application object used to update application settings of the specified application resource.                         
     * @example // appSettings is a resource previously fetched using get action. 
                    appSettings.allowAnyOrigin = true; 
                    applicationSettingsClient.update(appSettings)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IApplication): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
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