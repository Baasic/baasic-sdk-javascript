import { ContainerModule } from "inversify";
import { BaasicApplicationSettingsClient, BaasicApplicationSettingsRouteDefinition } from 'modules/applicationSettings';

const TYPES = {
    BaasicApplicationSettingsClients: Symbol("BaasicApplicationSettingsClient"),
    BaasicApplicationSettingsRouteDefinition: Symbol("BaasicApplicationSettingsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicApplicationSettingsRouteDefinition>(TYPES.BaasicApplicationSettingsRouteDefinition).toSelf();
    bind<BaasicApplicationSettingsClient>(TYPES.BaasicApplicationSettingsClients).toSelf();
});

export { diModule };