/* globals module */
/**  
 * @module baasicArticleInstanceTagsDefinition  
 * @description Baasic Article Instance Tags Definition provides an easy way to consume Baasic Article Tags REST API end-points. `baasicArticleInstanceTagsRouteClient` functions enable performing standard CRUD operations directly on article tag resources, whereas the `baasicArticleClient` functions allow management between article and article tag. In order to obtain needed routes `baasicArticleInstanceTagsClient` uses `baasicArticleInstanceTagsRouteDefinition`. 
*/

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicArticleInstanceTagsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticle, IArticleTag } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceTagsClient {

    get routeDefinition(): BaasicArticleInstanceTagsRouteDefinition {
        return this.baasicArticleInstanceTagsRouteDefinition;
    }


    constructor(
        @inject(articleTypes.BaasicArticleInstanceTagsRouteDefinition) protected baasicArticleInstanceTagsRouteDefinition: BaasicArticleInstanceTagsRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article tag resources matching the given criteria.                 
     * @method                        
     * @example baasicArticleInstanceTagsClient.find({  
                    pageNumber : 1,  
                    pageSize : 10, 
                    orderBy : '<field>',  
                    orderDirection : '<asc|desc>',  
                    search : '<search-phrase>' 
                })
                .then(function (collection) {  
                    // perform success action here 
                },
                 function (response, status, headers, config) {  
                    // perform error handling here 
                });                    
     **/
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleTag>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IArticleTag>>(this.baasicArticleInstanceTagsRouteDefinition.find(articleId, options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article tag resource.  
     * @param id tag id
     * @param options options object               
     * @method                        
     * @example baasicArticleInstanceTagsClient.get('<articleTag-id>')
                   .then(function (data) {  
                       // perform success action here 
                   },
                    function (response, status, headers, config) {  
                       // perform error handling here 
                   });                
    **/
    get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>> {
        return this.baasicApiClient.get<IArticleTag>(this.baasicArticleInstanceTagsRouteDefinition.get(articleId, id, options));
    }

    /**                     
     * Returns a promise that is resolved once the create article tag action has been performed; this action creates a new tag for an article.                     
     * @method                       
     * @example baasicArticleInstanceTagsClient.create({   
                    articleId : '<article-id>',   
                    tag : {     
                        slug : '<slug>',     
                        sortOrder : 1,    
                        tag : '<tag>'   
                    } 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                     
     **/
    create(data: IArticleTag): PromiseLike<IHttpResponse<IArticleTag>> {
        return this.baasicApiClient.post<IArticleTag>(this.baasicArticleInstanceTagsRouteDefinition.create(data), this.baasicArticleInstanceTagsRouteDefinition.createParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove article tag action has been performed. If the action is successfully completed, the article tag resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleTagsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleTag); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method                        
     * @example // articleTag is a resource previously fetched using get action.
                    baasicArticleInstanceTagsClient.remove(articleTag)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IArticleTag): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceTagsRouteDefinition.delete(data));
    }

    /**                     
     * Returns a promise that is resolved once the removeAll article tag action has been performed. This action will remove all tags from an article if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(article); 
     * let uri = params['model'].links('delete-tags-by-article').href; 
     * ```                     
     * @method                     
     * @example // article is a resource previously fetched using get action.					
                    baasicArticleInstanceTagsClient.removeAll(article)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						    
     **/
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceTagsRouteDefinition.deleteAll(data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/