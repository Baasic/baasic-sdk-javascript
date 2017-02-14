/* globals module */ 
/**  
 * @module baasicRoleClient  
 * @description Baasic Role Client provides an easy way to consume Baasic Role REST API end-points. In order to obtain needed routes `baasicRoleClient` uses `baasicRoleRouteDefinition`. 
 */

import { IBaasicQueryModel, IOptions } from 'contracts';
import { BaasicRoleRouteDefinition } from 'membership';
import { IRole } from 'membership/contracts';
import { ModelMapper } from '..';

export class BaasicRoleClient {

    /**                 
     * Provides direct access to `baasicRoleRouteDefinition`.                 
     * @method                        
     * @example baasicRoleClient.routeDefinition.get().expand(expandObject);                 
     **/ 
    get routeDefinition(): BaasicRoleRouteDefinition {
        return this.baasicRoleRouteDefinition;
    }
    
    constructor(
        private modelMapper: ModelMapper,
        private baasicRoleRouteDefinition: BaasicRoleRouteDefinition) {}

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of role resources matching the given criteria. 
     * @param options query resource options object 
     * @returns A promise that is resolved once the find action has beend performed.                
     * @method                         
     * @example baasicRoleClient.find({   
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
    find(options: IOptions): Promise<IBaasicQueryModel<IRole>> {
        return this.baasicApiHttp.get(this.baasicRoleRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified role resource.    
     * @param id role unique indentifer.
     * @param options query resource options object.
     * @returns A promise that is resolved once the get action has been performed.              
     * @method                         
     * @example baasicRoleClient.get('<role-id>')
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                  
     **/ 
    get(id: string, options: IOptions): Promise<IRole> {
        return this.baasicApiHttp.get(this.baasicRoleRouteDefinition.get().expand(this.modelMapper.getParams(id, options)));
    }

    /**                  
     * Returns a promise that is resolved once the create action has been performed; this action creates a role. 
     * @param data A role object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create action has beend performed.                 
     * @method                         
     * @example baasicRoleClient.create({ 
                    description : '<description>',   
                    name : '<name>' 
                })
                .success(function (data) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    create(data: IRole): Promise<IRole> {
        return this.baasicApiHttp.post(this.baasicRoleRouteDefinition.create().expand({}), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**                  
     * Returns a promise that is resolved once the update role action has been performed; this action updates a role. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicRoleClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(role); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data A role object used to update specified role resource.
     * @returns A promise that is resolved once the update role action has been performed.             
     * @method                         
     * @example // role is a resource previously fetched using get action. 
                    role.name = '<new-name>'; 
                    baasicRoleClient.update(role)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IRole): Promise<IRole> {
        return this.baasicApiHttp.put(this.baasicRoleRouteDefinition.update(), params[this.baasicConstants.modelPropertyName]);
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
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/				
    remove(data: IRole): Promise<void> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicRoleRouteDefinition.delete(params));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/