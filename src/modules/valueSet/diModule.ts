import { ContainerModule } from 'inversify';
import {
    BaasicValueSetClient,
    BaasicValueSetItemClient,
    BaasicValueSetItemRouteDefinition,
    BaasicValueSetRouteDefinition
} from 'modules/valueSet';

const TYPES = {
    BaasicValueSetClient: Symbol("BaasicValueSetClient"),
    BaasicValueSetItemClient: Symbol("BaasicValueSetItemClient"),
    BaasicValueSetItemRouteDefinition: Symbol("BaasicValueSetItemRouteDefinition"),
    BaasicValueSetRouteDefinition: Symbol("BaasicValueSetRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicValueSetItemRouteDefinition>(TYPES.BaasicValueSetItemRouteDefinition).to(BaasicValueSetItemRouteDefinition);
    bind<BaasicValueSetItemClient>(TYPES.BaasicValueSetItemClient).to(BaasicValueSetItemClient);
    bind<BaasicValueSetRouteDefinition>(TYPES.BaasicValueSetRouteDefinition).to(BaasicValueSetRouteDefinition);
    bind<BaasicValueSetClient>(TYPES.BaasicValueSetClient).to(BaasicValueSetClient);
});

export { diModule };