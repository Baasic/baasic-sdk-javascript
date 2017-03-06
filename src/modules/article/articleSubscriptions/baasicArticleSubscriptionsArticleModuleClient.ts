/* globals module */
/**  
 * @module baasicArticleSubscriptionsArticleModuleClient  
 * @description Baasic Article Subscriptions Article Module Client provides an easy way to consume Baasic Articles REST API end-points. In order to obtain needed routes `baasicArticleSubscriptionsArticleModuleClient` uses `baasicArticleSubscriptionsArticleModuleRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicArticleSubscriptionsArticleModuleRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class BaasicArticleSubscriptionsArticleModuleClient {

    get RouteDefinition(): BaasicArticleSubscriptionsArticleModuleRouteDefinition {
        return this.baasicArticleSubscriptionsArticleModuleRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleSubscriptionsArticleModuleRouteDefinition) protected baasicArticleSubscriptionsArticleModuleRouteDefinition: BaasicArticleSubscriptionsArticleModuleRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
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
        return this.baasicApiClient.post(this.baasicArticleSubscriptionsArticleModuleRouteDefinition.subscribe(data), data);
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
        return this.baasicApiClient.get(this.baasicArticleSubscriptionsArticleModuleRouteDefinition.isSubscribed(data));
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
        return this.baasicApiClient.delete<void>(this.baasicArticleSubscriptionsArticleModuleRouteDefinition.unSubscribe(data), undefined, data);
    }
}