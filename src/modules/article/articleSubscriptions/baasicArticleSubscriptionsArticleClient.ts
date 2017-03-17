/* globals module */
/**  
 * @module baasicArticleSubscriptionsArticleClient  
 * @description  Article Subscriptions Article Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `baasicArticleSubscriptionsArticleClient` uses `baasicArticleSubscriptionsArticleRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicArticleSubscriptionsArticleRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticle, IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleSubscriptionsArticleClient {

    get routeDefinition(): BaasicArticleSubscriptionsArticleRouteDefinition {
        return this.baasicArticleSubscriptionsArticleRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleSubscriptionsArticleRouteDefinition) protected baasicArticleSubscriptionsArticleRouteDefinition: BaasicArticleSubscriptionsArticleRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                         
     * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the specified article.                         
     * @method                         
     * @example baasicArticleSubscriptionsArticleClient.subscribe(article, user)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    subscribe(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicArticleSubscriptionsArticleRouteDefinition.subscribe(article, data), this.baasicArticleSubscriptionsArticleRouteDefinition.subscribeParams(article, data));
    }

    /**                         
     * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the specified article.                         
     * @method                       
     * @example baasicArticleSubscriptionsArticleClient.subscribe(article, user)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                          
     **/
    isSubscribed(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicArticleSubscriptionsArticleRouteDefinition.isSubscribed(article, data));
    }

    /**                         
     * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the specified article.                         
     * @method                        
     * @example baasicArticleSubscriptionsArticleClient.subscribe(article, user)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    unSubscribe(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleSubscriptionsArticleRouteDefinition.unSubscribe(article, data));
    }
}