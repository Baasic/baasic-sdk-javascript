/* globals module */
/**  
 * @module filesACLClient  
 * @description  Files ACL Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IACLOptions, IACLPolicy } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { FilesACLRoute, TYPES as filesTypes } from './';

@injectable()
export class FilesACLClient {

    get routeDefinition(): FilesACLRoute {
        return this.filesACLRoute;
    }

    constructor(
        @inject(filesTypes.FilesACLRoute) protected filesACLRoute: FilesACLRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified file resource.                     
     * @method
     * @param options ACL options object.
     * @returns A promise that is resolved once the get action has been performed.                           
     * @example filesACLClient.get({id: '<file-id>'})
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    get(options?: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.apiClient.get(this.routeDefinition.get(options));
    }

    /**                     
     * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified file resource.                     
     * @method
     * @param options An ACL policy object that needs to be inserted into the system. This object specifies parameters necessary for establishing user and/or role set of rights.                          
     * @example let options = {id : '<file-id>'}; 
                let aclObj =  {  actionId: '<action-id>',  roleId: '<role-id>',  userId: '<user-id>' }; 
                options[baasicConstants.modelPropertyName] = aclObj; 
                filesACLClient.update(options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here
                    }); 				    
     **/
    update(options: IACLOptions[]): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.apiClient.put<IACLPolicy[]>(this.routeDefinition.update(options), this.routeDefinition.updateParams(options));
    }

    /**                     
     * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and file resource.                     
     * @method
     * @param id File id which uniquely identifies file resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and file resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
     * @returns A promise that is resolved once the removeByUser action has been performed.             
     * @example filesACLClient.removeByUser('<file-id>', '<access-action>', '<username>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByUser(id: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.filesACLRoute.deleteByUser(id, action, user, data));
    }

    /**                     
     * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and file resource.                     
     * @method                         
     * @example filesACLClient.removeByRole('<file-id>', '<access-action>', '<role-name>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByRole(id: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.filesACLRoute.deleteByRole(id, action, role, data));
    }
}

/**  
 * @overview 
***Notes:**  
- Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
- All end-point objects are transformed by the associated route service. 
*/