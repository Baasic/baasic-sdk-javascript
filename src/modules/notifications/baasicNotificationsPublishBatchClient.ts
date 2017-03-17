/* globals module */
/**  
 * @module notificationsPublishBatchClient  
 * @description  Notifications Publish Batch Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsPublishBatchClient` uses `baasicNotificationsPublishBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { NotificationsPublishBatchRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';
import { INotification } from 'modules/notifications/contracts';

@injectable()
export class NotificationsPublishBatchClient {

    constructor(
        @inject(notificationsTypes.NotificationsPublishBatchRouteDefinition) protected baasicNotificationsPublishBatchRouteDefinition: NotificationsPublishBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**         
     * Returns a promise that is resolved once the create notification action has been performed; this action creates new notification resources.                          
     * @method 
     * @param data The notification collection.
     * @returns A promise that is resolved once the create notification action has been performed.                              
     * @example notificationsPublishBatchClient.create([{        
                    channels: ['<channel-name', '<channel-name>'],     
                    moduleName: '<module-name>',     
                    templateName: '<template-name>',     
                    templateContext: {         
                        prop1: '<prop1-value>',         
                        prop2: '<prop2-value>'     
                    } 
                }])
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                         
     */
    create(data: INotification[]): PromiseLike<IHttpResponse<INotification[]>> {
        return this.apiClient.post<INotification[]>(this.baasicNotificationsPublishBatchRouteDefinition.create(), this.baasicNotificationsPublishBatchRouteDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */