/* globals module */
/**  
 * @module notificationsSubscriptionsAnonymousClient  
 * @description  Notifications Subscriptions Anonymous Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsSubscriptionsAnonymousClient` uses `notificationsSubscriptionsAnonymousRoute`. 
 */


import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { NotificationsSubscriptionsAnonymousRoute, NotificationsSubscriptionsAnonymousBatchClient, TYPES as notificationsTypes } from 'modules/notifications';
import { IAnonymousSubscription } from 'modules/notifications/contracts';

@injectable()
export class NotificationsSubscriptionsAnonymousClient {

    get routeDefinition(): NotificationsSubscriptionsAnonymousRoute {
        return this.notificationsSubscriptionsAnonymousRoute;
    }

    get batch(): NotificationsSubscriptionsAnonymousBatchClient {
        return this.notificationsSubscriptionsAnonymousBatchClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSubscriptionsAnonymousRoute) protected notificationsSubscriptionsAnonymousRoute: NotificationsSubscriptionsAnonymousRoute,
        @inject(notificationsTypes.NotificationsSubscriptionsAnonymousBatchClient) protected notificationsSubscriptionsAnonymousBatchClient: NotificationsSubscriptionsAnonymousBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                          
     * Returns a promise that is resolved once the create anonymous subscription action has been performed; this action creates a new anonymous subscription resource.                          
     * @method 
     * @param data An AnonymousSubscription object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create anonymous subscription action has been performed.                          
     * @example notificationsSubscriptionsAnonymousClient.create({     
                    channel: '<channel-name>',     
                    registrationId: '<registration-id>' 
                })
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                         
     */
    create(data: IAnonymousSubscription): PromiseLike<IHttpResponse<IAnonymousSubscription>> {
        return this.apiClient.post<IAnonymousSubscription>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                          
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of anonymous subscription resources matching the given criteria.                          
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                              
     * @example notificationsSubscriptionsAnonymousClient.find({     
                    pageNumber : 1,     
                    pageSize : 10,     
                    orderBy : '<field>',     
                    orderDirection : '<asc|desc>',     
                    search : '<search-phrase>',     
                    channels: '<channel-name1>,<channel-name2>',     
                    registrationIds: '<registration-id1>,<registration-id2>',     
                    embed: '<embed>' 
                })
                .then(function (collection) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                            
     */
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IAnonymousSubscription>>> {
        return this.apiClient.get<IQueryModel<IAnonymousSubscription>>(this.notificationsSubscriptionsAnonymousRoute.find())
    }

    /**                          
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified anonymous subscription resource.                          
     * @method   
     * @param id The subscription identifier which uniquely identifies AnonymousSubscription resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                             
     * @example notificationsSubscriptionsAnonymousClient.get('<subscription-id>')
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                         
     */
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousSubscription>> {
        return this.apiClient.get<IAnonymousSubscription>(this.notificationsSubscriptionsAnonymousRoute.get(id, options));
    }

    /**                          
     * Returns a promise that is resolved once the remove anonymous subscription action has been performed. This action will remove a anonymous subscription resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `notificationsSubscriptionsAnonymousRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(subscription); 
     * var uri = params['model'].links('delete').href; 
     * ```                          
     * @method 
     * @param data The subscription identifier used to delete specific subscription resource in the system.
     * @returns A promise that is resolved once the remove anonymous subscription action has been performed.                                 
     * @example // subscription is a resource previously fetched using get action.				 
                        notificationsSubscriptionsAnonymousClient.remove(subscription)
                            .then(function (data) {     
                                // perform success action here 
                            },
                             function (response, status, headers, config) {     
                                 // perform error handling here 
                            });						        
     */
    remove(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**                          
     * Returns a promise that is resolved once the update anonymous subscription action has been performed; this action updates a anonymous subscription resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `notificationsSubscriptionsAnonymousRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(subscription); 
     * let uri = params['model'].links('put').href; 
     * ```                          
     * @method
     * @param data An object used to update specified AnonymousSubscription resource.
     * @returns A promise that is resolved once the update anonymous subscription action has been performed.
     * @example // subscription is a resource previously fetched using get action. 
                    subscription.channel = '<channel-name>'; 
                    notificationsSubscriptionsAnonymousClient.update(subscription) 
                        .then(function (data) {         
                            // perform success action here 
                        },
                         function (response, status, headers, config) {         
                             // perform error handling here 
                        }); 				        
     */
    update(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */