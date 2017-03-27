import { ContainerModule } from "inversify";
import { KeyValueClient, KeyValueRoute } from './';

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