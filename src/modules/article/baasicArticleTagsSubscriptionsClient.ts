/* globals module */
/**  
 * @module baasicArticleTagsSubscriptionsDefinition  
 * @description  Article Tags Subscriptions Definition provides an easy way to consume  Article Tags REST API end-points. `articleTagsDefinition` functions enable performing standard CRUD operations directly on article tag resources, whereas the `articleClient` functions allow management between article and article tag. In order to obtain needed routes `baasicArticleTagsDefinition` uses `baasicArticleTagsRouteDefinition`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleTagsSubscriptionsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleTag, IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleTagsSubscriptionsClient {

    get routeDefinition(): ArticleTagsSubscriptionsRouteDefinition {
        return this.baasicArticleTagsSubscriptionsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleTagsSubscriptionsRouteDefinition) protected baasicArticleTagsSubscriptionsRouteDefinition: ArticleTagsSubscriptionsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the specified tag.                     
     * @method             
     * @example articleTagsSubscriptionsClient.subscribe(tag, user) 
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    subscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>> {
        return this.apiClient.post(this.baasicArticleTagsSubscriptionsRouteDefinition.subscribe(tag, data), this.baasicArticleTagsSubscriptionsRouteDefinition.subscribeParams(tag, data));
    }

    /**                    
     * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the specified tag.
     * @param                     
     * @method                     
     * @example articleTagsSubscriptionsClient.isSubscribed(tag, user)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    isSubscribed(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>> {
        return this.apiClient.get(this.baasicArticleTagsSubscriptionsRouteDefinition.isSubscribed(tag, data));
    }

    /**                     
     * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the specified tag.
     * @param tag tag object
     * @param data data object                     
     * @method subscriptions.unSubscribe                     
     * @example articleTagsSubscriptionsClient.unSubscribe(tag, user)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                       // perform error handling here 
                   });                     
    **/
    unSubscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.baasicArticleTagsSubscriptionsRouteDefinition.unSubscribe(tag, data), this.baasicArticleTagsSubscriptionsRouteDefinition.subscribeParams(tag, data));
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
