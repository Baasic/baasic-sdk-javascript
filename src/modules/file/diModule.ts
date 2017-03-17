import { ContainerModule } from "inversify";
import {
    FilesACLClient,
    FilesACLRouteDefinition,
    FilesBatchRouteDefinition,
    FilesBatchClient,
    FilesRouteDefinition,
    FilesClient,
    FilesStreamsRouteDefinition,
    FilesStreamsClient
} from 'modules/file';

const TYPES = {
    FilesACLClient: Symbol("FilesACLClient"),
    FilesACLRouteDefinition: Symbol("FilesACLRouteDefinition"),
    FilesBatchRouteDefinition: Symbol("FilesBatchRouteDefinition"),
    FilesBatchClient: Symbol("FilesBatchClient"),
    FilesRouteDefinition: Symbol("FilesRouteDefinition"),
    FilesClient: Symbol("FilesClient"),
    FilesStreamsRouteDefinition: Symbol("FilesStreamsRouteDefinition"),
    FilesStreamsClient: Symbol("FilesStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<FilesBatchRouteDefinition>(TYPES.FilesBatchRouteDefinition).to(FilesBatchRouteDefinition);
    bind<FilesBatchClient>(TYPES.FilesBatchClient).to(FilesBatchClient);
    bind<FilesStreamsRouteDefinition>(TYPES.FilesStreamsRouteDefinition).to(FilesStreamsRouteDefinition);
    bind<FilesStreamsClient>(TYPES.FilesStreamsClient).to(FilesStreamsClient);
    bind<FilesACLRouteDefinition>(TYPES.FilesACLRouteDefinition).to(FilesACLRouteDefinition);
    bind<FilesACLClient>(TYPES.FilesACLClient).to(FilesACLClient);
    bind<FilesRouteDefinition>(TYPES.FilesRouteDefinition).to(FilesRouteDefinition);
    bind<FilesClient>(TYPES.FilesClient).to(FilesClient);
});

export { diModule };