import { ContainerModule } from "inversify";
import { ITokenStore, TokenStore, IEventHandler, IBaasicAppOptions, IStorageHandler } from 'core';
import { BrowserEventHandler } from 'core/browserEvents';
import { LocalStorageHandler } from 'core/localStorage';

const TYPES = {
    IBaasicAppOptions: Symbol("IBaasicAppOptions"),
    IAppOptions: Symbol("IAppOptions"),
    IStorageHandler: Symbol("IStorageHandler"),
    IEventHandler: Symbol("IEventHandler"),
    ITokenStore: Symbol("ITokenStore")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<IEventHandler>(TYPES.IEventHandler).to(BrowserEventHandler);
    bind<IStorageHandler>(TYPES.IStorageHandler).to(LocalStorageHandler);
    bind<ITokenStore>(TYPES.ITokenStore).to(TokenStore);
});

export { diModule };