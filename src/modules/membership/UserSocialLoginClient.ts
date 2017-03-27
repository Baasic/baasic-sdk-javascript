/* globals module */
/**  
 * @module userSocialLoginClient  
 * @description  User Social Login Client provides an easy way to consume  User REST API end-points. In order to obtain needed routes `userSocialLoginClient` uses `userSocialLoginRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { UserSocialLoginRoute, TYPES as membershipTypes } from 'modules/membership';
import { IUserSocialLogin } from 'modules/membership/contracts';

@injectable()
export class UserSocialLoginClient {

    /**                 
      * Provides direct access to `userSocialLoginRoute`.                 
      * @method                        
      * @example userSocialLoginClient.routeDefinition.get().expand(expandObject);                 
      **/
    get routeDefinition(): UserSocialLoginRoute {
        return this.userSocialLoginRoute;
    }

    constructor(
        @inject(membershipTypes.UserSocialLoginRoute) protected userSocialLoginRoute: UserSocialLoginRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list user resource connected social login providers.
     * @param username A username or id which uniquely identifies user resource whose social login connections need to be retrieved.
     * @returns A promise that is resolved once the get action has been performed.                     
     * @method                    
     * @example userSocialLoginClient.get('<username>')
                    .then(function (collection) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/
    get(username: string): PromiseLike<IHttpResponse<IQueryModel<IUserSocialLogin>>> {
        return this.apiClient.get<IQueryModel<IUserSocialLogin>>(this.routeDefinition.get(username));
    }

    /**                     
     * Returns a promise that is resolved once the remove action has been performed. This action removes the user resource social login connection from the specified provider.
     * @param username A username or id which uniquely identifies user resource whose social login connection needs to be removed.    
     * @param provider A value which uniquely identifies provider from which the user resource needs to be disconnected.
     * @returns A promise that is resolved once the remove action has been performed.                 
     * @method                 
     * @example userSocialLoginClient.remove('<username>', '<provider>')
                    .then(function (collection) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/
    remove(username: string, provider: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.userSocialLoginRoute.remove(username, provider));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */