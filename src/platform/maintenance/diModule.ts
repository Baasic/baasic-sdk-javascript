import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    MaintenanceRoute,
    MaintenanceClient,
    Root
} from '.';

const TYPES = {
    MaintenanceRoute: Symbol("MaintenanceRoute"),
    MaintenanceClient: Symbol("MaintenanceClient"),
    Root: Symbol("Maintenance-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<MaintenanceRoute>(TYPES.MaintenanceRoute).to(MaintenanceRoute);
    bind<MaintenanceClient>(TYPES.MaintenanceClient).to(MaintenanceClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };