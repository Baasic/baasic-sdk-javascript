/* globals module */ 
/**  
 * @module baasicArticleRatingsRouteDefinition  
 * @description Baasic Article Ratings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Ratings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { BaasicBaseRouteDefinition } from '../baasicBaseRouteDefinition';

export class BaasicArticleRatingsRouteDefinition extends BaasicBaseRouteDefinition {

    /**                 
     * Parses create article rating route; this URI does not support any additional embed items.                 
     * @method                     
     * @example baasicArticleRatingsRouteDefinition.create.expand({});                 
     **/
    create(): any {
        return this.baasicUriTemplateProcessor.parse('article-ratings');
    }

    /**                 
     * Parses find article rating route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing article rating properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain article rating subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the article rating property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleRatingsRouteDefinition.find.expand({searchQuery: '<search-phrase>'});                               
     **/ 
    find(): any {
        return this.baasicUriTemplateProcessor.parse('article-ratings/{?searchQuery,page,rpp,sort,embed,fields}');
    }

    /**                 
     * Parses findByUser article rating route which can be expanded with additional options. Supported items are:                 
     * - `username` - A value that uniquely identifies a user which has created an article rating.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain article rating subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the article rating property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleRatingsRouteDefinition.find.expand({username: '<username>'});                               
     **/
    findByUser(): any {
        return this.baasicUriTemplateProcessor.parse('article-ratings/{?username,page,rpp,sort,embed,fields}');
    }

     /**                 
      * Parses get article rating route which must be expanded with the Id of the previously created article rating resource in the system. Additional expand supported items are: 				
      * - `embed` - Comma separated list of resources to be contained within the current representation.                 
      * @method                        
      * @example baasicArticleRatingsRouteDefinition.get.expand({id: '<articleRating-id>'});                               
      **/
    get(): any {
        return this.baasicUriTemplateProcessor.parse('article-ratings/{id}/{?embed,fields}');
    }

    /**                 
     * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.                 
     * @method                 
     * @example baasicArticleRatingsRouteDefinition.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});                 
     **/	
    parse(link: string): any {
        return super.parse(link);
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