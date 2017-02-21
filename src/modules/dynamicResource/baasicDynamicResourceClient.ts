/**  
 * @module baasicDynamicResourceClient  
 * @description Baasic Dynamic Resource Client provides an easy way to consume Baasic Dynamic Resource REST API end-points. In order to obtain needed routes `baasicDynamicResourceClient` uses `baasicDynamicResourceRouteDefinition`. 
 */

import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicDynamicResourceACLClient, BaasicDynamicResourceRouteDefinition } from 'modules/dynamicResource';
import { IDynamicObject } from 'modules/dynamicResource/contracts';

export class BaasicDynamicResourceClient {

    /**                 
     * Provides direct access to `baasicDynamicResourceRouteDefinition`.                 
     * @method                        
     * @example baasicDynamicResourceClient.routeDefinition.get(schemaName, id, options)                 
     **/
    get routeDefinition(): BaasicDynamicResourceRouteDefinition {
        return this.baasicDynamicResourceRouteDefinition;
    }

    get acl(): BaasicDynamicResourceACLClient {
        return this.baasicDynamicResourceACLClient;
    }
    
    constructor(
        protected baasicDynamicResourceRouteDefinition: BaasicDynamicResourceRouteDefinition,
        protected baasicDynamicResourceACLClient: BaasicDynamicResourceACLClient
        ) {}

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of dynamic resources matching the given criteria.                  
     * @method
     * @param schemaName Name of dynamic resource schema whose dynamic resources need to be retrieved.
     * @param options Query resource options object.
     * @returns Promise that is resolved once the find action has been performed.               
     * @example baasicDynamicResourceClient.find('<schema-name>', {   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    search : '<search-phrase>' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                    
     **/ 				
    find(schemaName: string, options: IOptions): Promise<IBaasicQueryModel<IDynamicObject>> {
        return this.baasicApiHttp.get(this.baasicDynamicResourceRouteDefinition.find(schemaName, options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified dynamic resource.                  
     * @method                         
     * @example baasicDynamicResourceClient.get('<schema-name>', '<dynamic-resource-id>')
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/ 				    
    get(schemaName: string, id: string, options: IOptions): Promise<IDynamicObject> {
        return this.baasicApiHttp.get(this.baasicDynamicResourceRouteDefinition.get(id, schemaName, options));
    }

    /**                  
     * Returns a promise that is resolved once the create dynamic resource action has been performed; this action creates a new dynamic resource item.                  
     * @method
     * @param schemaName Name of dynamic resource schema that needs to be updated with new dynamic resource.
     * @param data A JSON object that needs to be inserted into the system as dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.                         
     * @example baasicDynamicResourceClient.create('<schema-name>', {   
                    id : '',   
                    description : '<description>'  
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    create(schemaName: string, data: any): Promise<IDynamicObject> {
        return this.baasicApiHttp.post(this.baasicDynamicResourceRouteDefinition.create(schemaName, data), this.baasicDynamicResourceRouteDefinition.createParams(schemaName, data));
    }

    /**                  
     * Returns a promise that is resolved once the update action has been performed; this action updates a dynamic resource item. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicResourceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResource); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A JSON object used to update specified dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.
     * @param options Options object.                        
     * @example // dynamicResource is a resource previously fetched using get action. 
                    dynamicResource.description = '<description>'; 
                    baasicDynamicResourceClient.update(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				
     **/	
    update(data: any, options: IOptions): Promise<void> {
        return this.baasicApiHttp.put(this.baasicDynamicResourceRouteDefinition.update(data, options), this.baasicDynamicResourceRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the patch action has been performed; this action patches an existing dynamic resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicResourceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(dynamicResource); 
     * let uri = params['model'].links('patch').href; 
     * ```                  
     * @method
     * @param data JSON object used for partial update of specified dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.
     * @param options Options object.                         
     * @example // dynamicResource is a resource previously fetched using get action. 
                    dynamicResource.description = '<new-description>'; 
                    dynamicResource.newField = '<newfield-value>'; 
                    baasicDynamicResourceClient.patch(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                        
                    }); 				
     **/				
    patch(data: any, options: IOptions): Promise<any> {
        return this.baasicApiHttp.patch(this.baasicDynamicResourceRouteDefinition.patch(data, options), this.baasicDynamicResourceRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a dynamic resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicResourceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResource); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data JSON object used to delete specified dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.                         
     * @example // dynamicResource is a resource previously fetched using get action.				 
                    baasicDynamicResourceClient.remove(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });						
     **/					
    remove(data: any, options: IOptions): Promise<any> {
        return this.baasicApiHttp.delete(this.baasicDynamicResourceRouteDefinition.delete(data, options));
    }
}