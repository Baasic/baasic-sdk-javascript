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
    bind<BaasicDynamicResourceACLRouteDefinition>(TYPES.BaasicDynamicResourceACLRouteDefinition).toSelf();
    bind<BaasicDynamicResourceACLClient>(TYPES.BaasicDynamicResourceACLClient).toSelf();
    bind<BaasicDynamicResourceRouteDefinition>(TYPES.BaasicDynamicResourceRouteDefinition).toSelf();
    bind<BaasicDynamicResourceClient>(TYPES.BaasicDynamicResourceClient).toSelf();
    bind<BaasicDynamicSchemaRouteDefinition>(TYPES.BaasicDynamicSchemaRouteDefinition).toSelf();
    bind<BaasicDynamicSchemaClient>(TYPES.BaasicDynamicSchemaClient).toSelf();
});

export { diModule };