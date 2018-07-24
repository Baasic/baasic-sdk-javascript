/* globals module */
/**  
 * @module versionClient  
 * @description  Version Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `versionClient` uses `versionRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { VersionRoute, TYPES as applicationTypes } from './';
import { IModuleVersion } from './contracts';

@injectable()
export class VersionClient {

    /**                 
     * Provides direct access to `versionRoute`.                 
     * @method                                    
     **/
    get routeDefinition(): VersionRoute {
        return this.versionRoute;
    }

    constructor(
        @inject(applicationTypes.VersionRoute) protected versionRoute: VersionRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the all application module versions.               
     * @method
     * @returns A promise that is resolved once the get action has been performed.                           
     * @example versionClient.get()
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    get(): PromiseLike<IHttpResponse<IModuleVersion[]>> {
        return this.apiClient.get<IModuleVersion[]>(this.routeDefinition.get());
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/