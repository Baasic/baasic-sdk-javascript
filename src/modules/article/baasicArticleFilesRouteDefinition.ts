/* globals module */
/**  
 * @module baasicArticleFilesRouteDefinition  
 * @description Baasic Article Files Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRouteDefinition } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    ArticleFilesBatchRouteDefinition,
    ArticleFilesStreamsRouteDefinition,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class ArticleFilesRouteDefinition extends BaseRouteDefinition {

    public readonly findRoute: string = 'article-files/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'article-files/{id}/{?embed,fields}';

    public readonly linkRoute: string = 'article-files/link';

    public readonly unlinkRoute: string = 'article-files/unlink/{id}';

    public readonly updateRoute: string = 'article-files/{id}';
    
    get streams(): ArticleFilesStreamsRouteDefinition {
        return this.baasicArticleFilesStreamsRouteDefinition;
    }

    get batch(): ArticleFilesBatchRouteDefinition {
        return this.baasicArticleFilesBatchRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleFilesStreamsRouteDefinition) protected baasicArticleFilesStreamsRouteDefinition: ArticleFilesStreamsRouteDefinition,
        @inject(articleTypes.ArticleFilesBatchRouteDefinition) protected baasicArticleFilesBatchRouteDefinition: ArticleFilesBatchRouteDefinition,
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
     * @param options Query resource options object.                        
     * @example baasicArticleFilesRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of the file resource.
     * @method 
     * @param id Article file id which uniquely identifies article resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @example baasicArticleFilesRouteDefinition.get({id: '<file-id>'});
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses link route; this URI template does not expose any additional options.
     * @method  
     * @example baasicArticleFilesRouteDefinition.link();
     **/
    link(): any {
        return super.baseCreate(this.linkRoute, {});
    }

    /**
     * Parses unlink route; this URI template does not expose any additional options.
     * @method  
     * @example baasicArticleFilesRouteDefinition.unlink(data);
     **/
    unlink(data: IArticleFile, options: Object): any {
        return super.baseDelete(this.unlinkRoute, data, options, 'unlink');
    }

    /**
     * Parses update route; this URI template does not expose any additional options.
     * @method  
     * @example baasicArticleFilesRouteDefinition.update(data);
     **/
    update(data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
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