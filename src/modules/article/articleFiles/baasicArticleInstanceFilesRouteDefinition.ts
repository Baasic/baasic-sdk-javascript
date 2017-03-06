/* globals module */
/**  
 * @module baasicArticleInstanceFilesRouteDefinition  
 * @description Baasic Article Instance Files Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    BaasicArticleInstanceFilesBatchRouteDefinition,
    BaasicArticleInstanceFilesStreamsRouteDefinition,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceFilesRouteDefinition extends BaasicBaseRouteDefinition {

    get streams(): BaasicArticleInstanceFilesStreamsRouteDefinition {
        return this.baasicArticleInstanceFilesStreamsRouteDefinition;
    }

    get batch(): BaasicArticleInstanceFilesBatchRouteDefinition {
        return this.baasicArticleInstanceFilesBatchRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleInstanceFilesStreamsRouteDefinition) protected baasicArticleInstanceFilesStreamsRouteDefinition: BaasicArticleInstanceFilesStreamsRouteDefinition,
        @inject(articleTypes.BaasicArticleInstanceFilesBatchRouteDefinition) protected baasicArticleInstanceFilesBatchRouteDefinition: BaasicArticleInstanceFilesBatchRouteDefinition,
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
     * @example baasicArticleInstanceFilesRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(articleId: string, options?: IOptions): any {
        let params = this.modelMapper.findParams(options);
        params.articleId = articleId;
        return super.baseCreate('articles/{articleId}/files/{?searchQuery,page,rpp,sort,embed,fields}', params);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of the file resource.
     * @method 
     * @example baasicArticleInstanceFilesRouteDefinition.get({id: '<file-id>'});
     **/
    get(articleId: string, id: string, options?: IOptions): any {
        let params = this.utility.extend({}, options);
        params.articleId = articleId;
        params.id = id;
        return super.baseGet('articles/{articleId}/files/{id}/{?embed,fields}', params);
    }

    /**
     * Parses link route; this URI template does not expose any additional options.
     * @method  
     * @example baasicArticleInstanceFilesRouteDefinition.link();
     **/
    link(articleId: string, data: IArticleFile): any {
        let params = this.utility.extend({}, data);
        params.articleId = articleId;
        return super.baseCreate('articles/{articleId}/files/link', {});
    }

    /**
     * Parses unlink route; this URI template does not expose any additional options.
     * @method  
     * @example baasicArticleFilesRouteDefinition.unlink(data);
     **/
    unlink(articleId: string, data: IArticleFile, options: Object): any {
        if (!options) {
            options = {};
        }
        let params = this.modelMapper.removeParams(data);
        params.articleId = articleId;
        return super.baseDelete('articles/{articleId}/files/unlink/{id}', params, options, 'unlink');
    }

    unlinkByArticle(articleId: string, data: IArticleFile, options?: any) {
        if (!options) {
            options = {};
        }
        let params = this.modelMapper.removeParams(data);
        params.articleId = articleId;
        return super.baseDelete('articles/{articleId}/files/unlink', params, options, 'unlink-by-article');
    }

    /**
     * Parses update route; this URI template does not expose any additional options.
     * @method  
     * @example baasicArticleInstanceFilesRouteDefinition.update(data);
     **/
    update(articleId: string, data: IArticleFile): any {
        let params = this.modelMapper.updateParams(data);
        params.articleId = articleId;
        return super.baseUpdate('article-files/{id}', params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/