/* globals module */
/**  
 * @module articleSubscriptionsArticleModuleClient  
 * @description  Article Subscriptions Article Module Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `articleSubscriptionsClient` uses `articleSubscriptionsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleSubscriptionsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleSubscriptionsClient {

    get routeDefinition(): ArticleSubscriptionsRouteDefinition {
        return this.articleSubscriptionsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsRouteDefinition) protected articleSubscriptionsRouteDefinition: ArticleSubscriptionsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                         
     * Subscribes user or existing user to article module updates. Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the article module.                         
     * @method
     * @param data The subscribe information.
     * @returns A promise that is resolved once the subscribe action has been performed.                          
     * @example articleSubscriptionsArticleModuleClient.subscribe(data)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                        // perform error handling here 
                   });                         
    **/
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.articleSubscriptionsRouteDefinition.subscribe(data), data);
    }

    /**                         
     * Determines whether existing or anonymous user are subscribed to article module updates. Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the article module.                         
     * @method
     * @param data The subscribe information.
     * @returns A promise that is resolved once the isSubscribed action has been performed.                         
     * @example articleSubscriptionsArticleModuleClient.isSubscribe(data)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                        // perform error handling here 
                   });                         
     **/
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.articleSubscriptionsRouteDefinition.isSubscribed(data));
    }

    /**                         
     * Unsubscribe existing or anonymous user from article module updates. Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the article module.                         
     * @method
     * @param data The subscribe information.
     * @returns A promise that is resolved once the unSubscribe action has been performed.                          
     * @example articleSubscriptionsArticleModuleClient.unSubscribe(data)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                        // perform error handling here 
                   });                          **/
    unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.articleSubscriptionsRouteDefinition.unSubscribe(data));
    }
}