import { ContainerModule } from "inversify";
import { IStorageHandler, TokenHandler, IEventHandler, IBaasicAppOptions, ITokenHandler } from 'core';
import { BrowserEventHandler } from 'core/browserEvents';
import { LocalStorageHandler } from 'core/localStorage';

const TYPES = {
    IBaasicAppOptions: Symbol("IBaasicAppOptions"),
    IAppOptions: Symbol("IAppOptions"),
    IStorageHandler: Symbol("IStorageHandler"),
    IEventHandler: Symbol("IEventHandler"),
    ITokenHandler: Symbol("ITokenHandler")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<IEventHandler>(TYPES.IEventHandler).to(BrowserEventHandler);
    bind<IStorageHandler>(TYPES.IStorageHandler).to(LocalStorageHandler);
    bind<ITokenHandler>(TYPES.ITokenHandler).to(TokenHandler);
});

export { diModule };