import { ContainerModule } from "inversify";
import { BaasicApplicationSettingsClient, BaasicApplicationSettingsRouteDefinition } from 'modules/applicationSettings';

const TYPES = {
    BaasicApplicationSettingsClient: Symbol("BaasicApplicationSettingsClient"),
    BaasicApplicationSettingsRouteDefinition: Symbol("BaasicApplicationSettingsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicApplicationSettingsRouteDefinition>(TYPES.BaasicApplicationSettingsRouteDefinition).to(BaasicApplicationSettingsRouteDefinition);
    bind<BaasicApplicationSettingsClient>(TYPES.BaasicApplicationSettingsClient).to(BaasicApplicationSettingsClient);
});

export { diModule };