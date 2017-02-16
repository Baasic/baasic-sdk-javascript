/* globals module */ 
/**  
 * @module baasicUserRouteDefinition  
 * @description Baasic User Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicSocialLoginRouteDefinition } from 'membership';
import { BaasicBaseRouteDefinition } from 'common';

export class BaasicUserRouteDefinition extends BaasicBaseRouteDefinition {

    get socialLogin(): BaasicSocialLoginRouteDefinition {
        return this.baasicSocialLoginRouteDefinition;
    }

    constructor(
        private baasicBaseRouteDefinition: BaasicBaseRouteDefinition,
        private baasicSocialLoginRouteDefinition: BaasicSocialLoginRouteDefinition
    ) { super(); }

    find(): any {
        return this.baasicBaseRouteDefinition.find('users/{?searchQuery,page,rpp,sort,embed,fields}');
    }

    get(): any {
        return this.baasicBaseRouteDefinition.get('users/{username}/{?embed,fields}');
    }

    create(): any {
        return this.baasicBaseRouteDefinition.create('users');
    }

    update(params: any): any {
        return this.baasicBaseRouteDefinition.update('users/{id}', params);
    }

    delete(params: any): any {
        return this.baasicBaseRouteDefinition.delete( 'users/{id}', params);
    }
    
    /**                 
     * Parses user exists route; URI template should be expanded with the username whose availability you'd like to check.                                
     * @method                        
     * @example baasicUserRouteDefinition.exists.expand({username: '<username>'});                               
     **/			
    exists(): any {
        return this.baasicUriTemplateProcessor.parse('users/{username}/exists/');
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
            return this.baasicUriTemplateProcessor.parse('users/{id}/unlock');
        }
    }

    lock(params: any): any {
        if('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('lock').href;
        } else {
            return this.baasicUriTemplateProcessor.parse('users/{id}/lock');
        }
    }

    approve(params: any): any {
        if('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('approve').href;
        } else {
           return this.baasicUriTemplateProcessor.parse('users/{id}/approve');
        }
    }

    disapprove(params: any): any {
        if('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('disapprove').href;
        } else {
            return this.baasicUriTemplateProcessor.parse('users/{id}/disapprove');
        }
    }

    /**                 
     * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.                 
     * @method                 
     * @example baasicUserRouteDefinition.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});                 
     **/   				
    parse(route: string): any {
        return this.baasicBaseRouteDefinition.parse(route);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */