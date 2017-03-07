import { ContainerModule } from "inversify";
import {
    BaasicLookupClient,
    BaasicLookupRouteDefinition,
    ModelMapper,
    Utility,
    IHALParser,
    HALParser
} from 'common';

const TYPES = {
    BaasicLookupClient: Symbol("BaasicLookupClient"),
    BaasicLookupRouteDefinition: Symbol("BaasicLookupRouteDefinition"),
    Utility: Symbol("Utility"),
    ModelMapper: Symbol("ModelMapper"),
    IHALParser: Symbol("IHALParser")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<Utility>(TYPES.Utility).to(Utility);
    bind<ModelMapper>(TYPES.ModelMapper).to(ModelMapper);
    bind<IHALParser>(TYPES.IHALParser).toConstantValue(HALParser);
    bind<BaasicLookupRouteDefinition>(TYPES.BaasicLookupRouteDefinition).toSelf();
    bind<BaasicLookupClient>(TYPES.BaasicLookupClient).toSelf();
});

export { diModule };