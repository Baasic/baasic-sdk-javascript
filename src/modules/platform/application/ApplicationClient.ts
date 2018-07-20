/* globals module */
/**  
 * @module applicationClient  
 * @description  Application Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `applicationClient` uses `applicationRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { ApplicationRoute, TYPES as applicationTypes } from './';

@injectable()
export class ApplicationClient {

    /**                 
     * Provides direct access to `applicationRoute`.                 
     * @method                                   
     **/
    get routeDefinition(): ApplicationRoute {
        return this.applicationRoute;
    }

    constructor(
        @inject(applicationTypes.ApplicationRoute) protected applicationRoute: ApplicationRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/