/* globals module */
/**  
 * @module baasicUserSocialLoginRouteDefinition  
 * @description Baasic User Social Login Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { injectable, inject } from "inversify";
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class BaasicUserSocialLoginRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses get social login route, URI template should be expanded with the username of the user resource whose social login connections should be retrieved.                     
     * @method
     * @param username A username or id which uniquely identifies user resource whose social login connections need to be retrieved.                           
     * @example baasicUserSocialLoginRouteDefinition.get('<username>');
     **/
    get(username: string): any {
        return super.parse('users/{username}/social-login').expand({ username: username });
    }

    /**                     
     * Parses remove social login route which can be expanded with additional items. Supported items are:                     
     * - `username` - A username which uniquely identifies an application user whose social login connection needs to be removed.                     
     * - `provider` - Provider from which to disconnect the login resource from.                     
     * @method
     * @param username A username which uniquely identifies an application user whose social login connection needs to be removed.
     * @param provider Provider from which to disconnect the login resource from.               
     * @example baasicUserSocialLoginRouteDefinition.remove('<username>', '<provider>');
     **/
    remove(username: string, provider: any): any {
        let params;
        if (provider.hasOwnProperty('abrv')) {
            params = {
                provider: provider.abrv
            };
        } else if (provider.hasOwnProperty('id')) {
            params = {
                provider: provider.id
            };
        } else {
            params = this.utility.extend({}, provider);
        }
        params.username = username;
        return super.parse('users/{username}/social-login/{provider}').expand(this.modelMapper.findParams(params));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */