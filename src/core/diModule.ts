import { ContainerModule } from "inversify";
import { ITokenStore, IEventHandler, IBaasicAppOptions } from 'core';
import { BrowserEventHandler } from 'core/browserEvents';
import { LocalStorageTokenStore } from 'core/localStorage';

const TYPES = {
    IBaasicAppOptions: Symbol("IBaasicAppOptions"),
    IAppOptions: Symbol("IAppOptions"),
    ITokenStore: Symbol("ITokenStore"),
    IEventHandler: Symbol("IEventHandler")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<IEventHandler>(TYPES.IEventHandler).to(BrowserEventHandler);
    bind<ITokenStore>(TYPES.ITokenStore).to(LocalStorageTokenStore);
});

export { diModule };