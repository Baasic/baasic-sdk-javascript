/* globals module */
/**  
 * @module baasicArticleRatingsRouteDefinition  
 * @description Baasic Article Ratings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Ratings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IRating } from 'modules/article/contracts';

@injectable()
export class BaasicArticleRatingsRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }

    /**                 
     * Parses create article rating route; this URI does not support any additional embed items.                 
     * @method                     
     * @example baasicArticleRatingsRouteDefinition.create(data);                 
     **/
    create(data: IRating): any {
        return super.baseCreate('article-ratings', data);
    }

    /**                 
     * Parses find article rating route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing article rating properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain article rating subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the article rating property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleRatingsRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind('article-ratings/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses findByUser article rating route which can be expanded with additional options. Supported items are:                 
     * - `username` - A value that uniquely identifies a user which has created an article rating.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain article rating subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the article rating property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleRatingsRouteDefinition.find({username: '<username>'});                               
     **/
    findByUser(username: string, options?: IOptions): any {
        let params = this.utility.extend({}, options);
        params.username = username;
        return super.baseFind('article-ratings/{?username,page,rpp,sort,embed,fields}', params);
    }

    /**                 
     * Parses get article rating route which must be expanded with the Id of the previously created article rating resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleRatingsRouteDefinition.get({id: '<articleRating-id>'});                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('article-ratings/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses update article rating route; this URI does not support any additional embed items.                 
     * @method                     
     * @example baasicArticleRatingsRouteDefinition.update(data);                 
     **/
    update(data: IRating): any {
        return super.baseUpdate('article-ratings/{id}', data);
    }

    /**                 
    * Parses delete article rating route; this URI does not support any additional embed items.                 
    * @method                     
    * @example baasicArticleRatingsRouteDefinition.delete(data);                 
    **/
    delete(data: IRating): any {
        return super.baseDelete('article-ratings/{id}', data);
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