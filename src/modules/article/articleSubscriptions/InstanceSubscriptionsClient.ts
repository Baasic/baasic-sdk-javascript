/* globals module */
/**  
 * @module articleSubscriptionsClient  
 * @description  Articles Subscriptions Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `articleSubscriptionsClient` uses `articleSubscriptionsRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from '../../../common/contracts';;
import {
    ArticleInstanceSubscriptionsRoute,
    ArticleSubscriptionsArticleClient,
    ArticleSubscriptionsCommentReportedClient,
    ArticleSubscriptionsCommentRequiresModerationClient,
    TYPES as articleTypes
} from 'modules/article';
import { IArticle, IArticleOptions } from '../contracts';

@injectable()
export class ArticleInstanceSubscriptionsClient {

    get commentReported(): ArticleSubscriptionsCommentReportedClient {
        return this.articleSubscriptionsCommentReportedClient;
    }

    get article(): ArticleSubscriptionsArticleClient {
        return this.articleSubscriptionsArticleClient;
    }

    get commentRequiresModeration(): ArticleSubscriptionsCommentRequiresModerationClient {
        return this.articleSubscriptionsCommentRequiresModerationClient;
    }

    get routeDefinition(): ArticleInstanceSubscriptionsRoute {
        return this.articleInstanceSubscriptionsRoute;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsCommentReportedClient) protected articleSubscriptionsCommentReportedClient: ArticleSubscriptionsCommentReportedClient,
        @inject(articleTypes.ArticleSubscriptionsArticleClient) protected articleSubscriptionsArticleClient: ArticleSubscriptionsArticleClient,
        @inject(articleTypes.ArticleSubscriptionsCommentRequiresModerationClient) protected articleSubscriptionsCommentRequiresModerationClient: ArticleSubscriptionsCommentRequiresModerationClient,
        @inject(articleTypes.ArticleInstanceSubscriptionsRoute) protected articleInstanceSubscriptionsRoute: ArticleInstanceSubscriptionsRoute
    )
    { }
}