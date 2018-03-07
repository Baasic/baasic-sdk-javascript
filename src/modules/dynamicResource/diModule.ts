import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";

import {
    DynamicResourceBatchRoute,
    DynamicResourceBatchClient,
    DynamicResourceACLClient,
    DynamicResourceACLRoute,
    DynamicResourceClient,
    DynamicResourceRoute,
    DynamicSchemaClient,
    DynamicSchemaRoute
} from './';

const TYPES = {
    DynamicResourceBatchRoute: Symbol("DynamicResourceBatchRoute"),
    DynamicResourceBatchClient: Symbol("DynamicResourceBatchClient"),
    DynamicResourceACLClient: Symbol("DynamicResourceACLClient"),
    DynamicResourceACLRoute: Symbol("DynamicResourceACLRoute"),
    DynamicResourceClient: Symbol("DynamicResourceClient"),
    DynamicResourceRoute: Symbol("DynamicResourceRoute"),
    DynamicSchemaClient: Symbol("DynamicSchemaClient"),
    DynamicSchemaRoute: Symbol("DynamicSchemaRoute")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<DynamicResourceACLRoute>(TYPES.DynamicResourceACLRoute).to(DynamicResourceACLRoute);
    bind<DynamicResourceACLClient>(TYPES.DynamicResourceACLClient).to(DynamicResourceACLClient);
    bind<DynamicResourceRoute>(TYPES.DynamicResourceRoute).to(DynamicResourceRoute);
    bind<DynamicResourceClient>(TYPES.DynamicResourceClient).to(DynamicResourceClient);
    bind<DynamicResourceBatchRoute>(TYPES.DynamicResourceBatchRoute).to(DynamicResourceBatchRoute);
    bind<DynamicResourceBatchClient>(TYPES.DynamicResourceBatchClient).to(DynamicResourceBatchClient);
    bind<DynamicSchemaRoute>(TYPES.DynamicSchemaRoute).to(DynamicSchemaRoute);
    bind<DynamicSchemaClient>(TYPES.DynamicSchemaClient).to(DynamicSchemaClient);
});

export { diModule };