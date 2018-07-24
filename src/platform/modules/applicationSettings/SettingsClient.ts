/* globals module */
/**  
 * @module settingsClient  
 * @description  Settings Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `settingsClient` uses `settingsRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { SettingsRoute, TYPES as applicationTypes } from './';
import { IApplicationSettings } from './contracts';

@injectable()
export class SettingsClient {

    /**                 
     * Provides direct access to `settingsRoute`.                 
     * @method                                    
     **/
    get routeDefinition(): SettingsRoute {
        return this.settingsRoute;
    }

    constructor(
        @inject(applicationTypes.SettingsRoute) protected settingsRoute: SettingsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the application settings.               
     * @method
     * @returns A promise that is resolved once the get action has been performed.                           
     * @example settingsClient.get()
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    get(): PromiseLike<IHttpResponse<IApplicationSettings>> {
        return this.apiClient.get<IApplicationSettings>(this.routeDefinition.get());
    }

    /**                  
     * Returns a promise that is resolved once the update application setting action has been performed; this action updates a application seting.
     * @param data A setting object used to update specified setting resource.
     * @returns A promise that is resolved once the update setting action has been performed.                  
     * @method                         
     * @example settingsClient.update(data)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IApplicationSettings): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/