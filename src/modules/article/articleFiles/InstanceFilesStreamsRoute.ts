/* globals module */
/**  
 * @module articleInstanceFilesStreamsRoute  
 * @description Baasic Article Instance Files Streams Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Files Streams Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/


import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticleFile } from '../contracts';

@injectable()
export class ArticleInstanceFilesStreamsRoute extends BaseRoute {

    public readonly getRoute: string = 'articles/{articleId}/file-streams/{id}/{?width,height,t}';

    public readonly createRoute: string = 'articles/{articleId}/file-streams/{filename}';

    public readonly updateRoute: string = 'articles/{articleId}/file-streams/{id}';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses get route; this route should be expanded with id of desired file stream. Additional supported items are:                     
     * - `width` - width of desired derived image.  
     * - `height` - height of desired derived image. 
     * - `t` - cache invalidation param. 
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article file need to be retrieved.
     * @param data Article File object used to identify stream that needs to be retrieved from the system.    
     * @example articleInstanceFilesRoute.get({id: '<filename>'});
     **/
    get(articleId: string, data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }

        let params = this.utility.extend({}, data);
        params.articleId = articleId;
        return super.baseCreate(this.getRoute, params);
    }

    /**                     
     * Parses create route; this route should be expanded with the filename which indicates where the stream will be saved.                     
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article file need to be inserted.
     * @param data Article File object that need to be inserted into the system. 
     * @example articleInstanceFilesRoute.create({filename: '<filename>'});                                   
     **/
    create(articleId: string, data: IArticleFile): any {
        let params = this.utility.extend({}, data);
        params.articleId = articleId;
        return super.baseCreate(this.createRoute, params);
    }

    /**                     
     * Parses update route; this route should be expanded with the id of the previously saved resource. Additional supported items are:                     
     * - `width` - width of derived image to update.                     
     * - `height` - height of derived image to update.                                        
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article file need to be updated.
     * @param data Article File object used to identify stream that needs to be updated.                        
     * @example articleFilesRoute.update({id: '<filename>'});
     **/
    update(articleId: string, data: IArticleFile): any {
        let params = this.utility.extend({}, data);
        params.articleId = articleId;
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/