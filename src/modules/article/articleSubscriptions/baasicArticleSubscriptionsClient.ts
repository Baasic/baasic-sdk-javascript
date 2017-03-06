/* globals module */
/**  
 * @module baasicArticleSubscriptionsClient  
 * @description Baasic Articles Subscriptions Client provides an easy way to consume Baasic Articles REST API end-points. In order to obtain needed routes `baasicArticleSubscriptionsClient` uses `baasicArticleSubscriptionsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import {
    BaasicArticleSubscriptionsRouteDefinition,
    BaasicArticleSubscriptionsArticleModuleClient,
    BaasicArticleSubscriptionsArticleClient,
    BaasicArticleSubscriptionsCommentReportedClient,
    BaasicArticleSubscriptionsCommentRequiresModerationClient,
    TYPES as articleTypes
} from 'modules/article';
import { IArticle, IArticleOptions } from 'modules/article/contracts';


export class BaasicArticleSubscriptionsClient {

    get articleModule(): BaasicArticleSubscriptionsArticleModuleClient {
        return this.baasicArticleSubscriptionsArticleModuleClient;
    }

    get commentReported(): BaasicArticleSubscriptionsCommentReportedClient {
        return this.baasicArticleSubscriptionsCommentReportedClient;
    }

    get article(): BaasicArticleSubscriptionsArticleClient {
        return this.baasicArticleSubscriptionsArticleClient;
    }

    get commentRequiresModeration(): BaasicArticleSubscriptionsCommentRequiresModerationClient {
        return this.baasicArticleSubscriptionsCommentRequiresModerationClient;
    }

    get routeDefinition(): BaasicArticleSubscriptionsRouteDefinition {
        return this.baasicArticleSubscriptionsRouteDefinition;
    }

    constructor(
        @inject(BaasicArticleSubscriptionsArticleModuleClient) protected baasicArticleSubscriptionsArticleModuleClient: BaasicArticleSubscriptionsArticleModuleClient,
        @inject(BaasicArticleSubscriptionsCommentReportedClient) protected baasicArticleSubscriptionsCommentReportedClient: BaasicArticleSubscriptionsCommentReportedClient,
        @inject(BaasicArticleSubscriptionsArticleClient) protected baasicArticleSubscriptionsArticleClient: BaasicArticleSubscriptionsArticleClient,
        @inject(BaasicArticleSubscriptionsCommentRequiresModerationClient) protected baasicArticleSubscriptionsCommentRequiresModerationClient: BaasicArticleSubscriptionsCommentRequiresModerationClient,
        @inject(articleTypes.BaasicArticleSubscriptionsRouteDefinition) protected baasicArticleSubscriptionsRouteDefinition: BaasicArticleSubscriptionsRouteDefinition
    )
    { }
}