/* globals module */
/**  
 * @module notificationsRoute  
 * @description Baasic Notifications Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    NotificationsPublishRoute,
    NotificationsSubscriptionsRoute,
    NotificationsRegistrationsRoute,
    NotificationsSettingsRoute,
    TYPES as notificationsTypes
} from 'modules/notifications';

@injectable()
export class NotificationsRoute extends BaseRoute {

    get publish(): NotificationsPublishRoute {
        return this.notificationsPublishRoute;
    }

    get subscriptions(): NotificationsSubscriptionsRoute {
        return this.basicNotificationsSubscriptionsRoute;
    }

    get registrations(): NotificationsRegistrationsRoute {
        return this.notificationsRegistrationsRoute;
    }

    get settings(): NotificationsSettingsRoute {
        return this.notificationsSettingsRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(notificationsTypes.NotificationsPublishRoute) protected notificationsPublishRoute: NotificationsPublishRoute,
        @inject(notificationsTypes.NotificationsSubscriptionsRoute) protected basicNotificationsSubscriptionsRoute: NotificationsSubscriptionsRoute,
        @inject(notificationsTypes.NotificationsRegistrationsRoute) protected notificationsRegistrationsRoute: NotificationsRegistrationsRoute,
        @inject(notificationsTypes.NotificationsSettingsRoute) protected notificationsSettingsRoute: NotificationsSettingsRoute
    ) { super(appOptions); }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */