/* globals module */
/**  
 * @module baasicArticleSubscriptionsCommentRequiresModerationClient  
 * @description Baasic Article Subscriptions Comment Requires Moderation Client provides an easy way to consume Baasic Articles REST API end-points. In order to obtain needed routes `baasicArticleSubscriptionsCommentRequiresModerationClient` uses `baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class BaasicArticleSubscriptionsCommentRequiresModerationClient {

    get routeDefinition(): BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition {
        return this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition) protected baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition: BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                         
     * Returns a promise that is resolved once the subscribe action has been performed.                         
     * @method                         
     * @example baasicArticleCommentRequiresModerationClient.subscribe(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition.subscribe(data), data);
    }

    /**                         
     * Returns a promise that is resolved once the isSubscribed action has been performed.                         
     * @method                         
     * @example baasicArticleCommentRequiresModerationClient.isSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition.isSubscribed(data));
    }

    /**                         
     * Returns a promise that is commentReported once the unSubscribe action has been performed.                         
     * @method                        
     * @example baasicArticleCommentRequiresModerationClient.unSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                        
     **/
    unSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition.unSubscribe(data));
    }
}