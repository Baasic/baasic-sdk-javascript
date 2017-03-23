import { ContainerModule } from "inversify";
import { KeyValueClient, KeyValueRoute } from 'modules/keyValue';

const TYPES = {
    KeyValueClient: Symbol("KeyValueClient"),
    KeyValueRoute: Symbol("KeyValueRoute")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<KeyValueRoute>(TYPES.KeyValueRoute).to(KeyValueRoute);
    bind<KeyValueClient>(TYPES.KeyValueClient).to(KeyValueClient);
});

export { diModule };