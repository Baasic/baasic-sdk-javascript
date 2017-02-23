import { ContainerModule } from "inversify";
import { ModelMapper } from 'common';

const TYPES = {
    ModelMapper: Symbol("ModelMapper")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ModelMapper>(TYPES.ModelMapper).to(ModelMapper);
});

export { diModule };