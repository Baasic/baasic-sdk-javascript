/* globals module */
/**  
 * @module articleSubscriptionsCommentRequiresModerationRoute  
 * @description Baasic Article Subscriptions Comment Requires Moderation Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Subscriptions Comment Requires Moderation Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IOptions } from 'common/contracts';;
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticleSubscription } from '../contracts';

@injectable()
export class ArticleSubscriptionsCommentRequiresModerationRoute extends BaseRoute {

    public readonly subscribeRoute: string = 'articles/subscriptions/comment-requires-moderation';

    public readonly isSubscribedRoute: string = 'articles/subscriptions/comment-requires-moderation/{subscriberId}';

    public readonly unSubscribeRoute: string = 'articles/subscriptions/comment-requires-moderation';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                          
     * Parses commentRequiresModeration subscribe route which doesn't support any additional options.                          
     * @method
     * @param data The subscribe information.                          
     * @example articleSubscriptionsCommentRequiresModerationRoute.subscribe(data);                         
     **/
    subscribe(data: IArticleSubscription): any {
        return super.baseCreate(this.subscribeRoute, data);
    }

    /**                          
     * Parses commentRequiresModeration isSubscribed route which must be expanded with subscriber Id.                          
     * @method
     * @param data The subscribe information.                       
     * @example articleSubscriptionsCommentRequiresModerationRoute.isSubscribed({subscriberId: '<subscriber-id>'});                           
     **/
    isSubscribed(data: IArticleSubscription): any {
        return super.baseCreate(this.isSubscribedRoute, data);
    }

    /**                         
     * Parses commentRequiresModeration unSubscribe route which doesn't support any additional options.                         
     * @method
     * @param data The unsubscribe information.                      
     * @example articleSubscriptionsCommentRequiresModerationRoute.unSubscribe(data)                        
     **/
    unSubscribe(data: IArticleSubscription): any {
        return super.baseCreate(this.unSubscribeRoute, data);
    }
}