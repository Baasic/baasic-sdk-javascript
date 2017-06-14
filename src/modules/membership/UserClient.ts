/* globals module */
/**  
 * @module userClient  
 * @description  User Client provides an easy way to consume  User REST API end-points. In order to obtain needed routes `userClient` uses `userRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    UserRoute,
    UserSocialLoginClient,
    TYPES as membershipTypes
} from './';
import { IAppUser, INewUser, INewPassword, IUserOptions } from './contracts';
import { ModelMapper } from '../../common';

@injectable()
export class UserClient {

    /**                 
     * Provides direct access to `userRoute`.                 
     * @method                        
     * @example userClient.routeDefinition.get();                 
     **/
    get routeDefinition(): UserRoute {
        return this.userRoute;
    }

    get socialLogin(): UserSocialLoginClient {
        return this.userSocialLoginClient;
    }

    constructor(
        @inject(membershipTypes.UserRoute) protected userRoute: UserRoute,
        @inject(membershipTypes.UserSocialLoginClient) protected userSocialLoginClient: UserSocialLoginClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the exists action has been performed. This action checks if user exists in the application.            
     * @method
     * @param username A username which uniquely identifies an application user.                           
     * @example userClient.exists('<username>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    exists(username: string, options?: any): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.userRoute.exists(username, options));
    }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.                         
     * @example userClient.find({   
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
    find(options?: IUserOptions): PromiseLike<IHttpResponse<IQueryModel<IAppUser>>> {
        return this.apiClient.get<IQueryModel<IAppUser>>(this.routeDefinition.find(options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user resource.               
     * @method
     * @param id A username or id which uniquely identifies an application user whose account information needs to be retrieved.
     * @param options Query resources options.
     * @returns A promise that is resolved once the get action has been performed.                           
     * @example userClient.get({   
                    username : '<username>',   
                    embed : '<embedded-resource>' 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAppUser>> {
        return this.apiClient.get<IAppUser>(this.userRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user action has been performed; this action creates a new user.   
     * @method
     * @param data An user object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user action has been performed.                                        
     * @example userClient.create({   
                    confirmPassword : '<password>',   
                    email : '<email>',   
                    password : '<password>',   
                    sendEmailNotification : true,   
                    username : '<username>',   
                    roles: ['<role-name>'],   
                    additionalProperty: '<additional-property>'  
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    create(data: INewUser): PromiseLike<IHttpResponse<IAppUser>> {
        return this.apiClient.post<IAppUser>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update user action has been performed; this action updates a user. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data A user object used to update specified user resource.
     * @returns A promise that is resolved once the update user action has been performed.                  
     * @method                         
     * @example // user is a resource previously fetched using get action. 
                    user.roles = ['<role-name>', '<new-role-name>']; 
                    user.email = '<new-email>'; 
                    userClient.update(user)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IAppUser): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove user action has been performed. This action will remove a user from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('delete').href; 
     * ```             
     * @method
     * @param data  A user object used to delete specified user resource.
     * @returns A promise that is resolved once the remove user action has been performed.                           
     * @example // user is a resource previously fetched using get action.				 
                    userClient.remove(user)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IAppUser): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.delete(this.routeDefinition.delete(data));
    }

    /**                  
     * Returns a promise that is resolved once the unlock user action has been performed. This action will unlock the user resource which was previously locked either manually or automatically by the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('unlock').href; 
     * ```           
     * @method
     * @param data A user object used to unlock specified user resource.
     * @returns A promise that is resolved once the unlock user action has been performed.                            
     * @example //  user is a resource previously fetched using get action.				 
                        userClient.unlock(user)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                // perform error handling here 
                            });						
     **/
    unlock(data: IAppUser): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.userRoute.unlock(data), data);
    }

    /**                 
     * Returns a promise that is resolved once the lock user action has been performed. This action will lock the user resource out of the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('lock').href; 
     * ```              
     * @method
     * @param data A user object used to lock specified user resource.
     * @returns A promise that is resolved once the lock user action has been performed.                          
     * @example // user is a resource previously fetched using get action.				 
                    userClient.lock(user)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    lock(data: IAppUser): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.userRoute.lock(data), data);
    }

    /**                  
     * Returns a promise that is resolved once the approve user action has been performed. This action will mark the user resource as 'approved' in the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('approve').href; 
     * ```                 
     * @method
     * @param data A user object used to approve specified user resource. 
     * @returns A promise that is resolved once the approve user action has been performed.                         
     * @example // user is a resource previously fetched using get action.				 
                    userClient.approve(user)
                        .then(function (data) {   
                            // perform success action here 
                        })
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    approve(data: IAppUser): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.userRoute.approve(data), data);
    }

    /**                  
     * Returns a promise that is resolved once the disapprove user action has been performed. This action will mark the user resource as 'not approved' in the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('disapprove').href; 
     * ```                  
     * @method                         
     * @example // user is a resource previously fetched using get action.				 
                    userClient.disapprove(user).then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });						
     **/
    disapprove(data: IAppUser): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.userRoute.disapprove(data), data);
    }

    /**                  
     * Returns a promise that is resolved once the changePassword action has been performed. This action will update user's password selection.           
     * @method 
     * @param username A username or id which uniquely identifies user resource.
     * @param data A new password object used to update specified user password resource.
     * @returns A promise that is resolved once the changedPassword action has been performed.     
     * @example userClient.changePassword('<username>', {   
                    newPassword : '<new-password>',   
                    sendMailNotification : false 
                })
                .then(function () {   
                    // perform success action here 
                },
                 function (data, status, headers, config) {   
                    // perform error handling here 
                })
                .finally (function () {}); 
     **/
    changePassword(username: string, data: INewPassword): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.userRoute.changePassword(username), data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */