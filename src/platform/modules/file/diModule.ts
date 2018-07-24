import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    FilesACLClient,
    FilesACLRoute,
    FilesBatchRoute,
    FilesBatchClient,
    FilesRoute,
    FilesClient,
    FilesStreamsRoute,
    FilesStreamsClient
} from './';

const TYPES = {
    FilesACLClient: Symbol("FilesACLClient"),
    FilesACLRoute: Symbol("FilesACLRoute"),
    FilesBatchRoute: Symbol("FilesBatchRoute"),
    FilesBatchClient: Symbol("FilesBatchClient"),
    FilesRoute: Symbol("FilesRoute"),
    FilesClient: Symbol("FilesClient"),
    FilesStreamsRoute: Symbol("FilesStreamsRoute"),
    FilesStreamsClient: Symbol("FilesStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<FilesBatchRoute>(TYPES.FilesBatchRoute).to(FilesBatchRoute);
    bind<FilesBatchClient>(TYPES.FilesBatchClient).to(FilesBatchClient);
    bind<FilesStreamsRoute>(TYPES.FilesStreamsRoute).to(FilesStreamsRoute);
    bind<FilesStreamsClient>(TYPES.FilesStreamsClient).to(FilesStreamsClient);
    bind<FilesACLRoute>(TYPES.FilesACLRoute).to(FilesACLRoute);
    bind<FilesACLClient>(TYPES.FilesACLClient).to(FilesACLClient);
    bind<FilesRoute>(TYPES.FilesRoute).to(FilesRoute);
    bind<FilesClient>(TYPES.FilesClient).to(FilesClient);
});

export { diModule };