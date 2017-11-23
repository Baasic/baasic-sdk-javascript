/* globals module */
/**  
* @module commerceProductSettingsRoute  
* @description Baasic Product Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic product Settings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';
import { IProductSettings } from '.././contracts';

@injectable()
export class CommerceProductSettingsRoute extends BaseRoute {

    public readonly getRoute: string = 'commerce/product-settings/{?embed,fields}';

    public readonly updateRoute: string = 'commerce/product-settings/{id}';
    
    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }


    /** 				
     * Parses get product settings route; this URI template doesn't expose any additional properties.								
     * @method 	
     * @param options Options object that contains embed data.			
     * @example productSettingsRoute.get(options);               				
     **/
    get(options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, undefined, options);
    }

    /** 				
     * Parses update product settings route; this URI template doesn't expose any additional properties.								
     * @method
     * @param options Options object that contains embed data. 				
     * @example productSettingsRoute.update(data);               				
     **/
    update(data: IProductSettings): any {
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