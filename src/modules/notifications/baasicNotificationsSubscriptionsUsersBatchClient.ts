/* globals module */
/**  
 * @module baasicNotificationsSubscriptionsUsersBatchClient  
 * @description Baasic Notifications Subscriptions Users Batch Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsSubscriptionsUsersBatchUsersClient` uses `baasicNotificationsSubscriptionsUsersBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicNotificationsSubscriptionsUsersBatchRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';
import { IUserSubscription } from 'modules/notifications/contracts';

@injectable()
export class BaasicNotificationsSubscriptionsUsersBatchClient {

    constructor(
        @inject(notificationsTypes.BaasicNotificationsSubscriptionsUsersBatchRouteDefinition) protected baasicNotificationsSubscriptionsUsersBatchRouteDefinition: BaasicNotificationsSubscriptionsUsersBatchRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                              
     * Returns a promise that is resolved once the create user subscription action has been performed; this action creates new user subscription resources.                              
     * @method
     * @param data UserSubscription collection that need to be inserted into the system. 
     * @returns A promise that is resolved once the create user subscription action has been performed.                                    
     * @example baasicNotificationsSubscriptionsUsersBatchClient.create([{     
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
        return this.baasicApiClient.post<IUserSubscription[]>(this.baasicNotificationsSubscriptionsUsersBatchRouteDefinition.create(), this.baasicNotificationsSubscriptionsUsersBatchRouteDefinition.createParams(data));
    }

    /**                              
     * Returns a promise that is resolved once the remove action has been performed. This action will remove user subscription resources from the system if successfully completed.                              
     * @method 
     * @param ids The subscription ids which uniquely identify UserSubscription resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                                
     * @example baasicNotificationsSubscriptionsUsersBatchClient.remove(subscriptionIds)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });		                            
     */
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicNotificationsSubscriptionsUsersBatchRouteDefinition.delete(), undefined, ids);
    }

    /**                              
     * Returns a promise that is resolved once the update user subscriptions action has been performed; this action updates specified user subscription resources.                              
     * @method 
     * @param data UserSubscription objects used to update specified UserSubscription resources.
     * @returns A promise that is resolved once the update user subscriptions action has been performed.                                   
     * @example baasicNotificationsSubscriptionsUsersBatchClient.update(subscriptions)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                             
     */
    update(data: IUserSubscription[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicNotificationsSubscriptionsUsersBatchRouteDefinition.update(), this.baasicNotificationsSubscriptionsUsersBatchRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */