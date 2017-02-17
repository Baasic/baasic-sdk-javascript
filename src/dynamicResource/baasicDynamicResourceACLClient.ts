/**  
 * @module baasicDynamicResourceACLClient  
 * @description Baasic Dynamic Resource ACL Client provides an easy way to consume Baasic Dynamic Resource REST API end-points. In order to obtain needed routes `baasicDynamicResourceACLClient` uses `baasicDynamicResourceACLRouteDefinition`. 
 */

import { BaasicDynamicResourceACLRouteDefinition } from 'dynamicResource';
import { IACLOptions, IACLPolicy, INewACLPolicy } from 'dynamicResource/contracts';

export class BaasicDynamicResourceACLClient {

    constructor(protected baasicDynamicResourceACLRouteDefinition: BaasicDynamicResourceACLRouteDefinition) {}

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified dynamic resource.                     
     * @method                           
     * @example baasicDynamicResourceACLClient.get({id: '<dynamic-resource-id>', schemaName: '<schema-name>'})
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/	
    get(options: IACLOptions): Promise<IACLPolicy[]> {
        return this.baasicApiHttp.get(this.baasicDynamicResourceACLRouteDefinition.get(options));
    }

    /**                    
     * Returns a promise that is resolved once the update acl action has been performed; this action creates new ACL policy for the specified dynamic resource.                     
     * @method                        
     * @example baasicDynamicResourceACLClient.update({id: '<dynamic-resource-id>', schemaName: '<schema-name>'})
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    }); 				    
     **/	
    update(options: IACLOptions): Promise<IACLOptions> {
        return this.baasicApiHttp.put(this.baasicDynamicResourceACLRouteDefinition.update(options), this.baasicDynamicResourceACLRouteDefinition.updateParams(options));
    }

    /**                     
     * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and dynamic resource.
     * @method                       
     * @example // dynamicResource is a resource previously fetched using get action.					
                    baasicDynamicResourceACLClient.removeByUser('<access-action>', '<username>', dynamicResource)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				    
     **/						
    removeByUser(action: string, user: string, data: any): Promise<void> {
        return this.baasicApiHttp.delete(this.baasicDynamicResourceACLRouteDefinition.deleteByUser(action, user, data));
    }

    /**                     
     * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and dynamic resource.                     
     * @method                      
     * @example // dynamicResource is a resource previously fetched using get action. 
                    baasicDynamicResourceACLClient.removeByRole('<access-action>', '<role-name>', dynamicResource)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				    
     **/	
    removeByRole(action: string, role: string, data: any): Promise<any> {
        return this.baasicApiHttp.delete(this.baasicDynamicResourceACLRouteDefinition.deleteByRole(action, role, data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */