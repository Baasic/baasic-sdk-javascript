import { ContainerModule } from 'inversify';
import { 
    TemplatingBatchClient, 
    BaasicTemplatingBatchRouteDefinition, 
    TemplatingClient, 
    BaasicTemplatingRouteDefinition } from 'modules/templating';

const TYPES = {
    TemplatingBatchClient: Symbol("TemplatingBatchClient"),
    BaasicTemplatingBatchRouteDefinition: Symbol("BaasicTemplatingBatchRouteDefinition"),
    TemplatingClient: Symbol("TemplatingClient"),
    BaasicTemplatingRouteDefinition: Symbol("BaasicTemplatingRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicTemplatingBatchRouteDefinition>(TYPES.BaasicTemplatingBatchRouteDefinition).to(BaasicTemplatingBatchRouteDefinition);
    bind<TemplatingBatchClient>(TYPES.TemplatingBatchClient).to(TemplatingBatchClient);
    bind<BaasicTemplatingRouteDefinition>(TYPES.BaasicTemplatingRouteDefinition).to(BaasicTemplatingRouteDefinition);
    bind<TemplatingClient>(TYPES.TemplatingClient).to(TemplatingClient);
});

export { diModule };