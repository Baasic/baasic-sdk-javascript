import { ContainerModule } from "inversify";
import { ApplicationSettingsClient, BaasicApplicationSettingsRouteDefinition } from 'modules/applicationSettings';

const TYPES = {
    ApplicationSettingsClient: Symbol("ApplicationSettingsClient"),
    BaasicApplicationSettingsRouteDefinition: Symbol("BaasicApplicationSettingsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicApplicationSettingsRouteDefinition>(TYPES.BaasicApplicationSettingsRouteDefinition).to(BaasicApplicationSettingsRouteDefinition);
    bind<ApplicationSettingsClient>(TYPES.ApplicationSettingsClient).to(ApplicationSettingsClient);
});

export { diModule };