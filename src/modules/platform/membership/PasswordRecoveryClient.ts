/* globals module */
/**  
 * @module passwordRecoveryClient  
 * @description  Password Recovery Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `passwordRecoveryClient` uses `passwordRecoveryRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { PasswordRecoveryRoute, TYPES as membershipTypes } from './';

@injectable()
export class PasswordRecoveryClient {

    /**                 
     * Provides direct access to `passwordRecoveryRoute`.                 
     * @method                                   
     **/
    get routeDefinition(): PasswordRecoveryRoute {
        return this.passwordRecoveryRoute;
    }

    constructor(
        @inject(membershipTypes.PasswordRecoveryRoute) protected passwordRecoveryRoute: PasswordRecoveryRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/