/* globals module */
/**  
 * @module loginSocialRoute  
 * @description Baasic Login Social Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Login Social Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class LoginSocialRoute extends BaseRoute {

    /**                  
    * Social login get route with route and query parameters.
    **/
    public getRoute: string = 'login/social/{provider}/{?returnUrl}';

    /**                  
    * Social login post route with route and query parameters.
    **/
    public postRoute: string = 'login/social/{provider}/{?embed,fields,options}';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses get social login route which can be expanded with additional items. Supported items are:                     
     * - `provider` - Provider name or Id for which the login URL should be generated.                     
     * - `returnUrl` - Redirect Uri for the provider which will be used when the user is redirected back to the application.                     
     * @method 
     * @param provider Provider name or id for which the login URL should be generated.
     * @param returnUrl Redirect Uri for the provider which will be used when the user is redirected back to the application.                        
     * @example loginSocialRoute.get({   provider : '<provider>',   returnUrl: '<returnUrl>' });                                
     **/
    get(provider: string, returnUrl: string): any {
        let params = {
            provider: provider,
            returnUrl: returnUrl
        };
        return super.baseFind(this.getRoute, params);
    }

    /**                     
     * Parses post social login route which can be expanded with additional items. Supported items are:                     
     * - `provider` - Provider name or Id being used to login with.                     
     * @method                           
     * @example loginSocialClient.post({ provider : '<provider>' });                                
     **/
    post(provider: string, options?: any): any {
        return super.baseCreate(this.postRoute, { provider: provider, options: options });
    }
}