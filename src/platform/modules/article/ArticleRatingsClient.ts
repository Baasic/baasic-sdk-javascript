/* globals module */
/**  
 * @module articleRatingsClient  
 * @description  Article Ratings Client provides an easy way to consume  Article Ratings REST API end-points. `articleRatingsClient` functions enable performing standard CRUD operations directly on article rating resources, whereas the `articleService` functions allow management between article and article rating. In order to obtain needed routes `articleRatingsClient` uses `articleRatingsRoute`. 
*/


import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleRatingsRoute, TYPES as articleTypes } from './';
import { IRating } from './contracts';

@injectable()
export class ArticleRatingsClient {

    /**                 
     * Provides direct access to `articleRatingsRoute`.                
     * @method                        
     * @example articleRatingsClient.routeDefinition.get(id);                 
     **/
    get routeDefinition(): ArticleRatingsRoute {
        return this.articleRatingsRoute;
    }

    constructor(
        @inject(articleTypes.ArticleRatingsRoute) protected articleRatingsRoute: ArticleRatingsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**       
     * Returns a promise that is resolved once the create article rating action has been performed; this action creates a new rating for an article.                   
     * @method 
     * @param data An article rating object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create article rating action has been performed.                      
     * @example articleRatingsClient.create({ 
                    articleId : '<article-id>', 
                    rating : 5, 
                    userId : '<user-id>' 
                })
                .then(function (data) { 
                    // perform success action here 
                },
                 function (response, status, headers, config) { 
                    // perform error handling here 
                });                   
     **/
    create(data: IRating): PromiseLike<IHttpResponse<IRating>> {
        return this.apiClient.post<IRating>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article rating resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example articleRatingsClient.find({ 
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IRating>>> {
        return this.apiClient.get<IQueryModel<IRating>>(this.routeDefinition.find(options));
    }

    /**                  
     * Returns a promise that is resolved once the findByUser action has been performed. Success response returns a list of article rating resources filtered by username.                  
     * @method
     * @param username Username which uniquely identifies a user which has created an article rating.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the findByUser action has been performed.                        
     * @example articleRatingsClient.find('<username>', {   
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
    findByUser(username: string, options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IRating>>> {
        return this.apiClient.get<IQueryModel<IRating>>(this.articleRatingsRoute.findByUser(username, options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article rating resource.                  
     * @method
     * @param id Id which uniquely identifies article rating resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed.                           
     * @example articleRatingsClient.get('<articleRating-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRating>> {
        return this.apiClient.get<IRating>(this.articleRatingsRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update article rating action has been performed; this action updates an article rating. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleRatingsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleRating); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data An article object used to update specified article rating resource.
     * @returns A promise that is resolved once the update article rating action has been performed.                          
     * @example // articleRating is a resource previously fetched using get action. 
                    articleRating.rating = 4; 
                    articleRatingsClient.update(articleRating)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IRating): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove article rating action has been performed. If the action is successfully completed, the article rating resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleRatingsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleRating); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method
     * @param data An article object used to delete specified article rating resource.
     * @returns A promise that is resolved once the remove article rating action has been performed.                          
     * @example // articleRating is a resource previously fetched using get action.				 
                    articleRatingsClient.remove(articleRating)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IRating): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
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