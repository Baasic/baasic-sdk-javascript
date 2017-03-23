/* globals module */
/**  
 * @module notificationsSubscriptionsClient  
 * @description  Notifications Subscriptions Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsSubscriptionsClient` uses `notificationsSubscriptionsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import {
    NotificationsSubscriptionsAnonymousClient,
    NotificationsSubscriptionsRouteDefinition,
    NotificationsSubscriptionsUsersClient,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class NotificationsSubscriptionsClient {

    get routeDefinition(): NotificationsSubscriptionsRouteDefinition {
        return this.notificationsSubscriptionsRouteDefinition;
    }

    get anonymous(): NotificationsSubscriptionsAnonymousClient {
        return this.notificationsSubscriptionsAnonymousClient;
    }

    get users(): NotificationsSubscriptionsUsersClient {
        return this.notificationsSubscriptionsUsersClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSubscriptionsRouteDefinition) protected notificationsSubscriptionsRouteDefinition: NotificationsSubscriptionsRouteDefinition,
        @inject(notificationsTypes.NotificationsSubscriptionsAnonymousClient) protected notificationsSubscriptionsAnonymousClient: NotificationsSubscriptionsAnonymousClient,
        @inject(notificationsTypes.NotificationsSubscriptionsUsersClient) protected notificationsSubscriptionsUsersClient: NotificationsSubscriptionsUsersClient
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */