/* globals module */ 
/**  
 * @module baasicSocialLoginClient  
 * @description Baasic Social Login Client provides an easy way to consume Baasic User REST API end-points. In order to obtain needed routes `baasicSocialLoginClient` uses `baasicSocialLoginRouteDefinition`. 
 */

import { BaasicSocialLoginRouteDefinition } from 'membership';
import { ISocialLogin } from 'membership/contracts';
import { IBaasicQueryModel } from 'contracts';
import { ModelMapper, Utility } from '..';

export class BaasicSocialLoginClient {

    constructor(
        private modelMapper: ModelMapper,
        private utility: Utility,
        private baasicSocialLoginRouteDefinition: BaasicSocialLoginRouteDefinition
    ) {}

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list user resource connected social login providers.
     * @param username A username or id which uniquely identifies user resource whose social login connections need to be retrieved.
     * @returns A promise that is resolved once the get action has been performed.                     
     * @method socialLogin.get                     
     * @example baasicSocialLoginClient.get('<username>')
                    .success(function (collection) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/
    get(username: string): Promise<IBaasicQueryModel<ISocialLogin>> {
        return this.baasicApiHttp.get(this.baasicSocialLoginRouteDefinition.get().expand({ username: username }));
    }

    /**                     
     * Returns a promise that is resolved once the remove action has been performed. This action removes the user resource social login connection from the specified provider.
     * @param username A username or id which uniquely identifies user resource whose social login connection needs to be removed.    
     * @param provider A value which uniquely identifies provider from which the user resource needs to be disconnected.
     * @returns A promise that is resolved once the remove action has been performed.                 
     * @method socialLogin.remove                     
     * @example baasicSocialLoginClient.remove('<username>', '<provider>')
                    .success(function (collection) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/                     
    remove(username: string, provider: any): Promise<void> {
        let params;
        if (provider.hasOwnProperty('abrv')){ 
            params = { 
                provider: provider.abrv                             
            };
         } else if (provider.hasOwnProperty('id')){ 
             params = { 
                 provider: provider.id
            };
        } else { 
            params = this.utility.extend({}, provider);
        }
        params.username = username;
        return this.baasicApiHttp.delete(this.baasicSocialLoginRouteDefinition.remove().expand(this.modelMapper.findParams(params)));                       
    }
}