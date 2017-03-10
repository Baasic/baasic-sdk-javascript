/* globals module */
/**  
 * @module baasicArticleInstanceRatingsRouteDefinition  
 * @description Baasic Article Instance Ratings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Sub Ratings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticle, IRating } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceRatingsRouteDefinition extends BaasicBaseRouteDefinition {

    public readonly createRoute: string = 'articles/{articleId}/ratings/';

    public readonly findRoute: string = 'articles/{articleId}/ratings{?page,rpp,sort,embed,fields}';

    public readonly findByUserRoute: string = 'articles/{articleId}/users/{username}/ratings/{?embed,fields}';

    public readonly getRoute: string = 'articles/{articleId}/ratings/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'articles/{articleId}/ratings/{id}';

    public readonly deleteRoute: string = 'articles/{articleId}/ratings/{id}';

    public readonly deleteAllRoute: string = 'articles/{articleId}/ratings';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }

    /**                 
     * Parses create article rating route; this URI does not support any additional embed items.                 
     * @method                     
     * @example baasicArticleInstanceRatingsRouteDefinition.create(data);                 
     **/
    create(data: IRating): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**                 
     * Parses find article rating route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing article rating properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain article rating subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the article rating property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleInstanceRatingsRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(articleId: string, options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses findByUser article rating route which can be expanded with additional options. Supported items are:                 
     * - `username` - A value that uniquely identifies a user which has created an article rating.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain article rating subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the article rating property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleInstanceRatingsRouteDefinition.find({username: '<username>'});                               
     **/
    findByUser(username: string, options?: IOptions): any {
        let params = this.utility.extend({}, options);
        params.username = username;
        return super.baseFind(this.findByUserRoute, params);
    }

    /**                 
     * Parses get article rating route which must be expanded with the Id of the previously created article rating resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleInstanceRatingsRouteDefinition.get({id: '<articleRating-id>'});                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses update article rating route; this URI does not support any additional embed items.                 
     * @method                     
     * @example baasicArticleInstanceRatingsRouteDefinition.update(data);                 
     **/
    update(data: IRating): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
    * Parses delete article rating route; this URI does not support any additional embed items.                 
    * @method                     
    * @example baasicArticleInstanceRatingsRouteDefinition.delete(data);                 
    **/
    delete(data: IRating): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**                 
    * Parses delete article rating route; this URI does not support any additional embed items.                 
    * @method                     
    * @example baasicArticleInstanceRatingsRouteDefinition.deleteAll(data);                 
    **/
    deleteAll(data: IArticle): any {
        return super.baseDelete(this.deleteAllRoute, data, undefined, 'delete-ratings-by-article');
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/