/* globals module */
/**  
 * @module baasicArticleSubRatingsClient  
 * @description Baasic Article Sub Ratings Client provides an easy way to consume Baasic Article Ratings REST API end-points. `baasicArticleRatingsClient` functions enable performing standard CRUD operations directly on article rating resources, whereas the `baasicArticleService` functions allow management between article and article rating. In order to obtain needed routes `baasicArticleRatingsClient` uses `baasicArticleRatingsRouteDefinition`. 
*/


import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicArticleInstanceRatingsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticle, IRating } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceRatingsClient {

    /**                 
     * Provides direct access to `baasicArticleRatingsRouteDefinition`.                
     * @method                        
     * @example baasicArticleInstanceRatingsClient.routeDefinition.get(id);                 
     **/
    get routeDefinition(): BaasicArticleInstanceRatingsRouteDefinition {
        return this.baasicArticleInstanceRatingsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleInstanceRatingsRouteDefinition) protected baasicArticleInstanceRatingsRouteDefinition: BaasicArticleInstanceRatingsRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**       
     * Returns a promise that is resolved once the create article rating action has been performed; this action creates a new rating for an article.                   
     * @method                       
     * @example baasicArticleInstanceRatingsClient.create({ articleId : '<article-id>', rating : 5, userId : '<user-id>' })
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });                   
     **/
    create(data: IRating): PromiseLike<IHttpResponse<IRating>> {
        return this.baasicApiClient.post<IRating>(this.baasicArticleInstanceRatingsRouteDefinition.create(data), this.baasicArticleInstanceRatingsRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article rating resources matching the given criteria.                  
     * @method                         
     * @example baasicArticleInstanceRatingsClient.find({ 
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
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IRating>>(this.baasicArticleInstanceRatingsRouteDefinition.find(articleId, options));
    }

    /**                  
     * Returns a promise that is resolved once the findByUser action has been performed. Success response returns a list of article rating resources filtered by username.                  
     * @method                         
     * @example baasicArticleInstanceRatingsClient.find('<username>', {   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>'
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                     
     **/
    findByUser(articleId: string, username: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IRating>>(this.baasicArticleInstanceRatingsRouteDefinition.findByUser(articleId, username, options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article rating resource.                  
     * @method                         
     * @example baasicArticleInstanceRatingsClient.get('<articleRating-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRating>> {
        return this.baasicApiClient.get<IRating>(this.baasicArticleInstanceRatingsRouteDefinition.get(articleId, id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update article rating action has been performed; this action updates an article rating. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleRating); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // articleRating is a resource previously fetched using get action. 
                    articleRating.rating = 4; 
                    baasicArticleInstanceRatingsClient.update(articleRating)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IRating): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceRatingsRouteDefinition.update(data), this.baasicArticleInstanceRatingsRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove article rating action has been performed. If the action is successfully completed, the article rating resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleRating); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method                        
     * @example // articleRating is a resource previously fetched using get action.				 
                    baasicArticleInstanceRatingsClient.remove(articleRating)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IRating): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceRatingsRouteDefinition.delete(data));
    }

    /**                     
     * Returns a promise that is resolved once the removeAll article rating action has been performed. If the action is successfully completed, the article rating resources will be permanently removed from the system for a specified article resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleInstanceRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     *  ``` 
     * let params = modelMapper.removeParams(article); 
     * let uri = params['model'].links('delete-ratings-by-article').href; 
     * ```                     
     * @method                     
     * @example // article is a resource previously fetched using get action.					
                    baasicArticleInstanceRatingsClient.removeAll(article)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						    
     **/
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceRatingsRouteDefinition.deleteAll(data));
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