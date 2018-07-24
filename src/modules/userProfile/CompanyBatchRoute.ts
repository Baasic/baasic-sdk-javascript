/* globals module */
/**  
 * @module companyBatchRoute  
 * @description Baasic Company Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Company Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class CompanyBatchRoute extends BaseRoute {

    public readonly createRoute: string = 'lookups/companies/batch';

    public readonly updateRoute: string = 'lookups/companies/batch';

    public readonly deleteRoute: string = 'lookups/companies/batch';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses create route; this URI template does not expose any additional options.                     
     * @method                           
     * @example companyRoute.create();                                  
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                           
     * @example companyRoute.update();                                  
     **/
    update(): any {
        return super.baseUpdate(this.updateRoute, {});
    }

    /**                     
     * Parses remove route; this URI template does not expose any additional options.                     
     * @method                           
     * @example companyRoute.remove();                                  
     **/
    delete(): any {
        return super.baseDelete(this.deleteRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */