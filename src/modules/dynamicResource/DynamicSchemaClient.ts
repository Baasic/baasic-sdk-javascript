/**  
 * @module dynamicSchemaClient  
 * @description  Dynamic Schema Client provides an easy way to consume  Dynamic Schema REST API end-points. In order to obtain needed routes `dynamicSchemaClient` uses `dynamicSchemaRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { DynamicSchemaRoute, TYPES as dynamicResourceTypes } from 'modules/dynamicResource';
import { IResourceSchema } from 'modules/dynamicResource/contracts';

@injectable()
export class DynamicSchemaClient {

    /**                 
     * Provides direct access to `dynamicSchemaRoute`.                 
     * @method                        
     * @example dynamicSchemaClient.routeDefinition.get();                 
     **/
    get routeDefinition(): DynamicSchemaRoute {
        return this.dynamicSchemaRoute;
    }

    constructor(
        @inject(dynamicResourceTypes.DynamicSchemaRoute) protected dynamicSchemaRoute: DynamicSchemaRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of dynamic resource schemas matching the given criteria.                  
     * @method
     * @param options Options object.                      
     * @example dynamicSchemaClient.find({ 
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
        return this.apiClient.get<IQueryModel<IResourceSchema>>(this.routeDefinition.find(options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified dynamic resource schema.                  
     * @method
     * @param name Name of dynamic resource schema which need to be retrieved.
     * @param options Options object.                         
     * @example dynamicSchemaClient.get('<schema-name>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(name: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IResourceSchema>> {
        return this.apiClient.get<IResourceSchema>(this.dynamicSchemaRoute.get(name, options));
    }

    /**                 
     * Returns a promise that is resolved once the create action has been performed; this action creates a new dynamic resource schema item.                 
     * @method
     * @param data A dynamic resource schema object that needs to be inserted into the system.                        
     * @example dynamicSchemaClient.create({   
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
        return this.apiClient.post<IResourceSchema>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update dynamic resource schema action has been performed; this action updates a dynamic resource schema item. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `dynamicSchemaRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResourceSchema); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A dynamic schema object used to update specified dynamic resource schema.                         
     * @example // dynamicResourceSchema is a resource previously fetched using get action. 
                    dynamicResourceSchema.description = '<description>'; 
                    dynamicSchemaClient.update(dynamicResourceSchema)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IResourceSchema): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a dynamic resource schema item from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `dynamicSchemaRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResourceSchema); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method
     * @param data A dynamic schema object used to delete specified dynamic resource schema.                        
     * @example // dynamicResourceSchema is a resource previously fetched using get action.				 
                    dynamicSchemaClient.remove(dynamicResourceSchema)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IResourceSchema): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
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
        return this.apiClient.post(this.routeDefinition.generate(), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */