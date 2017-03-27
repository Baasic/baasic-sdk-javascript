/* globals module */
/**  
 * @module notificationsSubscriptionsUsersBatchRoute  
 * @description Baasic Notifications Subscriptions Users Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Subscriptions Users Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IUserSubscription } from './contracts';

@injectable()
export class NotificationsSubscriptionsUsersBatchRoute extends BaseRoute {

    public readonly createRoute: string = 'notifications/subscriptions/batch';

    public readonly deleteRoute: string = 'notifications/subscriptions/batch';

    public readonly updateRoute: string = 'notifications/subscriptions/batch';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                              
     * Parses create user subscriptions batch route; this route does not expose any additional options                              
     * @method                              
     * @example notificationsSubscriptionsUsersBatchRoute.create();                              
     */
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                              
     * Parses remove user subscriptions batch route; this route does not expose any additional options                              
     * @method                          
     * @example notificationsSubscriptionsUsersBatchRoute.delete(ids);                              
     */
    delete(): any {
        return super.baseDelete(this.deleteRoute, {});
    }

    /**                              
     * Parses update user subscriptions batch route; this route does not expose any additional options                              
     * @method                             
     * @example notificationsSubscriptionsUsersBatchRoute.update();                              
     */
    update(): any {
        return super.baseUpdate(this.updateRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */