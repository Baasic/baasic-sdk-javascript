/* globals module */
/**  
* @module baasicArticleSettingsRouteDefinition  
* @description Baasic Article Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Settings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticleSettings } from 'modules/article/contracts';

@injectable()
export class BaasicArticleSettingsRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }


    /** 				
     * Parses get article settings route; this URI template doesn't expose any additional properties.								
     * @method 				
     * @example baasicArticleSettingsRouteDefinition.get(options);               				
     **/
    get(options?: IGetRequestOptions): any {
        return super.baseGet('article-settings/{?embed,fields}', undefined, options);
    }

    /** 				
     * Parses update article settings route; this URI template doesn't expose any additional properties.								
     * @method 				
     * @example baasicArticleSettingsRouteDefinition.update(data);               				
     **/
    update(data: IArticleSettings): any {
        return super.baseUpdate('article-settings/{id}', data);
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