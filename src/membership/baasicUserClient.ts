/* globals module */ 
/**  
 * @module baasicUserClient  
 * @description Baasic User Client provides an easy way to consume Baasic User REST API end-points. In order to obtain needed routes `baasicUserClient` uses `baasicUserRouteDefinition`. 
 */

import { IBaasicQueryModel, IOptions } from 'contracts';
import { BaasicUserRouteDefinition, BaasicSocialLoginClient, BaasicSocialLoginRouteDefinition } from 'membership';
import { IAppUser, INewUser, IPasswordRecovery } from 'membership/contracts';
import { ModelMapper, Utility } from '..';

export class BaasicUserClient {

    /**                 
     * Provides direct access to `baasicUserRouteDefinition`.                 
     * @method                        
     * @example baasicUserClient.routeDefinition.get().expand(expandObject);                 
     **/ 
    get routeDefinition(): BaasicUserRouteDefinition {
        return this.baasicUserRouteDefinition;
    }

    get socialLogin(): BaasicSocialLoginClient {
        return this.baasicUserSocialLoginClient;
    }

    constructor(
        private modelMapper: ModelMapper,
        private baasicUserRouteDefinition: BaasicUserRouteDefinition,
        private baasicUserSocialLoginClient: BaasicSocialLoginClient
    ) {}

    /**                  
     * Returns a promise that is resolved once the exists action has been performed. This action checks if user exists in the application.         
     * @param username user username         
     * @method                         
     * @example baasicUserClient.exists('<username>')
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/ 
    // options ????
    exists(username: string, options: any): Promise<void> {
        return this.baasicApiHttp.get(this.baasicUserRouteDefinition.exists().expand(this.modelMapper.getParams(username, options, 'username')));
    }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user resources matching the given criteria.                  
     * @method                         
     * @example baasicUserClient.find({   
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
    find(options: IOptions): Promise<IBaasicQueryModel<IAppUser>> {
        return this.baasicApiHttp.get(this.baasicUserRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user resource. 
     * @param id user unique identifier.
     * @param options query resources options.
     * @returns A promise that is resolved once the get action has been performed.                 
     * @method                         
     * @example baasicUserClient.get({   
                    username : '<username>',   
                    embed : '<embedded-resource>' 
                })
                .success(function (data) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/ 
    get(id: string, options: IOptions): Promise<IAppUser> {
        return this.baasicApiHttp.get(this.baasicUserRouteDefinition.get().expand(this.modelMapper.getParams(id, options, 'username')));
    }

    /**                  
     * Returns a promise that is resolved once the create user action has been performed; this action creates a new user.
     * @param data An user object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user action has been performed.                  
     * @method                         
     * @example baasicUserClient.create({   
                    confirmPassword : '<password>',   
                    email : '<email>',   
                    password : '<password>',   
                    sendEmailNotification : true,   
                    username : '<username>',   
                    roles: ['<role-name>'],   
                    additionalProperty: '<additional-property>'  
                })
                .success(function (data) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/ 						
    create(data: INewUser): Promise<IAppUser> {
        return this.baasicApiHttp.post(this.baasicUserRouteDefinition.create().expand({}), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**                  
     * Returns a promise that is resolved once the update user action has been performed; this action updates a user. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
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
                    baasicUserClient.update(user)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/	
    update(data: IAppUser): Promise<void> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicUserRouteDefinition.update(params), params[this.baasicConstants.modelPropertyName]);
    }

    /**                  
     * Returns a promise that is resolved once the remove user action has been performed. This action will remove a user from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @param data  A user object used to delete specified user resource.
     * @returns A promise that is resolved once the remove user action has been performed.               
     * @method                         
     * @example // user is a resource previously fetched using get action.				 
                    baasicUserClient.remove(user)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/	
    remove(data: IAppUser): Promise<void> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicUserRouteDefinition.delete(params));
    }

    /**                  
     * Returns a promise that is resolved once the unlock user action has been performed. This action will unlock the user resource which was previously locked either manually or automatically by the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('unlock').href; 
     * ```
     * @param data A user object used to unlock specified user resource.
     * @returns A promise that is resolved once the unlock user action has been performed.              
     * @method                         
     * @example //  user is a resource previously fetched using get action.				 
                        baasicUserClient.unlock(user)
                            .success(function (data) {   
                                // perform success action here 
                            })
                            .error(function (response, status, headers, config) {   
                                // perform error handling here 
                            });						
     **/	
    unlock(data: IAppUser): Promise<void> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicUserRouteDefinition.unlock(params));
    }

    /**                 
     * Returns a promise that is resolved once the lock user action has been performed. This action will lock the user resource out of the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('lock').href; 
     * ```
     * @param data A user object used to lock specified user resource.
     * @returns A promise that is resolved once the lock user action has been performed.               
     * @method                         
     * @example // user is a resource previously fetched using get action.				 
                    baasicUserClient.lock(user)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/	
    lock(data: IAppUser): Promise<void> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicUserRouteDefinition.lock(params)); 
    }

    /**                  
     * Returns a promise that is resolved once the approve user action has been performed. This action will mark the user resource as 'approved' in the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('approve').href; 
     * ```
     * @param data A user object used to approve specified user resource. 
     * @returns A promise that is resolved once the approve user action has been performed.                 
     * @method                         
     * @example // user is a resource previously fetched using get action.				 
                    baasicUserClient.approve(user)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/					
    approve(data: IAppUser): Promise<void> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicUserRouteDefinition.approve(params));
    }

    /**                  
     * Returns a promise that is resolved once the disapprove user action has been performed. This action will mark the user resource as 'not approved' in the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(user); 
     * let uri = params['model'].links('disapprove').href; 
     * ```                  
     * @method                         
     * @example // user is a resource previously fetched using get action.				 
                    baasicUserClient.disapprove(user).success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });						
     **/	
    disapprove(data: IAppUser): Promise<void> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicUserRouteDefinition.disapprove(params));
    }

    /**                  
     * Returns a promise that is resolved once the changePassword action has been performed. This action will update user's password selection.                  
     * @method 
     * @example baasicUserClient.changePassword('<username>', {   
                    newPassword : '<new-password>',   
                    sendMailNotification : false 
                })
                .success(function () {   
                    // perform success action here 
                })
                .error(function (data, status, headers, config) {   
                    // perform error handling here 
                })
                .finally (function () {}); 
     **/					
    changePassword(username: string, data: IPasswordRecovery): Promise<any> {
        return this.baasicApiHttp({ 
            url: this.baasicUserRouteDefinition.changePassword().expand({ username: username }), 
            method: 'PUT', 
            data: data 
        });
    }
}