import { ContainerModule } from "inversify";
import { IStorageHandler, IEventHandler, IBaasicAppOptions, ITokenHandler, IUserHandler, TYPES } from 'core/contracts';
import { TokenHandler, UserHandler } from 'core';
import { BrowserEventHandler } from 'core/browserEvents';
import { LocalStorageHandler } from 'core/localStorage';

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ITokenHandler>(TYPES.ITokenHandler).to(TokenHandler);
    bind<IUserHandler>(TYPES.IUserHandler).to(UserHandler);
});

export { diModule };