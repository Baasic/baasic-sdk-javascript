import { ContainerModule } from "inversify";
import {
    BaasicArticleCommentRepliesClient,
    BaasicArticleCommentRepliesRouteDefinition,
    BaasicArticleCommentsClient,
    BaasicArticleCommentsRouteDefinition
} from 'modules/article';

const TYPES = {
    BaasicArticleCommentRepliesClient: Symbol("BaasicArticleCommentRepliesClient"),
    BaasicArticleCommentRepliesRouteDefinition: Symbol("BaasicArticleCommentRepliesRouteDefinition"),
    BaasicArticleCommentsClient: Symbol("BaasicArticleCommentsClient"),
    BaasicArticleCommentsRouteDefinition: Symbol("BaasicArticleCommentsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicArticleCommentRepliesRouteDefinition>(TYPES.BaasicArticleCommentRepliesRouteDefinition).toSelf();
    bind<BaasicArticleCommentRepliesClient>(TYPES.BaasicArticleCommentRepliesClient).toSelf();
    bind<BaasicArticleCommentsRouteDefinition>(TYPES.BaasicArticleCommentsRouteDefinition).toSelf();
    bind<BaasicArticleCommentsClient>(TYPES.BaasicArticleCommentsClient).toSelf();
});

export { diModule };