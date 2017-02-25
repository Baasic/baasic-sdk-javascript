import { ContainerModule } from "inversify";
import { ITokenStore, IEventHandler, IBaasicAppOptions } from 'core';

const TYPES = {
    IBaasicAppOptions: Symbol("IBaasicAppOptions"),
    IAppOptions: Symbol("IAppOptions"),
    ITokenStore: Symbol("ITokenStore"),
    IEventHandler: Symbol("IEventHandler")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
});

export { diModule };