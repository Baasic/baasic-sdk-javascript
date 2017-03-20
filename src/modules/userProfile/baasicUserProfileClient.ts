/* globals module */
/**  
 * @module userProfileClient  
 * @description  User Profile Client provides an easy way to consume  User Profile REST API end-points. In order to obtain needed routes `userProfileClient` uses `userProfileRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    UserProfileACLClient,
    UserProfileRouteDefinition,
    UserEducationClient,
    UserProfileAvatarClient,
    UserSkillClient,
    UserWorkClient,
    TYPES as userProfileTypes
} from 'modules/userProfile';
import { IUserProfile } from 'modules/userProfile/contracts';

@injectable()
export class UserProfileClient {

    get acl(): UserProfileACLClient {
        return this.userProfileACLClient;
    }

    get routeDefinition(): UserProfileRouteDefinition {
        return this.userProfileRouteDefinition;
    }

    get education(): UserEducationClient {
        return this.userEducationClient;
    }
    get avatar(): UserProfileAvatarClient {
        return this.userProfileAvatarClient;
    }
    get skill(): UserSkillClient {
        return this.userSkillClient;
    }
    get work(): UserWorkClient {
        return this.userWorkClient;
    }

    constructor(
        @inject(userProfileTypes.UserProfileACLClient) protected userProfileACLClient: UserProfileACLClient,
        @inject(userProfileTypes.UserProfileRouteDefinition) protected userProfileRouteDefinition: UserProfileRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,

        @inject(userProfileTypes.UserEducationClient) protected userEducationClient: UserEducationClient,
        @inject(userProfileTypes.UserProfileAvatarClient) protected userProfileAvatarClient: UserProfileAvatarClient,
        @inject(userProfileTypes.UserSkillClient) protected userSkillClient: UserSkillClient,
        @inject(userProfileTypes.UserWorkClient) protected userWorkClient: UserWorkClient,
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IUserProfile>>> {
        return this.apiClient.get<IQueryModel<IUserProfile>>(this.userProfileRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the user profile resource.                 
     * @method 
     * @param id User profile id which uniquely identifies user profile resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                       
     * @example userProfileClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserProfile>> {
        return this.apiClient.get<IUserProfile>(this.userProfileRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user profile action has been performed; this action creates a new user profile resource.                  
     * @method
     * @param data An user profile object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user profile action has been performed.                         
     * @example userProfileClient.create({   
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
        return this.apiClient.post<IUserProfile>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update user profile action has been performed; this action updates a user profile resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userProfileRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(userProfile); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method 
     * @param data An user profile object used to update specified user profile resource.
     * @returns A promise that is resolved once the update user profile action has been performed.                         
     * @example // userProfile is a resource previously fetched using get action. 
                       userProfile.displayName = '<nick-name>'; 
                       userProfileClient.update(userProfile)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           }); 				
    **/
    update(data: IUserProfile): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a user profile resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userProfileRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(userProfile); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data An user profile object used to delete specified user profile resource.     
     * @returns A promise that is resolved once the remove action has been performed.                        
     * @example // userProfile is a resource previously fetched using get action.				 
                    userProfileClient.remove(userProfile)
                        .then(function (data) {   
                            // perform success action here 
                        }, 
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: IUserProfile): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.userProfileRouteDefinition.delete(data));
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