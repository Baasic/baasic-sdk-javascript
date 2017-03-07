/* globals module */
/**  
 * @module baasicMeteringCategoryBatchRouteDefinition  * @description Baasic Metering Category Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Category Batch Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { IMeteringCategory } from 'modules/metering/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class BaasicMeteringCategoryBatchRouteDefinition extends BaasicBaseRouteDefinition {

    public readonly createRoute: string = 'metering/categories/batch';

    public readonly updateRoute: string = 'metering/categories/batch';

    public readonly deleteRoute: string = 'metering/categories/batch';
    
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses create route; this URI template does not expose any additional options.                     
     * @method                        
     * @example baasicMeteringCategoryBatchRouteDefinition.create();                                  
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                     
     * Parses create route; this URI template does not expose any additional options.                     
     * @method                        
     * @example baasicMeteringCategoryBatchRouteDefinition.update();                                  
     **/
    update(): any {
        return super.baseUpdate(this.updateRoute, {});
    }

    /**                     
     * Parses remove route; this URI template does not expose any additional options.                     
     * @method                         
     * @example baasicMeteringCategoryBatchRouteDefinition.delete();                                  
     **/
    delete(): any {
        return super.baseDelete(this.deleteRoute, {});
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */