/**  
 * @module baasicDynamicSchemaClient  
 * @description  Dynamic Schema Client provides an easy way to consume  Dynamic Schema REST API end-points. In order to obtain needed routes `baasicDynamicSchemaClient` uses `baasicDynamicSchemaRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { DynamicSchemaRouteDefinition, TYPES as dynamicResourceTypes } from 'modules/dynamicResource';
import { IResourceSchema } from 'modules/dynamicResource/contracts';

@injectable()
export class DynamicSchemaClient {

    /**                 
     * Provides direct access to `baasicDynamicSchemaRouteDefinition`.                 
     * @method                        
     * @example baasicDynamicSchemaClient.routeDefinition.get();                 
     **/
    get routeDefinition(): DynamicSchemaRouteDefinition {
        return this.baasicDynamicSchemaRouteDefinition;
    }

    constructor(
        @inject(dynamicResourceTypes.DynamicSchemaRouteDefinition) protected baasicDynamicSchemaRouteDefinition: DynamicSchemaRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of dynamic resource schemas matching the given criteria.                  
     * @method
     * @param options Options object.                      
     * @example baasicDynamicSchemaClient.find({ 
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IResourceSchema>>> {
        return this.baasicApiClient.get<IQueryModel<IResourceSchema>>(this.baasicDynamicSchemaRouteDefinition.find(options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified dynamic resource schema.                  
     * @method
     * @param name Name of dynamic resource schema which need to be retrieved.
     * @param options Options object.                         
     * @example baasicDynamicSchemaClient.get('<schema-name>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(name: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IResourceSchema>> {
        return this.baasicApiClient.get<IResourceSchema>(this.baasicDynamicSchemaRouteDefinition.get(name, options));
    }

    /**                 
     * Returns a promise that is resolved once the create action has been performed; this action creates a new dynamic resource schema item.                 
     * @method
     * @param data A dynamic resource schema object that needs to be inserted into the system.                        
     * @example baasicDynamicSchemaClient.create({   
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
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                 
     **/
    create(data: IResourceSchema): PromiseLike<IHttpResponse<IResourceSchema>> {
        return this.baasicApiClient.post<IResourceSchema>(this.baasicDynamicSchemaRouteDefinition.create(), this.baasicDynamicSchemaRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update dynamic resource schema action has been performed; this action updates a dynamic resource schema item. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicSchemaRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResourceSchema); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A dynamic schema object used to update specified dynamic resource schema.                         
     * @example // dynamicResourceSchema is a resource previously fetched using get action. 
                    dynamicResourceSchema.description = '<description>'; 
                    baasicDynamicSchemaClient.update(dynamicResourceSchema)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IResourceSchema): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicDynamicSchemaRouteDefinition.update(data), this.baasicDynamicSchemaRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a dynamic resource schema item from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicSchemaRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResourceSchema); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method
     * @param data A dynamic schema object used to delete specified dynamic resource schema.                        
     * @example // dynamicResourceSchema is a resource previously fetched using get action.				 
                    baasicDynamicSchemaClient.remove(dynamicResourceSchema)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IResourceSchema): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicDynamicSchemaRouteDefinition.delete(data));
    }

    /**                 
     * Returns a promise that is resolved once the generate schema action has been performed. Success response returns a schema generated based on the json input.                 
     * @method
     * @param data Unordered collection of key value pairs used to specify dynamic schema definition.                         
     * @example baasicDynamicSchemaService.generate({ 
                    id : '<schema-Id>',   
                    description : '<description>' 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });					    
     **/
    generate(data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicDynamicSchemaRouteDefinition.generate(), this.baasicDynamicSchemaRouteDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */