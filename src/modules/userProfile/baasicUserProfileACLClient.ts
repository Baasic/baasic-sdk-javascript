/* globals module */
/**  
 * @module baasicUserProfileACLClient  
 * @description Baasic User Profile ACL Client provides an easy way to consume Baasic User Profile REST API end-points. In order to obtain needed routes `baasicUserProfileACLClient` uses `baasicUserProfileACLRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IACLOptions, IACLPolicy } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicUserProfileACLRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';

@injectable()
export class BaasicUserProfileACLClient {

    get routeDefinition(): BaasicUserProfileACLRouteDefinition {
        return this.baasicUserProfileACLRouteDefinition;
    }

    constructor(
        @inject(userProfileTypes.BaasicUserProfileACLRouteDefinition) protected baasicUserProfileACLRouteDefinition: BaasicUserProfileACLRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified user profile resource.                     
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                          
     * @example baasicUserProfileACLClient.get({id: '<profile-id>'})
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    get(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.baasicApiClient.get(this.baasicUserProfileACLRouteDefinition.get(options));
    }

    /**                     
     * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified user profile resource.                     
     * @method
     * @param options ACL options object.
     * @returns A promise that is resolved once the update acl action has been performed.                          
     * @example let options = {id : '<profile-id>'}; 
                let aclObj =  {  actionId: '<action-id'>,  roleId: '<roleId>',  userId: '<userId>' }; 
                options[baasicConstants.modelPropertyName] = aclObj; 
                baasicUserProfileACLClient.update(options)
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    update(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.baasicApiClient.put(this.baasicUserProfileACLRouteDefinition.get(options), this.baasicUserProfileACLRouteDefinition.updateParams(options));
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
     * @example baasicUserProfileACLClient.removeByUser('<profile-id>', '<access-action>', '<username>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByUser(profileId: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicUserProfileACLRouteDefinition.deleteByUser(profileId, action, user, data));
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
     * @example baasicUserProfileACLClient.removeByRole('<profile-id>', '<access-action>', '<role-name>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByRole(profileId: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicUserProfileACLRouteDefinition.deleteByRole(profileId, action, role, data));
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