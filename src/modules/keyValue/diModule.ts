import { ContainerModule } from "inversify";
import { KeyValueClient, BaasicKeyValueRouteDefinition } from 'modules/keyValue';

const TYPES = {
    KeyValueClient: Symbol("KeyValueClient"),
    BaasicKeyValueRouteDefinition: Symbol("BaasicKeyValueRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicKeyValueRouteDefinition>(TYPES.BaasicKeyValueRouteDefinition).to(BaasicKeyValueRouteDefinition);
    bind<KeyValueClient>(TYPES.KeyValueClient).to(KeyValueClient);
});

export { diModule };