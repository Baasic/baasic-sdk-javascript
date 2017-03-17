/* globals module */
/**  
 * @module userProfileACLClient  
 * @description  User Profile ACL Client provides an easy way to consume  User Profile REST API end-points. In order to obtain needed routes `userProfileACLClient` uses `userProfileACLRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IACLOptions, IACLPolicy } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { UserProfileACLRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';

@injectable()
export class UserProfileACLClient {

    get routeDefinition(): UserProfileACLRouteDefinition {
        return this.userProfileACLRouteDefinition;
    }

    constructor(
        @inject(userProfileTypes.UserProfileACLRouteDefinition) protected userProfileACLRouteDefinition: UserProfileACLRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified user profile resource.                     
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                          
     * @example userProfileACLClient.get({id: '<profile-id>'})
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    get(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.apiClient.get<IACLPolicy[]>(this.userProfileACLRouteDefinition.get(options));
    }

    /**                     
     * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified user profile resource.                     
     * @method
     * @param options ACL options object.
     * @returns A promise that is resolved once the update acl action has been performed.                          
     * @example let options = {id : '<profile-id>'}; 
                let aclObj =  {  actionId: '<action-id'>,  roleId: '<roleId>',  userId: '<userId>' }; 
                options[baasicConstants.modelPropertyName] = aclObj; 
                userProfileACLClient.update(options)
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    update(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.apiClient.put<IACLPolicy[]>(this.userProfileACLRouteDefinition.update(options), this.userProfileACLRouteDefinition.updateParams(options));
    }

    /**                     
     * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and user profile resource.                     
     * @method
     * @param profileId User profile id which uniquely identifies user profile resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user profile resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update" 
     * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
     * @param data ACL policy object used to delete specified ACL policy resource.
     * @returns A promise that is resolved once the removeByUser action has been performed.                         
     * @example userProfileACLClient.removeByUser('<profile-id>', '<access-action>', '<username>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByUser(profileId: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.userProfileACLRouteDefinition.deleteByUser(profileId, action, user, data));
    }

    /**                     
     * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and user profile resource.                     
     * @method 
     * @param profileId User profile id which uniquely identifies user profile resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user profile resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
     * @param data  ACL policy object used to delete specified ACL policy resource.
     * @returns A promise that is resolved once the removeByRole action has been performed.                           
     * @example userProfileACLClient.removeByRole('<profile-id>', '<access-action>', '<role-name>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByRole(profileId: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.userProfileACLRouteDefinition.deleteByRole(profileId, action, role, data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */