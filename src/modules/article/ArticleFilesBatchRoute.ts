/* globals module */
/**  
 * @module articleFilesBatchRoute  
 * @description Baasic Article Files Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Files Batch Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class ArticleFilesBatchRoute extends BaseRoute {

    public readonly unlinkRoute: string = 'article-files/batch/unlink';

    public readonly updateRoute: string = 'article-files/batch';

    public readonly linkRoute: string = 'article-files/batch/link';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses unlink route; this URI template does not expose any additional options.                                                        
     * @method
     * @example articleFilesBatchRoute.unlink();                                  
     **/
    unlink(): any {
        return super.baseCreate(this.unlinkRoute, {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.  
     * @method                           
     * @example articleFilesStreamsRoute.update();                                  
     **/
    update(): any {
        return super.baseCreate(this.updateRoute, {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                         
     * @example articleFilesStreamsRoute.link();                                  
     **/
    link(): any {
        return super.baseCreate(this.linkRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/
