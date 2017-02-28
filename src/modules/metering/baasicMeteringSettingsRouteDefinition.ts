/* globals module */
/**  
 * @module baasicMeteringSettingsRouteDefinition  
 * @description Baasic Metering Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Settings Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { injectable, inject } from "inversify";
import { IMeteringData } from 'modules/metering/contracts';

export class BaasicMeteringSettingsRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper) { super(modelMapper); }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method                        
     * @example baasicMeteringSettingsRouteDefinition.get();                               
     **/
    get(options?: any): any {
        return super.baseGet('metering/settings/{id}/{?embed,fields}', undefined, options);
    }

    /**                 
    * Parses updatea route; this route doesn't expose any properties.                 
    * @method 
    * @param data An meteringSetting object used to update specified MeteringSetting resource.                       
    * @example baasicMeteringSettingsRouteDefinition.update(data);                               
    **/
    update(data: IMeteringData): any {
        return super.baseUpdate('metering/settings/{id}', data);
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