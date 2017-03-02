/* globals module */
/**  
 * @module baasicUserRouteDefinition  
 * @description Baasic User Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */


import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { injectable, inject } from "inversify";
import { BaasicUserSocialLoginRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { IAppUser } from 'modules/membership/contracts';
import * as uritemplate from 'uritemplate';

@injectable()
export class BaasicUserRouteDefinition extends BaasicBaseRouteDefinition {

    get socialLogin(): BaasicUserSocialLoginRouteDefinition {
        return this.baasicUserSocialLoginRouteDefinition;
    }

    constructor(
        @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper,
        @inject(membershipTypes.BaasicUserSocialLoginRouteDefinition) protected baasicUserSocialLoginRouteDefinition: BaasicUserSocialLoginRouteDefinition
    ) { super(modelMapper); }

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
        return uritemplate.parse('users/{username}/exists/').expand(this.modelMapper.getParams(username, options, 'username'));
    }

    /**                 
     * Parses change password route, URI template should be expanded with the username of the user resource whose password should be updated.                 
     * @method
     * @param username A username or id which uniquely identifies user resource.                        
     * @example baasicUserRouteDefinition.changePassword({username: '<username>'});                              
     **/
    changePassword(username: string): any {
        return uritemplate.parse('users/{username}/change-password').expand({ username: username });
    }

    unlock(data: IAppUser): any {
        let params = this.modelMapper.updateParams(data);
        if ('HAL') {
            return params[this.modelMapper.modelPropertyName].links('unlock').href;
        } else {
            return uritemplate.parse('users/{id}/unlock');
        }
    }

    lock(data: IAppUser): any {
        let params = this.modelMapper.updateParams(data);
        if ('HAL') {
            return params[this.modelMapper.modelPropertyName].links('lock').href;
        } else {
            return uritemplate.parse('users/{id}/lock');
        }
    }

    approve(data: IAppUser): any {
        let params = this.modelMapper.updateParams(data);
        if ('HAL') {
            return params[this.modelMapper.modelPropertyName].links('approve').href;
        } else {
            return uritemplate.parse('users/{id}/approve');
        }
    }

    disapprove(data: IAppUser): any {
        let params = this.modelMapper.updateParams(data);
        if ('HAL') {
            return params[this.modelMapper.modelPropertyName].links('disapprove').href;
        } else {
            return uritemplate.parse('users/{id}/disapprove');
        }
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */