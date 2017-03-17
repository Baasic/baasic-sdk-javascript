/* globals module */
/**  
 * @module baasicArticleSubscriptionsClient  
 * @description  Articles Subscriptions Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `baasicArticleSubscriptionsClient` uses `baasicArticleSubscriptionsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import {
    ArticleInstanceSubscriptionsRouteDefinition,
    ArticleSubscriptionsArticleClient,
    ArticleSubscriptionsCommentReportedClient,
    ArticleSubscriptionsCommentRequiresModerationClient,
    TYPES as articleTypes
} from 'modules/article';
import { IArticle, IArticleOptions } from 'modules/article/contracts';

@injectable()
export class ArticleInstanceSubscriptionsClient {

    get commentReported(): ArticleSubscriptionsCommentReportedClient {
        return this.baasicArticleSubscriptionsCommentReportedClient;
    }

    get article(): ArticleSubscriptionsArticleClient {
        return this.baasicArticleSubscriptionsArticleClient;
    }

    get commentRequiresModeration(): ArticleSubscriptionsCommentRequiresModerationClient {
        return this.baasicArticleSubscriptionsCommentRequiresModerationClient;
    }

    get routeDefinition(): ArticleInstanceSubscriptionsRouteDefinition {
        return this.baasicArticleInstanceSubscriptionsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsCommentReportedClient) protected baasicArticleSubscriptionsCommentReportedClient: ArticleSubscriptionsCommentReportedClient,
        @inject(articleTypes.ArticleSubscriptionsArticleClient) protected baasicArticleSubscriptionsArticleClient: ArticleSubscriptionsArticleClient,
        @inject(articleTypes.ArticleSubscriptionsCommentRequiresModerationClient) protected baasicArticleSubscriptionsCommentRequiresModerationClient: ArticleSubscriptionsCommentRequiresModerationClient,
        @inject(articleTypes.ArticleInstanceSubscriptionsRouteDefinition) protected baasicArticleInstanceSubscriptionsRouteDefinition: ArticleInstanceSubscriptionsRouteDefinition
    )
    { }
}