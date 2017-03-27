import { ContainerModule } from "inversify";
import {
    ModelMapper,
    Utility,
    IHALParser,
    HALParser
} from './';

const TYPES = {
    Utility: Symbol("Utility"),
    ModelMapper: Symbol("ModelMapper"),
    IHALParser: Symbol("IHALParser")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<Utility>(TYPES.Utility).to(Utility);
    bind<ModelMapper>(TYPES.ModelMapper).to(ModelMapper);
    bind<IHALParser>(TYPES.IHALParser).toConstantValue(HALParser);
});

export { diModule };