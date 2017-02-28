import { ContainerModule } from "inversify";
import {
    BaasicMediaVaultBatchRouteDefinition,
    BaasicMediaVaultBatchClient,
    BaasicMediaVaultRouteDefinition,
    BaasicMediaVaultStreamsRouteDefinition,
    BaasicMediaVaultStreamsClient
} from 'modules/mediaVault';

const TYPES = {
    BaasicMediaVaultBatchRouteDefinition: Symbol("BaasicMediaVaultBatchRouteDefinition"),
    BaasicMediaVaultBatchClient: Symbol("BaasicMediaVaultBatchClient"),
    BaasicMediaVaultRouteDefinition: Symbol("BaasicMediaVaultRouteDefinition"),
    BaasicMediaVaultStreamsRouteDefinition: Symbol("BaasicMediaVaultStreamsRouteDefinition"),
    BaasicMediaVaultStreamsClient: Symbol("BaasicMediaVaultStreamsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicMediaVaultStreamsRouteDefinition>(TYPES.BaasicMediaVaultStreamsRouteDefinition).toSelf();
    bind<BaasicMediaVaultStreamsClient>(TYPES.BaasicMediaVaultStreamsClient).toSelf();
    bind<BaasicMediaVaultBatchRouteDefinition>(TYPES.BaasicMediaVaultBatchRouteDefinition).toSelf();
    bind<BaasicMediaVaultBatchClient>(TYPES.BaasicMediaVaultBatchClient).toSelf();
    bind<BaasicMediaVaultRouteDefinition>(TYPES.BaasicMediaVaultRouteDefinition).toSelf();
});

export { diModule };