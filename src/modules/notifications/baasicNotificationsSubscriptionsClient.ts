/* globals module */
/**  
 * @module baasicNotificationsSubscriptionsClient  
 * @description Baasic Notifications Subscriptions Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsSubscriptionsClient` uses `baasicNotificationsSubscriptionsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import {
    BaasicNotificationsSubscriptionsAnonymousClient,
    BaasicNotificationsSubscriptionsRouteDefinition,
    BaasicNotificationsSubscriptionsUsersClient,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class BaasicNotificationsSubscriptionsClient {

    get routeDefinition(): BaasicNotificationsSubscriptionsRouteDefinition {
        return this.baasicNotificationsSubscriptionsRouteDefinition;
    }

    get anonymous(): BaasicNotificationsSubscriptionsAnonymousClient {
        return this.baasicNotificationsSubscriptionsAnonymousClient;
    }

    get users(): BaasicNotificationsSubscriptionsUsersClient {
        return this.baasicNotificationsSubscriptionsUsersClient;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsSubscriptionsRouteDefinition) protected baasicNotificationsSubscriptionsRouteDefinition: BaasicNotificationsSubscriptionsRouteDefinition,
        @inject(notificationsTypes.BaasicNotificationsSubscriptionsAnonymousClient) protected baasicNotificationsSubscriptionsAnonymousClient: BaasicNotificationsSubscriptionsAnonymousClient,
        @inject(notificationsTypes.BaasicNotificationsSubscriptionsUsersClient) protected baasicNotificationsSubscriptionsUsersClient: BaasicNotificationsSubscriptionsUsersClient
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */