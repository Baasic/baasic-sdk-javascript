import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    ModelMapper,
    Utility,
    DateFormatter,
    IHALParser,
    HALParser
} from './';

const TYPES = {
    Utility: Symbol("Utility"),
    DateFormatter : Symbol("DateFormatter"),
    ModelMapper: Symbol("ModelMapper"),
    IHALParser: Symbol("IHALParser"),
    IURLFactory: Symbol("IURLFactory")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<Utility>(TYPES.Utility).to(Utility);
    bind<DateFormatter>(TYPES.DateFormatter).to(DateFormatter);
    bind<ModelMapper>(TYPES.ModelMapper).to(ModelMapper);
    bind<IHALParser>(TYPES.IHALParser).toConstantValue(HALParser);
});

export { diModule };