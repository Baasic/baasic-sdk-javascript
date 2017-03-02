import { ContainerModule } from "inversify";
import {
    BaasicDynamicResourceACLClient,
    BaasicDynamicResourceACLRouteDefinition,
    BaasicDynamicResourceClient,
    BaasicDynamicResourceRouteDefinition,
    BaasicDynamicSchemaClient,
    BaasicDynamicSchemaRouteDefinition
} from 'modules/dynamicResource';

const TYPES = {
    BaasicDynamicResourceACLClient: Symbol("BaasicDynamicResourceACLClient"),
    BaasicDynamicResourceACLRouteDefinition: Symbol("BaasicDynamicResourceACLRouteDefinition"),
    BaasicDynamicResourceClient: Symbol("BaasicDynamicResourceClient"),
    BaasicDynamicResourceRouteDefinition: Symbol("BaasicDynamicResourceRouteDefinition"),
    BaasicDynamicSchemaClient: Symbol("BaasicDynamicSchemaClient"),
    BaasicDynamicSchemaRouteDefinition: Symbol("BaasicDynamicSchemaRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicDynamicResourceACLRouteDefinition>(TYPES.BaasicDynamicResourceACLRouteDefinition).to(BaasicDynamicResourceACLRouteDefinition);
    bind<BaasicDynamicResourceACLClient>(TYPES.BaasicDynamicResourceACLClient).to(BaasicDynamicResourceACLClient);
    bind<BaasicDynamicResourceRouteDefinition>(TYPES.BaasicDynamicResourceRouteDefinition).to(BaasicDynamicResourceRouteDefinition);
    bind<BaasicDynamicResourceClient>(TYPES.BaasicDynamicResourceClient).to(BaasicDynamicResourceClient);
    bind<BaasicDynamicSchemaRouteDefinition>(TYPES.BaasicDynamicSchemaRouteDefinition).to(BaasicDynamicSchemaRouteDefinition);
    bind<BaasicDynamicSchemaClient>(TYPES.BaasicDynamicSchemaClient).to(BaasicDynamicSchemaClient);
});

export { diModule };