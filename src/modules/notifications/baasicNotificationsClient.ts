/* globals module */
/**  
 * @module notificationsClient  
 * @description  Notifications Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsClient` uses `baasicNotificationsRouteDefinition`. 
 */


import { injectable, inject } from "inversify";
import { BaseRouteDefinition } from 'common';
import {
    NotificationsPublishClient,
    NotificationsSubscriptionsClient,
    NotificationsRegistrationsClient,
    NotificationsRouteDefinition,
    NotificationsSettingsClient,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class NotificationsClient {

    get routeDefinition(): NotificationsRouteDefinition {
        return this.baasicNotificationsRouteDefinition;
    }

    get publish(): NotificationsPublishClient {
        return this.notificationsPublishClient;
    }

    get subscriptions(): NotificationsSubscriptionsClient {
        return this.basicNotificationsSubscriptionsClient;
    }

    get registrations(): NotificationsRegistrationsClient {
        return this.notificationsRegistrationsClient;
    }

    get settings(): NotificationsSettingsClient {
        return this.notificationsSettingsClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsPublishClient) protected notificationsPublishClient: NotificationsPublishClient,
        @inject(notificationsTypes.NotificationsSubscriptionsClient) protected basicNotificationsSubscriptionsClient: NotificationsSubscriptionsClient,
        @inject(notificationsTypes.NotificationsRegistrationsClient) protected notificationsRegistrationsClient: NotificationsRegistrationsClient,
        @inject(notificationsTypes.NotificationsSettingsClient) protected notificationsSettingsClient: NotificationsSettingsClient,
        @inject(notificationsTypes.NotificationsRouteDefinition) protected baasicNotificationsRouteDefinition: NotificationsRouteDefinition
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */