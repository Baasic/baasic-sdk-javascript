/* globals module */
/**  
 * @module notificationsSubscriptionsUsersClient  
 * @description  Notifications Subscriptions Users Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsSubscriptionsUsersClient` uses `notificationsSubscriptionsUsersRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    NotificationsSubscriptionsUsersBatchClient,
    NotificationsSubscriptionsUsersRoute, TYPES as notificationsTypes
} from 'modules/notifications';
import { IUserSubscription } from 'modules/notifications/contracts';

@injectable()
export class NotificationsSubscriptionsUsersClient {

    get routeDefinition(): NotificationsSubscriptionsUsersRoute {
        return this.notificationsSubscriptionsUsersRoute;
    }

    get batch(): NotificationsSubscriptionsUsersBatchClient {
        return this.NotificationsSubscriptionsUsersBatchClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSubscriptionsUsersRoute) protected notificationsSubscriptionsUsersRoute: NotificationsSubscriptionsUsersRoute,
        @inject(notificationsTypes.NotificationsSubscriptionsUsersBatchClient) protected NotificationsSubscriptionsUsersBatchClient: NotificationsSubscriptionsUsersBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                          
     * Returns a promise that is resolved once the create user subscription action has been performed; this action creates a new user subscription resource.                          
     * @method
     * @param data An UserSubscription object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user subscription action has been performed.                           
     * @example notificationsSubscriptionsUsersClient.create({     
                    channel: '<channel-name>',     
                    userId: '<user-id>' 
                })
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                         
     */
    create(data: IUserSubscription): PromiseLike<IHttpResponse<IUserSubscription>> {
        return this.apiClient.post<IUserSubscription>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                          
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user subscription resources matching the given criteria.                          
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                               
     * @example notificationsSubscriptionsUsersClient.find({     
                    pageNumber : 1,     
                    pageSize : 10,     
                    orderBy : '<field>',     
                    orderDirection : '<asc|desc>',     
                    search : '<search-phrase>',     
                    channels: '<channel-name1>,<channel-name2>',     
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IUserSubscription>>> {
        return this.apiClient.get<IQueryModel<IUserSubscription>>(this.routeDefinition.find(options));
    }

    /**                          
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user subscription resource.                          
     * @method
     * @param id The subscription identifier which uniquely identifies UserSubscription resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                               
     * @example notificationsSubscriptionsUsersClient.get('<subscription-id>')
                   .then(function (data) {     
                       // perform success action here 
                   },
                    function (response, status, headers, config) {     
                        // perform error handling here 
                   });                         
    */
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserSubscription>> {
        return this.apiClient.get(this.notificationsSubscriptionsUsersRoute.get(id, options));
    }

    /**                          
     * Returns a promise that is resolved once the remove user subscription action has been performed. This action will remove a user subscription resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `notificationsSubscriptionsUsersRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(subscription); 
     * let uri = params['model'].links('delete').href; 
     * ```                          
     * @method
     * @param data An object used to delete specified UserSubscription resource.
     * @returns A promise that is resolved once the remove user subscription action has been performed.                                  
     * @example // subscription is a resource previously fetched using get action.				 
                    notificationsSubscriptionsUsersClient.remove(subscription)
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here 
                        });		                        
     */
    remove(data: IUserSubscription): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**                          
     * Returns a promise that is resolved once the update user subscription action has been performed; this action updates a user subscription resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `notificationsSubscriptionsUsersRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(subscription); 
     * let uri = params['model'].links('put').href; 
     * ```                          
     * @method
     * @param data An object used to update specified UserSubscription resource.                                 
     * @example // subscription is a resource previously fetched using get action. 
                       subscription.channel = '<channel-name>'; 
                       notificationsSubscriptionsUsersClient.update(subscription)
                           .then(function (data) {     
                               // perform success action here 
                           },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                           }); 				        
    */
    update(data: IUserSubscription): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */