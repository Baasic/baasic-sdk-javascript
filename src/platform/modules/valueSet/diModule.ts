import { ContainerModule } from 'inversify';
import * as Symbol from "es6-symbol";
import {
    ValueSetClient,
    ValueSetItemClient,
    ValueSetItemRoute,
    ValueSetRoute
} from './';

const TYPES = {
    ValueSetClient: Symbol("ValueSetClient"),
    ValueSetItemClient: Symbol("ValueSetItemClient"),
    ValueSetItemRoute: Symbol("ValueSetItemRoute"),
    ValueSetRoute: Symbol("ValueSetRoute")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ValueSetItemRoute>(TYPES.ValueSetItemRoute).to(ValueSetItemRoute);
    bind<ValueSetItemClient>(TYPES.ValueSetItemClient).to(ValueSetItemClient);
    bind<ValueSetRoute>(TYPES.ValueSetRoute).to(ValueSetRoute);
    bind<ValueSetClient>(TYPES.ValueSetClient).to(ValueSetClient);
});

export { diModule };