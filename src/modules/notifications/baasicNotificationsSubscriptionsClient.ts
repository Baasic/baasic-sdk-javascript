/* globals module */
/**  
 * @module baasicNotificationsSubscriptionsClient  
 * @description  Notifications Subscriptions Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsSubscriptionsClient` uses `baasicNotificationsSubscriptionsRouteDefinition`. 
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
        return this.baasicNotificationsSubscriptionsRouteDefinition;
    }

    get anonymous(): NotificationsSubscriptionsAnonymousClient {
        return this.baasicNotificationsSubscriptionsAnonymousClient;
    }

    get users(): NotificationsSubscriptionsUsersClient {
        return this.baasicNotificationsSubscriptionsUsersClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSubscriptionsRouteDefinition) protected baasicNotificationsSubscriptionsRouteDefinition: NotificationsSubscriptionsRouteDefinition,
        @inject(notificationsTypes.NotificationsSubscriptionsAnonymousClient) protected baasicNotificationsSubscriptionsAnonymousClient: NotificationsSubscriptionsAnonymousClient,
        @inject(notificationsTypes.NotificationsSubscriptionsUsersClient) protected baasicNotificationsSubscriptionsUsersClient: NotificationsSubscriptionsUsersClient
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */