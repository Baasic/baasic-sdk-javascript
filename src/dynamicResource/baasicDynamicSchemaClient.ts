/**  
 * @module baasicDynamicSchemaClient  
 * @description Baasic Dynamic Schema Client provides an easy way to consume Baasic Dynamic Schema REST API end-points. In order to obtain needed routes `baasicDynamicSchemaClient` uses `baasicDynamicSchemaRouteDefinition`. 
 */

import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicDynamicSchemaRouteDefinition } from 'dynamicResource';
import { IResourceSchema } from 'dynamicResource/contracts'; 
import { ModelMapper } from '..';

export class BaasicDynamicSchemaClient {
    
    /**                 
     * Provides direct access to `baasicDynamicSchemaRouteDefinition`.                 
     * @method                        
     * @example baasicDynamicSchemaClient.routeService.get().expand(expandObject);                 
     **/                
    get routeDefinition(): BaasicDynamicSchemaRouteDefinition {
        return this.baasicDynamicSchemaRouteDefinition;
    }
    
    constructor(
        private modelMapper: ModelMapper,
        private baasicDynamicSchemaRouteDefinition: BaasicDynamicSchemaRouteDefinition) {}

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of dynamic resource schemas matching the given criteria.                  
     * @method                         
     * @example baasicDynamicSchemaClient.find({ 
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    search : '<search-phrase>' 
                })
                .success(function (collection) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                     
     **/
    find(options: IOptions): Promise<IBaasicQueryModel<IResourceSchema>> {
        return this.baasicApiHttp.get(this.baasicDynamicSchemaRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified dynamic resource schema.                  
     * @method                         
     * @example baasicDynamicSchemaClient.get('<schema-name>')
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/ 				
    get(name: string, options: IOptions): Promise<IResourceSchema> {
        return this.baasicApiHttp.get(this.baasicDynamicSchemaRouteDefinition.get().expand(this.modelMapper.getParams(name, options, 'name')));
    }

    /**                 
     * Returns a promise that is resolved once the create action has been performed; this action creates a new dynamic resource schema item.                 
     * @method                        
     * @example baasicDynamicSchemaDefinition.create({   
                    schema : {  
                        type : 'object',     
                        properties : { 
                            id : {
                                title : '<unique-identifier-field>', 
                                readonly : true, 
                                hidden : true, 
                                type : 'string' 
                            },
                            description : {         
                                type: string       
                            }     
                        }   
                    },   
                    name : '<schema-name>',   
                    description : '<description>',   
                    enforceSchemaValidation : true 
                })
                .success(function (data) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                 
     **/
    create(data: IResourceSchema): Promise<IResourceSchema> {
        return this.baasicApiHttp.post(this.baasicDynamicSchemaRouteDefinition.create().expand({}), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**                  
     * Returns a promise that is resolved once the update dynamic resource schema action has been performed; this action updates a dynamic resource schema item. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicSchemaRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResourceSchema); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // dynamicResourceSchema is a resource previously fetched using get action. 
                    dynamicResourceSchema.description = '<description>'; 
                    baasicDynamicSchemaClient.update(dynamicResourceSchema)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/	
    update(data: IResourceSchema): Promise<void> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicDynamicSchemaRouteDefinition.update(params), params[baasicConstants.modelPropertyName]);
    }

    /**                 
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a dynamic resource schema item from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicSchemaRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResourceSchema); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method                        
     * @example // dynamicResourceSchema is a resource previously fetched using get action.				 
                    baasicDynamicSchemaClient.remove(dynamicResourceSchema)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/					
    remove(data: IResourceSchema): Promise<void> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicDynamicSchemaRouteDefinition.delete(params));
    }

    /**                 
     * Returns a promise that is resolved once the generate schema action has been performed. Success response returns a schema generated based on the json input.                 
     * @method                        
     * @example baasicDynamicSchemaService.generate({ 
                    id : '<schema-Id>',   
                    description : '<description>' 
                })
                .success(function (data) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });					    
     **/					
    generate(data: any): Promise<any> {
        return this.baasicApiHttp.post(this.baasicDynamicSchemaRouteDefinition.generate().expand({}), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    } 
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */