/* globals module */
/**  
 * @module baasicArticleSubscriptionsCommentReportedClient  
 * @description  Article Subscriptions Comment Reported Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `baasicArticleSubscriptionsCommentReportedClient` uses `baasicArticleSubscriptionsCommentReportedRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleSubscriptionsCommentReportedRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleSubscriptionsCommentReportedClient {

    get routeDefinition(): ArticleSubscriptionsCommentReportedRouteDefinition {
        return this.baasicArticleSubscriptionsCommentReportedRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsCommentReportedRouteDefinition) protected baasicArticleSubscriptionsCommentReportedRouteDefinition: ArticleSubscriptionsCommentReportedRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
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