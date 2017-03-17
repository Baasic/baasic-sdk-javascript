/* globals module */
/**  
 * @module baasicNotificationsSubscriptionsAnonymousBatchClient  
 * @description  Notifications Subscriptions Anonymous Batch Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsSubscriptionsAnonymousBatchClient` uses `baasicNotificationsSubscriptionsAnonymousBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { NotificationsSubscriptionsAnonymousBatchRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';
import { IAnonymousSubscription } from 'modules/notifications/contracts';

@injectable()
export class NotificationsSubscriptionsAnonymousBatchClient {

    get routeDefinition(): NotificationsSubscriptionsAnonymousBatchRouteDefinition {
        return this.baasicNotificationsSubscriptionsAnonymousBatchRouteDefinition;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSubscriptionsAnonymousBatchRouteDefinition) protected baasicNotificationsSubscriptionsAnonymousBatchRouteDefinition: NotificationsSubscriptionsAnonymousBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                              
     * Returns a promise that is resolved once the create anonymous subscription action has been performed; this action creates new anonymous subscription resources.                              
     * @method
     * @param data AnonymousSubscription objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create anonymous subscription action has been performed.
     * @example baasicNotificationsSubscriptionsAnonymousBatchClient.create([{     
                    channel: '<channel-name>',     
                    registrationId: '<registration-id>' ž
                }])
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                             
     */
    create(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<IAnonymousSubscription[]>> {
        return this.baasicApiClient.post(this.baasicNotificationsSubscriptionsAnonymousBatchRouteDefinition.create(), this.baasicNotificationsSubscriptionsAnonymousBatchRouteDefinition.createParams(data));
    }

    /**                              
     * Returns a promise that is resolved once the remove action has been performed. This action will remove anonymous subscription resources from the system if successfully completed.                              
     * @method
     * @param ids The subscription ids which uniquely identify AnonymousSubscription resources that need to be deleted.
     * @returns a promise that is resolved once the remove action has been performed.                                   
     * @example baasicNotificationsSubscriptionsAnonymousBatchClient.remove(subscriptionIds)
                   .then(function (data) {     
                       // perform success action here 
                   },
                    function (response, status, headers, config) {     
                        // perform error handling here 
                   });		                            
    */
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicNotificationsSubscriptionsAnonymousBatchRouteDefinition.delete(), undefined, ids);
    }

    /**                              
     * Returns a promise that is resolved once the update anonymous subscriptions action has been performed; this action updates specified anonymous subscription resources.                              
     * @method
     * @param data AnonymousSubscription objects used to update specified AnonymousSubscription resources.
     * @returns A promise that is resolved once the update anonymous subscriptions action has been performed.                                     
     * @example baasicNotificationsSubscriptionsAnonymousBatchClient.update(subscriptions)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                             
     */
    update(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicNotificationsSubscriptionsAnonymousBatchRouteDefinition.update(), this.baasicNotificationsSubscriptionsAnonymousBatchRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */