import { ContainerModule } from "inversify";
import {
    MediaVaultBatchRouteDefinition,
    MediaVaultBatchClient,
    MediaVaultRouteDefinition,
    MediaVaultProcessingProviderSettingsClient,
    MediaVaultProcessingProviderSettingsRouteDefinition,
    MediaVaultClient,
    MediaVaultSettingsRouteDefinition,
    MediaVaultSettingsClient,
    MediaVaultStreamsRouteDefinition,
    MediaVaultStreamsClient
} from 'modules/mediaVault';

const TYPES = {
    MediaVaultBatchRouteDefinition: Symbol("MediaVaultBatchRouteDefinition"),
    MediaVaultBatchClient: Symbol("MediaVaultBatchClient"),
    MediaVaultRouteDefinition: Symbol("MediaVaultRouteDefinition"),
    MediaVaultProcessingProviderSettingsClient: Symbol("MediaVaultProcessingProviderSettingsClient"),
    MediaVaultProcessingProviderSettingsRouteDefinition: Symbol("MediaVaultProcessingProviderSettingsRouteDefinition"),
    MediaVaultClient: Symbol("MediaVaultClient"),
    MediaVaultSettingsRouteDefinition: Symbol("MediaVaultSettingsRouteDefinition"),
    MediaVaultSettingsClient: Symbol("MediaVaultSettingsClient"),
    MediaVaultStreamsRouteDefinition: Symbol("MediaVaultStreamsRouteDefinition"),
    MediaVaultStreamsClient: Symbol("MediaVaultStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<MediaVaultStreamsRouteDefinition>(TYPES.MediaVaultStreamsRouteDefinition).to(MediaVaultStreamsRouteDefinition);
    bind<MediaVaultStreamsClient>(TYPES.MediaVaultStreamsClient).to(MediaVaultStreamsClient);
    bind<MediaVaultBatchRouteDefinition>(TYPES.MediaVaultBatchRouteDefinition).to(MediaVaultBatchRouteDefinition);
    bind<MediaVaultBatchClient>(TYPES.MediaVaultBatchClient).to(MediaVaultBatchClient);
    bind<MediaVaultSettingsRouteDefinition>(TYPES.MediaVaultSettingsRouteDefinition).to(MediaVaultSettingsRouteDefinition);
    bind<MediaVaultSettingsClient>(TYPES.MediaVaultSettingsClient).to(MediaVaultSettingsClient);
    bind<MediaVaultProcessingProviderSettingsRouteDefinition>(TYPES.MediaVaultProcessingProviderSettingsRouteDefinition).to(MediaVaultProcessingProviderSettingsRouteDefinition);
    bind<MediaVaultProcessingProviderSettingsClient>(TYPES.MediaVaultProcessingProviderSettingsClient).to(MediaVaultProcessingProviderSettingsClient);
    bind<MediaVaultRouteDefinition>(TYPES.MediaVaultRouteDefinition).to(MediaVaultRouteDefinition);
    bind<MediaVaultClient>(TYPES.MediaVaultClient).to(MediaVaultClient);
});

export { diModule };