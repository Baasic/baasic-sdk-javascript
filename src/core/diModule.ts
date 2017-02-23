import { ContainerModule } from "inversify";
import { ITokenStore, IEventHandler } from 'core';

const TYPES = {
    ITokenStore: Symbol("ITokenStore"),
    IEventHandler: Symbol("IEventHandler")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {    
});

export { diModule };