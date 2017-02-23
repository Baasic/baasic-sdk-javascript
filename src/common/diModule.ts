import { ContainerModule } from "inversify";
import { ModelMapper,Utility } from 'common';

const TYPES = {
    Utility: Symbol("Utility"),
    ModelMapper: Symbol("ModelMapper")       
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<Utility>(TYPES.Utility).to(Utility);
    bind<ModelMapper>(TYPES.ModelMapper).to(ModelMapper);    
});

export { diModule };