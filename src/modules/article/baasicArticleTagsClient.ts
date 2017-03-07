/* globals module */
/**  
 * @module baasicArticleTagsDefinition  
 * @description Baasic Article Tags Definition provides an easy way to consume Baasic Article Tags REST API end-points. `baasicArticleTagsDefinition` functions enable performing standard CRUD operations directly on article tag resources, whereas the `baasicArticleClient` functions allow management between article and article tag. In order to obtain needed routes `baasicArticleTagsDefinition` uses `baasicArticleTagsRouteDefinition`. 
*/

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import {
    BaasicArticleTagsSubscriptionsClient,
    BaasicArticleTagsRouteDefinition,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleTag } from 'modules/article/contracts';

@injectable()
export class BaasicArticleTagsClient {

    get routeDefinition(): BaasicArticleTagsRouteDefinition {
        return this.baasicArticleTagsRouteDefinition;
    }

    get subscriptions(): BaasicArticleTagsSubscriptionsClient {
        return this.baasicArticleTagsSubscriptionsClient;
    }

    constructor(
        @inject(articleTypes.BaasicArticleTagsRouteDefinition) protected baasicArticleTagsRouteDefinition: BaasicArticleTagsRouteDefinition,
        @inject(articleTypes.BaasicArticleTagsSubscriptionsClient) protected baasicArticleTagsSubscriptionsClient: BaasicArticleTagsSubscriptionsClient,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article tag resources matching the given criteria.                 
     * @method                        
     * @example baasicArticleTagsClient.find({  
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleTag>>> {
        return this.baasicApiClient.get(this.baasicArticleTagsRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article tag resource.  
     * @param id tag id
     * @param options options object               
     * @method                        
     * @example baasicArticleTagsClient.get('<articleTag-id>')
                   .then(function (data) {  
                       // perform success action here 
                   },
                    function (response, status, headers, config) {  
                       // perform error handling here 
                   });                
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>> {
        return this.baasicApiClient.get(this.baasicArticleTagsRouteDefinition.get(id, options));
    }

    /**                 
     * Returns a promise that is resolved once the update article tag action has been performed; this action updates a tag. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleTagsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleTag); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data data object                 
     * @method                        
     * @example // articleTag is a resource previously fetched using get action. 
                    articleTag.tag = '<new-tag>'; 
                    baasicArticleTagsClient.update(articleTag)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                            // perform error handling here 
                        });                
     **/
    update(data: IArticleTag): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleTagsRouteDefinition.update(data), this.baasicArticleTagsRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove article tag action has been performed. If the action is successfully completed, the article tag resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleTagsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleTag); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method                        
     * @example // articleTag is a resource previously fetched using get action.
                    baasicArticleTagsClient.remove(articleTag)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IArticleTag): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleTagsRouteDefinition.delete(data));
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