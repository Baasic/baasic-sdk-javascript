/* globals module */
/**  
 * @module roleRoute  
 * @description Baasic Role Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Role Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { IRole } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class RoleBatchRoute extends BaseRoute {

    /**                  
    * Create route with route and query parameters.
    **/
    public createRoute: string = 'lookups/roles/batch';

    /**                  
    * Update route with route and query parameters.
    **/
    public updateRoute: string = 'lookups/roles/batch';

    /**                  
    * Delete route with route and query parameters.
    **/
    public removeRoute: string = 'lookups/roles/batch';    
    

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                 
     * Parses create batch roles route; this URI template does not expose any additional options.                 
     * @method                        
     * @example roleBatchRoute.create();                               
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update batch roles route.
     * @method
     * @param data A role object used to update specified role resource.
     * @example roleBatchRoute.update(data);
     */
    update(): any {
        return super.baseUpdate(this.updateRoute, {});
    }

    /**
     * Parses delete batch roles route.
     * @method
     * @param data A role object used to delete specified role resource.
     * @example roleBatchRoute.delete(data);
     */
    delete(): any {
        return super.baseDelete(this.removeRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
*/