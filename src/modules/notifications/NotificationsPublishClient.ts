/* globals module */
/**  
 * @module notificationsPublishClient  
 * @description  Notifications Publish Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsPublishClient` uses `notificationsPublishRoute`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { NotificationsPublishBatchClient, NotificationsPublishRoute, TYPES as notificationsTypes } from 'modules/notifications';
import { INotification } from 'modules/notifications/contracts';

@injectable()
export class NotificationsPublishClient {

    get routeDefinition(): NotificationsPublishRoute {
        return this.notificationsPublishRoute;
    }

    get batch(): NotificationsPublishBatchClient {
        return this.notificationsPublishBatchClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsPublishRoute) protected notificationsPublishRoute: NotificationsPublishRoute,
        @inject(notificationsTypes.NotificationsPublishBatchClient) protected notificationsPublishBatchClient: NotificationsPublishBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                      
     * Returns a promise that is resolved once the create notification action has been performed; this action creates a new notification resource.                      
     * @method
     * @param data The notification.
     * @returns A promise that is resolved once the create notification action has been performed.                       
     * @example notificationsPublishClient.create({     
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
        return this.apiClient.post<INotification>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */