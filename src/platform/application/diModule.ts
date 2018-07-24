import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    ApplicationRoute,
    ApplicationClient,
    SettingsRoute,
    SettingsClient,
    VersionRoute,
    VersionClient,
    Root
} from '.';

const TYPES = {
    ApplicationRoute: Symbol("ApplicationRoute"),
    ApplicationClient: Symbol("ApplicationClient"),
    SettingsRoute: Symbol("SettingsRoute"),
    SettingsClient: Symbol("SettingsClient"),
    VersionRoute: Symbol("VersionRoute"),
    VersionClient: Symbol("VersionClient"),
    Root: Symbol("Maintenance-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ApplicationRoute>(TYPES.ApplicationRoute).to(ApplicationRoute);
    bind<ApplicationClient>(TYPES.ApplicationClient).to(ApplicationClient);
    bind<SettingsRoute>(TYPES.SettingsRoute).to(SettingsRoute);
    bind<SettingsClient>(TYPES.SettingsClient).to(SettingsClient);
    bind<VersionRoute>(TYPES.VersionRoute).to(VersionRoute);
    bind<VersionClient>(TYPES.VersionClient).to(VersionClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };