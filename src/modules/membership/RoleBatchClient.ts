/* globals module */
/**  
 * @module roleBatchClient  
 * @description  Role Batch Client provides an easy way to consume  Role REST API end-points. In order to obtain needed routes `roleBatchClient` uses `roleBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { RoleBatchRoute, TYPES as membershipTypes } from './';
import { IRole } from './contracts';

@injectable()
export class RoleBatchClient {

    /**                 
     * Provides direct access to `roleRoute`.                 
     * @method                        
     * @example roleBatchClient.routeDefinition.get().expand(expandObject);                 
     **/
    get routeDefinition(): RoleBatchRoute {
        return this.roleBatchRoute;
    }

    constructor(
        @inject(membershipTypes.RoleBatchRoute) protected roleBatchRoute: RoleBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the create action has been performed; this action creates a role.         
     * @method
     * @param data A role object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create action has beend performed.                                  
     * @example roleBatchClient.create({ 
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
    create(data: IRole[]): PromiseLike<IHttpResponse<IRole[]>> {
        return this.apiClient.post<IRole[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
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
                    roleBatchClient.update(role)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IRole[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
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
                    roleBatchClient.remove(role)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IRole[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(), undefined, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
*/