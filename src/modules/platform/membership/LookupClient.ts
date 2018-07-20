/* globals module */
/**  
 * @module lookupClient  
 * @description  Lookup Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `lookupClient` uses `lookupRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { LookupRoute, TYPES as membershipTypes } from './';

@injectable()
export class LookupClient {

    /**                 
     * Provides direct access to `lookupRoute`.                 
     * @method                                   
     **/
    get routeDefinition(): LookupRoute {
        return this.lookupRoute;
    }

    constructor(
        @inject(membershipTypes.LookupRoute) protected lookupRoute: LookupRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/