import { ContainerModule } from 'inversify';
import { 
    TemplatingBatchClient, 
    TemplatingBatchRouteDefinition, 
    TemplatingClient, 
    TemplatingRouteDefinition } from 'modules/templating';

const TYPES = {
    TemplatingBatchClient: Symbol("TemplatingBatchClient"),
    TemplatingBatchRouteDefinition: Symbol("TemplatingBatchRouteDefinition"),
    TemplatingClient: Symbol("TemplatingClient"),
    TemplatingRouteDefinition: Symbol("TemplatingRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<TemplatingBatchRouteDefinition>(TYPES.TemplatingBatchRouteDefinition).to(TemplatingBatchRouteDefinition);
    bind<TemplatingBatchClient>(TYPES.TemplatingBatchClient).to(TemplatingBatchClient);
    bind<TemplatingRouteDefinition>(TYPES.TemplatingRouteDefinition).to(TemplatingRouteDefinition);
    bind<TemplatingClient>(TYPES.TemplatingClient).to(TemplatingClient);
});

export { diModule };