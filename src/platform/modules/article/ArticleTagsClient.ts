/* globals module */
/**  
 * @module baasicArticleTagsDefinition  
 * @description  Article Tags Definition provides an easy way to consume  Article Tags REST API end-points. `articleTagsDefinition` functions enable performing standard CRUD operations directly on article tag resources, whereas the `articleClient` functions allow management between article and article tag. In order to obtain needed routes `articleTagsDefinition` uses `articleTagsRoute`. 
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    ArticleTagsSubscriptionsClient,
    ArticleTagsRoute,
    TYPES as articleTypes
} from './';
import { IArticleTag } from './contracts';

@injectable()
export class ArticleTagsClient {

    get routeDefinition(): ArticleTagsRoute {
        return this.articleTagsRoute;
    }

    get subscriptions(): ArticleTagsSubscriptionsClient {
        return this.articleTagsSubscriptionsClient;
    }

    constructor(
        @inject(articleTypes.ArticleTagsRoute) protected articleTagsRoute: ArticleTagsRoute,
        @inject(articleTypes.ArticleTagsSubscriptionsClient) protected articleTagsSubscriptionsClient: ArticleTagsSubscriptionsClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article tag resources matching the given criteria.                 
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example articleTagsClient.find({  
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IArticleTag>>> {
        return this.apiClient.get<IQueryModel<IArticleTag>>(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article tag resource.             
     * @method                        
     * @param id Article tag id or slug that uniquely identifies article tag resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed. 
     * @example articleTagsClient.get('<articleTag-id>')
                   .then(function (data) {  
                       // perform success action here 
                   },
                    function (response, status, headers, config) {  
                       // perform error handling here 
                   });                
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>> {
        return this.apiClient.get<IArticleTag>(this.articleTagsRoute.get(id, options));
    }

    /**                 
     * Returns a promise that is resolved once the update article tag action has been performed; this action updates a tag. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleTagsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleTag); 
     * let uri = params['model'].links('put').href; 
     * ```               
     * @method
     * @param data An article tag object used to update specified article tag resource.
     * @returns A promise that is resolved once the update article tag action has been performed.                           
     * @example // articleTag is a resource previously fetched using get action. 
                    articleTag.tag = '<new-tag>'; 
                    articleTagsClient.update(articleTag)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                            // perform error handling here 
                        });                
     **/
    update(data: IArticleTag): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove article tag action has been performed. If the action is successfully completed, the article tag resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleTagsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleTag); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method
     * @param data An article tag object used to delete specified article tag resource.
     * @returns A promise that is resolved once the remove article tag action has been performed.                         
     * @example // articleTag is a resource previously fetched using get action.
                    articleTagsClient.remove(articleTag)
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