/* globals module */
/**  
 * @module meteringSettingsRoute  
 * @description Baasic Metering Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Settings Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions } from '../../common/contracts';;
import { IMeteringSettings } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class MeteringSettingsRoute extends BaseRoute {

    public readonly getRoute: string = 'metering/settings/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'metering/settings/{id}';

    constructor(@inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method                        
     * @example meteringSettingsRoute.get();                               
     **/
    get(options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, undefined, options);
    }

    /**                 
    * Parses updatea route; this route doesn't expose any properties.                 
    * @method 
    * @param data An meteringSetting object used to update specified MeteringSetting resource.                       
    * @example meteringSettingsRoute.update(data);                               
    **/
    update(data: IMeteringSettings): any {
        return super.baseUpdate(this.updateRoute, data);
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