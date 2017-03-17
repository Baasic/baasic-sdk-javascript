import { ContainerModule } from 'inversify';
import {
    ValueSetClient,
    ValueSetItemClient,
    ValueSetItemRouteDefinition,
    ValueSetRouteDefinition
} from 'modules/valueSet';

const TYPES = {
    ValueSetClient: Symbol("ValueSetClient"),
    ValueSetItemClient: Symbol("ValueSetItemClient"),
    ValueSetItemRouteDefinition: Symbol("ValueSetItemRouteDefinition"),
    ValueSetRouteDefinition: Symbol("ValueSetRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ValueSetItemRouteDefinition>(TYPES.ValueSetItemRouteDefinition).to(ValueSetItemRouteDefinition);
    bind<ValueSetItemClient>(TYPES.ValueSetItemClient).to(ValueSetItemClient);
    bind<ValueSetRouteDefinition>(TYPES.ValueSetRouteDefinition).to(ValueSetRouteDefinition);
    bind<ValueSetClient>(TYPES.ValueSetClient).to(ValueSetClient);
});

export { diModule };