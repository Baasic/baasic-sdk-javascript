import { ContainerModule } from 'inversify';
import {
    ValueSetClient,
    ValueSetItemClient,
    BaasicValueSetItemRouteDefinition,
    BaasicValueSetRouteDefinition
} from 'modules/valueSet';

const TYPES = {
    ValueSetClient: Symbol("ValueSetClient"),
    ValueSetItemClient: Symbol("ValueSetItemClient"),
    BaasicValueSetItemRouteDefinition: Symbol("BaasicValueSetItemRouteDefinition"),
    BaasicValueSetRouteDefinition: Symbol("BaasicValueSetRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicValueSetItemRouteDefinition>(TYPES.BaasicValueSetItemRouteDefinition).to(BaasicValueSetItemRouteDefinition);
    bind<ValueSetItemClient>(TYPES.ValueSetItemClient).to(ValueSetItemClient);
    bind<BaasicValueSetRouteDefinition>(TYPES.BaasicValueSetRouteDefinition).to(BaasicValueSetRouteDefinition);
    bind<ValueSetClient>(TYPES.ValueSetClient).to(ValueSetClient);
});

export { diModule };