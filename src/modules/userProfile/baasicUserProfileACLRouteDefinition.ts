/* globals module */
/**  
 * @module baasicUserProfileACLRouteDefinition  
 * @description Baasic User ACL Profile Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Profile ACL Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, TYPES as commonTypes } from 'common';
import { IACLOptions, IACLPolicy } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class BaasicUserProfileACLRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /** 					
     * Parses get user profile acl route; this URI template should be expanded with the Id of the user profile resource.										
     * @method 
     * @param options Query resource options object.     					
     * @example baasicUserProfileACLRouteDefinition.get({id: '<profile-id>'}); 					
     **/
    get(options?: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.parse('profiles/{id}/acl/{?fields}').expand(params);
    }

    /** 					
     * Parses update user profile acl route; this URI template should be expanded with the Id of the user profile.										
     * @method
     * @param options ACL options object.    					
     * @example baasicUserProfileACLRouteDefinition.update({id: '<profile-id>'}); 					
     **/
    update(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.parse('profiles/{id}/acl/{?fields}').expand(params);
    }

    updateParams(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return params[this.modelMapper.modelPropertyName];
    }

    /** 					
     * Parses deleteByUser user profile acl route which can be expanded with additional options. Supported items are: 					
     * - `id` - Id of the user profile resource. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified user and user profile resource. 					
     * - `user` - A value which uniquely identifies user for which ACL policy needs to be removed.										
     * @method 
     * @param profileId User profile id which uniquely identifies user profile resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user profile resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update" 
     * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
     * @param data ACL policy object used to delete specified ACL policy resource.      					
     * @example baasicUserProfileACLRouteDefinition.deleteByUser({ id: '<profile-id>', accessAction: '<access-action>', user: '<username>' }); 					
     **/
    deleteByUser(profileId: string, action: string, user: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.profileId = profileId;
        params.user = user;
        params.accessAction = action;
        return super.parse('profiles/{id}/acl/actions/{accessAction}/users/{user}/').expand(params);
    }

    /** 					
     * Parses deleteByUser user profile acl route which can be expanded with additional options. Supported items are: 					
     * - `id` - Id of the user profile. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified role and user profile resource. 					
     * - `role` - A value which uniquely identifies role for which ACL policy needs to be removed.										
     * @method
     * @param profileId User profile id which uniquely identifies user profile resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user profile resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
     * @param data  ACL policy object used to delete specified ACL policy resource.      					
     * @example baasicUserProfileACLRouteDefinition.deleteByRole.expand({ id: '<profile-id>', accessAction: '<access-action>', role: '<role-name>' }); 					
     **/
    deleteByRole(profileId: string, action: string, role: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.profileId = profileId;
        params.role = role;
        params.accessAction = action;
        return super.parse('profiles/{id}/acl/actions/{accessAction}/roles/{role}/').expand(params);
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */