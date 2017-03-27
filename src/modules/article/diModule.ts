import { ContainerModule } from "inversify";
import {
    ArticleCommentRepliesClient,
    ArticleCommentRepliesRoute,
    ArticleCommentsClient,
    ArticleCommentsRoute,
    ArticleFilesBatchClient,
    ArticleFilesBatchRoute,
    ArticleFilesClient,
    ArticleFilesRoute,
    ArticleFilesStreamsClient,
    ArticleFilesStreamsRoute,
    ArticleRatingsClient,
    ArticleRatingsRoute,
    ArticleClient,
    ArticleRoute,
    ArticleSettingsRoute,
    ArticleSettingsClient,
    ArticleTagsClient,
    ArticleTagsRoute,
    ArticleTagsSubscriptionsClient,
    ArticleTagsSubscriptionsRoute,
    ArticleInstanceSubscriptionsRoute,
    ArticleSubscriptionsArticleRoute,
    ArticleSubscriptionsCommentReportedRoute,
    ArticleSubscriptionsCommentRequiresModerationRoute,
    ArticleSubscriptionsRoute,
    ArticleSubscriptionsClient,
    ArticleSubscriptionsArticleClient,
    ArticleSubscriptionsCommentReportedClient,
    ArticleSubscriptionsCommentRequiresModerationClient,
    ArticleInstanceSubscriptionsClient,
    ArticleInstanceRatingsRoute,
    ArticleInstanceRatingsClient,
    ArticleInstanceTagsRoute,
    ArticleInstanceTagsClient,
    ArticleInstanceCommentsRoute,
    ArticleInstanceCommentsClient,
    ArticleInstanceCommentRepliesRoute,
    ArticleInstanceCommentRepliesClient,
    ArticleInstanceFilesRoute,
    ArticleInstanceFilesClient,
    ArticleInstanceFilesStreamsRoute,
    ArticleInstanceFilesStreamsClient,
    ArticleInstanceFilesBatchRoute,
    ArticleInstanceFilesBatchClient,
    ArticleACLRoute,
    ArticleACLClient,
    Root
} from './';

const TYPES = {
    ArticleCommentRepliesClient: Symbol("ArticleCommentRepliesClient"),
    ArticleCommentRepliesRoute: Symbol("ArticleCommentRepliesRoute"),
    ArticleCommentsClient: Symbol("ArticleCommentsClient"),
    ArticleCommentsRoute: Symbol("ArticleCommentsRoute"),
    ArticleFilesClient: Symbol("ArticleFilesClient"),
    ArticleFilesRoute: Symbol("ArticleFilesRoute"),
    ArticleFilesBatchClient: Symbol("ArticleFilesBatchClient"),
    ArticleFilesBatchRoute: Symbol("ArticleFilesBatchRoute"),
    ArticleFilesStreamsClient: Symbol("ArticleFilesStreamsClient"),
    ArticleFilesStreamsRoute: Symbol("ArticleFilesStreamsRoute"),
    ArticleRatingsClient: Symbol("ArticleRatingsClient"),
    ArticleRatingsRoute: Symbol("ArticleRatingsRoute"),
    ArticleClient: Symbol("ArticleClient"),
    ArticleRoute: Symbol("ArticleRoute"),
    ArticleSettingsClient: Symbol("ArticleSettingsClient"),
    ArticleSettingsRoute: Symbol("ArticleSettingsRoute"),
    ArticleTagsClient: Symbol("ArticleTagsClient"),
    ArticleTagsRoute: Symbol("ArticleTagsRoute"),
    ArticleTagsSubscriptionsClient: Symbol("ArticleTagsSubscriptionsClient"),
    ArticleTagsSubscriptionsRoute: Symbol("ArticleTagsSubscriptionsRoute"),
    ArticleSubscriptionsArticleRoute: Symbol("ArticleSubscriptionsArticleRoute"),
    ArticleSubscriptionsCommentReportedRoute: Symbol("ArticleSubscriptionsCommentReportedRoute"),
    ArticleSubscriptionsCommentRequiresModerationRoute: Symbol("ArticleSubscriptionsCommentRequiresModerationRoute"),
    ArticleSubscriptionsRoute: Symbol("ArticleSubscriptionsRoute"),
    ArticleSubscriptionsClient: Symbol("ArticleSubscriptionsClient"),
    ArticleSubscriptionsArticleClient: Symbol("ArticleSubscriptionsArticleClient"),
    ArticleSubscriptionsCommentReportedClient: Symbol("ArticleSubscriptionsCommentReportedClient"),
    ArticleSubscriptionsCommentRequiresModerationClient: Symbol("ArticleSubscriptionsCommentRequiresModerationClient"),
    ArticleInstanceSubscriptionsClient: Symbol("ArticleInstanceSubscriptionsClient"),
    ArticleInstanceSubscriptionsRoute: Symbol("ArticleInstanceSubscriptionsRoute"),
    ArticleInstanceRatingsRoute: Symbol("ArticleInstanceRatingsRoute"),
    ArticleInstanceRatingsClient: Symbol("ArticleInstanceRatingsClient"),
    ArticleInstanceTagsRoute: Symbol("ArticleInstanceTagsRoute"),
    ArticleInstanceTagsClient: Symbol("ArticleInstanceTagsClient"),
    ArticleInstanceCommentsRoute: Symbol("ArticleInstanceCommentsRoute"),
    ArticleInstanceCommentsClient: Symbol("ArticleInstanceCommentsClient"),
    ArticleInstanceCommentRepliesRoute: Symbol("ArticleInstanceCommentRepliesRoute"),
    ArticleInstanceCommentRepliesClient: Symbol("ArticleInstanceCommentRepliesClient"),
    ArticleInstanceFilesRoute: Symbol("ArticleInstanceFilesRoute"),
    ArticleInstanceFilesClient: Symbol("ArticleInstanceFilesClient"),
    ArticleInstanceFilesStreamsRoute: Symbol("ArticleInstanceFilesStreamsRoute"),
    ArticleInstanceFilesStreamsClient: Symbol("ArticleInstanceFilesStreamsClient"),
    ArticleInstanceFilesBatchRoute: Symbol("ArticleInstanceFilesBatchRoute"),
    ArticleInstanceFilesBatchClient: Symbol("ArticleInstanceFilesBatchClient"),
    ArticleACLRoute: Symbol(" ArticleACLRoute"),
    ArticleACLClient: Symbol("ArticleACLClient"),
    Root: Symbol("Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ArticleCommentRepliesRoute>(TYPES.ArticleCommentRepliesRoute).to(ArticleCommentRepliesRoute);
    bind<ArticleCommentRepliesClient>(TYPES.ArticleCommentRepliesClient).to(ArticleCommentRepliesClient);
    bind<ArticleCommentsRoute>(TYPES.ArticleCommentsRoute).to(ArticleCommentsRoute);
    bind<ArticleCommentsClient>(TYPES.ArticleCommentsClient).to(ArticleCommentsClient);
    bind<ArticleFilesBatchRoute>(TYPES.ArticleFilesBatchRoute).to(ArticleFilesBatchRoute);
    bind<ArticleFilesBatchClient>(TYPES.ArticleFilesBatchClient).to(ArticleFilesBatchClient);
    bind<ArticleFilesStreamsRoute>(TYPES.ArticleFilesStreamsRoute).to(ArticleFilesStreamsRoute);
    bind<ArticleFilesStreamsClient>(TYPES.ArticleFilesStreamsClient).to(ArticleFilesStreamsClient);
    bind<ArticleFilesRoute>(TYPES.ArticleFilesRoute).to(ArticleFilesRoute);
    bind<ArticleFilesClient>(TYPES.ArticleFilesClient).to(ArticleFilesClient);
    bind<ArticleRatingsRoute>(TYPES.ArticleRatingsRoute).to(ArticleRatingsRoute);
    bind<ArticleRatingsClient>(TYPES.ArticleRatingsClient).to(ArticleRatingsClient);
    bind<ArticleSettingsRoute>(TYPES.ArticleSettingsRoute).to(ArticleSettingsRoute);
    bind<ArticleSettingsClient>(TYPES.ArticleSettingsClient).to(ArticleSettingsClient);
    bind<ArticleTagsSubscriptionsRoute>(TYPES.ArticleTagsSubscriptionsRoute).to(ArticleTagsSubscriptionsRoute);
    bind<ArticleTagsSubscriptionsClient>(TYPES.ArticleTagsSubscriptionsClient).to(ArticleTagsSubscriptionsClient);
    bind<ArticleTagsRoute>(TYPES.ArticleTagsRoute).to(ArticleTagsRoute);
    bind<ArticleTagsClient>(TYPES.ArticleTagsClient).to(ArticleTagsClient);
    bind<ArticleSubscriptionsArticleRoute>(TYPES.ArticleSubscriptionsArticleRoute).to(ArticleSubscriptionsArticleRoute);
    bind<ArticleSubscriptionsCommentReportedRoute>(TYPES.ArticleSubscriptionsCommentReportedRoute).to(ArticleSubscriptionsCommentReportedRoute);
    bind<ArticleSubscriptionsCommentRequiresModerationRoute>(TYPES.ArticleSubscriptionsCommentRequiresModerationRoute).to(ArticleSubscriptionsCommentRequiresModerationRoute);
    bind<ArticleSubscriptionsRoute>(TYPES.ArticleSubscriptionsRoute).to(ArticleSubscriptionsRoute);
    bind<ArticleSubscriptionsArticleClient>(TYPES.ArticleSubscriptionsArticleClient).to(ArticleSubscriptionsArticleClient);
    bind<ArticleSubscriptionsCommentReportedClient>(TYPES.ArticleSubscriptionsCommentReportedClient).to(ArticleSubscriptionsCommentReportedClient);
    bind<ArticleSubscriptionsCommentRequiresModerationClient>(TYPES.ArticleSubscriptionsCommentRequiresModerationClient).to(ArticleSubscriptionsCommentRequiresModerationClient);
    bind<ArticleSubscriptionsClient>(TYPES.ArticleSubscriptionsClient).to(ArticleSubscriptionsClient);
    bind<ArticleInstanceRatingsRoute>(TYPES.ArticleInstanceRatingsRoute).to(ArticleInstanceRatingsRoute);
    bind<ArticleInstanceRatingsClient>(TYPES.ArticleInstanceRatingsClient).to(ArticleInstanceRatingsClient);
    bind<ArticleInstanceTagsRoute>(TYPES.ArticleInstanceTagsRoute).to(ArticleInstanceTagsRoute);
    bind<ArticleInstanceTagsClient>(TYPES.ArticleInstanceTagsClient).to(ArticleInstanceTagsClient);
    bind<ArticleInstanceCommentsRoute>(TYPES.ArticleInstanceCommentsRoute).to(ArticleInstanceCommentsRoute);
    bind<ArticleInstanceCommentsClient>(TYPES.ArticleInstanceCommentsClient).to(ArticleInstanceCommentsClient);
    bind<ArticleInstanceCommentRepliesRoute>(TYPES.ArticleInstanceCommentRepliesRoute).to(ArticleInstanceCommentRepliesRoute);
    bind<ArticleInstanceCommentRepliesClient>(TYPES.ArticleInstanceCommentRepliesClient).to(ArticleInstanceCommentRepliesClient);
    bind<ArticleInstanceFilesRoute>(TYPES.ArticleInstanceFilesRoute).to(ArticleInstanceFilesRoute);
    bind<ArticleInstanceFilesClient>(TYPES.ArticleInstanceFilesClient).to(ArticleInstanceFilesClient);
    bind<ArticleInstanceFilesStreamsRoute>(TYPES.ArticleInstanceFilesStreamsRoute).to(ArticleInstanceFilesStreamsRoute);
    bind<ArticleInstanceFilesStreamsClient>(TYPES.ArticleInstanceFilesStreamsClient).to(ArticleInstanceFilesStreamsClient);
    bind<ArticleInstanceFilesBatchRoute>(TYPES.ArticleInstanceFilesBatchRoute).to(ArticleInstanceFilesBatchRoute);
    bind<ArticleInstanceFilesBatchClient>(TYPES.ArticleInstanceFilesBatchClient).to(ArticleInstanceFilesBatchClient);
    bind<ArticleInstanceSubscriptionsClient>(TYPES.ArticleInstanceSubscriptionsClient).to(ArticleInstanceSubscriptionsClient);
    bind<ArticleInstanceSubscriptionsRoute>(TYPES.ArticleInstanceSubscriptionsRoute).to(ArticleInstanceSubscriptionsRoute);
    bind<ArticleACLRoute>(TYPES.ArticleACLRoute).to(ArticleACLRoute);
    bind<ArticleACLClient>(TYPES.ArticleACLClient).to(ArticleACLClient);
    bind<ArticleRoute>(TYPES.ArticleRoute).to(ArticleRoute);
    bind<ArticleClient>(TYPES.ArticleClient).to(ArticleClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };