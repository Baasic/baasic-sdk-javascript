/* globals module */
/**  
 * @module articleInstanceFilesBatchRoute  
 * @description Baasic Article Instance Files Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Files Batch Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class ArticleInstanceFilesBatchRoute extends BaseRoute {

    public readonly unlinkRoute: string = 'articles/{articleId}/files/batch/unlink';

    public readonly updateRoute: string = 'articles/{articleId}/files/batch';

    public readonly linkRoute: string = 'articles/{articleId}/files/batch/link';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses unlink route; this URI template does not expose any additional options.                                                        
     * @method
     * @param articleId Article file id of the original article file used to identify article files on which delete action should be performed.
     * @example articleInstanceFilesBatchRoute.unlink(articleId);                                  
     **/
    unlink(articleId: string): any {
        let params = { articleId: articleId };
        return super.baseCreate(this.unlinkRoute, params);
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.  
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article file need to be updated.                           
     * @example articleInstanceFilesStreamsRoute.update(articleId);                                  
     **/
    update(articleId: string): any {
        let params = { articleId: articleId };
        return super.baseCreate(this.updateRoute, params);
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be linked.                           
     * @example articleInstanceFilesStreamsRoute.link(articleId);                                  
     **/
    link(articleId: string): any {
        let params = { articleId: articleId };
        return super.baseCreate(this.linkRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/
