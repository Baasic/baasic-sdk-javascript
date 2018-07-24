/* globals module */
/**  
 * @module maintenanceClient  
 * @description  Maintenance Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `maintenanceClient` uses `maintenanceRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MaintenanceRoute, TYPES as maintenanceTypes } from './';

@injectable()
export class MaintenanceClient {

    /**                 
     * Provides direct access to `maintenanceRoute`.                 
     * @method                        
     * @example maintenanceClient.routeDefinition.maintain(id);                 
     **/
    get routeDefinition(): MaintenanceRoute {
        return this.maintenanceRoute;
    }

    constructor(
        @inject(maintenanceTypes.MaintenanceRoute) protected maintenanceRoute: MaintenanceRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    maintainApp(id: string): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put<any>(this.routeDefinition.maintainApp(id), {});
    }

    maintain(): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put<any>(this.routeDefinition.maintain(), {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/