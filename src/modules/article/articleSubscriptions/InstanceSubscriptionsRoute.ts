/* globals module */
/**  
 * @module articleSubscriptionsRoute  
 * @description Baasic Article Subscriptions Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Subscriptions Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    ArticleSubscriptionsCommentReportedRoute,
    ArticleSubscriptionsArticleRoute,
    ArticleSubscriptionsCommentRequiresModerationRoute,
    TYPES as articleTYPES
} from 'modules/article';

@injectable()
export class ArticleInstanceSubscriptionsRoute extends BaseRoute {

    get commentReported(): ArticleSubscriptionsCommentReportedRoute {
        return this.articleSubscriptionsCommentReportedRoute;
    }

    get article(): ArticleSubscriptionsArticleRoute {
        return this.articleSubscriptionsArticleRoute;
    }

    get commentRequiresModeration(): ArticleSubscriptionsCommentRequiresModerationRoute {
        return this.articleSubscriptionsCommentRequiresModerationRoute;
    }

    constructor(
        @inject(articleTYPES.ArticleSubscriptionsCommentReportedRoute) protected articleSubscriptionsCommentReportedRoute: ArticleSubscriptionsCommentReportedRoute,
        @inject(articleTYPES.ArticleSubscriptionsArticleRoute) protected articleSubscriptionsArticleRoute: ArticleSubscriptionsArticleRoute,
        @inject(articleTYPES.ArticleSubscriptionsCommentRequiresModerationRoute) protected articleSubscriptionsCommentRequiresModerationRoute: ArticleSubscriptionsCommentRequiresModerationRoute,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }
}