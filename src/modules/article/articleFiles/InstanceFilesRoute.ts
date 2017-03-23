/* globals module */
/**  
 * @module articleInstanceFilesRoute  
 * @description Baasic Article Instance Files Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    ArticleInstanceFilesBatchRoute,
    ArticleInstanceFilesStreamsRoute,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class ArticleInstanceFilesRoute extends BaseRoute {

    public readonly findRoute: string = 'articles/{articleId}/files/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'articles/{articleId}/files/{id}/{?embed,fields}';

    public readonly linkRoute: string = 'articles/{articleId}/files/link';

    public readonly unlinkRoute: string = 'articles/{articleId}/files/unlink/{id}';

    public readonly unlinkByArticleRoute: string = 'articles/{articleId}/files/unlink/{id}';

    public readonly updateRoute: string = 'articles/{articleId}/comments/{id}';

    get streams(): ArticleInstanceFilesStreamsRoute {
        return this.articleInstanceFilesStreamsRoute;
    }

    get batch(): ArticleInstanceFilesBatchRoute {
        return this.articleInstanceFilesBatchRoute;
    }

    constructor(
        @inject(articleTypes.ArticleInstanceFilesStreamsRoute) protected articleInstanceFilesStreamsRoute: ArticleInstanceFilesStreamsRoute,
        @inject(articleTypes.ArticleInstanceFilesBatchRoute) protected articleInstanceFilesBatchRoute: ArticleInstanceFilesBatchRoute,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing file properties using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain file subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the file property to sort the result collection by. 	
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be retrieved.
     * @param options Query resource options object.                        
     * @example articleInstanceFilesRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(articleId: string, options?: IOptions): any {
        let params = this.modelMapper.findParams(options);
        params.articleId = articleId;
        return super.baseCreate(this.findRoute, params);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of the file resource.
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be retrieved.
     * @param id Article file id which uniquely identifies article file that needs to be retrieved.
     * @param options options object that contains embed data. 
     * @example articleInstanceFilesRoute.get({id: '<file-id>'});
     **/
    get(articleId: string, id: string, options?: IGetRequestOptions): any {
        let params = this.utility.extend({}, options);
        params.articleId = articleId;
        params.id = id;
        return super.baseGet(this.getRoute, params);
    }

    /**
     * Parses link route; this URI template does not expose any additional options.
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be deleted.
     * @param data
     * @param options  
     * @example articleInstanceFilesRoute.link();
     **/
    link(articleId: string, data: IArticleFile): any {
        let params = this.utility.extend({}, data);
        params.articleId = articleId;
        return super.baseCreate(this.linkRoute, {});
    }

    /**
     * Parses unlink route; this URI template does not expose any additional options.
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be deleted.
     * @param data
     * @param options  
     * @example articleFilesRoute.unlink(data);
     **/
    unlink(articleId: string, data: IArticleFile, options: Object): any {
        if (!options) {
            options = {};
        }
        let params = this.modelMapper.removeParams(data);
        params.articleId = articleId;
        return super.baseDelete(this.unlinkRoute, params, options, 'unlink');
    }

    /**
     * Parses unlink by article route; this URI template does not expose any additional options.
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be deleted.
     * @param data
     * @param options  
     * @example articleFilesRoute.unlinkByArticle(data);
     **/
    unlinkByArticle(articleId: string, data: IArticleFile, options?: any) {
        if (!options) {
            options = {};
        }
        let params = this.modelMapper.removeParams(data);
        params.articleId = articleId;
        return super.baseDelete(this.unlinkByArticleRoute, params, options, 'unlink-by-article');
    }

    /**
     * Parses update route; this URI template does not expose any additional options.
     * @method  
     * @example articleInstanceFilesRoute.update(data);
     **/
    update(articleId: string, data: IArticleFile): any {
        let params = this.modelMapper.updateParams(data);
        params.articleId = articleId;
        return super.baseUpdate(this.updateRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/