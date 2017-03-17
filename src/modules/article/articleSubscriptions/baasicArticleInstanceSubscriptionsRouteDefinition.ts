/* globals module */
/**  
 * @module baasicArticleSubscriptionsRouteDefinition  
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
        return this.baasicArticleSubscriptionsCommentReportedRouteDefinition;
    }

    get article(): ArticleSubscriptionsArticleRouteDefinition {
        return this.baasicArticleSubscriptionsArticleRouteDefinition;
    }

    get commentRequiresModeration(): ArticleSubscriptionsCommentRequiresModerationRouteDefinition {
        return this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition;
    }

    constructor(
        @inject(articleTYPES.ArticleSubscriptionsCommentReportedRouteDefinition) protected baasicArticleSubscriptionsCommentReportedRouteDefinition: ArticleSubscriptionsCommentReportedRouteDefinition,
        @inject(articleTYPES.ArticleSubscriptionsArticleRouteDefinition) protected baasicArticleSubscriptionsArticleRouteDefinition: ArticleSubscriptionsArticleRouteDefinition,
        @inject(articleTYPES.ArticleSubscriptionsCommentRequiresModerationRouteDefinition) protected baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition: ArticleSubscriptionsCommentRequiresModerationRouteDefinition,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }
}