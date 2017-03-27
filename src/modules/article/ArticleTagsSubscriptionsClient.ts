/* globals module */
/**  
 * @module baasicArticleTagsSubscriptionsDefinition  
 * @description  Article Tags Subscriptions Definition provides an easy way to consume  Article Tags REST API end-points. `articleTagsDefinition` functions enable performing standard CRUD operations directly on article tag resources, whereas the `articleClient` functions allow management between article and article tag. In order to obtain needed routes `articleTagsDefinition` uses `articleTagsRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { ArticleTagsSubscriptionsRoute, TYPES as articleTypes } from 'modules/article';
import { IArticleTag, IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleTagsSubscriptionsClient {

    get routeDefinition(): ArticleTagsSubscriptionsRoute {
        return this.articleTagsSubscriptionsRoute;
    }

    constructor(
        @inject(articleTypes.ArticleTagsSubscriptionsRoute) protected articleTagsSubscriptionsRoute: ArticleTagsSubscriptionsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the specified tag.                     
     * @method
     * @param tag article tag object.
     * @param data The subscribe information.
     * @returns A promise that is resolved once the subscribe action has been performed.              
     * @example articleTagsSubscriptionsClient.subscribe(tag, user) 
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    subscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>> {
        return this.apiClient.post(this.routeDefinition.subscribe(tag, data), this.routeDefinition.subscribeParams(tag, data));
    }

    /**                    
     * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the specified tag.                   
     * @method
     * @param tag Article tag object.
     * @param data The subscriber identifier.
     * @returns A promise that is resolved once the isSubscribed action has been performed.                      
     * @example articleTagsSubscriptionsClient.isSubscribed(tag, user)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    isSubscribed(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>> {
        return this.apiClient.get(this.articleTagsSubscriptionsRoute.isSubscribed(tag, data));
    }

    /**                     
     * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the specified tag.                   
     * @method
     * @param tag Article tag object.
     * @param data The unsubscribe information.
     * @returns A promise that is resolved once the unSubscribe action has been performed.                     
     * @example articleTagsSubscriptionsClient.unSubscribe(tag, user)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                       // perform error handling here 
                   });                     
    **/
    unSubscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unSubscribe(tag, data), this.routeDefinition.subscribeParams(tag, data));
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
