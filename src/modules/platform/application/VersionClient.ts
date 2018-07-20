/* globals module */
/**  
 * @module versionClient  
 * @description  Version Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `versionClient` uses `versionRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { VersionRoute, TYPES as applicationTypes } from './';

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

}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/