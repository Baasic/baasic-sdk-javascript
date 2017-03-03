/* globals module */
/**  
 * @module baasicFilesACLRouteDefinition  
 * @description Baasic Files ACL Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IACLOptions, IACLPolicy } from 'common/contracts';
import { injectable, inject } from "inversify";
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class BaasicFilesACLRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /** 					
     * Parses get acl route; this URI template should be expanded with the Id of the file resource.										
     * @method  					
     * @example baasicFilesACLRouteDefinition.get({id: '<file-id>'}); 					
     **/
    get(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.parse('files/{id}/acl/{?fields}').expand(params);
    }

    /** 					
     * Parses update acl route; this URI template should be expanded with the Id of the file resource.										
     * @method    				
     * @example baasicFilesACLRouteDefinition.update({id: '<file-id>'}); 					
     **/
    update(options: IACLOptions[]): any {
        let params = this.utility.extend({}, options);
        return super.parse('files/{id}/acl/{?fields}').expand(params);
    }

    /** 					
     * Parses deleteByUser acl route which can be expanded with additional options. Supported items are: 					
     * - `id` - File id which uniquely identifies file resource whose security privileges need to be retrieved and updated. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified user and file resource. 					
     * - `user` - A value which uniquely identifies user for which ACL policy needs to be removed.										
     * @method
     * @param id File id which uniquely identifies file resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and file resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param user A value that uniquely identifies user for which ACL policy needs to be removed.      					
     * @example baasicFilesACLRouteDefinition.deleteByUser({ id: '<file-id>', accessAction: '<access-action>', user: '<username>' }); 					
     **/
    deleteByUser(id: string, action: string, user: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.id = id;
        params.user = user;
        params.accessAction = action;
        return super.parse('files/{id}/acl/actions/{accessAction}/users/{user}/').expand(params);
    }

    /** 					
     * Parses deleteByUser acl route which can be expanded with additional options. Supported items are: 					
     * - `id` - File id which uniquely identifies file resource whose security privileges need to be retrieved and updated. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified role and file resource. 					
     * - `role` - A value which uniquely identifies role for which ACL policy needs to be removed.										
     * @method 
     * @param id File id which uniquely identifies file resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and file resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param role A value that uniquely identifies role for which ACL policy needs to be removed.				
     * @example baasicFilesACLRouteDefinition.deleteByRole({ id: '<file-id>', accessAction: '<access-action>', role: '<role-name>' }); 					
     **/
    deleteByRole(id: string, action: string, role: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.id = id;
        params.role = role;
        params.accessAction = action;
        return super.parse('files/{id}/acl/actions/{accessAction}/roles/{role}/').expand(params);
    }

    updateParams(data: any): any {
        let params = this.utility.extend({}, data);
        return params[this.modelMapper.modelPropertyName];
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */