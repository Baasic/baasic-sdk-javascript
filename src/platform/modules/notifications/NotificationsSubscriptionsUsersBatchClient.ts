/* globals module */
/**  
 * @module notificationsSubscriptionsUsersBatchClient  
 * @description  Notifications Subscriptions Users Batch Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsSubscriptionsUsersBatchUsersClient` uses `notificationsSubscriptionsUsersBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { NotificationsSubscriptionsUsersBatchRoute, TYPES as notificationsTypes } from './';
import { IUserSubscription } from './contracts';

@injectable()
export class NotificationsSubscriptionsUsersBatchClient {

    get routeDefinition(): NotificationsSubscriptionsUsersBatchRoute {
        return this.notificationsSubscriptionsUsersBatchRoute;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSubscriptionsUsersBatchRoute) protected notificationsSubscriptionsUsersBatchRoute: NotificationsSubscriptionsUsersBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                              
     * Returns a promise that is resolved once the create user subscription action has been performed; this action creates new user subscription resources.                              
     * @method
     * @param data UserSubscription collection that need to be inserted into the system. 
     * @returns A promise that is resolved once the create user subscription action has been performed.                                    
     * @example notificationsSubscriptionsUsersBatchClient.create([{     
                    channel: '<channel-name>',     
                    userId: '<user-id>' 
                }])
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                             
     */
    create(data: IUserSubscription[]): PromiseLike<IHttpResponse<IUserSubscription[]>> {
        return this.apiClient.post<IUserSubscription[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                              
     * Returns a promise that is resolved once the remove action has been performed. This action will remove user subscription resources from the system if successfully completed.                              
     * @method 
     * @param ids The subscription ids which uniquely identify UserSubscription resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                                
     * @example notificationsSubscriptionsUsersBatchClient.remove(subscriptionIds)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });		                            
     */
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.notificationsSubscriptionsUsersBatchRoute.delete(), undefined, ids);
    }

    /**                              
     * Returns a promise that is resolved once the update user subscriptions action has been performed; this action updates specified user subscription resources.                              
     * @method 
     * @param data UserSubscription objects used to update specified UserSubscription resources.
     * @returns A promise that is resolved once the update user subscriptions action has been performed.                                   
     * @example notificationsSubscriptionsUsersBatchClient.update(subscriptions)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                             
     */
    update(data: IUserSubscription[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */