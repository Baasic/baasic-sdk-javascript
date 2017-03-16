/* globals module */
/**  
 * @module baasicArticleTagsSubscriptionsDefinition  
 * @description Baasic Article Tags Subscriptions Definition provides an easy way to consume Baasic Article Tags REST API end-points. `baasicArticleTagsDefinition` functions enable performing standard CRUD operations directly on article tag resources, whereas the `baasicArticleClient` functions allow management between article and article tag. In order to obtain needed routes `baasicArticleTagsDefinition` uses `baasicArticleTagsRouteDefinition`. 
*/

import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicArticleTagsSubscriptionsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleTag, IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class BaasicArticleTagsSubscriptionsClient {

    get routeDefinition(): BaasicArticleTagsSubscriptionsRouteDefinition {
        return this.baasicArticleTagsSubscriptionsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleTagsSubscriptionsRouteDefinition) protected baasicArticleTagsSubscriptionsRouteDefinition: BaasicArticleTagsSubscriptionsRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the specified tag.                     
     * @method             
     * @example baasicArticleTagsSubscriptionsClient.subscribe(tag, user) 
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    subscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>> {
        return this.baasicApiClient.post(this.baasicArticleTagsSubscriptionsRouteDefinition.subscribe(tag, data), this.baasicArticleTagsSubscriptionsRouteDefinition.subscribeParams(tag, data));
    }

    /**                    
     * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the specified tag.
     * @param                     
     * @method                     
     * @example baasicArticleTagsSubscriptionsClient.isSubscribed(tag, user)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    isSubscribed(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>> {
        return this.baasicApiClient.get(this.baasicArticleTagsSubscriptionsRouteDefinition.isSubscribed(tag, data));
    }

    /**                     
     * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the specified tag.
     * @param tag tag object
     * @param data data object                     
     * @method subscriptions.unSubscribe                     
     * @example baasicArticleTagsSubscriptionsClient.unSubscribe(tag, user)
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                       // perform error handling here 
                   });                     
    **/
    unSubscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleTagsSubscriptionsRouteDefinition.unSubscribe(tag, data), this.baasicArticleTagsSubscriptionsRouteDefinition.subscribeParams(tag, data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/
