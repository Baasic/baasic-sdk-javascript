import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    MediaGalleryClient, 
    MediaGalleryRoute,    
    MediaGalleryBatchClient, 
    MediaGalleryBatchRoute,    
    MediaGallerySettingsClient, 
    MediaGallerySettingsRoute
} from './';

const TYPES = {
    MediaGalleryClient: Symbol("MediaGalleryClient"),
    MediaGalleryRoute: Symbol("MediaGalleryRoute"),
    MediaGalleryBatchClient: Symbol("MediaGalleryBatchClient"),
    MediaGalleryBatchRoute: Symbol("MediaGalleryBatchRoute"),
    MediaGallerySettingsClient: Symbol("MediaGallerySettingsClient"),
    MediaGallerySettingsRoute: Symbol("MediaGallerySettingsRoute")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<MediaGalleryClient>(TYPES.MediaGalleryClient).to(MediaGalleryClient);
    bind<MediaGalleryRoute>(TYPES.MediaGalleryRoute).to(MediaGalleryRoute);
    bind<MediaGalleryBatchClient>(TYPES.MediaGalleryBatchClient).to(MediaGalleryBatchClient);
    bind<MediaGalleryBatchRoute>(TYPES.MediaGalleryBatchRoute).to(MediaGalleryBatchRoute);
    bind<MediaGallerySettingsClient>(TYPES.MediaGallerySettingsClient).to(MediaGallerySettingsClient);
    bind<MediaGallerySettingsRoute>(TYPES.MediaGallerySettingsRoute).to(MediaGallerySettingsRoute);
});
export { diModule };