/* globals module */
/**  
 * @module maintenanceRoute  
 * @description Baasic Platform Maintenance Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Maintenance Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */
import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';

@injectable()
export class MaintenanceRoute extends BaseRoute {


    /**                  
     * Maintenance route with route and query parameters.
     **/
    public applicationMaintenanceRoute: string = 'platform/maintenance/{id}';

    /**                  
     * Maintenance route with route and query parameters.
     **/
    public maintenanceRoute: string = 'platform/maintenance';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) {
        super(appOptions);
    }

    /**                  
     * Parses application maintenance route.                 
     * @method                         
     * @example maintenanceRoute.maintain(id);                                
     **/
    maintainApp(id: string): any {
        return super.baseUpdate(this.applicationMaintenanceRoute, id);
    }

    /**                  
     * Parses maintenance route.                 
     * @method                         
     * @example maintenanceRoute.maintain();                                
     **/
    maintain(): any {
        return super.baseUpdate(this.maintenanceRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */