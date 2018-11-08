/* globals module */
/**  
 * @module meteringACLRoute  
 * @description Baasic Metering ACL Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering ACL Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IACLOptions, IACLPolicy } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class MeteringACLRoute extends BaseRoute {

    public readonly getRoute: string = 'metering/data/{id}/acl/{?fields}';

    public readonly updateRoute: string = 'metering/data/{id}/acl/{?fields}';

    public readonly deleteByUserRoute: string = 'metering/data/{id}/acl/actions/{accessAction}/users/{user}/';

    public readonly deleteByRoleRoute: string = 'metering/data/{id}/acl/actions/{accessAction}/roles/{role}/';

    constructor(@inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /** 					
     * Parses get metering acl route; this URI template should be expanded with the Id of the metering.										
     * @method    					
     * @param options ACL options object.
     * @example meteringACLRoute.get({id: '<id>'}); 					
     **/
    get(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.baseCreate(this.getRoute, params);
    }

    /** 					
     * Parses update metering acl route; this URI template should be expanded with the Id of the metering.										
     * @method 
     * @param options ACL options object.   					
     * @example meteringACLRoute.update({id: '<id>'}); 					
     **/
    update(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.baseCreate(this.updateRoute, params);
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
     * @example meteringACLRoute.deleteByUser({    
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
        return super.baseCreate(this.deleteByUserRoute, params);
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
     * @example meteringACLRoute.deleteByRole({ id: '<id>', accessAction: '<access-action>', role: '<role-name>'}); 					
     **/
    deleteByRole(id: string, action: string, role: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.id = id;
        params.role = role;
        params.accessAction = action;
        return super.baseCreate(this.deleteByRoleRoute, params);
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