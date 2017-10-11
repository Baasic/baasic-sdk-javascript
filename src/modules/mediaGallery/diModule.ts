import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    MediaGalleryClient, 
    MediaGalleryRoute,    
    MediaGalleryBatchClient, 
    MediaGalleryBatchRoute,    
    MediaGallerySettingsClient, 
    MediaGallerySettingsRoute,
    MediaGalleryInstanceFilesBatchClient,
    MediaGalleryInstanceFilesBatchRoute,
    MediaGalleryInstanceFilesClient,
    MediaGalleryInstanceFilesRoute,
    MediaGalleryInstanceFileStreamClient,
    MediaGalleryInstanceFileStreamRoute,
    MediaGalleryFileBatchClient,
    MediaGalleryFileBatchRoute,
    MediaGalleryFileClient,
    MediaGalleryFileRoute
} from './';

const TYPES = {
    MediaGalleryClient: Symbol("MediaGalleryClient"),
    MediaGalleryRoute: Symbol("MediaGalleryRoute"),
    MediaGalleryBatchClient: Symbol("MediaGalleryBatchClient"),
    MediaGalleryBatchRoute: Symbol("MediaGalleryBatchRoute"),
    MediaGallerySettingsClient: Symbol("MediaGallerySettingsClient"),
    MediaGallerySettingsRoute: Symbol("MediaGallerySettingsRoute"),
    MediaGalleryInstanceFilesBatchClient: Symbol("MediaGalleryInstanceFilesBatchClient"),
    MediaGalleryInstanceFilesBatchRoute: Symbol("MediaGalleryInstanceFilesBatchRoute"),
    MediaGalleryInstanceFilesClient: Symbol("MediaGalleryInstanceFilesClient"),
    MediaGalleryInstanceFilesRoute: Symbol("MediaGalleryInstanceFilesRoute"),
    MediaGalleryInstanceFileStreamClient: Symbol("MediaGalleryInstanceFileStreamClient"),
    MediaGalleryInstanceFileStreamRoute: Symbol("MediaGalleryInstanceFileStreamRoute"),
    MediaGalleryFileBatchClient: Symbol("MediaGalleryFileBatchClient"),
    MediaGalleryFileBatchRoute: Symbol("MediaGalleryFileBatchRoute"),
    MediaGalleryFileClient: Symbol("MediaGalleryFileClient"),
    MediaGalleryFileRoute: Symbol("MediaGalleryFileRoute"),
    MediaGalleryFileStreamsClient: Symbol("MediaGalleryFileStreamsClient"),
    MediaGalleryFileStreamsRoute: Symbol("MediaGalleryFileStreamsRoute")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<MediaGalleryClient>(TYPES.MediaGalleryClient).to(MediaGalleryClient);
    bind<MediaGalleryRoute>(TYPES.MediaGalleryRoute).to(MediaGalleryRoute);
    bind<MediaGalleryBatchClient>(TYPES.MediaGalleryBatchClient).to(MediaGalleryBatchClient);
    bind<MediaGalleryBatchRoute>(TYPES.MediaGalleryBatchRoute).to(MediaGalleryBatchRoute);
    bind<MediaGallerySettingsClient>(TYPES.MediaGallerySettingsClient).to(MediaGallerySettingsClient);
    bind<MediaGallerySettingsRoute>(TYPES.MediaGallerySettingsRoute).to(MediaGallerySettingsRoute);
    bind<MediaGalleryInstanceFilesBatchClient>(TYPES.MediaGalleryInstanceFilesBatchClient).to(MediaGalleryInstanceFilesBatchClient);
    bind<MediaGalleryInstanceFilesBatchRoute>(TYPES.MediaGalleryInstanceFilesBatchRoute).to(MediaGalleryInstanceFilesBatchRoute);
    bind<MediaGalleryInstanceFilesClient>(TYPES.MediaGalleryInstanceFilesClient).to(MediaGalleryInstanceFilesClient);
    bind<MediaGalleryInstanceFilesRoute>(TYPES.MediaGalleryInstanceFilesRoute).to(MediaGalleryInstanceFilesRoute);    
    bind<MediaGalleryFileBatchClient>(TYPES.MediaGalleryFileBatchClient).to(MediaGalleryFileBatchClient);
    bind<MediaGalleryFileBatchRoute>(TYPES.MediaGalleryFileBatchRoute).to(MediaGalleryFileBatchRoute);
    bind<MediaGalleryFileClient>(TYPES.MediaGalleryFileClient).to(MediaGalleryFileClient);
    bind<MediaGalleryFileRoute>(TYPES.MediaGalleryFileRoute).to(MediaGalleryFileRoute);
    bind<MediaGalleryInstanceFileStreamClient>(TYPES.MediaGalleryInstanceFileStreamClient).to(MediaGalleryInstanceFileStreamClient);
    bind<MediaGalleryInstanceFileStreamRoute>(TYPES.MediaGalleryInstanceFileStreamRoute).to(MediaGalleryInstanceFileStreamRoute);
});

export { diModule };