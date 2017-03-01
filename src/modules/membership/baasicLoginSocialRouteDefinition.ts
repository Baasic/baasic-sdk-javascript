/* globals module */
/**  
 * @module baasicLoginSocialRouteDefinition  
 * @description Baasic Login Social Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Login Social Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { injectable, inject } from "inversify";

@injectable()
export class BaasicLoginSocialRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper) { super(modelMapper); }

    /**                     
     * Parses get social login route which can be expanded with additional items. Supported items are:                     
     * - `provider` - Provider name or Id for which the login URL should be generated.                     
     * - `returnUrl` - Redirect Uri for the provider which will be used when the user is redirected back to the application.                     
     * @method 
     * @param provider Provider name or id for which the login URL should be generated.
     * @param returnUrl Redirect Uri for the provider which will be used when the user is redirected back to the application.                        
     * @example baasicLoginSocialRouteDefinition.get({   provider : '<provider>',   returnUrl: '<returnUrl>' });                                
     **/
    get(provider: string, returnUrl: string): any {
        let params = {
            provider: provider,
            returnUrl: returnUrl
        };
        return super.baseFind('login/social/{provider}/{?returnUrl}', params);
    }

    /**                     
     * Parses post social login route which can be expanded with additional items. Supported items are:                     
     * - `provider` - Provider name or Id being used to login with.                     
     * @method                           
     * @example baasicLoginSocialClient.post({ provider : '<provider>' });                                
     **/
    post(provider: string, options?: any): any {
        return super.parse('login/social/{provider}/{?embed,fields,options}').expand({ provider: provider, options: options });
    }
}