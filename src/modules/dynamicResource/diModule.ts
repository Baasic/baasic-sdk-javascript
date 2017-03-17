import { ContainerModule } from "inversify";
import {
    DynamicResourceACLClient,
    DynamicResourceACLRouteDefinition,
    DynamicResourceClient,
    DynamicResourceRouteDefinition,
    DynamicSchemaClient,
    DynamicSchemaRouteDefinition
} from 'modules/dynamicResource';

const TYPES = {
    DynamicResourceACLClient: Symbol("DynamicResourceACLClient"),
    DynamicResourceACLRouteDefinition: Symbol("DynamicResourceACLRouteDefinition"),
    DynamicResourceClient: Symbol("DynamicResourceClient"),
    DynamicResourceRouteDefinition: Symbol("DynamicResourceRouteDefinition"),
    DynamicSchemaClient: Symbol("DynamicSchemaClient"),
    DynamicSchemaRouteDefinition: Symbol("DynamicSchemaRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<DynamicResourceACLRouteDefinition>(TYPES.DynamicResourceACLRouteDefinition).to(DynamicResourceACLRouteDefinition);
    bind<DynamicResourceACLClient>(TYPES.DynamicResourceACLClient).to(DynamicResourceACLClient);
    bind<DynamicResourceRouteDefinition>(TYPES.DynamicResourceRouteDefinition).to(DynamicResourceRouteDefinition);
    bind<DynamicResourceClient>(TYPES.DynamicResourceClient).to(DynamicResourceClient);
    bind<DynamicSchemaRouteDefinition>(TYPES.DynamicSchemaRouteDefinition).to(DynamicSchemaRouteDefinition);
    bind<DynamicSchemaClient>(TYPES.DynamicSchemaClient).to(DynamicSchemaClient);
});

export { diModule };