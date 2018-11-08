/* globals module */
/**  
 * @module articleSubscriptionsCommentReportedRoute  
 * @description Baasic Article Subscriptions Comment Reported Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Subscriptions Comment Reported Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';
import { IArticleSubscription } from '../contracts';

@injectable()
export class ArticleSubscriptionsCommentReportedRoute extends BaseRoute {

    public readonly subscribeRoute: string = 'articles/subscriptions/comment-reported';

    public readonly isSubscribedRoute: string = 'articles/subscriptions/comment-reported/{subscriberId}';

    public readonly unSubscribeRoute: string = 'articles/subscriptions/comment-reported';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                         
     * Parses commentReported subscribe route which doesn't support any additional options.                         
     * @method
     * @param data The subscribe information.                         
     * @example articleSubscriptionsCommentReportedRoute.subscribe(data);                        
     **/
    subscribe(data: IArticleSubscription): any {
        return super.baseCreate(this.subscribeRoute, data);
    }

    /**                          
     * Parses commentReported isSubscribed route which must be expanded with subscriber Id.                          
     * @method
     * @param data The subscribe information.                          
     * @example articleSubscriptionsCommentReportedRoute.isSubscribed({subscriberId: '<subscriber-id>'});                           
     **/
    isSubscribed(data: IArticleSubscription): any {
        return super.baseCreate(this.isSubscribedRoute, data);
    }

    /**                         
     * Parses commentReported unSubscribe route which doesn't support any additional options.                         
     * @method
     * @param data The unsubscribe information.                       
     * @example articleSubscriptionsCommentReportedRoute.unSubscribe(data);                        
     **/
    unSubscribe(data: IArticleSubscription): any {
        return super.baseCreate(this.unSubscribeRoute, data);
    }
}