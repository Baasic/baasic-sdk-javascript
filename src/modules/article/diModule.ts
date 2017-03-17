import { ContainerModule } from "inversify";
import {
    ArticleCommentRepliesClient,
    ArticleCommentRepliesRouteDefinition,
    ArticleCommentsClient,
    ArticleCommentsRouteDefinition,
    ArticleFilesBatchClient,
    ArticleFilesBatchRouteDefinition,
    ArticleFilesClient,
    ArticleFilesRouteDefinition,
    ArticleFilesStreamsClient,
    ArticleFilesStreamsRouteDefinition,
    ArticleRatingsClient,
    ArticleRatingsRouteDefinition,
    ArticleClient,
    ArticleRouteDefinition,
    ArticleSettingsRouteDefinition,
    ArticleSettingsClient,
    ArticleTagsClient,
    ArticleTagsRouteDefinition,
    ArticleTagsSubscriptionsClient,
    ArticleTagsSubscriptionsRouteDefinition,
    ArticleInstanceSubscriptionsRouteDefinition,
    ArticleSubscriptionsArticleRouteDefinition,
    ArticleSubscriptionsCommentReportedRouteDefinition,
    ArticleSubscriptionsCommentRequiresModerationRouteDefinition,
    ArticleSubscriptionsRouteDefinition,
    ArticleSubscriptionsClient,
    ArticleSubscriptionsArticleClient,
    ArticleSubscriptionsCommentReportedClient,
    ArticleSubscriptionsCommentRequiresModerationClient,
    ArticleInstanceSubscriptionsClient,
    ArticleInstanceRatingsRouteDefinition,
    ArticleInstanceRatingsClient,
    ArticleInstanceTagsRouteDefinition,
    ArticleInstanceTagsClient,
    ArticleInstanceCommentsRouteDefinition,
    ArticleInstanceCommentsClient,
    ArticleInstanceCommentRepliesRouteDefinition,
    ArticleInstanceCommentRepliesClient,
    ArticleInstanceFilesRouteDefinition,
    ArticleInstanceFilesClient,
    ArticleInstanceFilesStreamsRouteDefinition,
    ArticleInstanceFilesStreamsClient,
    ArticleInstanceFilesBatchRouteDefinition,
    ArticleInstanceFilesBatchClient,
    ArticleACLRouteDefinition,
    ArticleACLClient,
    Root
} from 'modules/article';

const TYPES = {
    ArticleCommentRepliesClient: Symbol("ArticleCommentRepliesClient"),
    ArticleCommentRepliesRouteDefinition: Symbol("ArticleCommentRepliesRouteDefinition"),
    ArticleCommentsClient: Symbol("ArticleCommentsClient"),
    ArticleCommentsRouteDefinition: Symbol("ArticleCommentsRouteDefinition"),
    ArticleFilesClient: Symbol("ArticleFilesClient"),
    ArticleFilesRouteDefinition: Symbol("ArticleFilesRouteDefinition"),
    ArticleFilesBatchClient: Symbol("ArticleFilesBatchClient"),
    ArticleFilesBatchRouteDefinition: Symbol("ArticleFilesBatchRouteDefinition"),
    ArticleFilesStreamsClient: Symbol("ArticleFilesStreamsClient"),
    ArticleFilesStreamsRouteDefinition: Symbol("ArticleFilesStreamsRouteDefinition"),
    ArticleRatingsClient: Symbol("ArticleRatingsClient"),
    ArticleRatingsRouteDefinition: Symbol("ArticleRatingsRouteDefinition"),
    ArticleClient: Symbol("ArticleClient"),
    ArticleRouteDefinition: Symbol("ArticleRouteDefinition"),
    ArticleSettingsClient: Symbol("ArticleSettingsClient"),
    ArticleSettingsRouteDefinition: Symbol("ArticleSettingsRouteDefinition"),
    ArticleTagsClient: Symbol("ArticleTagsClient"),
    ArticleTagsRouteDefinition: Symbol("ArticleTagsRouteDefinition"),
    ArticleTagsSubscriptionsClient: Symbol("ArticleTagsSubscriptionsClient"),
    ArticleTagsSubscriptionsRouteDefinition: Symbol("ArticleTagsSubscriptionsRouteDefinition"),
    ArticleSubscriptionsArticleRouteDefinition: Symbol("ArticleSubscriptionsArticleRouteDefinition"),
    ArticleSubscriptionsCommentReportedRouteDefinition: Symbol("ArticleSubscriptionsCommentReportedRouteDefinition"),
    ArticleSubscriptionsCommentRequiresModerationRouteDefinition: Symbol("ArticleSubscriptionsCommentRequiresModerationRouteDefinition"),
    ArticleSubscriptionsRouteDefinition: Symbol("ArticleSubscriptionsRouteDefinition"),
    ArticleSubscriptionsClient: Symbol("ArticleSubscriptionsClient"),
    ArticleSubscriptionsArticleClient: Symbol("ArticleSubscriptionsArticleClient"),
    ArticleSubscriptionsCommentReportedClient: Symbol("ArticleSubscriptionsCommentReportedClient"),
    ArticleSubscriptionsCommentRequiresModerationClient: Symbol("ArticleSubscriptionsCommentRequiresModerationClient"),
    ArticleInstanceSubscriptionsClient: Symbol("ArticleInstanceSubscriptionsClient"),
    ArticleInstanceSubscriptionsRouteDefinition: Symbol("ArticleInstanceSubscriptionsRouteDefinition"),
    ArticleInstanceRatingsRouteDefinition: Symbol("ArticleInstanceRatingsRouteDefinition"),
    ArticleInstanceRatingsClient: Symbol("ArticleInstanceRatingsClient"),
    ArticleInstanceTagsRouteDefinition: Symbol("ArticleInstanceTagsRouteDefinition"),
    ArticleInstanceTagsClient: Symbol("ArticleInstanceTagsClient"),
    ArticleInstanceCommentsRouteDefinition: Symbol("ArticleInstanceCommentsRouteDefinition"),
    ArticleInstanceCommentsClient: Symbol("ArticleInstanceCommentsClient"),
    ArticleInstanceCommentRepliesRouteDefinition: Symbol("ArticleInstanceCommentRepliesRouteDefinition"),
    ArticleInstanceCommentRepliesClient: Symbol("ArticleInstanceCommentRepliesClient"),
    ArticleInstanceFilesRouteDefinition: Symbol("ArticleInstanceFilesRouteDefinition"),
    ArticleInstanceFilesClient: Symbol("ArticleInstanceFilesClient"),
    ArticleInstanceFilesStreamsRouteDefinition: Symbol("ArticleInstanceFilesStreamsRouteDefinition"),
    ArticleInstanceFilesStreamsClient: Symbol("ArticleInstanceFilesStreamsClient"),
    ArticleInstanceFilesBatchRouteDefinition: Symbol("ArticleInstanceFilesBatchRouteDefinition"),
    ArticleInstanceFilesBatchClient: Symbol("ArticleInstanceFilesBatchClient"),
    ArticleACLRouteDefinition: Symbol(" ArticleACLRouteDefinition"),
    ArticleACLClient: Symbol("ArticleACLClient"),
    Root: Symbol("Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ArticleCommentRepliesRouteDefinition>(TYPES.ArticleCommentRepliesRouteDefinition).to(ArticleCommentRepliesRouteDefinition);
    bind<ArticleCommentRepliesClient>(TYPES.ArticleCommentRepliesClient).to(ArticleCommentRepliesClient);
    bind<ArticleCommentsRouteDefinition>(TYPES.ArticleCommentsRouteDefinition).to(ArticleCommentsRouteDefinition);
    bind<ArticleCommentsClient>(TYPES.ArticleCommentsClient).to(ArticleCommentsClient);
    bind<ArticleFilesBatchRouteDefinition>(TYPES.ArticleFilesBatchRouteDefinition).to(ArticleFilesBatchRouteDefinition);
    bind<ArticleFilesBatchClient>(TYPES.ArticleFilesBatchClient).to(ArticleFilesBatchClient);
    bind<ArticleFilesStreamsRouteDefinition>(TYPES.ArticleFilesStreamsRouteDefinition).to(ArticleFilesStreamsRouteDefinition);
    bind<ArticleFilesStreamsClient>(TYPES.ArticleFilesStreamsClient).to(ArticleFilesStreamsClient);
    bind<ArticleFilesRouteDefinition>(TYPES.ArticleFilesRouteDefinition).to(ArticleFilesRouteDefinition);
    bind<ArticleFilesClient>(TYPES.ArticleFilesClient).to(ArticleFilesClient);
    bind<ArticleRatingsRouteDefinition>(TYPES.ArticleRatingsRouteDefinition).to(ArticleRatingsRouteDefinition);
    bind<ArticleRatingsClient>(TYPES.ArticleRatingsClient).to(ArticleRatingsClient);
    bind<ArticleSettingsRouteDefinition>(TYPES.ArticleSettingsRouteDefinition).to(ArticleSettingsRouteDefinition);
    bind<ArticleSettingsClient>(TYPES.ArticleSettingsClient).to(ArticleSettingsClient);
    bind<ArticleTagsSubscriptionsRouteDefinition>(TYPES.ArticleTagsSubscriptionsRouteDefinition).to(ArticleTagsSubscriptionsRouteDefinition);
    bind<ArticleTagsSubscriptionsClient>(TYPES.ArticleTagsSubscriptionsClient).to(ArticleTagsSubscriptionsClient);
    bind<ArticleTagsRouteDefinition>(TYPES.ArticleTagsRouteDefinition).to(ArticleTagsRouteDefinition);
    bind<ArticleTagsClient>(TYPES.ArticleTagsClient).to(ArticleTagsClient);
    bind<ArticleSubscriptionsArticleRouteDefinition>(TYPES.ArticleSubscriptionsArticleRouteDefinition).to(ArticleSubscriptionsArticleRouteDefinition);
    bind<ArticleSubscriptionsCommentReportedRouteDefinition>(TYPES.ArticleSubscriptionsCommentReportedRouteDefinition).to(ArticleSubscriptionsCommentReportedRouteDefinition);
    bind<ArticleSubscriptionsCommentRequiresModerationRouteDefinition>(TYPES.ArticleSubscriptionsCommentRequiresModerationRouteDefinition).to(ArticleSubscriptionsCommentRequiresModerationRouteDefinition);
    bind<ArticleSubscriptionsRouteDefinition>(TYPES.ArticleSubscriptionsRouteDefinition).to(ArticleSubscriptionsRouteDefinition);
    bind<ArticleSubscriptionsArticleClient>(TYPES.ArticleSubscriptionsArticleClient).to(ArticleSubscriptionsArticleClient);
    bind<ArticleSubscriptionsCommentReportedClient>(TYPES.ArticleSubscriptionsCommentReportedClient).to(ArticleSubscriptionsCommentReportedClient);
    bind<ArticleSubscriptionsCommentRequiresModerationClient>(TYPES.ArticleSubscriptionsCommentRequiresModerationClient).to(ArticleSubscriptionsCommentRequiresModerationClient);
    bind<ArticleSubscriptionsClient>(TYPES.ArticleSubscriptionsClient).to(ArticleSubscriptionsClient);
    bind<ArticleInstanceRatingsRouteDefinition>(TYPES.ArticleInstanceRatingsRouteDefinition).to(ArticleInstanceRatingsRouteDefinition);
    bind<ArticleInstanceRatingsClient>(TYPES.ArticleInstanceRatingsClient).to(ArticleInstanceRatingsClient);
    bind<ArticleInstanceTagsRouteDefinition>(TYPES.ArticleInstanceTagsRouteDefinition).to(ArticleInstanceTagsRouteDefinition);
    bind<ArticleInstanceTagsClient>(TYPES.ArticleInstanceTagsClient).to(ArticleInstanceTagsClient);
    bind<ArticleInstanceCommentsRouteDefinition>(TYPES.ArticleInstanceCommentsRouteDefinition).to(ArticleInstanceCommentsRouteDefinition);
    bind<ArticleInstanceCommentsClient>(TYPES.ArticleInstanceCommentsClient).to(ArticleInstanceCommentsClient);
    bind<ArticleInstanceCommentRepliesRouteDefinition>(TYPES.ArticleInstanceCommentRepliesRouteDefinition).to(ArticleInstanceCommentRepliesRouteDefinition);
    bind<ArticleInstanceCommentRepliesClient>(TYPES.ArticleInstanceCommentRepliesClient).to(ArticleInstanceCommentRepliesClient);
    bind<ArticleInstanceFilesRouteDefinition>(TYPES.ArticleInstanceFilesRouteDefinition).to(ArticleInstanceFilesRouteDefinition);
    bind<ArticleInstanceFilesClient>(TYPES.ArticleInstanceFilesClient).to(ArticleInstanceFilesClient);
    bind<ArticleInstanceFilesStreamsRouteDefinition>(TYPES.ArticleInstanceFilesStreamsRouteDefinition).to(ArticleInstanceFilesStreamsRouteDefinition);
    bind<ArticleInstanceFilesStreamsClient>(TYPES.ArticleInstanceFilesStreamsClient).to(ArticleInstanceFilesStreamsClient);
    bind<ArticleInstanceFilesBatchRouteDefinition>(TYPES.ArticleInstanceFilesBatchRouteDefinition).to(ArticleInstanceFilesBatchRouteDefinition);
    bind<ArticleInstanceFilesBatchClient>(TYPES.ArticleInstanceFilesBatchClient).to(ArticleInstanceFilesBatchClient);
    bind<ArticleInstanceSubscriptionsClient>(TYPES.ArticleInstanceSubscriptionsClient).to(ArticleInstanceSubscriptionsClient);
    bind<ArticleInstanceSubscriptionsRouteDefinition>(TYPES.ArticleInstanceSubscriptionsRouteDefinition).to(ArticleInstanceSubscriptionsRouteDefinition);
    bind<ArticleACLRouteDefinition>(TYPES.ArticleACLRouteDefinition).to(ArticleACLRouteDefinition);
    bind<ArticleACLClient>(TYPES.ArticleACLClient).to(ArticleACLClient);
    bind<ArticleRouteDefinition>(TYPES.ArticleRouteDefinition).to(ArticleRouteDefinition);
    bind<ArticleClient>(TYPES.ArticleClient).to(ArticleClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };