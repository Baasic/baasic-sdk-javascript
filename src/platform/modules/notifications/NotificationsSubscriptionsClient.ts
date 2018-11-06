/* globals module */
/**  
 * @module notificationsSubscriptionsClient  
 * @description  Notifications Subscriptions Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsSubscriptionsClient` uses `notificationsSubscriptionsRoute`. 
 */

import { injectable, inject } from "inversify";
import {
    NotificationsSubscriptionsAnonymousClient,
    NotificationsSubscriptionsRoute,
    NotificationsSubscriptionsUsersClient,
    TYPES as notificationsTypes
} from './';

@injectable()
export class NotificationsSubscriptionsClient {

    get routeDefinition(): NotificationsSubscriptionsRoute {
        return this.notificationsSubscriptionsRoute;
    }

    get anonymous(): NotificationsSubscriptionsAnonymousClient {
        return this.notificationsSubscriptionsAnonymousClient;
    }

    get users(): NotificationsSubscriptionsUsersClient {
        return this.notificationsSubscriptionsUsersClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSubscriptionsRoute) protected notificationsSubscriptionsRoute: NotificationsSubscriptionsRoute,
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