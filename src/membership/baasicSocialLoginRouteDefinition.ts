/* globals module */ 
/**  
 * @module baasicSocialLoginRouteDefinition  
 * @description Baasic Social Login Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

export class BaasicSocialLoginRouteDefinition {

    /**                     
     * Parses get social login route, URI template should be expanded with the username of the user resource whose social login connections should be retrieved.                     
     * @method socialLogin.get                           
     * @example baasicSocialLoginRouteDefinition.get().expand({ username : '<username>' });
     **/
    get(): any {
        return this.baasicUriTemplateProcessor.parse('users/{username}/social-login');
    }

    /**                     
     * Parses remove social login route which can be expanded with additional items. Supported items are:                     
     * - `username` - A username which uniquely identifies an application user whose social login connection needs to be removed.                     
     * - `provider` - Provider from which to disconnect the login resource from.                     
     * @method socialLogin.remove                     
     * @example baasicSocialLoginRouteDefinition.remove().expand({ username : '<username>',   provider : '<provider>' });
     **/                     
    remove(): any {
        return this.baasicUriTemplateProcessor.parse('users/{username}/social-login/{provider}');
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */