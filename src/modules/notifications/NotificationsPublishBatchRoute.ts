/* globals module */
/**  
 * @module notificationsPublishBatchRoute  
 * @description Baasic Notifications Publish Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Publish Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class NotificationsPublishBatchRoute extends BaseRoute {

    public readonly createRoute: string = 'notifications/publish/batch';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                          
     * Parses create publish batch route; this route does not expose any additional options.                          
     * @method                      
     * @example notificationsPublishBatchRoute.create();                          
     */
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */