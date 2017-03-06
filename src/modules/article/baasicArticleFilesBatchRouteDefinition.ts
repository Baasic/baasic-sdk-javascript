/* globals module */
/**  
 * @module baasicArticleFilesBatchRouteDefinition  
 * @description Baasic Article Files Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Files Batch Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class BaasicArticleFilesBatchRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses unlink route; this URI template does not expose any additional options.                                                        
     * @method
     * @example baasicArticleFilesBatchRouteDefinition.unlink();                                  
     **/
    unlink(): any {
        return super.baseCreate('article-files/batch/unlink', {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.  
     * @method                           
     * @example baasicArticleFilesStreamsRouteDefinition.update();                                  
     **/
    update(): any {
        return super.baseCreate('article-files/batch', {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method batch.link                           
     * @example baasicArticleFilesStreamsRouteDefinition.link();                                  
     **/
    link(): any {
        return super.baseCreate('article-files/batch/link', {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/
