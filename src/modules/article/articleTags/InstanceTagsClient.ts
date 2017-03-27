/* globals module */
/**  
 * @module baasicArticleInstanceTagsDefinition  
 * @description  Article Instance Tags Definition provides an easy way to consume  Article Tags REST API end-points. `articleInstanceTagsRouteClient` functions enable performing standard CRUD operations directly on article tag resources, whereas the `articleClient` functions allow management between article and article tag. In order to obtain needed routes `articleInstanceTagsClient` uses `articleInstanceTagsRoute`. 
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { ArticleInstanceTagsRoute, TYPES as articleTypes } from 'modules/article';
import { IArticle, IArticleTag } from '../contracts';

@injectable()
export class ArticleInstanceTagsClient {

    get routeDefinition(): ArticleInstanceTagsRoute {
        return this.articleInstanceTagsRoute;
    }


    constructor(
        @inject(articleTypes.ArticleInstanceTagsRoute) protected articleInstanceTagsRoute: ArticleInstanceTagsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article tag resources matching the given criteria.                 
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose tag resources need to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example articleInstanceTagsClient.find({  
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
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IArticleTag>>> {
        return this.apiClient.get<IQueryModel<IArticleTag>>(this.articleInstanceTagsRoute.find(articleId, options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article tag resource.              
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose tag resource needs to be retrieved.
     * @param id A slug or id which uniquely identifies article tag resource that needs to be retrieved.
     * @param options Options object that contains embed data.  	
     * @returns A promise that is resolved once the get action has been performed.
     * @example articleInstanceTagsClient.get('<articleTag-id>')
                   .then(function (data) {  
                       // perform success action here 
                   },
                    function (response, status, headers, config) {  
                       // perform error handling here 
                   });                
    **/
    get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>> {
        return this.apiClient.get<IArticleTag>(this.articleInstanceTagsRoute.get(articleId, id, options));
    }

    /**                     
     * Returns a promise that is resolved once the create article tag action has been performed; this action creates a new tag for an article.                     
     * @method
     * @param data An article tag value that needs to be inserted as new article tag resource into the system.
     * @returns A promise that is resolved once the create article tag action has been performed.                         
     * @example articleInstanceTagsClient.create({   
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
        return this.apiClient.post<IArticleTag>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove article tag action has been performed. If the action is successfully completed, the article tag resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleTagsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleTag); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method
     * @param data Article Tag object that needs to be removed from the system.
     * @returns A promise that is resolved once the remove article tag action has been performed.                         
     * @example // articleTag is a resource previously fetched using get action.
                    articleInstanceTagsClient.remove(articleTag)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IArticleTag): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**                     
     * Returns a promise that is resolved once the removeAll article tag action has been performed. This action will remove all tags from an article if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(article); 
     * let uri = params['model'].links('delete-tags-by-article').href; 
     * ```                     
     * @method
     * @param data Article object whoose tags needs to be removed from the system.
     * @returns A promise that is resolved once the removeAll article tag action has been performed.                      
     * @example // article is a resource previously fetched using get action.					
                    articleInstanceTagsClient.removeAll(article)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						    
     **/
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.deleteAll(data));
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