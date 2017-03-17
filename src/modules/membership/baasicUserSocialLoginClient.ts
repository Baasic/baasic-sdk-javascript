/* globals module */
/**  
 * @module userSocialLoginClient  
 * @description  User Social Login Client provides an easy way to consume  User REST API end-points. In order to obtain needed routes `userSocialLoginClient` uses `userSocialLoginRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { UserSocialLoginRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { IUserSocialLogin } from 'modules/membership/contracts';

@injectable()
export class UserSocialLoginClient {

    constructor(
        @inject(membershipTypes.UserSocialLoginRouteDefinition) protected userSocialLoginRouteDefinition: UserSocialLoginRouteDefinition,
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
        return this.apiClient.get<IQueryModel<IUserSocialLogin>>(this.userSocialLoginRouteDefinition.get(username));
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
        return this.apiClient.delete<void>(this.userSocialLoginRouteDefinition.remove(username, provider));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */