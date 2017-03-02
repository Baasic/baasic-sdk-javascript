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
    bind<BaasicTemplatingBatchRouteDefinition>(TYPES.BaasicTemplatingBatchRouteDefinition).to(BaasicTemplatingBatchRouteDefinition);
    bind<BaasicTemplatingBatchClient>(TYPES.BaasicTemplatingBatchClient).to(BaasicTemplatingBatchClient);
    bind<BaasicTemplatingRouteDefinition>(TYPES.BaasicTemplatingRouteDefinition).to(BaasicTemplatingRouteDefinition);
    bind<BaasicTemplatingClient>(TYPES.BaasicTemplatingClient).to(BaasicTemplatingClient);
});

export { diModule };