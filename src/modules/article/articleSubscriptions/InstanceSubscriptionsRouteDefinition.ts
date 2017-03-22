/* globals module */
/**  
 * @module articleSubscriptionsRouteDefinition  
 * @description Baasic Article Subscriptions Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Subscriptions Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    ArticleSubscriptionsCommentReportedRouteDefinition,
    ArticleSubscriptionsArticleRouteDefinition,
    ArticleSubscriptionsCommentRequiresModerationRouteDefinition,
    TYPES as articleTYPES
} from 'modules/article';

@injectable()
export class ArticleInstanceSubscriptionsRouteDefinition extends BaseRouteDefinition {

    get commentReported(): ArticleSubscriptionsCommentReportedRouteDefinition {
        return this.articleSubscriptionsCommentReportedRouteDefinition;
    }

    get article(): ArticleSubscriptionsArticleRouteDefinition {
        return this.articleSubscriptionsArticleRouteDefinition;
    }

    get commentRequiresModeration(): ArticleSubscriptionsCommentRequiresModerationRouteDefinition {
        return this.articleSubscriptionsCommentRequiresModerationRouteDefinition;
    }

    constructor(
        @inject(articleTYPES.ArticleSubscriptionsCommentReportedRouteDefinition) protected articleSubscriptionsCommentReportedRouteDefinition: ArticleSubscriptionsCommentReportedRouteDefinition,
        @inject(articleTYPES.ArticleSubscriptionsArticleRouteDefinition) protected articleSubscriptionsArticleRouteDefinition: ArticleSubscriptionsArticleRouteDefinition,
        @inject(articleTYPES.ArticleSubscriptionsCommentRequiresModerationRouteDefinition) protected articleSubscriptionsCommentRequiresModerationRouteDefinition: ArticleSubscriptionsCommentRequiresModerationRouteDefinition,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }
}