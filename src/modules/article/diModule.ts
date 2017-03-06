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
    BaasicArticleRatingsRouteDefinition
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
    BaasicArticleRatingsRouteDefinition: Symbol("BaasicArticleRatingsRouteDefinition")
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
});

export { diModule };