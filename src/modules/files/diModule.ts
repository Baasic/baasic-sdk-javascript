import { ContainerModule } from "inversify";
import {
    BaasicFilesACLClient,
    BaasicFilesACLRouteDefinition,
    BaasicFilesBatchRouteDefinition,
    BaasicFilesBatchClient,
    BaasicFilesRouteDefinition,
    BaasicFilesClient,
    BaasicFilesStreamsRouteDefinition,
    BaasicFilesStreamsClient
} from 'modules/files';

const TYPES = {
    BaasicFilesACLClient: Symbol("BaasicFilesACLClient"),
    BaasicFilesACLRouteDefinition: Symbol("BaasicFilesACLRouteDefinition"),
    BaasicFilesBatchRouteDefinition: Symbol("BaasicFilesBatchRouteDefinition"),
    BaasicFilesBatchClient: Symbol("BaasicFilesBatchClient"),
    BaasicFilesRouteDefinition: Symbol("BaasicFilesRouteDefinition"),
    BaasicFilesClient: Symbol("BaasicFilesClient"),
    BaasicFilesStreamsRouteDefinition: Symbol("BaasicFilesStreamsRouteDefinition"),
    BaasicFilesStreamsClient: Symbol("BaasicFilesStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicFilesBatchRouteDefinition>(TYPES.BaasicFilesBatchRouteDefinition).toSelf();
    bind<BaasicFilesBatchClient>(TYPES.BaasicFilesBatchClient).toSelf();
    bind<BaasicFilesStreamsRouteDefinition>(TYPES.BaasicFilesStreamsRouteDefinition).toSelf();
    bind<BaasicFilesStreamsClient>(TYPES.BaasicFilesStreamsClient).toSelf();
    bind<BaasicFilesACLRouteDefinition>(TYPES.BaasicFilesACLRouteDefinition).toSelf();
    bind<BaasicFilesACLClient>(TYPES.BaasicFilesACLClient).toSelf();
    bind<BaasicFilesRouteDefinition>(TYPES.BaasicFilesRouteDefinition).toSelf();
    bind<BaasicFilesClient>(TYPES.BaasicFilesClient).toSelf();
});

export { diModule };