import { ContainerModule } from "inversify";
import { ApplicationSettingsClient, ApplicationSettingsRouteDefinition } from 'modules/applicationSettings';

const TYPES = {
    ApplicationSettingsClient: Symbol("ApplicationSettingsClient"),
    ApplicationSettingsRouteDefinition: Symbol("ApplicationSettingsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ApplicationSettingsRouteDefinition>(TYPES.ApplicationSettingsRouteDefinition).to(ApplicationSettingsRouteDefinition);
    bind<ApplicationSettingsClient>(TYPES.ApplicationSettingsClient).to(ApplicationSettingsClient);
});

export { diModule };