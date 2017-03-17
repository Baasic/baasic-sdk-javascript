import { ContainerModule } from "inversify";
import {
    FilesACLClient,
    BaasicFilesACLRouteDefinition,
    BaasicFilesBatchRouteDefinition,
    FilesBatchClient,
    BaasicFilesRouteDefinition,
    FilesClient,
    BaasicFilesStreamsRouteDefinition,
    FilesStreamsClient
} from 'modules/file';

const TYPES = {
    FilesACLClient: Symbol("FilesACLClient"),
    BaasicFilesACLRouteDefinition: Symbol("BaasicFilesACLRouteDefinition"),
    BaasicFilesBatchRouteDefinition: Symbol("BaasicFilesBatchRouteDefinition"),
    FilesBatchClient: Symbol("FilesBatchClient"),
    BaasicFilesRouteDefinition: Symbol("BaasicFilesRouteDefinition"),
    FilesClient: Symbol("FilesClient"),
    BaasicFilesStreamsRouteDefinition: Symbol("BaasicFilesStreamsRouteDefinition"),
    FilesStreamsClient: Symbol("FilesStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicFilesBatchRouteDefinition>(TYPES.BaasicFilesBatchRouteDefinition).to(BaasicFilesBatchRouteDefinition);
    bind<FilesBatchClient>(TYPES.FilesBatchClient).to(FilesBatchClient);
    bind<BaasicFilesStreamsRouteDefinition>(TYPES.BaasicFilesStreamsRouteDefinition).to(BaasicFilesStreamsRouteDefinition);
    bind<FilesStreamsClient>(TYPES.FilesStreamsClient).to(FilesStreamsClient);
    bind<BaasicFilesACLRouteDefinition>(TYPES.BaasicFilesACLRouteDefinition).to(BaasicFilesACLRouteDefinition);
    bind<FilesACLClient>(TYPES.FilesACLClient).to(FilesACLClient);
    bind<BaasicFilesRouteDefinition>(TYPES.BaasicFilesRouteDefinition).to(BaasicFilesRouteDefinition);
    bind<FilesClient>(TYPES.FilesClient).to(FilesClient);
});

export { diModule };