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
    BaasicArticleClient,
    BaasicArticleRouteDefinition,
    BaasicArticleSettingsRouteDefinition,
    BaasicArticleSettingsClient,
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
    BaasicArticleInstanceCommentRepliesClient,
    BaasicArticleInstanceFilesRouteDefinition,
    BaasicArticleInstanceFilesClient,
    BaasicArticleInstanceFilesStreamsRouteDefinition,
    BaasicArticleInstanceFilesStreamsClient,
    BaasicArticleInstanceFilesBatchRouteDefinition,
    BaasicArticleInstanceFilesBatchClient,
    BaasicArticleACLRouteDefinition,
    BaasicArticleACLClient
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
    BaasicArticleClient: Symbol("BaasicArticleClient"),
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
    BaasicArticleInstanceCommentRepliesClient: Symbol("BaasicArticleInstanceCommentRepliesClient"),
    BaasicArticleInstanceFilesRouteDefinition: Symbol("BaasicArticleInstanceFilesRouteDefinition"),
    BaasicArticleInstanceFilesClient: Symbol("BaasicArticleInstanceFilesClient"),
    BaasicArticleInstanceFilesStreamsRouteDefinition: Symbol("BaasicArticleInstanceFilesStreamsRouteDefinition"),
    BaasicArticleInstanceFilesStreamsClient: Symbol("BaasicArticleInstanceFilesStreamsClient"),
    BaasicArticleInstanceFilesBatchRouteDefinition: Symbol("BaasicArticleInstanceFilesBatchRouteDefinition"),
    BaasicArticleInstanceFilesBatchClient: Symbol("BaasicArticleInstanceFilesBatchClient"),
    BaasicArticleACLRouteDefinition: Symbol(" BaasicArticleACLRouteDefinition"),
    BaasicArticleACLClient: Symbol("BaasicArticleACLClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicArticleCommentRepliesRouteDefinition>(TYPES.BaasicArticleCommentRepliesRouteDefinition).to(BaasicArticleCommentRepliesRouteDefinition);
    bind<BaasicArticleCommentRepliesClient>(TYPES.BaasicArticleCommentRepliesClient).to(BaasicArticleCommentRepliesClient);
    bind<BaasicArticleCommentsRouteDefinition>(TYPES.BaasicArticleCommentsRouteDefinition).to(BaasicArticleCommentsRouteDefinition);
    bind<BaasicArticleCommentsClient>(TYPES.BaasicArticleCommentsClient).to(BaasicArticleCommentsClient);
    bind<BaasicArticleFilesBatchRouteDefinition>(TYPES.BaasicArticleFilesBatchRouteDefinition).to(BaasicArticleFilesBatchRouteDefinition);
    bind<BaasicArticleFilesBatchClient>(TYPES.BaasicArticleFilesBatchClient).to(BaasicArticleFilesBatchClient);
    bind<BaasicArticleFilesStreamsRouteDefinition>(TYPES.BaasicArticleFilesStreamsRouteDefinition).to(BaasicArticleFilesStreamsRouteDefinition);
    bind<BaasicArticleFilesStreamsClient>(TYPES.BaasicArticleFilesStreamsClient).to(BaasicArticleFilesStreamsClient);
    bind<BaasicArticleFilesRouteDefinition>(TYPES.BaasicArticleFilesRouteDefinition).to(BaasicArticleFilesRouteDefinition);
    bind<BaasicArticleFilesClient>(TYPES.BaasicArticleFilesClient).to(BaasicArticleFilesClient);
    bind<BaasicArticleRatingsRouteDefinition>(TYPES.BaasicArticleRatingsRouteDefinition).to(BaasicArticleRatingsRouteDefinition);
    bind<BaasicArticleRatingsClient>(TYPES.BaasicArticleRatingsClient).to(BaasicArticleRatingsClient);
    bind<BaasicArticleSettingsRouteDefinition>(TYPES.BaasicArticleSettingsRouteDefinition).to(BaasicArticleSettingsRouteDefinition);
    bind<BaasicArticleSettingsClient>(TYPES.BaasicArticleSettingsClient).to(BaasicArticleSettingsClient);
    bind<BaasicArticleTagsSubscriptionsRouteDefinition>(TYPES.BaasicArticleTagsSubscriptionsRouteDefinition).to(BaasicArticleTagsSubscriptionsRouteDefinition);
    bind<BaasicArticleTagsSubscriptionsClient>(TYPES.BaasicArticleTagsSubscriptionsClient).to(BaasicArticleTagsSubscriptionsClient);
    bind<BaasicArticleTagsRouteDefinition>(TYPES.BaasicArticleTagsRouteDefinition).to(BaasicArticleTagsRouteDefinition);
    bind<BaasicArticleTagsClient>(TYPES.BaasicArticleTagsClient).to(BaasicArticleTagsClient);
    bind<BaasicArticleSubscriptionsArticleModuleRouteDefinition>(TYPES.BaasicArticleSubscriptionsArticleModuleRouteDefinition).to(BaasicArticleSubscriptionsArticleModuleRouteDefinition);
    bind<BaasicArticleSubscriptionsArticleRouteDefinition>(TYPES.BaasicArticleSubscriptionsArticleRouteDefinition).to(BaasicArticleSubscriptionsArticleRouteDefinition);
    bind<BaasicArticleSubscriptionsCommentReportedRouteDefinition>(TYPES.BaasicArticleSubscriptionsCommentReportedRouteDefinition).to(BaasicArticleSubscriptionsCommentReportedRouteDefinition);
    bind<BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition>(TYPES.BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition).to(BaasicArticleSubscriptionsCommentRequiresModerationRouteDefinition);
    bind<BaasicArticleSubscriptionsRouteDefinition>(TYPES.BaasicArticleSubscriptionsRouteDefinition).to(BaasicArticleSubscriptionsRouteDefinition);
    bind<BaasicArticleSubscriptionsArticleModuleClient>(TYPES.BaasicArticleSubscriptionsArticleModuleClient).to(BaasicArticleSubscriptionsArticleModuleClient);
    bind<BaasicArticleSubscriptionsArticleClient>(TYPES.BaasicArticleSubscriptionsArticleClient).to(BaasicArticleSubscriptionsArticleClient);
    bind<BaasicArticleSubscriptionsCommentReportedClient>(TYPES.BaasicArticleSubscriptionsCommentReportedClient).to(BaasicArticleSubscriptionsCommentReportedClient);
    bind<BaasicArticleSubscriptionsCommentRequiresModerationClient>(TYPES.BaasicArticleSubscriptionsCommentRequiresModerationClient).to(BaasicArticleSubscriptionsCommentRequiresModerationClient);
    bind<BaasicArticleSubscriptionsClient>(TYPES.BaasicArticleSubscriptionsClient).to(BaasicArticleSubscriptionsClient);
    bind<BaasicArticleInstanceRatingsRouteDefinition>(TYPES.BaasicArticleInstanceRatingsRouteDefinition).to(BaasicArticleInstanceRatingsRouteDefinition);
    bind<BaasicArticleInstanceRatingsClient>(TYPES.BaasicArticleInstanceRatingsClient).to(BaasicArticleInstanceRatingsClient);
    bind<BaasicArticleInstanceTagsRouteDefinition>(TYPES.BaasicArticleInstanceTagsRouteDefinition).to(BaasicArticleInstanceTagsRouteDefinition);
    bind<BaasicArticleInstanceTagsClient>(TYPES.BaasicArticleInstanceTagsClient).to(BaasicArticleInstanceTagsClient);
    bind<BaasicArticleInstanceCommentsRouteDefinition>(TYPES.BaasicArticleInstanceCommentsRouteDefinition).to(BaasicArticleInstanceCommentsRouteDefinition);
    bind<BaasicArticleInstanceCommentsClient>(TYPES.BaasicArticleInstanceCommentsClient).to(BaasicArticleInstanceCommentsClient);
    bind<BaasicArticleInstanceCommentRepliesRouteDefinition>(TYPES.BaasicArticleInstanceCommentRepliesRouteDefinition).to(BaasicArticleInstanceCommentRepliesRouteDefinition);
    bind<BaasicArticleInstanceCommentRepliesClient>(TYPES.BaasicArticleInstanceCommentRepliesClient).to(BaasicArticleInstanceCommentRepliesClient);
    bind<BaasicArticleInstanceFilesRouteDefinition>(TYPES.BaasicArticleInstanceFilesRouteDefinition).to(BaasicArticleInstanceFilesRouteDefinition);
    bind<BaasicArticleInstanceFilesClient>(TYPES.BaasicArticleInstanceFilesClient).to(BaasicArticleInstanceFilesClient);
    bind<BaasicArticleInstanceFilesStreamsRouteDefinition>(TYPES.BaasicArticleInstanceFilesStreamsRouteDefinition).to(BaasicArticleInstanceFilesStreamsRouteDefinition);
    bind<BaasicArticleInstanceFilesStreamsClient>(TYPES.BaasicArticleInstanceFilesStreamsClient).to(BaasicArticleInstanceFilesStreamsClient);
    bind<BaasicArticleInstanceFilesBatchRouteDefinition>(TYPES.BaasicArticleInstanceFilesBatchRouteDefinition).to(BaasicArticleInstanceFilesBatchRouteDefinition);
    bind<BaasicArticleInstanceFilesBatchClient>(TYPES.BaasicArticleInstanceFilesBatchClient).to(BaasicArticleInstanceFilesBatchClient);
    bind<BaasicArticleACLRouteDefinition>(TYPES.BaasicArticleACLRouteDefinition).to(BaasicArticleACLRouteDefinition);
    bind<BaasicArticleACLClient>(TYPES.BaasicArticleACLClient).to(BaasicArticleACLClient);
    bind<BaasicArticleRouteDefinition>(TYPES.BaasicArticleRouteDefinition).to(BaasicArticleRouteDefinition);
    bind<BaasicArticleClient>(TYPES.BaasicArticleClient).to(BaasicArticleClient);
});

export { diModule };