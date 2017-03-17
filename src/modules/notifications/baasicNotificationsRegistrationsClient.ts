/* globals module */
/**  
 * @module baasicNotificationsRegistrationsClient  
 * @description  Notifications Registrations Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsRegistrationsClient` uses `baasicNotificationsRegistrationsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import {
    NotificationsRegistrationsAnonymousClient,
    NotificationsRegistrationsRouteDefinition,
    NotificationsRegistrationsUsersClient,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class NotificationsRegistrationsClient {

    get routeDefinition(): NotificationsRegistrationsRouteDefinition {
        return this.baasicNotificationsRegistrationsRouteDefinition;
    }

    get anonymous(): NotificationsRegistrationsAnonymousClient {
        return this.baasicNotificationsRegistrationsAnonymousClient;
    }

    get users(): NotificationsRegistrationsUsersClient {
        return this.baasicNotificationsRegistrationsUsersClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsRegistrationsRouteDefinition) protected baasicNotificationsRegistrationsRouteDefinition: NotificationsRegistrationsRouteDefinition,
        @inject(notificationsTypes.NotificationsRegistrationsAnonymousClient) protected baasicNotificationsRegistrationsAnonymousClient: NotificationsRegistrationsAnonymousClient,
        @inject(notificationsTypes.NotificationsRegistrationsUsersClient) protected baasicNotificationsRegistrationsUsersClient: NotificationsRegistrationsUsersClient
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */