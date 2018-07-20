/* globals module */
/**  
 * @module userClient  
 * @description  User Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `userClient` uses `userRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { UserRoute, TYPES as membershipTypes } from './';

@injectable()
export class UserClient {

    /**                 
     * Provides direct access to `userRoute`.                 
     * @method                                   
     **/
    get routeDefinition(): UserRoute {
        return this.userRoute;
    }

    constructor(
        @inject(membershipTypes.UserRoute) protected userRoute: UserRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/