/* globals module */
/**  
 * @module roleClient  
 * @description  Role Client provides an easy way to consume  Role REST API end-points. In order to obtain needed routes `roleClient` uses `roleRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { RoleRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { IRole } from 'modules/membership/contracts';

@injectable()
export class RoleClient {

    /**                 
     * Provides direct access to `roleRouteDefinition`.                 
     * @method                        
     * @example roleClient.routeDefinition.get().expand(expandObject);                 
     **/
    get routeDefinition(): RoleRouteDefinition {
        return this.roleRouteDefinition;
    }

    constructor(
        @inject(membershipTypes.RoleRouteDefinition) protected roleRouteDefinition: RoleRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of role resources matching the given criteria.              
     * @method
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the find action has beend performed.                            
     * @example roleClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IRole>>> {
        return this.apiClient.get<IQueryModel<IRole>>(this.roleRouteDefinition.find(options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified role resource.    
     * @param id Role unique indentifer.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.              
     * @method                         
     * @example roleClient.get('<role-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                  
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRole>> {
        return this.apiClient.get<IRole>(this.roleRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create action has been performed; this action creates a role.         
     * @method
     * @param data A role object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create action has beend performed.                                  
     * @example roleClient.create({ 
                    description : '<description>',   
                    name : '<name>' 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    create(data: IRole): PromiseLike<IHttpResponse<IRole>> {
        return this.apiClient.post<IRole>(this.routeDefinition.create(), this.roleRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update role action has been performed; this action updates a role. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `roleClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(role); 
     * let uri = params['model'].links('put').href; 
     * ```        
     * @method
     * @param data A role object used to update specified role resource.
     * @returns A promise that is resolved once the update role action has been performed.                              
     * @example // role is a resource previously fetched using get action. 
                    role.name = '<new-name>'; 
                    roleClient.update(role)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IRole): PromiseLike<IHttpResponse<IRole>> {
        return this.apiClient.put(this.routeDefinition.update(data), this.roleRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove role action has been performed. This action will remove a role from the system, if completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `roleClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(role); 
     * let uri = params['model'].links('delete').href; ```  
     * @param data A role object used to delete specified role resource.
     * @returns A promise that is resolved once the remove action has been performed.                
     * @method                         
     * @example // Role is a resource previously fetched using get action.				 
                    roleClient.remove(role)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IRole): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.delete(this.roleRouteDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
*/