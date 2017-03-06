/* globals module */
/**  
 * @module baasicArticleSubscriptionsCommentReportedClient  
 * @description Baasic Article Subscriptions Comment Reported Client provides an easy way to consume Baasic Articles REST API end-points. In order to obtain needed routes `baasicArticleSubscriptionsCommentReportedClient` uses `baasicArticleSubscriptionsCommentReportedRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicArticleSubscriptionsCommentReportedRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class BaasicArticleSubscriptionsCommentReportedClient {

    get RouteDefinition(): BaasicArticleSubscriptionsCommentReportedRouteDefinition {
        return this.baasicArticleSubscriptionsCommentReportedRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleSubscriptionsCommentReportedRouteDefinition) protected baasicArticleSubscriptionsCommentReportedRouteDefinition: BaasicArticleSubscriptionsCommentReportedRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                         
     * Returns a promise that is resolved once the subscribe action has been performed.                         
     * @method                        
     * @example baasicArticleSubscriptionsCommentReportedClient.subscribe(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                         
     **/
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicArticleSubscriptionsCommentReportedRouteDefinition.subscribe(data), data);
    }

    /**                         
     * Returns a promise that is resolved once the isSubscribed action has been performed.                         
     * @method                        
     * @example baasicArticleSubscriptionsCommentReportedClient.isSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                          
     **/
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicArticleSubscriptionsCommentReportedRouteDefinition.isSubscribed(data));
    }

    /**                         
     * Returns a promise that is commentReported once the unSubscribe action has been performed.                         
     * @method                         
     * @example baasicArticleSubscriptionsCommentReportedClient.isSubscribed(data)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                         // perform error handling here 
                    });                           
     **/
    unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleSubscriptionsCommentReportedRouteDefinition.unSubscribe(data), undefined, data);
    }
}