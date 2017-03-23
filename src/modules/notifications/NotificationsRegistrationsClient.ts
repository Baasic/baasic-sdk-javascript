/* globals module */
/**  
 * @module notificationsRegistrationsClient  
 * @description  Notifications Registrations Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsRegistrationsClient` uses `notificationsRegistrationsRoute`. 
 */

import { injectable, inject } from "inversify";
import {
    NotificationsRegistrationsAnonymousClient,
    NotificationsRegistrationsRoute,
    NotificationsRegistrationsUsersClient,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class NotificationsRegistrationsClient {

    get routeDefinition(): NotificationsRegistrationsRoute {
        return this.notificationsRegistrationsRoute;
    }

    get anonymous(): NotificationsRegistrationsAnonymousClient {
        return this.notificationsRegistrationsAnonymousClient;
    }

    get users(): NotificationsRegistrationsUsersClient {
        return this.notificationsRegistrationsUsersClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsRegistrationsRoute) protected notificationsRegistrationsRoute: NotificationsRegistrationsRoute,
        @inject(notificationsTypes.NotificationsRegistrationsAnonymousClient) protected notificationsRegistrationsAnonymousClient: NotificationsRegistrationsAnonymousClient,
        @inject(notificationsTypes.NotificationsRegistrationsUsersClient) protected notificationsRegistrationsUsersClient: NotificationsRegistrationsUsersClient
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */