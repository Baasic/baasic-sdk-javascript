/* globals module */
/**  
 * @module notificationsRouteDefinition  
 * @description Baasic Notifications Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    NotificationsPublishRouteDefinition,
    NotificationsSubscriptionsRouteDefinition,
    NotificationsRegistrationsRouteDefinition,
    NotificationsSettingsRouteDefinition,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class NotificationsRouteDefinition extends BaseRouteDefinition {

    get publish(): NotificationsPublishRouteDefinition {
        return this.notificationsPublishRouteDefinition;
    }

    get subscriptions(): NotificationsSubscriptionsRouteDefinition {
        return this.basicNotificationsSubscriptionsRouteDefinition;
    }

    get registrations(): NotificationsRegistrationsRouteDefinition {
        return this.notificationsRegistrationsRouteDefinition;
    }

    get settings(): NotificationsSettingsRouteDefinition {
        return this.notificationsSettingsRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(notificationsTypes.NotificationsPublishRouteDefinition) protected notificationsPublishRouteDefinition: NotificationsPublishRouteDefinition,
        @inject(notificationsTypes.NotificationsSubscriptionsRouteDefinition) protected basicNotificationsSubscriptionsRouteDefinition: NotificationsSubscriptionsRouteDefinition,
        @inject(notificationsTypes.NotificationsRegistrationsRouteDefinition) protected notificationsRegistrationsRouteDefinition: NotificationsRegistrationsRouteDefinition,
        @inject(notificationsTypes.NotificationsSettingsRouteDefinition) protected notificationsSettingsRouteDefinition: NotificationsSettingsRouteDefinition
    ) { super(appOptions); }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */