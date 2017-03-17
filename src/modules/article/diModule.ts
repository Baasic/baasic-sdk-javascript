import { ContainerModule } from "inversify";
import {
    ArticleCommentRepliesClient,
    BaasicArticleCommentRepliesRouteDefinition,
    ArticleCommentsClient,
    BaasicArticleCommentsRouteDefinition,
    ArticleFilesBatchClient,
    BaasicArticleFilesBatchRouteDefinition,
    ArticleFilesClient,
    BaasicArticleFilesRouteDefinition,
    ArticleFilesStreamsClient,
    BaasicArticleFilesStreamsRouteDefinition,
    ArticleRatingsClient,
    BaasicArticleRatingsRouteDefinition,
    ArticleClient,
    BaasicArticleRouteDefinition,
    BaasicArticleSettingsRouteDefinition,
    ArticleSettingsClient,
    ArticleTagsClient,
    BaasicArticleTagsRouteDefinition,
    ArticleTagsSubscriptionsClient,
    BaasicArticleTagsSubscriptionsRouteDefinition,
    BaasicArticleInstanceSubscriptionsRouteDefinition,
    BaasicArticleSubscriptionsArticleRouteDefinition,
    BaasicArticleSubscriptionsCommentReportedRouteDefinition,
    BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition,
    BaasicArticleSubscriptionsRouteDefinition,
    ArticleSubscriptionsClient,
    ArticleSubscriptionsArticleClient,
    ArticleSubscriptionsCommentReportedClient,
    ArticleSubscriptionsCommentRequiresModerationClient,
    ArticleInstanceSubscriptionsClient,
    BaasicArticleInstanceRatingsRouteDefinition,
    ArticleInstanceRatingsClient,
    BaasicArticleInstanceTagsRouteDefinition,
    ArticleInstanceTagsClient,
    BaasicArticleInstanceCommentsRouteDefinition,
    ArticleInstanceCommentsClient,
    BaasicArticleInstanceCommentRepliesRouteDefinition,
    ArticleInstanceCommentRepliesClient,
    BaasicArticleInstanceFilesRouteDefinition,
    ArticleInstanceFilesClient,
    BaasicArticleInstanceFilesStreamsRouteDefinition,
    ArticleInstanceFilesStreamsClient,
    BaasicArticleInstanceFilesBatchRouteDefinition,
    ArticleInstanceFilesBatchClient,
    BaasicArticleACLRouteDefinition,
    ArticleACLClient,
    Root
} from 'modules/article';

const TYPES = {
    ArticleCommentRepliesClient: Symbol("ArticleCommentRepliesClient"),
    BaasicArticleCommentRepliesRouteDefinition: Symbol("BaasicArticleCommentRepliesRouteDefinition"),
    ArticleCommentsClient: Symbol("ArticleCommentsClient"),
    BaasicArticleCommentsRouteDefinition: Symbol("BaasicArticleCommentsRouteDefinition"),
    ArticleFilesClient: Symbol("ArticleFilesClient"),
    BaasicArticleFilesRouteDefinition: Symbol("BaasicArticleFilesRouteDefinition"),
    ArticleFilesBatchClient: Symbol("ArticleFilesBatchClient"),
    BaasicArticleFilesBatchRouteDefinition: Symbol("BaasicArticleFilesBatchRouteDefinition"),
    ArticleFilesStreamsClient: Symbol("ArticleFilesStreamsClient"),
    BaasicArticleFilesStreamsRouteDefinition: Symbol("BaasicArticleFilesStreamsRouteDefinition"),
    ArticleRatingsClient: Symbol("ArticleRatingsClient"),
    BaasicArticleRatingsRouteDefinition: Symbol("BaasicArticleRatingsRouteDefinition"),
    ArticleClient: Symbol("ArticleClient"),
    BaasicArticleRouteDefinition: Symbol("BaasicArticleRouteDefinition"),
    ArticleSettingsClient: Symbol("ArticleSettingsClient"),
    BaasicArticleSettingsRouteDefinition: Symbol("BaasicArticleSettingsRouteDefinition"),
    ArticleTagsClient: Symbol("ArticleTagsClient"),
    BaasicArticleTagsRouteDefinition: Symbol("BaasicArticleTagsRouteDefinition"),
    ArticleTagsSubscriptionsClient: Symbol("ArticleTagsSubscriptionsClient"),
    BaasicArticleTagsSubscriptionsRouteDefinition: Symbol("BaasicArticleTagsSubscriptionsRouteDefinition"),
    BaasicArticleSubscriptionsArticleRouteDefinition: Symbol("BaasicArticleSubscriptionsArticleRouteDefinition"),
    BaasicArticleSubscriptionsCommentReportedRouteDefinition: Symbol("BaasicArticleSubscriptionsCommentReportedRouteDefinition"),
    BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition: Symbol("BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition"),
    BaasicArticleSubscriptionsRouteDefinition: Symbol("BaasicArticleSubscriptionsRouteDefinition"),
    ArticleSubscriptionsClient: Symbol("ArticleSubscriptionsClient"),
    ArticleSubscriptionsArticleClient: Symbol("ArticleSubscriptionsArticleClient"),
    ArticleSubscriptionsCommentReportedClient: Symbol("ArticleSubscriptionsCommentReportedClient"),
    ArticleSubscriptionsCommentRequiresModerationClient: Symbol("ArticleSubscriptionsCommentRequiresModerationClient"),
    ArticleInstanceSubscriptionsClient: Symbol("ArticleInstanceSubscriptionsClient"),
    BaasicArticleInstanceSubscriptionsRouteDefinition: Symbol("BaasicArticleInstanceSubscriptionsRouteDefinition"),
    BaasicArticleInstanceRatingsRouteDefinition: Symbol("BaasicArticleInstanceRatingsRouteDefinition"),
    ArticleInstanceRatingsClient: Symbol("ArticleInstanceRatingsClient"),
    BaasicArticleInstanceTagsRouteDefinition: Symbol("BaasicArticleInstanceTagsRouteDefinition"),
    ArticleInstanceTagsClient: Symbol("ArticleInstanceTagsClient"),
    BaasicArticleInstanceCommentsRouteDefinition: Symbol("BaasicArticleInstanceCommentsRouteDefinition"),
    ArticleInstanceCommentsClient: Symbol("ArticleInstanceCommentsClient"),
    BaasicArticleInstanceCommentRepliesRouteDefinition: Symbol("BaasicArticleInstanceCommentRepliesRouteDefinition"),
    ArticleInstanceCommentRepliesClient: Symbol("ArticleInstanceCommentRepliesClient"),
    BaasicArticleInstanceFilesRouteDefinition: Symbol("BaasicArticleInstanceFilesRouteDefinition"),
    ArticleInstanceFilesClient: Symbol("ArticleInstanceFilesClient"),
    BaasicArticleInstanceFilesStreamsRouteDefinition: Symbol("BaasicArticleInstanceFilesStreamsRouteDefinition"),
    ArticleInstanceFilesStreamsClient: Symbol("ArticleInstanceFilesStreamsClient"),
    BaasicArticleInstanceFilesBatchRouteDefinition: Symbol("BaasicArticleInstanceFilesBatchRouteDefinition"),
    ArticleInstanceFilesBatchClient: Symbol("ArticleInstanceFilesBatchClient"),
    BaasicArticleACLRouteDefinition: Symbol(" BaasicArticleACLRouteDefinition"),
    ArticleACLClient: Symbol("ArticleACLClient"),
    Root: Symbol("Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicArticleCommentRepliesRouteDefinition>(TYPES.BaasicArticleCommentRepliesRouteDefinition).to(BaasicArticleCommentRepliesRouteDefinition);
    bind<ArticleCommentRepliesClient>(TYPES.ArticleCommentRepliesClient).to(ArticleCommentRepliesClient);
    bind<BaasicArticleCommentsRouteDefinition>(TYPES.BaasicArticleCommentsRouteDefinition).to(BaasicArticleCommentsRouteDefinition);
    bind<ArticleCommentsClient>(TYPES.ArticleCommentsClient).to(ArticleCommentsClient);
    bind<BaasicArticleFilesBatchRouteDefinition>(TYPES.BaasicArticleFilesBatchRouteDefinition).to(BaasicArticleFilesBatchRouteDefinition);
    bind<ArticleFilesBatchClient>(TYPES.ArticleFilesBatchClient).to(ArticleFilesBatchClient);
    bind<BaasicArticleFilesStreamsRouteDefinition>(TYPES.BaasicArticleFilesStreamsRouteDefinition).to(BaasicArticleFilesStreamsRouteDefinition);
    bind<ArticleFilesStreamsClient>(TYPES.ArticleFilesStreamsClient).to(ArticleFilesStreamsClient);
    bind<BaasicArticleFilesRouteDefinition>(TYPES.BaasicArticleFilesRouteDefinition).to(BaasicArticleFilesRouteDefinition);
    bind<ArticleFilesClient>(TYPES.ArticleFilesClient).to(ArticleFilesClient);
    bind<BaasicArticleRatingsRouteDefinition>(TYPES.BaasicArticleRatingsRouteDefinition).to(BaasicArticleRatingsRouteDefinition);
    bind<ArticleRatingsClient>(TYPES.ArticleRatingsClient).to(ArticleRatingsClient);
    bind<BaasicArticleSettingsRouteDefinition>(TYPES.BaasicArticleSettingsRouteDefinition).to(BaasicArticleSettingsRouteDefinition);
    bind<ArticleSettingsClient>(TYPES.ArticleSettingsClient).to(ArticleSettingsClient);
    bind<BaasicArticleTagsSubscriptionsRouteDefinition>(TYPES.BaasicArticleTagsSubscriptionsRouteDefinition).to(BaasicArticleTagsSubscriptionsRouteDefinition);
    bind<ArticleTagsSubscriptionsClient>(TYPES.ArticleTagsSubscriptionsClient).to(ArticleTagsSubscriptionsClient);
    bind<BaasicArticleTagsRouteDefinition>(TYPES.BaasicArticleTagsRouteDefinition).to(BaasicArticleTagsRouteDefinition);
    bind<ArticleTagsClient>(TYPES.ArticleTagsClient).to(ArticleTagsClient);
    bind<BaasicArticleSubscriptionsArticleRouteDefinition>(TYPES.BaasicArticleSubscriptionsArticleRouteDefinition).to(BaasicArticleSubscriptionsArticleRouteDefinition);
    bind<BaasicArticleSubscriptionsCommentReportedRouteDefinition>(TYPES.BaasicArticleSubscriptionsCommentReportedRouteDefinition).to(BaasicArticleSubscriptionsCommentReportedRouteDefinition);
    bind<BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition>(TYPES.BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition).to(BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition);
    bind<BaasicArticleSubscriptionsRouteDefinition>(TYPES.BaasicArticleSubscriptionsRouteDefinition).to(BaasicArticleSubscriptionsRouteDefinition);
    bind<ArticleSubscriptionsArticleClient>(TYPES.ArticleSubscriptionsArticleClient).to(ArticleSubscriptionsArticleClient);
    bind<ArticleSubscriptionsCommentReportedClient>(TYPES.ArticleSubscriptionsCommentReportedClient).to(ArticleSubscriptionsCommentReportedClient);
    bind<ArticleSubscriptionsCommentRequiresModerationClient>(TYPES.ArticleSubscriptionsCommentRequiresModerationClient).to(ArticleSubscriptionsCommentRequiresModerationClient);
    bind<ArticleSubscriptionsClient>(TYPES.ArticleSubscriptionsClient).to(ArticleSubscriptionsClient);
    bind<BaasicArticleInstanceRatingsRouteDefinition>(TYPES.BaasicArticleInstanceRatingsRouteDefinition).to(BaasicArticleInstanceRatingsRouteDefinition);
    bind<ArticleInstanceRatingsClient>(TYPES.ArticleInstanceRatingsClient).to(ArticleInstanceRatingsClient);
    bind<BaasicArticleInstanceTagsRouteDefinition>(TYPES.BaasicArticleInstanceTagsRouteDefinition).to(BaasicArticleInstanceTagsRouteDefinition);
    bind<ArticleInstanceTagsClient>(TYPES.ArticleInstanceTagsClient).to(ArticleInstanceTagsClient);
    bind<BaasicArticleInstanceCommentsRouteDefinition>(TYPES.BaasicArticleInstanceCommentsRouteDefinition).to(BaasicArticleInstanceCommentsRouteDefinition);
    bind<ArticleInstanceCommentsClient>(TYPES.ArticleInstanceCommentsClient).to(ArticleInstanceCommentsClient);
    bind<BaasicArticleInstanceCommentRepliesRouteDefinition>(TYPES.BaasicArticleInstanceCommentRepliesRouteDefinition).to(BaasicArticleInstanceCommentRepliesRouteDefinition);
    bind<ArticleInstanceCommentRepliesClient>(TYPES.ArticleInstanceCommentRepliesClient).to(ArticleInstanceCommentRepliesClient);
    bind<BaasicArticleInstanceFilesRouteDefinition>(TYPES.BaasicArticleInstanceFilesRouteDefinition).to(BaasicArticleInstanceFilesRouteDefinition);
    bind<ArticleInstanceFilesClient>(TYPES.ArticleInstanceFilesClient).to(ArticleInstanceFilesClient);
    bind<BaasicArticleInstanceFilesStreamsRouteDefinition>(TYPES.BaasicArticleInstanceFilesStreamsRouteDefinition).to(BaasicArticleInstanceFilesStreamsRouteDefinition);
    bind<ArticleInstanceFilesStreamsClient>(TYPES.ArticleInstanceFilesStreamsClient).to(ArticleInstanceFilesStreamsClient);
    bind<BaasicArticleInstanceFilesBatchRouteDefinition>(TYPES.BaasicArticleInstanceFilesBatchRouteDefinition).to(BaasicArticleInstanceFilesBatchRouteDefinition);
    bind<ArticleInstanceFilesBatchClient>(TYPES.ArticleInstanceFilesBatchClient).to(ArticleInstanceFilesBatchClient);
    bind<ArticleInstanceSubscriptionsClient>(TYPES.ArticleInstanceSubscriptionsClient).to(ArticleInstanceSubscriptionsClient);
    bind<BaasicArticleInstanceSubscriptionsRouteDefinition>(TYPES.BaasicArticleInstanceSubscriptionsRouteDefinition).to(BaasicArticleInstanceSubscriptionsRouteDefinition);
    bind<BaasicArticleACLRouteDefinition>(TYPES.BaasicArticleACLRouteDefinition).to(BaasicArticleACLRouteDefinition);
    bind<ArticleACLClient>(TYPES.ArticleACLClient).to(ArticleACLClient);
    bind<BaasicArticleRouteDefinition>(TYPES.BaasicArticleRouteDefinition).to(BaasicArticleRouteDefinition);
    bind<ArticleClient>(TYPES.ArticleClient).to(ArticleClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };