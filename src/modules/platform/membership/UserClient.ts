/* globals module */
/**  
 * @module userClient  
 * @description  User Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `userClient` uses `userRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { UserRoute, TYPES as membershipTypes } from './';
import { IPlatformUser, INewUser } from './contracts';

@injectable()
export class UserClient {

    /**                 
     * Provides direct access to `userRoute`.                 
     * @method                                   
     **/
    get routeDefinition(): UserRoute {
        return this.userRoute;
    }

    constructor(
        @inject(membershipTypes.UserRoute) protected userRoute: UserRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IPlatformUser>>> {
        return this.apiClient.get<IQueryModel<IPlatformUser>>(this.routeDefinition.find(options));
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
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IPlatformUser>> {
        return this.apiClient.get<IPlatformUser>(this.userRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user action has been performed; this action creates a new user.   
     * @method
     * @param data An user object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user action has been performed.                                        
     * @example userClient.create({   
                    email : '<email>',   
                    password : '<password>',    
                    userName : '<username>', 
                    additionalProperty: '<additional-property>'  
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    create(data: INewUser): PromiseLike<IHttpResponse<IPlatformUser>> {
        return this.apiClient.post<IPlatformUser>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
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
    update(data: IPlatformUser): PromiseLike<IHttpResponse<any>> {
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
    remove(data: IPlatformUser): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.delete(this.routeDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/