import { ContainerModule } from "inversify";
import {
    BaasicMediaVaultBatchRouteDefinition,
    BaasicMediaVaultBatchClient,
    BaasicMediaVaultRouteDefinition,
    BaasicMediaVaultProcessingProviderSettingsClient,
    BaasicMediaVaultProcessingProviderSettingsRouteDefinition,
    BaasicMediaVaultClient,
    BaasicMediaVaultSettingsRouteDefinition,
    BaasicMediaVaultSettingsClient,
    BaasicMediaVaultStreamsRouteDefinition,
    BaasicMediaVaultStreamsClient
} from 'modules/mediaVault';

const TYPES = {
    BaasicMediaVaultBatchRouteDefinition: Symbol("BaasicMediaVaultBatchRouteDefinition"),
    BaasicMediaVaultBatchClient: Symbol("BaasicMediaVaultBatchClient"),
    BaasicMediaVaultRouteDefinition: Symbol("BaasicMediaVaultRouteDefinition"),
    BaasicMediaVaultProcessingProviderSettingsClient: Symbol("BaasicMediaVaultProcessingProviderSettingsClient"),
    BaasicMediaVaultProcessingProviderSettingsRouteDefinition: Symbol("BaasicMediaVaultProcessingProviderSettingsRouteDefinition"),
    BaasicMediaVaultClient: Symbol("BaasicMediaVaultClient"),
    BaasicMediaVaultSettingsRouteDefinition: Symbol("BaasicMediaVaultSettingsRouteDefinition"),
    BaasicMediaVaultSettingsClient: Symbol("BaasicMediaVaultSettingsClient"),
    BaasicMediaVaultStreamsRouteDefinition: Symbol("BaasicMediaVaultStreamsRouteDefinition"),
    BaasicMediaVaultStreamsClient: Symbol("BaasicMediaVaultStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicMediaVaultStreamsRouteDefinition>(TYPES.BaasicMediaVaultStreamsRouteDefinition).toSelf();
    bind<BaasicMediaVaultStreamsClient>(TYPES.BaasicMediaVaultStreamsClient).toSelf();
    bind<BaasicMediaVaultBatchRouteDefinition>(TYPES.BaasicMediaVaultBatchRouteDefinition).toSelf();
    bind<BaasicMediaVaultBatchClient>(TYPES.BaasicMediaVaultBatchClient).toSelf();
    bind<BaasicMediaVaultSettingsRouteDefinition>(TYPES.BaasicMediaVaultSettingsRouteDefinition).toSelf();
    bind<BaasicMediaVaultSettingsClient>(TYPES.BaasicMediaVaultSettingsClient).toSelf();
    bind<BaasicMediaVaultProcessingProviderSettingsRouteDefinition>(TYPES.BaasicMediaVaultProcessingProviderSettingsRouteDefinition).toSelf();
    bind<BaasicMediaVaultProcessingProviderSettingsClient>(TYPES.BaasicMediaVaultProcessingProviderSettingsClient).toSelf();
    bind<BaasicMediaVaultRouteDefinition>(TYPES.BaasicMediaVaultRouteDefinition).toSelf();
    bind<BaasicMediaVaultClient>(TYPES.BaasicMediaVaultClient).toSelf();
});

export { diModule };