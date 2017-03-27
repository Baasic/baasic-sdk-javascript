import { ContainerModule } from 'inversify';
import { 
    TemplatingBatchClient, 
    TemplatingBatchRoute, 
    TemplatingClient, 
    TemplatingRoute } from './';

const TYPES = {
    TemplatingBatchClient: Symbol("TemplatingBatchClient"),
    TemplatingBatchRoute: Symbol("TemplatingBatchRoute"),
    TemplatingClient: Symbol("TemplatingClient"),
    TemplatingRoute: Symbol("TemplatingRoute")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<TemplatingBatchRoute>(TYPES.TemplatingBatchRoute).to(TemplatingBatchRoute);
    bind<TemplatingBatchClient>(TYPES.TemplatingBatchClient).to(TemplatingBatchClient);
    bind<TemplatingRoute>(TYPES.TemplatingRoute).to(TemplatingRoute);
    bind<TemplatingClient>(TYPES.TemplatingClient).to(TemplatingClient);
});

export { diModule };