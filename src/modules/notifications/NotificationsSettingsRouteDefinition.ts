/* globals module */
/**  
 * @module notificationsSettingsRouteDefinition  
 * @description Baasic Notifications Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Settings Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class NotificationsSettingsRouteDefinition extends BaseRouteDefinition {

    public readonly getRoute: string = 'notifications/settings/{id}';

    public readonly updateRoute: string = 'notifications/settings/{id}';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                      
     * Parses get notification settings route; this route should be expanded with the notification provider name.                      
     * @method
     * @param provider The notification provider name.                   
     * @example notificationsSettingsRouteDefinition.get({ id: '<provider-name>' });                      
     */
    get(provider: string): any {
        return super.baseGet(this.getRoute, provider);
    }

    /**                      
     * Parses update notification settings route; this route should be expanded with the notification provider name.                      
     * @method 
     * @param data The notification settings.                    
     * @example notificationsSettingsRouteDefinition.update({ id: '<provider-name>' });                      
     */
    update(data: Object): any {
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */