/* globals module */
/**  
 * @module baasicArticleSubscriptionsArticleModuleClient  
 * @description  Article Subscriptions Article Module Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `baasicArticleSubscriptionsClient` uses `baasicArticleSubscriptionsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleSubscriptionsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleSubscriptionsClient {

    get routeDefinition(): ArticleSubscriptionsRouteDefinition {
        return this.baasicArticleSubscriptionsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsRouteDefinition) protected baasicArticleSubscriptionsRouteDefinition: ArticleSubscriptionsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                         
     * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the article module.                         
     * @method                        
     * @example baasicArticleSubscriptionsArticleModuleClient.subscribe(data)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                        // perform error handling here 
                   });                         
    **/
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicArticleSubscriptionsRouteDefinition.subscribe(data), data);
    }

    /**                         
     * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the article module.                         
     * @method                       
     * @example baasicArticleSubscriptionsArticleModuleClient.isSubscribe(data)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                        // perform error handling here 
                   });                         
     **/
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicArticleSubscriptionsRouteDefinition.isSubscribed(data));
    }

    /**                         
     * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the article module.                         
     * @method                        
     * @example baasicArticleSubscriptionsArticleModuleClient.unSubscribe(data)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                        // perform error handling here 
                   });                          **/
    unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleSubscriptionsRouteDefinition.unSubscribe(data));
    }
}