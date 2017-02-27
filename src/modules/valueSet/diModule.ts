import { ContainerModule } from 'inversify';
import {
    BaasicValueSetClient,
    BaasicValueSetItemClient,
    BaasicValueSetItemRouteDefinition,
    BaasicValueSetRouteDefinition } from 'modules/valueSet';

const TYPES = {
    BaasicValueSetClient: Symbol("BaasicValueSetClient"),
    BaasicValueSetItemClient: Symbol("BaasicValueSetItemClient"),
    BaasicValueSetItemRouteDefinition: Symbol("BaasicValueSetItemRouteDefinition"),
    BaasicValueSetRouteDefinition: Symbol("BaasicValueSetRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicValueSetItemRouteDefinition>(TYPES.BaasicValueSetItemRouteDefinition).toSelf();
    bind<BaasicValueSetItemClient>(TYPES.BaasicValueSetItemClient).toSelf();
    bind<BaasicValueSetRouteDefinition>(TYPES.BaasicValueSetRouteDefinition).toSelf();
    bind<BaasicValueSetClient>(TYPES.BaasicValueSetClient).toSelf();
});

export { diModule };