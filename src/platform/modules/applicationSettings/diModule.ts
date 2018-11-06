import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import { ApplicationSettingsClient, ApplicationSettingsRoute, SettingsClient, SettingsRoute, VersionClient, VersionRoute } from './';

const TYPES = {
    ApplicationSettingsClient: Symbol("ApplicationSettingsClient"),
    ApplicationSettingsRoute: Symbol("ApplicationSettingsRoute"),
    SettingsClient: Symbol("SettingsClient"),
    SettingsRoute: Symbol("SettingsRoute"),
    VersionClient: Symbol("VersionClient"),
    VersionRoute: Symbol("VersionRoute"),
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ApplicationSettingsRoute>(TYPES.ApplicationSettingsRoute).to(ApplicationSettingsRoute);
    bind<ApplicationSettingsClient>(TYPES.ApplicationSettingsClient).to(ApplicationSettingsClient);
    bind<SettingsClient>(TYPES.SettingsClient).to(SettingsClient);
    bind<SettingsRoute>(TYPES.SettingsRoute).to(SettingsRoute);
    bind<VersionClient>(TYPES.VersionClient).to(VersionClient);
    bind<VersionRoute>(TYPES.VersionRoute).to(VersionRoute);
});

export { diModule };