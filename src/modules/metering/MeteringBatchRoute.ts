/* globals module */
/**  
 * @module meteringBatchRoute  
 * @description Baasic Metering Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Route Definition Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IOptions } from '../../common/contracts';;
import { IMeteringData } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class MeteringBatchRoute extends BaseRoute {

    public readonly createRoute: string = 'metering/data/batch';

    public readonly updateRoute: string = 'metering/data/batch';

    public readonly deleteRoute: string = 'metering/data/batch';

    constructor(@inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses create route; this URI template does not expose any additional options.                     
     * @method                         
     * @example meteringBatchRoute.create();                                  
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                          
     * @example meteringBatchRoute.update();                                  
     **/
    update(): any {
        return super.baseUpdate(this.updateRoute, {});
    }

    /**                     
     * Parses remove route; this URI template does not expose any additional options.                     
     * @method                         
     * @example meteringBatchRoute.delete();                                  
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
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */