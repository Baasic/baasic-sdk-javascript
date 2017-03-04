/* globals module */
/**  
 * @module baasicNotificationsClient  
 * @description Baasic Notifications Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsClient` uses `baasicNotificationsRouteDefinition`. 
 */


import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import {
    BaasicNotificationsPublishClient,
    BaasicNotificationsSubscriptionsClient,
    BaasicNotificationsRegistrationsClient,
    BaasicNotificationsRouteDefinition,
    BaasicNotificationsSettingsClient,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class BaasicNotificationsClient {

    get routeDefinition(): BaasicNotificationsRouteDefinition {
        return this.baasicNotificationsRouteDefinition;
    }

    get publish(): BaasicNotificationsPublishClient {
        return this.baasicNotificationsPublishClient;
    }

    get subscriptions(): BaasicNotificationsSubscriptionsClient {
        return this.basicNotificationsSubscriptionsClient;
    }

    get registrations(): BaasicNotificationsRegistrationsClient {
        return this.baasicNotificationsRegistrationsClient;
    }

    get settings(): BaasicNotificationsSettingsClient {
        return this.baasicNotificationsSettingsClient;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsPublishClient) protected baasicNotificationsPublishClient: BaasicNotificationsPublishClient,
        @inject(notificationsTypes.BaasicNotificationsSubscriptionsClient) protected basicNotificationsSubscriptionsClient: BaasicNotificationsSubscriptionsClient,
        @inject(notificationsTypes.BaasicNotificationsRegistrationsClient) protected baasicNotificationsRegistrationsClient: BaasicNotificationsRegistrationsClient,
        @inject(notificationsTypes.BaasicNotificationsSettingsClient) protected baasicNotificationsSettingsClient: BaasicNotificationsSettingsClient,
        @inject(notificationsTypes.BaasicNotificationsRouteDefinition) protected baasicNotificationsRouteDefinition: BaasicNotificationsRouteDefinition
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */