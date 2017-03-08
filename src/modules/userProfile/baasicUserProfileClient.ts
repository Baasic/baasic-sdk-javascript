/* globals module */
/**  
 * @module baasicUserProfileClient  
 * @description Baasic User Profile Client provides an easy way to consume Baasic User Profile REST API end-points. In order to obtain needed routes `baasicUserProfileClient` uses `baasicUserProfileRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import {
    BaasicUserProfileACLClient,
    BaasicUserProfileRouteDefinition,
    BaasicUserEducationClient,
    BaasicUserProfileAvatarClient,
    BaasicUserSkillClient,
    BaasicUserWorkClient,
    TYPES as userProfileTypes
} from 'modules/userProfile';
import { IUserProfile } from 'modules/userProfile/contracts';

@injectable()
export class BaasicUserProfileClient {

    get acl(): BaasicUserProfileACLClient {
        return this.baasicUserProfileACLClient;
    }

    get routeDefinition(): BaasicUserProfileRouteDefinition {
        return this.baasicUserProfileRouteDefinition;
    }

    get education(): BaasicUserEducationClient {
        return this.baasicUserEducationClient;
    }
    get avatar(): BaasicUserProfileAvatarClient {
        return this.baasicUserProfileAvatarClient;
    }
    get skill(): BaasicUserSkillClient {
        return this.baasicUserSkillClient;
    }
    get work(): BaasicUserWorkClient {
        return this.baasicUserWorkClient;
    }

    constructor(
        @inject(userProfileTypes.BaasicUserProfileACLClient) protected baasicUserProfileACLClient: BaasicUserProfileACLClient,
        @inject(userProfileTypes.BaasicUserProfileRouteDefinition) protected baasicUserProfileRouteDefinition: BaasicUserProfileRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient,

        @inject(userProfileTypes.BaasicUserEducationClient) protected baasicUserEducationClient: BaasicUserEducationClient,
        @inject(userProfileTypes.BaasicUserProfileAvatarClient) protected baasicUserProfileAvatarClient: BaasicUserProfileAvatarClient,
        @inject(userProfileTypes.BaasicUserSkillClient) protected baasicUserSkillClient: BaasicUserSkillClient,
        @inject(userProfileTypes.BaasicUserWorkClient) protected baasicUserWorkClient: BaasicUserWorkClient,
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user profile resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                          
     * @example userProfileClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IUserProfile>> {
        return this.baasicApiClient.get(this.baasicUserProfileRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the user profile resource.                 
     * @method 
     * @param id User profile id which uniquely identifies user profile resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                       
     * @example baasicUserProfileClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserProfile>> {
        return this.baasicApiClient.get(this.baasicUserProfileRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user profile action has been performed; this action creates a new user profile resource.                  
     * @method
     * @param data An user profile object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user profile action has been performed.                         
     * @example baasicUserProfileClient.create({   
                    firstName : '<first-name>',   
                    lastName : '<last-name>',   
                    displayName: '<nick-name>' 
                }.then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    create(data: IUserProfile): PromiseLike<IHttpResponse<IUserProfile>> {
        return this.baasicApiClient.post(this.baasicUserProfileRouteDefinition.create(), this.baasicUserProfileRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update user profile action has been performed; this action updates a user profile resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserProfileRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(userProfile); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method 
     * @param data An user profile object used to update specified user profile resource.
     * @returns A promise that is resolved once the update user profile action has been performed.                         
     * @example // userProfile is a resource previously fetched using get action. 
                       userProfile.displayName = '<nick-name>'; 
                       baasicUserProfileClient.update(userProfile)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           }); 				
    **/
    update(data: IUserProfile): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.put(this.baasicUserProfileRouteDefinition.update(data), this.baasicUserProfileRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a user profile resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserProfileRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(userProfile); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data An user profile object used to delete specified user profile resource.     
     * @returns A promise that is resolved once the remove action has been performed.                        
     * @example // userProfile is a resource previously fetched using get action.				 
                    baasicUserProfileClient.remove(userProfile)
                        .then(function (data) {   
                            // perform success action here 
                        }, 
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: IUserProfile): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicUserProfileRouteDefinition.delete(data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd 
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */