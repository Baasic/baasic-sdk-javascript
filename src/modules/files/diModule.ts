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
    bind<BaasicFilesBatchRouteDefinition>(TYPES.BaasicFilesBatchRouteDefinition).to(BaasicFilesBatchRouteDefinition);
    bind<BaasicFilesBatchClient>(TYPES.BaasicFilesBatchClient).to(BaasicFilesBatchClient);
    bind<BaasicFilesStreamsRouteDefinition>(TYPES.BaasicFilesStreamsRouteDefinition).to(BaasicFilesStreamsRouteDefinition);
    bind<BaasicFilesStreamsClient>(TYPES.BaasicFilesStreamsClient).to(BaasicFilesStreamsClient);
    bind<BaasicFilesACLRouteDefinition>(TYPES.BaasicFilesACLRouteDefinition).to(BaasicFilesACLRouteDefinition);
    bind<BaasicFilesACLClient>(TYPES.BaasicFilesACLClient).to(BaasicFilesACLClient);
    bind<BaasicFilesRouteDefinition>(TYPES.BaasicFilesRouteDefinition).to(BaasicFilesRouteDefinition);
    bind<BaasicFilesClient>(TYPES.BaasicFilesClient).to(BaasicFilesClient);
});

export { diModule };