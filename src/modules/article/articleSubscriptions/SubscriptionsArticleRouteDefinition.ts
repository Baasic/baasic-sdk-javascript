/* globals module */
/**  
 * @module articleSubscriptionsArticleRouteDefinition  
 * @description Baasic Article Subscriptions Article Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Subscriptions Article Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticle, IArticleSubscription } from 'modules/article/contracts';

@injectable()
export class ArticleSubscriptionsArticleRouteDefinition extends BaseRouteDefinition {

    public readonly subscribeRoute: string = 'articles/{articleId}/subscriptions';

    public readonly isSubscribedRoute: string = 'articles/{articleId}/subscriptions/{subscriberId}';

    public readonly unSubscribeRoute: string = 'articles/{articleId}/subscriptions';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }

    /**                         
     * Parses article subscribe route which must be expanded with id of the article.                         
     * @method
     * @param article The article identifier.
     * @param data The subscribe information.                        
     * @example articleSubscriptionsArticleRouteDefinition.subscribe({id: '<article-id>'});                          
     **/
    subscribe(article: IArticle, data: IArticleSubscription): any {
        let params = this.utility.extend(article, data);
        return super.baseCreate(this.subscribeRoute, params);
    }

    /**                          
     * Parses article isSubscribed route which must be expanded with subscriber Id and the id of the article.                          
     * @method
     * @param article The article identifier.
     * @param data The subscriber identifier.                          
     * @example articleRouteDefinition.subscriptions.article.isSubscribed.expand({id: '<article-id>', subscriberId: '<subscriber-id>' });                           
     **/
    isSubscribed(article: IArticle, data: IArticleSubscription): any {
        let params = this.utility.extend(article, data);
        return super.baseCreate(this.isSubscribedRoute, params);
    }

    /**                         
     * Parses article unSubscribe route which must be expanded with the id of the article.                         
     * @method
     * @param article The article identifier.
     * @param data The unsubscribe information.                         
     * @example articleSubscriptionsArticleRouteDefinition.unSubscribe({id: '<article-id>'});                                                    
     **/
    unSubscribe(article: IArticle, data: IArticleSubscription): any {
        let params = this.utility.extend(article, data);
        return super.baseCreate(this.unSubscribeRoute, params);
    }

    subscribeParams(article: IArticle, data: IArticleSubscription): any {
        return this.utility.extend(article, data);
    }
}