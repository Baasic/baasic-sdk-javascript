/* globals module */
/**  
 * @module baasicRoleClient  
 * @description  Role Client provides an easy way to consume  Role REST API end-points. In order to obtain needed routes `baasicRoleClient` uses `baasicRoleRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { RoleRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { IRole } from 'modules/membership/contracts';

@injectable()
export class RoleClient {

    /**                 
     * Provides direct access to `baasicRoleRouteDefinition`.                 
     * @method                        
     * @example baasicRoleClient.routeDefinition.get().expand(expandObject);                 
     **/
    get routeDefinition(): RoleRouteDefinition {
        return this.baasicRoleRouteDefinition;
    }

    constructor(
        @inject(membershipTypes.RoleRouteDefinition) protected baasicRoleRouteDefinition: RoleRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of role resources matching the given criteria.              
     * @method
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the find action has beend performed.                            
     * @example baasicRoleClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRole>>> {
        return this.baasicApiClient.get<IQueryModel<IRole>>(this.baasicRoleRouteDefinition.find(options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified role resource.    
     * @param id Role unique indentifer.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.              
     * @method                         
     * @example baasicRoleClient.get('<role-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                  
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRole>> {
        return this.baasicApiClient.get<IRole>(this.baasicRoleRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create action has been performed; this action creates a role.         
     * @method
     * @param data A role object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create action has beend performed.                                  
     * @example baasicRoleClient.create({ 
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
        return this.baasicApiClient.post<IRole>(this.baasicRoleRouteDefinition.create(), this.baasicRoleRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update role action has been performed; this action updates a role. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicRoleClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(role); 
     * let uri = params['model'].links('put').href; 
     * ```        
     * @method
     * @param data A role object used to update specified role resource.
     * @returns A promise that is resolved once the update role action has been performed.                              
     * @example // role is a resource previously fetched using get action. 
                    role.name = '<new-name>'; 
                    baasicRoleClient.update(role)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IRole): PromiseLike<IHttpResponse<IRole>> {
        return this.baasicApiClient.put(this.baasicRoleRouteDefinition.update(data), this.baasicRoleRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove role action has been performed. This action will remove a role from the system, if completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicRoleClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(role); 
     * let uri = params['model'].links('delete').href; ```  
     * @param data A role object used to delete specified role resource.
     * @returns A promise that is resolved once the remove action has been performed.                
     * @method                         
     * @example // Role is a resource previously fetched using get action.				 
                    baasicRoleClient.remove(role)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IRole): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicRoleRouteDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
*/