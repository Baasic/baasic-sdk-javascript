/* globals module */
/**
 * @module notificationsRegistrationsUsersBatchRoute
 * @description Baasic Notifications Registrations Users Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Registrations Users Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';
import { IUserRegistration } from './contracts';

@injectable()
export class NotificationsRegistrationsUsersBatchRoute extends BaseRoute {

    public readonly createRoute: string = 'notifications/registrations/user/batch';

    public readonly deleteRoute: string = 'notifications/registrations/user/batch';

    public readonly updateRoute: string = 'notifications/registrations/user/batch';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**
     * Parses create users registrations batch route; this route does not expose any additional options
     * @method
     * @example notificationsRegistrationsUsersBatchRoute.create();
     */
    create(): any {
        return this.baseCreate(this.createRoute, {});
    }

    /**
     * Parses remove users registrations batch route; this route does not expose any additional options
     * @method
     * @example notificationsRegistrationsUsersBatchRoute.delete();
     */
    delete(): any {
        return this.baseDelete(this.deleteRoute, {});
    }

    /**
     * Parses update users registrations batch route; this route does not expose any additional options
     * @method
     * @example notificationsRegistrationsUsersBatchRoute.update();
     */
    update(): any {
        return this.baseUpdate(this.updateRoute, {});
    }
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
 */