/* globals module */
/**  
 * @module articleSubscriptionsCommentReportedClient  
 * @description  Article Subscriptions Comment Reported Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `articleSubscriptionsCommentReportedClient` uses `articleSubscriptionsCommentReportedRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleSubscriptionsCommentReportedRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleSubscriptionsCommentReportedClient {

    get routeDefinition(): ArticleSubscriptionsCommentReportedRouteDefinition {
        return this.articleSubscriptionsCommentReportedRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsCommentReportedRouteDefinition) protected articleSubscriptionsCommentReportedRouteDefinition: ArticleSubscriptionsCommentReportedRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                         
     * Subscribes user to article comment reported updates. Returns a promise that is resolved once the subscribe action has been performed.                         
     * @method
     * @param data The subscribe information.
     * @returns A promise that is resolved once the subscribe action has been performed.                         
     * @example articleSubscriptionsCommentReportedClient.subscribe(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.articleSubscriptionsCommentReportedRouteDefinition.subscribe(data), data);
    }

    /**                         
     * Determines whether user is subscribed to article comment reported updates. Returns a promise that is resolved once the isSubscribed action has been performed.                         
     * @method
     * @param data The subscribe information.
     * @returns A promise that is resolved once the isSubscribed action has been performed.                         
     * @example articleSubscriptionsCommentReportedClient.isSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                          
     **/
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.articleSubscriptionsCommentReportedRouteDefinition.isSubscribed(data));
    }

    /**                         
     * Unsubscribe user from article comment reported updates. Returns a promise that is commentReported once the unSubscribe action has been performed.                         
     * @method
     * @param data The unsubscribe information.
     * @returns A promise that is commentReported once the unSubscribe action has been performed.                           
     * @example articleSubscriptionsCommentReportedClient.isSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                           
     **/
    unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.articleSubscriptionsCommentReportedRouteDefinition.unSubscribe(data), undefined, data);
    }
}