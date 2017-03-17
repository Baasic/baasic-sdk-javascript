/* globals module */
/**  
 * @module baasicNotificationsPublishClient  
 * @description Baasic Notifications Publish Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsPublishClient` uses `baasicNotificationsPublishRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicNotificationsPublishBatchClient, BaasicNotificationsPublishRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';
import { INotification } from 'modules/notifications/contracts';

@injectable()
export class BaasicNotificationsPublishClient {

    routeDefinition(): BaasicNotificationsPublishRouteDefinition {
        return this.baasicNotificationsPublishRouteDefinition;
    }

    batch(): BaasicNotificationsPublishBatchClient {
        return this.baasicNotificationsPublishBatchClient;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsPublishRouteDefinition) protected baasicNotificationsPublishRouteDefinition: BaasicNotificationsPublishRouteDefinition,
        @inject(notificationsTypes.BaasicNotificationsPublishBatchClient) protected baasicNotificationsPublishBatchClient: BaasicNotificationsPublishBatchClient,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                      
     * Returns a promise that is resolved once the create notification action has been performed; this action creates a new notification resource.                      
     * @method
     * @param data The notification.
     * @returns A promise that is resolved once the create notification action has been performed.                       
     * @example baasicNotificationsPublishClient.create({     
                    channels: ['<channel-name', '<channel-name>'],     
                    moduleName: '<module-name>',     
                    templateName: '<template-name>',     
                    templateContext: {         
                        prop1: '<prop1-value>',         
                        prop2: '<prop2-value>'     
                    } 
                })
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                      
     */
    create(data: INotification): PromiseLike<IHttpResponse<INotification>> {
        return this.baasicApiClient.post<INotification>(this.baasicNotificationsPublishRouteDefinition.create(), this.baasicNotificationsPublishRouteDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */