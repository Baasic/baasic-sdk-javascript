/**  
 * @module dynamicResourceACLRoute  
 * @description Baasic Dynamic Resource ACL Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Dynamic Resource ACL Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IACLPolicy } from 'common/contracts';
import { IDynamicACLOptions } from 'modules/dynamicResource/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class DynamicResourceACLRoute extends BaseRoute {

    public readonly getRoute: string = 'resources/{schemaName}/{id}/acl/{?fields}';

    public readonly updateRoute: string = 'resources/{schemaName}/{id}/acl/{?fields}';

    public readonly deleteByUserRoute: string = 'resources/{schemaName}/{id}/acl/actions/{accessAction}/users/{user}/';

    public readonly deleteByRoleRoute: string = 'resources/{schemaName}/{id}/acl/actions/{accessAction}/roles/{role}/';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /** 					
     * Parses get acl route; this URI template should be expanded with the Id of the dynamic resource and name of the dynamic resource schema.										
     * @method
     * @param options Query resource options object.       					
     * @example dynamicResourceACLRoute.get(options)               					
     **/
    get(options: IDynamicACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.baseCreate(this.getRoute, params);
    }

    /** 					
     * Parses update acl route; this URI template should be expanded with the Id of the dynamic resource and name of the dynamic resource schema.								
     * @method
     * @param options Options object.       					
     * @example dynamicResourceACLRoute.update(options)					
     **/
    update(options: IDynamicACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.baseCreate(this.updateRoute, options);
    }

    /** 					
     * Parses deleteByUser acl route which can be expanded with additional options. Supported items are: 					
     * - `schemaName` - Name of the dynamic resource schema. 					
     * - `id` - Id of the dynamic resource. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified user and dynamic resource item. 					
     * - `user` - A value which uniquely identifies user for which ACL policy needs to be removed.										
     * @method
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and dynamic resource item.
     * @param username A value which uniquely identifies user for which ACL policy needs to be removed.	
     * @param data ACL Policy object used to perform delete action.       					
     * @example dynamicResourceACLRoute.deleteByUser(action, username, data);					
     **/
    deleteByUser(action: string, username: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.user = username;
        params.accessAction = action;
        return super.baseCreate(this.deleteByUserRoute, params);
    }

    /** 					
     * Parses deleteByRole acl route which can be expanded with additional options. Supported items are: 					
     * - `schemaName` - Name of the dynamic resource schema. 					
     * - `id` - Id of the dynamic resource. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified role and dynamic resource item. 					
     * - `role` - A value which uniquely identifies role for which ACL policy needs to be removed.										
     * @method
     * @param action Action abbreviation which identifies ACL policy assigned to the specified role and dynamic resource item.
     * @param role A value which uniquely identifies role for which ACL policy needs to be removed.
     * @param data ACLPolicy object used to perform delete action. 					
     * @example dynamicResourceACLRoute.deleteByRole(action, role, data)					
     **/
    deleteByRole(action: string, role: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.role = role;
        params.accessAction = action;
        return super.baseCreate(this.deleteByRoleRoute, params);
    }

    updateParams(options: IDynamicACLOptions): any {
        let params = this.utility.extend({}, options);
        return params[this.modelMapper.modelPropertyName];
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */