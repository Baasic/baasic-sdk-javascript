/* globals module */
/**  
 * @module baasicArticleTagsRouteDefinition  
 * @description Baasic Article Tags Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Tags Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { BaasicArticleTagsSubscriptionsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleTag } from 'modules/article/contracts';

@injectable()
export class BaasicArticleTagsRouteDefinition extends BaasicBaseRouteDefinition {

    get subscriptions(): BaasicArticleTagsSubscriptionsRouteDefinition {
        return this.baasicArticleTagsSubscriptionsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleTagsSubscriptionsRouteDefinition) protected baasicArticleTagsSubscriptionsRouteDefinition: BaasicArticleTagsSubscriptionsRouteDefinition,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }

    /** 				
     * Parses find article tags route which can be expanded with additional options. Supported items are: 				
     * - `searchQuery` - A string value used to identify article tags using the phrase search; multiple tag keywords must be comma separated. 				
     * - `page` - A value used to set the page number, i.e. to retrieve certain article tag subset from the storage. 				
     * - `rpp` - A value used to limit the size of result set per page. 				
     * - `sort` - A string used to set the article tag property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicArticleTagsRouteDefinition.find().expand({searchQuery: '<search-phrase>'});               				
     **/
    find(options?: IOptions): any {
        return super.baseFind('article-tags/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get article tag route which must be expanded with the Id of the previously created article tag resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicArticleTagsRouteDefinition.get({id: '<articleTag-id>'});               				
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('article-tags/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses get article tag route which must be expanded with the Id of the previously created article tag resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicArticleTagsRouteDefinition.update({id: '<articleTag-id>'});               				
     **/
    update(data: IArticleTag): any {
        return super.baseUpdate('article-tags/{id}', data);
    }

    /**                 
     * Parses get article tag route which must be expanded with the Id of the previously created article tag resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicArticleTagsRouteDefinition.delete({id: '<articleTag-id>'});               				
     **/
    delete(data: IArticleTag): any {
        return super.baseDelete('article-tags/{id}', data);
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
- All end-point objects are transformed by the associated route service. 
*/