import { ContainerModule } from 'inversify';
import { 
    BaasicTemplatingBatchClient, 
    BaasicTemplatingBatchRouteDefinition, 
    BaasicTemplatingClient, 
    BaasicTemplatingRouteDefinition } from 'modules/templating';

const TYPES = {
    BaasicTemplatingBatchClient: Symbol("BaasicTemplatingBatchClient"),
    BaasicTemplatingBatchRouteDefinition: Symbol("BaasicTemplatingBatchRouteDefinition"),
    BaasicTemplatingClient: Symbol("BaasicTemplatingClient"),
    BaasicTemplatingRouteDefinition: Symbol("BaasicTemplatingRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicTemplatingBatchRouteDefinition>(TYPES.BaasicTemplatingBatchRouteDefinition).toSelf();
    bind<BaasicTemplatingBatchClient>(TYPES.BaasicTemplatingBatchClient).toSelf();
    bind<BaasicTemplatingRouteDefinition>(TYPES.BaasicTemplatingRouteDefinition).toSelf();
    bind<BaasicTemplatingClient>(TYPES.BaasicTemplatingClient).toSelf();
});

export { diModule };