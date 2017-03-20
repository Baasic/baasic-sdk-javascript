import { ContainerModule } from "inversify";
import { ITokenHandler, IUserHandler, TYPES } from 'core/contracts';
import { TokenHandler, UserHandler } from 'core';

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ITokenHandler>(TYPES.ITokenHandler).to(TokenHandler);
    bind<IUserHandler>(TYPES.IUserHandler).to(UserHandler);
});

export { diModule };