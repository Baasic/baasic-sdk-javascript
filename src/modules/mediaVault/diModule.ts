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
    bind<BaasicMediaVaultStreamsRouteDefinition>(TYPES.BaasicMediaVaultStreamsRouteDefinition).to(BaasicMediaVaultStreamsRouteDefinition);
    bind<BaasicMediaVaultStreamsClient>(TYPES.BaasicMediaVaultStreamsClient).to(BaasicMediaVaultStreamsClient);
    bind<BaasicMediaVaultBatchRouteDefinition>(TYPES.BaasicMediaVaultBatchRouteDefinition).to(BaasicMediaVaultBatchRouteDefinition);
    bind<BaasicMediaVaultBatchClient>(TYPES.BaasicMediaVaultBatchClient).to(BaasicMediaVaultBatchClient);
    bind<BaasicMediaVaultSettingsRouteDefinition>(TYPES.BaasicMediaVaultSettingsRouteDefinition).to(BaasicMediaVaultSettingsRouteDefinition);
    bind<BaasicMediaVaultSettingsClient>(TYPES.BaasicMediaVaultSettingsClient).to(BaasicMediaVaultSettingsClient);
    bind<BaasicMediaVaultProcessingProviderSettingsRouteDefinition>(TYPES.BaasicMediaVaultProcessingProviderSettingsRouteDefinition).to(BaasicMediaVaultProcessingProviderSettingsRouteDefinition);
    bind<BaasicMediaVaultProcessingProviderSettingsClient>(TYPES.BaasicMediaVaultProcessingProviderSettingsClient).to(BaasicMediaVaultProcessingProviderSettingsClient);
    bind<BaasicMediaVaultRouteDefinition>(TYPES.BaasicMediaVaultRouteDefinition).to(BaasicMediaVaultRouteDefinition);
    bind<BaasicMediaVaultClient>(TYPES.BaasicMediaVaultClient).to(BaasicMediaVaultClient);
});

export { diModule };