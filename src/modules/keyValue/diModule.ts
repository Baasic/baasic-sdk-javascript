import { ContainerModule } from "inversify";
import { BaasicKeyValueClient, BaasicKeyValueRouteDefinition } from 'modules/keyValue';

const TYPES = {
    BaasicKeyValueClient: Symbol("BaasicKeyValueClient"),
    BaasicKeyValueRouteDefinition: Symbol("BaasicKeyValueRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicKeyValueRouteDefinition>(TYPES.BaasicKeyValueRouteDefinition).to(BaasicKeyValueRouteDefinition);
    bind<BaasicKeyValueClient>(TYPES.BaasicKeyValueClient).to(BaasicKeyValueClient);
});

export { diModule };