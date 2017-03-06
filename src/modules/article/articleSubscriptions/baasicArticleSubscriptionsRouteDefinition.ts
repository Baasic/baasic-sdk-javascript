/* globals module */
/**  
 * @module baasicArticleSubscriptionsRouteDefinition  
 * @description Baasic Article Subscriptions Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Subscriptions Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    BaasicArticleSubscriptionsArticleModuleRouteDefinition,
    BaasicArticleSubscriptionsCommentReportedRouteDefinition,
    BaasicArticleSubscriptionsArticleRouteDefinition,
    BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition
} from 'modules/article';

export class BaasicArticleSubscriptionsRouteDefinition extends BaasicBaseRouteDefinition {

    get articleModule(): BaasicArticleSubscriptionsArticleModuleRouteDefinition {
        return this.baasicArticleSubscriptionsArticleModuleRouteDefinition;
    }

    get commentReported(): BaasicArticleSubscriptionsCommentReportedRouteDefinition {
        return this.baasicArticleSubscriptionsCommentReportedRouteDefinition;
    }

    get article(): BaasicArticleSubscriptionsArticleRouteDefinition {
        return this.baasicArticleSubscriptionsArticleRouteDefinition;
    }

    get commentRequiresModeration(): BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition {
        return this.baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition;
    }

    constructor(
        @inject(BaasicArticleSubscriptionsArticleModuleRouteDefinition) protected baasicArticleSubscriptionsArticleModuleRouteDefinition: BaasicArticleSubscriptionsArticleModuleRouteDefinition,
        @inject(BaasicArticleSubscriptionsCommentReportedRouteDefinition) protected baasicArticleSubscriptionsCommentReportedRouteDefinition: BaasicArticleSubscriptionsCommentReportedRouteDefinition,
        @inject(BaasicArticleSubscriptionsArticleRouteDefinition) protected baasicArticleSubscriptionsArticleRouteDefinition: BaasicArticleSubscriptionsArticleRouteDefinition,
        @inject(BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition) protected baasicArticleSubscriptionsCommentRequiresModerationRouteDefinition: BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }
}