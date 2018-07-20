/* globals module */
/**  
 * @module settingsClient  
 * @description  Settings Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `settingsClient` uses `settingsRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { SettingsRoute, TYPES as applicationTypes } from './';

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

}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/