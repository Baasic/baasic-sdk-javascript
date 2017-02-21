/**  
 * @module baasicDynamicResourceACLRouteDefinition  
 * @description Baasic Dynamic Resource ACL Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Dynamic Resource ACL Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper } from 'common';
import { IACLOptions } from 'modules/dynamicResource/contracts';
import { extend } from 'common';

export class BaasicDynamicResourceACLRouteDefinition extends BaasicBaseRouteDefinition {
    

    constructor(protected modelMapper: ModelMapper) { super(modelMapper); }

    /** 					
     * Parses get acl route; this URI template should be expanded with the Id of the dynamic resource and name of the dynamic resource schema.										
     * @method
     * @param options Query resource options object.       					
     * @example baasicDynamicResourceACLRouteDefinition.get(options)               					
     **/ 				
    get(options: IACLOptions): any {
        let params = extend({}, options);
        return super.parse('resources/{schemaName}/{id}/acl/{?fields}').expand(params);
    }

    /** 					
     * Parses update acl route; this URI template should be expanded with the Id of the dynamic resource and name of the dynamic resource schema.								
     * @method
     * @param options Options object.       					
     * @example baasicDynamicResourceACLRouteDefinition.update(options)					
     **/
    // data object ??	
    update(options: IACLOptions): any {
        let params = extend({}, options);
        return super.baseUpdate('resources/{schemaName}/{id}/acl/{?fields}', options);
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
     * @param data Dynamic resource object used to perform delete action.       					
     * @example baasicDynamicResourceACLRouteDefinition.deleteByUser(action, username, data);					
     **/
    deleteByUser(action: string, username: string, data: any): any {
        let params = this.modelMapper.removeParams(data);                         
        params.user = username;                         
        params.accessAction = action;
        return super.parse('resources/{schemaName}/{id}/acl/actions/{accessAction}/users/{user}/').expand(params);
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
     * @param data Dynamic Resource object used to perform delete action. 					
     * @example baasicDynamicResourceACLRouteDefinition.deleteByRole(action, role, data)					
     **/ 
    deleteByRole(action: string, role: string, data: any): any {
        let params = this.modelMapper.removeParams(data);
        params.role = role; 
        params.accessAction = action;
        return super.parse('resources/{schemaName}/{id}/acl/actions/{accessAction}/roles/{role}/').expand(params);
    }

    updateParams(options: IACLOptions): any {
        let params = extend({}, options);
        return params[this.baasicConstants.modelPropertyName];
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */ 