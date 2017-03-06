import { ContainerModule } from "inversify";
import {
    BaasicArticleCommentRepliesClient,
    BaasicArticleCommentRepliesRouteDefinition,
    BaasicArticleCommentsClient,
    BaasicArticleCommentsRouteDefinition,
    BaasicArticleFilesBatchClient,
    BaasicArticleFilesBatchRouteDefinition,
    BaasicArticleFilesClient,
    BaasicArticleFilesRouteDefinition,
    BaasicArticleFilesStreamsClient,
    BaasicArticleFilesStreamsRouteDefinition,
    BaasicArticleRatingsClient,
    BaasicArticleRatingsRouteDefinition,
    BaasicArticleRouteDefinition,
    BaasicArticleSettingsClient,
    BaasicArticleSettingsRouteDefinition,
    BaasicArticleTagsClient,
    BaasicArticleTagsRouteDefinition,
    BaasicArticleTagsSubscriptionsClient,
    BaasicArticleTagsSubscriptionsRouteDefinition,
    BaasicArticleSubscriptionsArticleModuleRouteDefinition,
    BaasicArticleSubscriptionsArticleRouteDefinition,
    BaasicArticleSubscriptionsCommentReportedRouteDefinition,
    BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition,
    BaasicArticleSubscriptionsRouteDefinition,
    BaasicArticleSubscriptionsArticleModuleClient,
    BaasicArticleSubscriptionsArticleClient,
    BaasicArticleSubscriptionsCommentReportedClient,
    BaasicArticleSubscriptionsCommentRequiresModerationClient,
    BaasicArticleSubscriptionsClient,
    BaasicArticleInstanceRatingsRouteDefinition,
    BaasicArticleInstanceRatingsClient,
    BaasicArticleInstanceTagsRouteDefinition,
    BaasicArticleInstanceTagsClient,
    BaasicArticleInstanceCommentsRouteDefinition,
    BaasicArticleInstanceCommentsClient,
    BaasicArticleInstanceCommentRepliesRouteDefinition,
    BaasicArticleInstanceCommentRepliesClient
} from 'modules/article';

const TYPES = {
    BaasicArticleCommentRepliesClient: Symbol("BaasicArticleCommentRepliesClient"),
    BaasicArticleCommentRepliesRouteDefinition: Symbol("BaasicArticleCommentRepliesRouteDefinition"),
    BaasicArticleCommentsClient: Symbol("BaasicArticleCommentsClient"),
    BaasicArticleCommentsRouteDefinition: Symbol("BaasicArticleCommentsRouteDefinition"),
    BaasicArticleFilesClient: Symbol("BaasicArticleFilesClient"),
    BaasicArticleFilesRouteDefinition: Symbol("BaasicArticleFilesRouteDefinition"),
    BaasicArticleFilesBatchClient: Symbol("BaasicArticleFilesBatchClient"),
    BaasicArticleFilesBatchRouteDefinition: Symbol("BaasicArticleFilesBatchRouteDefinition"),
    BaasicArticleFilesStreamsClient: Symbol("BaasicArticleFilesStreamsClient"),
    BaasicArticleFilesStreamsRouteDefinition: Symbol("BaasicArticleFilesStreamsRouteDefinition"),
    BaasicArticleRatingsClient: Symbol("BaasicArticleRatingsClient"),
    BaasicArticleRatingsRouteDefinition: Symbol("BaasicArticleRatingsRouteDefinition"),
    BaasicArticleRouteDefinition: Symbol("BaasicArticleRouteDefinition"),
    BaasicArticleSettingsClient: Symbol("BaasicArticleSettingsClient"),
    BaasicArticleSettingsRouteDefinition: Symbol("BaasicArticleSettingsRouteDefinition"),
    BaasicArticleTagsClient: Symbol("BaasicArticleTagsClient"),
    BaasicArticleTagsRouteDefinition: Symbol("BaasicArticleTagsRouteDefinition"),
    BaasicArticleTagsSubscriptionsClient: Symbol("BaasicArticleTagsSubscriptionsClient"),
    BaasicArticleTagsSubscriptionsRouteDefinition: Symbol("BaasicArticleTagsSubscriptionsRouteDefinition"),
    BaasicArticleSubscriptionsArticleModuleRouteDefinition: Symbol("BaasicArticleSubscriptionsArticleModuleRouteDefinition"),
    BaasicArticleSubscriptionsArticleRouteDefinition: Symbol("BaasicArticleSubscriptionsArticleRouteDefinition"),
    BaasicArticleSubscriptionsCommentReportedRouteDefinition: Symbol("BaasicArticleSubscriptionsCommentReportedRouteDefinition"),
    BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition: Symbol("BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition"),
    BaasicArticleSubscriptionsRouteDefinition: Symbol("BaasicArticleSubscriptionsRouteDefinition"),
    BaasicArticleSubscriptionsArticleModuleClient: Symbol("BaasicArticleSubscriptionsArticleModuleClient"),
    BaasicArticleSubscriptionsArticleClient: Symbol("BaasicArticleSubscriptionsArticleClient"),
    BaasicArticleSubscriptionsCommentReportedClient: Symbol("BaasicArticleSubscriptionsCommentReportedClient"),
    BaasicArticleSubscriptionsCommentRequiresModerationClient: Symbol("BaasicArticleSubscriptionsCommentRequiresModerationClient"),
    BaasicArticleSubscriptionsClient: Symbol("BaasicArticleSubscriptionsClient"),
    BaasicArticleInstanceRatingsRouteDefinition: Symbol("BaasicArticleInstanceRatingsRouteDefinition"),
    BaasicArticleInstanceRatingsClient: Symbol("BaasicArticleInstanceRatingsClient"),
    BaasicArticleInstanceTagsRouteDefinition: Symbol("BaasicArticleInstanceTagsRouteDefinition"),
    BaasicArticleInstanceTagsClient: Symbol("BaasicArticleInstanceTagsClient"),
    BaasicArticleInstanceCommentsRouteDefinition: Symbol("BaasicArticleInstanceCommentsRouteDefinition"),
    BaasicArticleInstanceCommentsClient: Symbol("BaasicArticleInstanceCommentsClient"),
    BaasicArticleInstanceCommentRepliesRouteDefinition: Symbol("BaasicArticleInstanceCommentRepliesRouteDefinition"),
    BaasicArticleInstanceCommentRepliesClient: Symbol("BaasicArticleInstanceCommentRepliesClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicArticleCommentRepliesRouteDefinition>(TYPES.BaasicArticleCommentRepliesRouteDefinition).toSelf();
    bind<BaasicArticleCommentRepliesClient>(TYPES.BaasicArticleCommentRepliesClient).toSelf();
    bind<BaasicArticleCommentsRouteDefinition>(TYPES.BaasicArticleCommentsRouteDefinition).toSelf();
    bind<BaasicArticleCommentsClient>(TYPES.BaasicArticleCommentsClient).toSelf();
    bind<BaasicArticleFilesBatchRouteDefinition>(TYPES.BaasicArticleFilesBatchRouteDefinition).toSelf();
    bind<BaasicArticleFilesBatchClient>(TYPES.BaasicArticleFilesBatchClient).toSelf();
    bind<BaasicArticleFilesStreamsRouteDefinition>(TYPES.BaasicArticleFilesStreamsRouteDefinition).toSelf();
    bind<BaasicArticleFilesStreamsClient>(TYPES.BaasicArticleFilesStreamsClient).toSelf();
    bind<BaasicArticleFilesRouteDefinition>(TYPES.BaasicArticleFilesRouteDefinition).toSelf();
    bind<BaasicArticleFilesClient>(TYPES.BaasicArticleFilesClient).toSelf();
    bind<BaasicArticleRatingsRouteDefinition>(TYPES.BaasicArticleRatingsRouteDefinition).toSelf();
    bind<BaasicArticleRatingsClient>(TYPES.BaasicArticleRatingsClient).toSelf();
    bind<BaasicArticleSettingsRouteDefinition>(TYPES.BaasicArticleSettingsRouteDefinition).toSelf();
    bind<BaasicArticleSettingsClient>(TYPES.BaasicArticleSettingsClient).toSelf();
    bind<BaasicArticleTagsSubscriptionsRouteDefinition>(TYPES.BaasicArticleTagsSubscriptionsRouteDefinition).toSelf();
    bind<BaasicArticleTagsSubscriptionsClient>(TYPES.BaasicArticleTagsSubscriptionsClient).toSelf();
    bind<BaasicArticleTagsRouteDefinition>(TYPES.BaasicArticleTagsRouteDefinition).toSelf();
    bind<BaasicArticleTagsClient>(TYPES.BaasicArticleTagsClient).toSelf();
    bind<BaasicArticleSubscriptionsArticleModuleRouteDefinition>(TYPES.BaasicArticleSubscriptionsArticleModuleRouteDefinition).toSelf();
    bind<BaasicArticleRouteDefinition>(TYPES.BaasicArticleRouteDefinition).toSelf();
    bind<BaasicArticleSubscriptionsArticleRouteDefinition>(TYPES.BaasicArticleSubscriptionsArticleRouteDefinition).toSelf();
    bind<BaasicArticleSubscriptionsCommentReportedRouteDefinition>(TYPES.BaasicArticleSubscriptionsCommentReportedRouteDefinition).toSelf();
    bind<BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition>(TYPES.BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition).toSelf();
    bind<BaasicArticleSubscriptionsRouteDefinition>(TYPES.BaasicArticleSubscriptionsRouteDefinition).toSelf();
    bind<BaasicArticleSubscriptionsArticleModuleClient>(TYPES.BaasicArticleSubscriptionsArticleModuleClient).toSelf();
    bind<BaasicArticleSubscriptionsArticleClient>(TYPES.BaasicArticleSubscriptionsArticleClient).toSelf();
    bind<BaasicArticleSubscriptionsCommentReportedClient>(TYPES.BaasicArticleSubscriptionsCommentReportedClient).toSelf();
    bind<BaasicArticleSubscriptionsCommentRequiresModerationClient>(TYPES.BaasicArticleSubscriptionsCommentRequiresModerationClient).toSelf();
    bind<BaasicArticleSubscriptionsClient>(TYPES.BaasicArticleSubscriptionsClient).toSelf();
    bind<BaasicArticleInstanceRatingsRouteDefinition>(TYPES.BaasicArticleInstanceRatingsRouteDefinition).toSelf();
    bind<BaasicArticleInstanceRatingsClient>(TYPES.BaasicArticleInstanceRatingsClient).toSelf();
    bind<BaasicArticleInstanceTagsRouteDefinition>(TYPES.BaasicArticleInstanceTagsRouteDefinition).toSelf();
    bind<BaasicArticleInstanceTagsClient>(TYPES.BaasicArticleInstanceTagsClient).toSelf();
    bind<BaasicArticleInstanceCommentsRouteDefinition>(TYPES.BaasicArticleInstanceCommentsRouteDefinition).toSelf();
    bind<BaasicArticleInstanceCommentsClient>(TYPES.BaasicArticleInstanceCommentsClient).toSelf();
    bind<BaasicArticleInstanceCommentRepliesRouteDefinition>(TYPES.BaasicArticleInstanceCommentRepliesRouteDefinition).toSelf();
    bind<BaasicArticleInstanceCommentRepliesClient>(TYPES.BaasicArticleInstanceCommentRepliesClient).toSelf();
});

export { diModule };