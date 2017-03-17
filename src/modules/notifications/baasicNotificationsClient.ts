/* globals module */
/**  
 * @module baasicNotificationsClient  
 * @description  Notifications Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsClient` uses `baasicNotificationsRouteDefinition`. 
 */


import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import {
    NotificationsPublishClient,
    NotificationsSubscriptionsClient,
    NotificationsRegistrationsClient,
    BaasicNotificationsRouteDefinition,
    NotificationsSettingsClient,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class NotificationsClient {

    get routeDefinition(): BaasicNotificationsRouteDefinition {
        return this.baasicNotificationsRouteDefinition;
    }

    get publish(): NotificationsPublishClient {
        return this.baasicNotificationsPublishClient;
    }

    get subscriptions(): NotificationsSubscriptionsClient {
        return this.basicNotificationsSubscriptionsClient;
    }

    get registrations(): NotificationsRegistrationsClient {
        return this.baasicNotificationsRegistrationsClient;
    }

    get settings(): NotificationsSettingsClient {
        return this.baasicNotificationsSettingsClient;
    }

    constructor(
        @inject(notificationsTypes.NotificationsPublishClient) protected baasicNotificationsPublishClient: NotificationsPublishClient,
        @inject(notificationsTypes.NotificationsSubscriptionsClient) protected basicNotificationsSubscriptionsClient: NotificationsSubscriptionsClient,
        @inject(notificationsTypes.NotificationsRegistrationsClient) protected baasicNotificationsRegistrationsClient: NotificationsRegistrationsClient,
        @inject(notificationsTypes.NotificationsSettingsClient) protected baasicNotificationsSettingsClient: NotificationsSettingsClient,
        @inject(notificationsTypes.BaasicNotificationsRouteDefinition) protected baasicNotificationsRouteDefinition: BaasicNotificationsRouteDefinition
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */