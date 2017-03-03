/* globals module */
/**  
 * @module baasicNotificationsSubscriptionsRouteDefinition  
 * @description Baasic Notifications Subscriptions Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    BaasicNotificationsSubscriptionsUsersRouteDefinition,
    BaasicNotificationsSubscriptionsAnonymousRouteDefinition,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class BasicNotificationsSubscriptionsRouteDefinition extends BaasicBaseRouteDefinition {

    get users(): BaasicNotificationsSubscriptionsUsersRouteDefinition {
        return this.baasicNotificationsSubscriptionsUsersRouteDefinition;
    }

    get anonymous(): BaasicNotificationsSubscriptionsAnonymousRouteDefinition {
        return this.baasicNotificationsSubscriptionsAnonymousRouteDefinition;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsSubscriptionsAnonymousRouteDefinition) protected baasicNotificationsSubscriptionsAnonymousRouteDefinition: BaasicNotificationsSubscriptionsAnonymousRouteDefinition,
        @inject(notificationsTypes.BaasicNotificationsSubscriptionsUsersRouteDefinition) protected baasicNotificationsSubscriptionsUsersRouteDefinition: BaasicNotificationsSubscriptionsUsersRouteDefinition
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */