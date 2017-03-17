import { ContainerModule } from "inversify";
import { KeyValueClient, KeyValueRouteDefinition } from 'modules/keyValue';

const TYPES = {
    KeyValueClient: Symbol("KeyValueClient"),
    KeyValueRouteDefinition: Symbol("KeyValueRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<KeyValueRouteDefinition>(TYPES.KeyValueRouteDefinition).to(KeyValueRouteDefinition);
    bind<KeyValueClient>(TYPES.KeyValueClient).to(KeyValueClient);
});

export { diModule };