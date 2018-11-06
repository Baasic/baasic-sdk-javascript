/* globals module */
/**  
 * @module notificationsRegistrationsRoute  
 * @description Baasic Notifications Registrations Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Registrations Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    NotificationsRegistrationsAnonymousRoute,
    NotificationsRegistrationsUsersRoute,
    TYPES as notificationsTypes
} from './';

@injectable()
export class NotificationsRegistrationsRoute extends BaseRoute {

    get users(): NotificationsRegistrationsUsersRoute {
        return this.notificationsRegistrationsUsersRoute;
    }

    get anonymous(): NotificationsRegistrationsAnonymousRoute {
        return this.notificationsRegistrationsAnonymousRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(notificationsTypes.NotificationsRegistrationsUsersRoute) protected notificationsRegistrationsUsersRoute: NotificationsRegistrationsUsersRoute,
        @inject(notificationsTypes.NotificationsRegistrationsAnonymousRoute) protected notificationsRegistrationsAnonymousRoute: NotificationsRegistrationsAnonymousRoute
    ) { super(appOptions); }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */