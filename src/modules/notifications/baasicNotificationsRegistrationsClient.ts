/* globals module */
/**  
 * @module baasicNotificationsRegistrationsClient  
 * @description Baasic Notifications Registrations Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsRegistrationsClient` uses `baasicNotificationsRegistrationsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import {
    BaasicNotificationsRegistrationsAnonymousClient,
    BaasicNotificationsRegistrationsRouteDefinition,
    BaasicNotificationsRegistrationsUsersClient,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class BaasicNotificationsRegistrationsClient {

    get routeDefinition(): BaasicNotificationsRegistrationsRouteDefinition {
        return this.baasicNotificationsRegistrationsRouteDefinition;
    }

    get anonymous(): BaasicNotificationsRegistrationsAnonymousClient {
        return this.baasicNotificationsRegistrationsAnonymousClient;
    }

    get users(): BaasicNotificationsRegistrationsUsersClient {
        return this.baasicNotificationsRegistrationsUsersClient;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsRegistrationsRouteDefinition) protected baasicNotificationsRegistrationsRouteDefinition: BaasicNotificationsRegistrationsRouteDefinition,
        @inject(notificationsTypes.BaasicNotificationsRegistrationsAnonymousClient) protected baasicNotificationsRegistrationsAnonymousClient: BaasicNotificationsRegistrationsAnonymousClient,
        @inject(notificationsTypes.BaasicNotificationsRegistrationsUsersClient) protected baasicNotificationsRegistrationsUsersClient: BaasicNotificationsRegistrationsUsersClient
    ) { }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */