/* globals module */
/**  
 * @module registerClient  
 * @description  Register Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `registerClient` uses `registerRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { RegisterRoute, TYPES as membershipTypes } from './';

@injectable()
export class RegisterClient {

    /**                 
     * Provides direct access to `registerRoute`.                 
     * @method                                   
     **/
    get routeDefinition(): RegisterRoute {
        return this.registerRoute;
    }

    constructor(
        @inject(membershipTypes.RegisterRoute) protected registerRoute: RegisterRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/