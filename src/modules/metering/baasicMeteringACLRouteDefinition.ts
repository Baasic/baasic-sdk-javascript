/* globals module */
/**  
 * @module baasicMeteringACLRouteDefinition  
 * @description Baasic Metering ACL Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering ACL Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IACLOptions, IACLPolicy } from 'common/contracts';
import { injectable, inject } from "inversify";

export class BaasicMeteringACLRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper) { super(modelMapper); }

    /** 					
     * Parses get metering acl route; this URI template should be expanded with the Id of the metering.										
     * @method    					
     * @param options ACL options object.
     * @example baasicMeteringACLRouteDefinition.get({id: '<id>'}); 					
     **/
    get(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.parse('metering/data/{id}/acl/{?fields}').expand(params);
    }

    /** 					
     * Parses update metering acl route; this URI template should be expanded with the Id of the metering.										
     * @method 
     * @param options ACL options object.   					
     * @example baasicMeteringACLRouteDefinition.update({id: '<id>'}); 					
     **/
    update(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.parse('metering/data/{id}/acl/{?fields}').expand(params);
    }

    /** 					
     * Parses deleteByUser metering acl route which can be expanded with additional options. Supported items are: 					
     * - `id` - Id of the metering. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified user and metering resource. 					
     * - `user` - A value which uniquely identifies user for which ACL policy needs to be removed.										
     * @method
     * @param id User metering data id which uniquely identifies user metering data resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user metering data resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"  
     * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
     * @param data ACL Policy object used to delete specified item in the system.      					
     * @example baasicMeteringACLRouteDefinition.deleteByUser({    
                    id: '<id>',    
                    accessAction: '<access-action>',    
                    user: '<username>' 
                }); 					
     **/
    deleteByUser(id: string, action: string, user: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.id = id;
        params.user = user;
        params.accessAction = action;
        return super.parse('metering/data/{id}/acl/actions/{accessAction}/users/{user}/').expand(params);
    }

    /** 					
     * Parses deleteByUser metering acl route which can be expanded with additional options. Supported items are: 					
     * - `id` - Id of the metering. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified role and metering resource. 					
     * - `role` - A value which uniquely identifies role for which ACL policy needs to be removed.										
     * @method
     * @param id User metering data id which uniquely identifies user metering data resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user metering data resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"  
     * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
     * @param data ACL Policy object used to delete specified item in the system.    					
     * @example baasicMeteringACLRouteDefinition.deleteByRole({ id: '<id>', accessAction: '<access-action>', role: '<role-name>'}); 					
     **/
    deleteByRole(id: string, action: string, role: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.id = id;
        params.role = role;
        params.accessAction = action;
        return super.parse('metering/data/{id}/acl/actions/{accessAction}/roles/{role}/').expand(params);
    }

    updateParams(options: IACLOptions) {
        let params = this.utility.extend({}, options);
        return params[this.modelMapper.modelPropertyName];
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