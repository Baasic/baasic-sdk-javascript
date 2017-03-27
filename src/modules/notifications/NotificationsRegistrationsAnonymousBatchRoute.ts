/* globals module */
/**  
 * @module notificationsRegistrationsAnonymousBatchRoute  
 * @description Baasic Notifications Registrations Anonymous Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Registrations Anonymous Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IAnonymousRegistration } from 'modules/notifications/contracts';

export class NotificationsRegistrationsAnonymousBatchRoute extends BaseRoute {

    public readonly createRoute: string = 'notifications/registrations/anonymous/batch';

    public readonly deleteRoute: string = 'notifications/registrations/anonymous/batch';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                              
     * Parses create anonymous registrations batch route; this route does not expose any additional options                              
     * @method                            
     * @example notificationsRegistrationsAnonymousBatchRoute.create();                              
     */
    create(): any {
        return this.baseCreate(this.createRoute, {});
    }

    /**                              
     * Parses delete anonymous registrations batch route; this route does not expose any additional options                              
     * @method                             
     * @example notificationsRegistrationsAnonymousBatchRoute.delete();                              
     */
    delete(): any {
        return this.baseDelete(this.deleteRoute, {});
    }

    /**                              
     * Parses update anonymous registrations batch route; this route does not expose any additional options                              
     * @method                              
     * @example notificationsRegistrationsAnonymousBatchRoute.update();                              
     */
    update(): any {
        return this.baseUpdate('notifications/registrations/anonymous/batch', {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */