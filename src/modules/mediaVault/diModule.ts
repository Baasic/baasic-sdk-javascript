import { ContainerModule } from "inversify";
import {
    BaasicMediaVaultBatchRouteDefinition,
    MediaVaultBatchClient,
    BaasicMediaVaultRouteDefinition,
    MediaVaultProcessingProviderSettingsClient,
    BaasicMediaVaultProcessingProviderSettingsRouteDefinition,
    MediaVaultClient,
    BaasicMediaVaultSettingsRouteDefinition,
    MediaVaultSettingsClient,
    BaasicMediaVaultStreamsRouteDefinition,
    MediaVaultStreamsClient
} from 'modules/mediaVault';

const TYPES = {
    BaasicMediaVaultBatchRouteDefinition: Symbol("BaasicMediaVaultBatchRouteDefinition"),
    MediaVaultBatchClient: Symbol("MediaVaultBatchClient"),
    BaasicMediaVaultRouteDefinition: Symbol("BaasicMediaVaultRouteDefinition"),
    MediaVaultProcessingProviderSettingsClient: Symbol("MediaVaultProcessingProviderSettingsClient"),
    BaasicMediaVaultProcessingProviderSettingsRouteDefinition: Symbol("BaasicMediaVaultProcessingProviderSettingsRouteDefinition"),
    MediaVaultClient: Symbol("MediaVaultClient"),
    BaasicMediaVaultSettingsRouteDefinition: Symbol("BaasicMediaVaultSettingsRouteDefinition"),
    MediaVaultSettingsClient: Symbol("MediaVaultSettingsClient"),
    BaasicMediaVaultStreamsRouteDefinition: Symbol("BaasicMediaVaultStreamsRouteDefinition"),
    MediaVaultStreamsClient: Symbol("MediaVaultStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicMediaVaultStreamsRouteDefinition>(TYPES.BaasicMediaVaultStreamsRouteDefinition).to(BaasicMediaVaultStreamsRouteDefinition);
    bind<MediaVaultStreamsClient>(TYPES.MediaVaultStreamsClient).to(MediaVaultStreamsClient);
    bind<BaasicMediaVaultBatchRouteDefinition>(TYPES.BaasicMediaVaultBatchRouteDefinition).to(BaasicMediaVaultBatchRouteDefinition);
    bind<MediaVaultBatchClient>(TYPES.MediaVaultBatchClient).to(MediaVaultBatchClient);
    bind<BaasicMediaVaultSettingsRouteDefinition>(TYPES.BaasicMediaVaultSettingsRouteDefinition).to(BaasicMediaVaultSettingsRouteDefinition);
    bind<MediaVaultSettingsClient>(TYPES.MediaVaultSettingsClient).to(MediaVaultSettingsClient);
    bind<BaasicMediaVaultProcessingProviderSettingsRouteDefinition>(TYPES.BaasicMediaVaultProcessingProviderSettingsRouteDefinition).to(BaasicMediaVaultProcessingProviderSettingsRouteDefinition);
    bind<MediaVaultProcessingProviderSettingsClient>(TYPES.MediaVaultProcessingProviderSettingsClient).to(MediaVaultProcessingProviderSettingsClient);
    bind<BaasicMediaVaultRouteDefinition>(TYPES.BaasicMediaVaultRouteDefinition).to(BaasicMediaVaultRouteDefinition);
    bind<MediaVaultClient>(TYPES.MediaVaultClient).to(MediaVaultClient);
});

export { diModule };