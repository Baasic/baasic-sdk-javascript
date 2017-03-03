/* globals module */
/**  
 * @module baasicNotificationsSubscriptionsUsersBatchRouteDefinition  
 * @description Baasic Notifications Subscriptions Users Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Subscriptions Users Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IUserSubscription } from 'modules/notifications/contracts';

@injectable()
export class BaasicNotificationsSubscriptionsUsersBatchRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                              
     * Parses create user subscriptions batch route; this route does not expose any additional options                              
     * @method                              
     * @example baasicNotificationsSubscriptionsUsersBatchRouteDefinition.create();                              
     */
    create(): any {
        return super.baseCreate('notifications/subscriptions/batch', {});
    }

    /**                              
     * Parses remove user subscriptions batch route; this route does not expose any additional options                              
     * @method                          
     * @example baasicNotificationsSubscriptionsUsersBatchRouteDefinition.delete(ids);                              
     */
    delete(ids: string[]): any {
        return super.baseDelete('notifications/subscriptions/batch', ids);
    }

    /**                              
     * Parses update user subscriptions batch route; this route does not expose any additional options                              
     * @method                             
     * @example baasicNotificationsSubscriptionsUsersBatchRouteDefinition.update();                              
     */
    update(): any {
        return super.baseUpdate('notifications/subscriptions/batch', undefined);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */