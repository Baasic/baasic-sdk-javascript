/* globals module */
/**  
 * @module baasicArticleFilesRouteDefinition  
 * @description Baasic Article Files Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    BaasicArticleFilesBatchRouteDefinition,
    BaasicArticleFilesStreamsRouteDefinition,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class BaasicArticleFilesRouteDefinition extends BaasicBaseRouteDefinition {

    get streams(): BaasicArticleFilesStreamsRouteDefinition {
        return this.baasicArticleFilesStreamsRouteDefinition;
    }

    get batch(): BaasicArticleFilesBatchRouteDefinition {
        return this.baasicArticleFilesBatchRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleFilesStreamsRouteDefinition) protected baasicArticleFilesStreamsRouteDefinition: BaasicArticleFilesStreamsRouteDefinition,
        @inject(articleTypes.BaasicArticleFilesBatchRouteDefinition) protected baasicArticleFilesBatchRouteDefinition: BaasicArticleFilesBatchRouteDefinition,
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
     * @example baasicArticleFilesRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options: IOptions): any {
        return super.baseFind('article-files/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of the file resource.
     * @method 
     * @example baasicArticleFilesRouteDefinition.get({id: '<file-id>'});
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('article-files/{id}/{?embed,fields}', id, options);
    }

    /**
     * Parses link route; this URI template does not expose any additional options.
     * @method  
     * @example baasicArticleFilesRouteDefinition.link();
     **/
    link(): any {
        return super.baseCreate('article-files/link', {});
    }

    /**
     * Parses unlink route; this URI template does not expose any additional options.
     * @method  
     * @example baasicArticleFilesRouteDefinition.unlink(data);
     **/
    unlink(data: IArticleFile, options: Object): any {
        return super.baseDelete('article-files/unlink/{id}', data, options, 'unlink');
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
        return super.baseUpdate('article-files/{id}', data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/