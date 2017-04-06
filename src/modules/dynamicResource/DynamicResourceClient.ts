/**  
 * @module dynamicResourceClient  
 * @description  Dynamic Resource Client provides an easy way to consume  Dynamic Resource REST API end-points. In order to obtain needed routes `dynamicResourceClient` uses `dynamicResourceRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions, IQueryOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    DynamicResourceACLClient,
    DynamicResourceRoute,
    DynamicSchemaClient,
    TYPES as dynamicResourceTypes
} from './';
import { IDynamicObject } from './contracts';

@injectable()
export class DynamicResourceClient {

    /**                 
     * Provides direct access to `dynamicResourceRoute`.                 
     * @method                        
     * @example dynamicResourceClient.routeDefinition.get(schemaName, id, options)                 
     **/
    get routeDefinition(): DynamicResourceRoute {
        return this.dynamicResourceRoute;
    }

    get acl(): DynamicResourceACLClient {
        return this.dynamicResourceACLClient;
    }

    get schema(): DynamicSchemaClient {
        return this.dynamicSchemaClient;
    }

    constructor(
        @inject(dynamicResourceTypes.DynamicResourceRoute) protected dynamicResourceRoute: DynamicResourceRoute,
        @inject(dynamicResourceTypes.DynamicResourceACLClient) protected dynamicResourceACLClient: DynamicResourceACLClient,
        @inject(dynamicResourceTypes.DynamicSchemaClient) protected dynamicSchemaClient: DynamicSchemaClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of dynamic resources matching the given criteria.                  
     * @method
     * @param schemaName Name of dynamic resource schema whose dynamic resources need to be retrieved.
     * @param options Query resource options object.
     * @returns Promise that is resolved once the find action has been performed.               
     * @example dynamicResourceClient.find('<schema-name>', {   
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
    find(schemaName: string, options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IDynamicObject>>> {
        return this.apiClient.get<IQueryModel<IDynamicObject>>(this.dynamicResourceRoute.find(schemaName, options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified dynamic resource.                  
     * @method                         
     * @example dynamicResourceClient.get('<schema-name>', '<dynamic-resource-id>')
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(schemaName: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IDynamicObject>> {
        return this.apiClient.get<IDynamicObject>(this.dynamicResourceRoute.get(id, schemaName, options));
    }

    /**                  
     * Returns a promise that is resolved once the create dynamic resource action has been performed; this action creates a new dynamic resource item.                  
     * @method
     * @param schemaName Name of dynamic resource schema that needs to be updated with new dynamic resource.
     * @param data A JSON object that needs to be inserted into the system as dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.                         
     * @example dynamicResourceClient.create('<schema-name>', {   
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
    create(schemaName: string, data: any): PromiseLike<IHttpResponse<IDynamicObject>> {
        return this.apiClient.post<IDynamicObject>(this.routeDefinition.create(schemaName, data), this.routeDefinition.createParams(schemaName, data));
    }

    /**                  
     * Returns a promise that is resolved once the update action has been performed; this action updates a dynamic resource item. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `dynamicResourceRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResource); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A JSON object used to update specified dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.
     * @param options Options object.                        
     * @example // dynamicResource is a resource previously fetched using get action. 
                    dynamicResource.description = '<description>'; 
                    dynamicResourceClient.update(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				
     **/
    update(data: any, options: IQueryOptions): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data, options), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the patch action has been performed; this action patches an existing dynamic resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `dynamicResourceRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
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
                    dynamicResourceClient.patch(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                        
                    }); 				
     **/
    patch(data: any, options: IQueryOptions): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.patch<void>(this.routeDefinition.patch(data, options), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a dynamic resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `dynamicResourceRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResource); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data JSON object used to delete specified dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.                         
     * @example // dynamicResource is a resource previously fetched using get action.				 
                    dynamicResourceClient.remove(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });						
     **/
    remove(data: any, options: IQueryOptions): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.dynamicResourceRoute.delete(data, options));
    }
}