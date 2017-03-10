/* globals module */
/**  
 * @module baasicArticleInstanceTagsRouteDefinition  
 * @description Baasic Article Instance Tags Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Instance Tags Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticle, IArticleTag } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceTagsRouteDefinition extends BaasicBaseRouteDefinition {

    public readonly findRoute: string = 'articles/{articleId}/tags/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'articles/{articleId}/tags/{tag}/{?embed,fields}';

    public readonly createRoute: string = 'articles/{articleId}/tags/{tag}/';

    public readonly deleteRoute: string = 'articles/{articleId}/tags/{id}';

    public readonly deleteAllRoute: string = 'articles/{articleId}/tags';

    constructor(
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
     * @example baasicArticleInstanceTagsRouteDefinition.find().expand({searchQuery: '<search-phrase>'});               				
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get article tag route which must be expanded with the Id of the previously created article tag resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicArticleInstanceTagsRouteDefinition.get({id: '<articleTag-id>'});               				
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create article tag route which must be expanded with the Id of the previously created article tag resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicArticleInstanceTagsRouteDefinition.create({id: '<articleTag-id>'});               				
     **/
    create(data: IArticleTag): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**                 
     * Parses get article tag route which must be expanded with the Id of the previously created article tag resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicArticleInstanceTagsRouteDefinition.delete({id: '<articleTag-id>'});               				
     **/
    delete(data: IArticleTag): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**                 
     * Parses get article tag route which must be expanded with the Id of the previously created article tag resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicArticleInstanceTagsRouteDefinition.deleteAll({id: '<articleTag-id>'});               				
     **/
    deleteAll(data: IArticle): any {
        return super.baseDelete(this.deleteAllRoute, data, undefined, 'delete-tags-by-article');
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