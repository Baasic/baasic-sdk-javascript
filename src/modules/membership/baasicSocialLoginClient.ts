/* globals module */
/**  
 * @module baasicSocialLoginClient  
 * @description Baasic Social Login Client provides an easy way to consume Baasic User REST API end-points. In order to obtain needed routes `baasicSocialLoginClient` uses `baasicSocialLoginRouteDefinition`. 
 */

import { IBaasicQueryModel } from 'common/contracts';
import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicSocialLoginRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { ISocialLogin } from 'modules/membership/contracts';

export class BaasicSocialLoginClient {

    constructor(
        @inject(membershipTypes.BaasicSocialLoginRouteDefinition) protected baasicSocialLoginRouteDefinition: BaasicSocialLoginRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list user resource connected social login providers.
     * @param username A username or id which uniquely identifies user resource whose social login connections need to be retrieved.
     * @returns A promise that is resolved once the get action has been performed.                     
     * @method                    
     * @example baasicSocialLoginClient.get('<username>')
                    .then(function (collection) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/
    get(username: string): PromiseLike<IHttpResponse<IBaasicQueryModel<ISocialLogin>>> {
        return this.baasicApiClient.get(this.baasicSocialLoginRouteDefinition.get(username));
    }

    /**                     
     * Returns a promise that is resolved once the remove action has been performed. This action removes the user resource social login connection from the specified provider.
     * @param username A username or id which uniquely identifies user resource whose social login connection needs to be removed.    
     * @param provider A value which uniquely identifies provider from which the user resource needs to be disconnected.
     * @returns A promise that is resolved once the remove action has been performed.                 
     * @method                 
     * @example baasicSocialLoginClient.remove('<username>', '<provider>')
                    .then(function (collection) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/
    remove(username: string, provider: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicSocialLoginRouteDefinition.remove(username, provider));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */