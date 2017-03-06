/* globals module */
/**  
 * @module baasicArticleSubscriptionsArticleModuleRouteDefinition  
 * @description Baasic Article Subscriptions Article Module Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Subscriptions Article Module Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class BaasicArticleSubscriptionsArticleModuleRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }

    /**                          
     * Parses article module subscribe route which doesn't support any additional options.                          
     * @method                          
     * @example baasicArticleSubscriptionsArticleModuleRouteDefinition.subscribe(data);                           
     **/
    subscribe(data: IArticleSubscription): any {
        return super.baseCreate('articles/subscriptions', data);
    }

    /**                          
     * Parses article module isSubscribed route which must be expanded with subscriber Id                          
     * @method                    
     * @example baasicArticleSubscriptionsArticleModuleRouteDefinition.isSubscribed({subscriberId: '<subscriber-id>'});                           
     **/
    isSubscribed(data: IArticleSubscription): any {
        return super.baseCreate('articles/subscriptions/{subscriberId}', data);
    }

    /**                         
     * Parses article module unSubscribe route which doesn't support any additional options.                         
     * @method                        
     * @example baasicArticleSubscriptionsArticleModuleRouteDefinition.unSubscribe(data);                          
     **/
    unSubscribe(data: IArticleSubscription): any {
        return super.baseCreate('articles/subscriptions', data);
    }
}