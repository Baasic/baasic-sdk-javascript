/* globals module */ 
/**  
 * @module baasicUserRouteDefinition  
 * @description Baasic User Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicSocialLoginRouteDefinition } from 'membership';
import { BaasicBaseRouteDefinition } from '..';

export class BaasicUserRouteDefinition extends BaasicBaseRouteDefinition {

    get socialLogin(): BaasicSocialLoginRouteDefinition {
        return this.baasicSocialLoginRouteDefinition;
    }

    constructor(private baasicSocialLoginRouteDefinition: BaasicSocialLoginRouteDefinition) { super(); }
    
    /**                 
     * Parses user exists route; URI template should be expanded with the username whose availability you'd like to check.                                
     * @method                        
     * @example baasicUserRouteDefinition.exists.expand({username: '<username>'});                               
     **/			
    exists(): any {
        return this.baasicUriTemplateProcessor.parse('users/{username}/exists/');
    }

    /**                 
     * Parses find user route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing user properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain user subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the user property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicUserRouteDefinition.find().expand({searchQuery: '<search-phrase>'});                               
     **/ 
    find(): any {
        return this.baasicUriTemplateProcessor.parse('users/{?searchQuery,page,rpp,sort,embed,fields}');
    }

    /**                 
     * Parses get user route which must be expanded with the username of the previously created user resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicUserRouteDefinition.get().expand({username: '<username>'});                               
     **/   					
    get(): any {
        return this.baasicUriTemplateProcessor.parse('users/{username}/{?embed,fields}');
    }

    /**                 
     * Parses create user route, this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicUserRouteDefinition.create().expand({});                              
     **/
    create(): any {
        return this.baasicUriTemplateProcessor.parse('users');
    }

    /**                 
     * Parses change password route, URI template should be expanded with the username of the user resource whose password should be updated.                 
     * @method                        
     * @example baasicUserRouteDefinition.changePassword().expand({username: '<username>'});                              
     **/
    changePassword(): any {
        return this.baasicUriTemplateProcessor.parse('users/{username}/change-password');
    }

    unlock(params: any): any {
        if('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('unlock').href;
        } else {
            // return json;
        }
    }

    lock(params: any): any {
        if('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('lock').href;
        } else {
            // return json;
        }
    }

    approve(params: any): any {
        if('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('approve').href;
        } else {
            // return json;
        }
    }

    disapprove(params: any): any {
        if('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('disapprove').href;
        } else {
            // return json;
        }
    }

    /**                 
     * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.                 
     * @method                 
     * @example baasicUserRouteDefinition.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});                 
     **/   				
    parse(link: string): any {
        return this.baasicUriTemplateProcessor.parse(link);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */