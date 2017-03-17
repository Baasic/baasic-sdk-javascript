/* globals module */
/**  
 * @module articleSubscriptionsCommentRequiresModerationClient  
 * @description  Article Subscriptions Comment Requires Moderation Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `articleSubscriptionsCommentRequiresModerationClient` uses `baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleSubscriptionsCommentRequiresModerationRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleSubscriptionsCommentRequiresModerationClient {

    get routeDefinition(): ArticleSubscriptionsCommentRequiresModerationRouteDefinition {
        return this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsCommentRequiresModerationRouteDefinition) protected baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition: ArticleSubscriptionsCommentRequiresModerationRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                         
     * Returns a promise that is resolved once the subscribe action has been performed.                         
     * @method                         
     * @example articleCommentRequiresModerationClient.subscribe(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition.subscribe(data), data);
    }

    /**                         
     * Returns a promise that is resolved once the isSubscribed action has been performed.                         
     * @method                         
     * @example articleCommentRequiresModerationClient.isSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition.isSubscribed(data));
    }

    /**                         
     * Returns a promise that is commentReported once the unSubscribe action has been performed.                         
     * @method                        
     * @example articleCommentRequiresModerationClient.unSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                        
     **/
    unSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition.unSubscribe(data));
    }
}