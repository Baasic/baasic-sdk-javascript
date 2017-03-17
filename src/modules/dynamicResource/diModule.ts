import { ContainerModule } from "inversify";
import {
    DynamicResourceACLClient,
    BaasicDynamicResourceACLRouteDefinition,
    DynamicResourceClient,
    BaasicDynamicResourceRouteDefinition,
    DynamicSchemaClient,
    BaasicDynamicSchemaRouteDefinition
} from 'modules/dynamicResource';

const TYPES = {
    DynamicResourceACLClient: Symbol("DynamicResourceACLClient"),
    BaasicDynamicResourceACLRouteDefinition: Symbol("BaasicDynamicResourceACLRouteDefinition"),
    DynamicResourceClient: Symbol("DynamicResourceClient"),
    BaasicDynamicResourceRouteDefinition: Symbol("BaasicDynamicResourceRouteDefinition"),
    DynamicSchemaClient: Symbol("DynamicSchemaClient"),
    BaasicDynamicSchemaRouteDefinition: Symbol("BaasicDynamicSchemaRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicDynamicResourceACLRouteDefinition>(TYPES.BaasicDynamicResourceACLRouteDefinition).to(BaasicDynamicResourceACLRouteDefinition);
    bind<DynamicResourceACLClient>(TYPES.DynamicResourceACLClient).to(DynamicResourceACLClient);
    bind<BaasicDynamicResourceRouteDefinition>(TYPES.BaasicDynamicResourceRouteDefinition).to(BaasicDynamicResourceRouteDefinition);
    bind<DynamicResourceClient>(TYPES.DynamicResourceClient).to(DynamicResourceClient);
    bind<BaasicDynamicSchemaRouteDefinition>(TYPES.BaasicDynamicSchemaRouteDefinition).to(BaasicDynamicSchemaRouteDefinition);
    bind<DynamicSchemaClient>(TYPES.DynamicSchemaClient).to(DynamicSchemaClient);
});

export { diModule };