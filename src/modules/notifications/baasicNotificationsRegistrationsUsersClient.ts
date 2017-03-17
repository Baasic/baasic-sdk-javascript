/* globals module */
/**  
 * @module baasicNotificationsRegistrationsUsersClient  
 * @description  Notifications Registrations Users Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsRegistrationsUsersClient` uses `baasicNotificationsRegistrationsUsersRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import {
    NotificationsRegistrationsUsersBatchClient,
    NotificationsRegistrationsUsersRouteDefinition,
    TYPES as notificationsTypes
} from 'modules/notifications';
import { IUserRegistration } from 'modules/notifications/contracts';

@injectable()
export class NotificationsRegistrationsUsersClient {

    get routeDefinition(): NotificationsRegistrationsUsersRouteDefinition {
        return this.baasicNotificationsRegistrationsUsersRouteDefinition;
    }

    get batch(): NotificationsRegistrationsUsersBatchClient {
        return this.baasicNotificationsRegistrationsUsersBatchClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsRegistrationsUsersRouteDefinition) protected baasicNotificationsRegistrationsUsersRouteDefinition: NotificationsRegistrationsUsersRouteDefinition,
        @inject(notificationsTypes.NotificationsRegistrationsUsersBatchClient) protected baasicNotificationsRegistrationsUsersBatchClient: NotificationsRegistrationsUsersBatchClient,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                          
     * Returns a promise that is resolved once the create user registration action has been performed; this action creates a new user registration resource.                          
     * @method 
     * @param data An UserRegistration object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user registration action has been performed.
     * @example baasicNotificationsRegistrationsUsersClient.create({     
                    provider: '<provider-name>',     
                    providerData: <provider-data>,     
                    userId: '<user-id>' 
                }) 
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                         
     */
    create(data: IUserRegistration): PromiseLike<IHttpResponse<IUserRegistration>> {
        return this.baasicApiClient.post<IUserRegistration>(this.baasicNotificationsRegistrationsUsersRouteDefinition.create(), this.baasicNotificationsRegistrationsUsersRouteDefinition.createParams(data));
    }

    /**                          
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user registrations resources matching the given criteria.                          
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                              
     * @example baasicNotificationsRegistrationsUsersClient.find({     
                   pageNumber : 1,     
                   pageSize : 10,     
                   orderBy : '<field>',     
                   orderDirection : '<asc|desc>',     
                   search : '<search-phrase>',     
                   providers: '<provider-name1>,<provider-name2>',     
                   userIds: '<user-id1>,<user-id2>',     
                   embed: '<embed>' 
               })
               .then(function (collection) {     
                   // perform success action here 
               },
                function (response, status, headers, config) {     
                    // perform error handling here 
               });                            
    */
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserRegistration>>> {
        return this.baasicApiClient.get<IQueryModel<IUserRegistration>>(this.baasicNotificationsRegistrationsUsersRouteDefinition.find(options));
    }

    /**                          
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user registrations resource.                          
     * @method
     * @param id The registration identifier which uniquely identifies UserRegistration resource that needs to be retrieved.
     * @param options Query resource options object.                               
     * @example baasicNotificationsRegistrationsUsersClient.get('<registration-id>') 
                   .then(function (data) {     
                       // perform success action here 
                   },
                    function (response, status, headers, config) {     
                        // perform error handling here 
                   });                         
    */
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserRegistration>> {
        return this.baasicApiClient.get<IUserRegistration>(this.baasicNotificationsRegistrationsUsersRouteDefinition.get(id, options));
    }

    /**                          
     * Returns a promise that is resolved once the remove user registrations action has been performed. This action will remove a user registrations resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRegistrationsUsersRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(registration); 
     * let uri = params['model'].links('delete').href; 
     * ```                          
     * @method
     * @param data An object used to delete specified UserRegistration resource.                                 
     * @example // registration is a resource previously fetched using get action.				 
                    baasicNotificationsRegistrationsUsersClient.remove(registration)
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here 
                        });						        
     */
    remove(data: IUserRegistration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicNotificationsRegistrationsUsersRouteDefinition.delete(data));
    }

    /**                          
     * Returns a promise that is resolved once the update user registration action has been performed; this action updates a user registration resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRegistrationsUsersRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects:                             
     * ```                             
     * let params = modelMapper.updateParams(subsregistrationcription);                             
     * let uri = params['model'].links('put').href;                             
     * ```                          
     * @method 
     * @param data An object used to update specified UserRegistration resource.
     * @returns A promise that is resolved once the update user registration action has been performed.                                
     * @example // registration is a resource previously fetched using get action.                             
                    registration.provider = '<provider-name>';                             
                    baasicNotificationsRegistrationsUsersClient.update(registration)                             
                        .then(function (data) {                                  
                            // perform success action here                            
                        },
                         function (response, status, headers, config) {                                  
                             // perform error handling here                             
                        }); 				        
     */
    update(data: IUserRegistration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicNotificationsRegistrationsUsersRouteDefinition.update(data), this.baasicNotificationsRegistrationsUsersRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */