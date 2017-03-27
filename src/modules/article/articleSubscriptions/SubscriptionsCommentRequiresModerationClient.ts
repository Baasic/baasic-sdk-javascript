/* globals module */
/**  
 * @module articleSubscriptionsCommentRequiresModerationClient  
 * @description  Article Subscriptions Comment Requires Moderation Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `articleSubscriptionsCommentRequiresModerationClient` uses `articleSubscriptionsCommentRequiresModerationRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { ArticleSubscriptionsCommentRequiresModerationRoute, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleSubscriptionsCommentRequiresModerationClient {

    get routeDefinition(): ArticleSubscriptionsCommentRequiresModerationRoute {
        return this.articleSubscriptionsCommentRequiresModerationRoute;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsCommentRequiresModerationRoute) protected articleSubscriptionsCommentRequiresModerationRoute: ArticleSubscriptionsCommentRequiresModerationRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                         
     * Subscribes user to article comment requires moderation updates. Returns a promise that is resolved once the subscribe action has been performed.                         
     * @method
     * @param data The subscribe information.
     * @returns A promise that is resolved once the subscribe action has been performed.                           
     * @example articleCommentRequiresModerationClient.subscribe(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.articleSubscriptionsCommentRequiresModerationRoute.subscribe(data), data);
    }

    /**                         
     * Determines whether user is subscribed to article comment requires moderation updates. Returns a promise that is resolved once the isSubscribed action has been performed.                         
     * @method
     * @param data The subscribe information.
     * @returns A promise that is resolved once the isSubscribed action has been performed.                            
     * @example articleCommentRequiresModerationClient.isSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.routeDefinition.isSubscribed(data));
    }

    /**                         
     * Unsubscribe user from article comment requires moderation updates. Returns a promise that is commentReported once the unSubscribe action has been performed.                         
     * @method
     * @param data The unsubscribe information.
     * @returns A promise that is commentReported once the unSubscribe action has been performed.                          
     * @example articleCommentRequiresModerationClient.unSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                        
     **/
    unSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unSubscribe(data));
    }
}