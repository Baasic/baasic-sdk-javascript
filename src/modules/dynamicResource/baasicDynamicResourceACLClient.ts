/**  
 * @module baasicDynamicResourceACLClient  
 * @description Baasic Dynamic Resource ACL Client provides an easy way to consume Baasic Dynamic Resource REST API end-points. In order to obtain needed routes `baasicDynamicResourceACLClient` uses `baasicDynamicResourceACLRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IACLPolicy } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicDynamicResourceACLRouteDefinition, TYPES as dynamicResourceTypes } from 'modules/dynamicResource';
import { IDynamicACLOptions } from 'modules/dynamicResource/contracts';

@injectable()
export class BaasicDynamicResourceACLClient {

    constructor(
        @inject(dynamicResourceTypes.BaasicDynamicResourceACLRouteDefinition) protected baasicDynamicResourceACLRouteDefinition: BaasicDynamicResourceACLRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified dynamic resource.                     
     * @method
     * @param options Options object.                           
     * @example baasicDynamicResourceACLClient.get({id: '<dynamic-resource-id>', schemaName: '<schema-name>'})
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/
    get(options: IDynamicACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.baasicApiClient.get(this.baasicDynamicResourceACLRouteDefinition.get(options));
    }

    /**                    
     * Returns a promise that is resolved once the update acl action has been performed; this action creates new ACL policy for the specified dynamic resource.                     
     * @method
     * @param options Options object.                        
     * @example baasicDynamicResourceACLClient.update({id: '<dynamic-resource-id>', schemaName: '<schema-name>'})
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    }); 				    
     **/
    update(options: IDynamicACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.baasicApiClient.put<IACLPolicy[]>(this.baasicDynamicResourceACLRouteDefinition.update(options), this.baasicDynamicResourceACLRouteDefinition.updateParams(options));
    }

    /**                     
     * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and dynamic resource.
     * @method
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and dynamic resource. 
     *               Supported Values: 
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param user Username which uniquely identifies user for which ACL policy needs to be removed.
     * @param data ACL Policy whose security privileges need to be retrieved and updated.
     * @example // dynamicResource is a resource previously fetched using get action.					
                    baasicDynamicResourceACLClient.removeByUser('<access-action>', '<username>', dynamicResource)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				    
     **/
    removeByUser(action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicDynamicResourceACLRouteDefinition.deleteByUser(action, user, data));
    }

    /**                     
     * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and dynamic resource.                     
     * @method
     * @param action Action abbreviation which identifies ACL policy assigned to the specified role and dynamic resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param role Role's name which uniquely identifies role for which ACL policy needs to be removed.
     * @param data ACL Policy whose security privileges need to be retrieved and updated.                     
     * @example // dynamicResource is a resource previously fetched using get action. 
                    baasicDynamicResourceACLClient.removeByRole('<access-action>', '<role-name>', dynamicResource)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				    
     **/
    removeByRole(action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicDynamicResourceACLRouteDefinition.deleteByRole(action, role, data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */