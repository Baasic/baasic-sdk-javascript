import { ContainerModule } from "inversify";
import { ApplicationSettingsClient, ApplicationSettingsRoute } from './';

const TYPES = {
    ApplicationSettingsClient: Symbol("ApplicationSettingsClient"),
    ApplicationSettingsRoute: Symbol("ApplicationSettingsRoute")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ApplicationSettingsRoute>(TYPES.ApplicationSettingsRoute).to(ApplicationSettingsRoute);
    bind<ApplicationSettingsClient>(TYPES.ApplicationSettingsClient).to(ApplicationSettingsClient);
});

export { diModule };