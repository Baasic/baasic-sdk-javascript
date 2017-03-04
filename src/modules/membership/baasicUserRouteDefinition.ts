/* globals module */
/**  
 * @module baasicUserRouteDefinition  
 * @description Baasic User Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { BaasicUserSocialLoginRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { IAppUser } from 'modules/membership/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class BaasicUserRouteDefinition extends BaasicBaseRouteDefinition {

    get socialLogin(): BaasicUserSocialLoginRouteDefinition {
        return this.baasicUserSocialLoginRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(membershipTypes.BaasicUserSocialLoginRouteDefinition) protected baasicUserSocialLoginRouteDefinition: BaasicUserSocialLoginRouteDefinition
    ) { super(appOptions); }

    /**                 
     * Parses find user route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing user properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain user subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the user property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicUserRouteDefinition.find({searchQuery: '<search-phrase>'});                              
     **/
    find(options: IOptions): any {
        return super.baseFind('users/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get user route which must be expanded with the username of the previously created user resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicUserRouteDefinition.get({username: '<username>'})
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('users/{username}/{?embed,fields}', id, options, 'username');
    }

    /**                 
     * Parses create user route, this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicUserRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate('users', {});
    }

    update(data: IAppUser): any {
        return super.baseUpdate('users/{id}', data);
    }

    delete(data: IAppUser): any {
        return super.baseDelete('users/{id}', data);
    }

    /**                 
     * Parses user exists route; URI template should be expanded with the username whose availability you'd like to check.                                
     * @method
     * @param username A username which uniquely identifies an application user.                        
     * @example baasicUserRouteDefinition.exists({username: '<username>'});                               
     **/
    exists(username: string, options?: any): any {
        return super.baseGet('users/{username}/exists/', username, options, 'username');
    }

    /**                 
     * Parses change password route, URI template should be expanded with the username of the user resource whose password should be updated.                 
     * @method
     * @param username A username or id which uniquely identifies user resource.                        
     * @example baasicUserRouteDefinition.changePassword({username: '<username>'});                              
     **/
    changePassword(username: string): any {
        return super.baseUpdate('users/{username}/change-password', { username: username });
    }

    unlock(data: IAppUser): any {
        return super.baseUpdate('users/{id}/unlock', data, null, 'unlock');
    }

    lock(data: IAppUser): any {
        return super.baseUpdate('users/{id}/lock', data, null, 'lock');
    }

    approve(data: IAppUser): any {
        return super.baseUpdate('users/{id}/approve', data, null, 'approve');
    }

    disapprove(data: IAppUser): any {
        return super.baseUpdate('users/{id}/disapprove', data, null, 'disapprove');
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */