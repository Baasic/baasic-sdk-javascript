import { ContainerModule } from "inversify";
import {
    MediaVaultBatchRoute,
    MediaVaultBatchClient,
    MediaVaultRoute,
    MediaVaultProcessingProviderSettingsClient,
    MediaVaultProcessingProviderSettingsRoute,
    MediaVaultClient,
    MediaVaultSettingsRoute,
    MediaVaultSettingsClient,
    MediaVaultStreamsRoute,
    MediaVaultStreamsClient
} from './';

const TYPES = {
    MediaVaultBatchRoute: Symbol("MediaVaultBatchRoute"),
    MediaVaultBatchClient: Symbol("MediaVaultBatchClient"),
    MediaVaultRoute: Symbol("MediaVaultRoute"),
    MediaVaultProcessingProviderSettingsClient: Symbol("MediaVaultProcessingProviderSettingsClient"),
    MediaVaultProcessingProviderSettingsRoute: Symbol("MediaVaultProcessingProviderSettingsRoute"),
    MediaVaultClient: Symbol("MediaVaultClient"),
    MediaVaultSettingsRoute: Symbol("MediaVaultSettingsRoute"),
    MediaVaultSettingsClient: Symbol("MediaVaultSettingsClient"),
    MediaVaultStreamsRoute: Symbol("MediaVaultStreamsRoute"),
    MediaVaultStreamsClient: Symbol("MediaVaultStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<MediaVaultStreamsRoute>(TYPES.MediaVaultStreamsRoute).to(MediaVaultStreamsRoute);
    bind<MediaVaultStreamsClient>(TYPES.MediaVaultStreamsClient).to(MediaVaultStreamsClient);
    bind<MediaVaultBatchRoute>(TYPES.MediaVaultBatchRoute).to(MediaVaultBatchRoute);
    bind<MediaVaultBatchClient>(TYPES.MediaVaultBatchClient).to(MediaVaultBatchClient);
    bind<MediaVaultSettingsRoute>(TYPES.MediaVaultSettingsRoute).to(MediaVaultSettingsRoute);
    bind<MediaVaultSettingsClient>(TYPES.MediaVaultSettingsClient).to(MediaVaultSettingsClient);
    bind<MediaVaultProcessingProviderSettingsRoute>(TYPES.MediaVaultProcessingProviderSettingsRoute).to(MediaVaultProcessingProviderSettingsRoute);
    bind<MediaVaultProcessingProviderSettingsClient>(TYPES.MediaVaultProcessingProviderSettingsClient).to(MediaVaultProcessingProviderSettingsClient);
    bind<MediaVaultRoute>(TYPES.MediaVaultRoute).to(MediaVaultRoute);
    bind<MediaVaultClient>(TYPES.MediaVaultClient).to(MediaVaultClient);
});

export { diModule };