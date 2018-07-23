/* globals module */
/**  
 * @module lookupRoute  
 * @description Baasic Lookup Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Lookup Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */
import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class LookupRoute extends BaseRoute {


    /**                  
    * Get access section route with route and query parameters.
    **/
    public getAccessSectionRoute: string = 'platform/lookups/access-sections';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) {
        super(appOptions);
    }

    /**                 
     * Parses get access sections route which can be expanded with additional options.            
     * @method                        
     * @example baasicLookupRouteService.getAccessSections();                               
     **/
    getAccessSections(): any {
        return super.baseCreate(this.getAccessSectionRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */