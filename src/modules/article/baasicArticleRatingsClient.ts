/* globals module */
/**  
 * @module baasicArticleRatingsClient  
 * @description Baasic Article Ratings Client provides an easy way to consume Baasic Article Ratings REST API end-points. `baasicArticleRatingsClient` functions enable performing standard CRUD operations directly on article rating resources, whereas the `baasicArticleService` functions allow management between article and article rating. In order to obtain needed routes `baasicArticleRatingsClient` uses `baasicArticleRatingsRouteDefinition`. 
*/


import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicArticleRatingsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IRating } from 'modules/article/contracts';

@injectable()
export class BaasicArticleRatingsClient {

    /**                 
     * Provides direct access to `baasicArticleRatingsRouteDefinition`.                
     * @method                        
     * @example baasicArticleRatingsClient.routeDefinition.get(id);                 
     **/
    get routeDefinition(): BaasicArticleRatingsRouteDefinition {
        return this.baasicArticleRatingsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleRatingsRouteDefinition) protected baasicArticleRatingsRouteDefinition: BaasicArticleRatingsRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**       
     * Returns a promise that is resolved once the create article rating action has been performed; this action creates a new rating for an article.                   
     * @method                       
     * @example baasicArticleRatingsClient.create({ articleId : '<article-id>', rating : 5, userId : '<user-id>' })
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });                   
     **/
    create(data: IRating): PromiseLike<IHttpResponse<IRating>> {
        return this.baasicApiClient.post(this.baasicArticleRatingsRouteDefinition.create(data), this.baasicArticleRatingsRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article rating resources matching the given criteria.                  
     * @method                         
     * @example baasicArticleRatingsClient.find({ 
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>> {
        return this.baasicApiClient.get(this.baasicArticleRatingsRouteDefinition.find(options));
    }

    /**                  
     * Returns a promise that is resolved once the findByUser action has been performed. Success response returns a list of article rating resources filtered by username.                  
     * @method                         
     * @example baasicArticleRatingsClient.find('<username>', {   
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
    findByUser(username: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>> {
        return this.baasicApiClient.get(this.baasicArticleRatingsRouteDefinition.findByUser(username, options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article rating resource.                  
     * @method                         
     * @example baasicArticleRatingsClient.get('<articleRating-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRating>> {
        return this.baasicApiClient.get(this.baasicArticleRatingsRouteDefinition.get(id, options));
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
                    baasicArticleRatingsClient.update(articleRating)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IRating): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleRatingsRouteDefinition.update(data), this.baasicArticleRatingsRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove article rating action has been performed. If the action is successfully completed, the article rating resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleRating); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method                        
     * @example // articleRating is a resource previously fetched using get action.				 
                    baasicArticleRatingsClient.remove(articleRating)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IRating): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleRatingsRouteDefinition.delete(data));
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