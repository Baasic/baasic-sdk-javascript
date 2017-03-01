import { IStorageHandler, IEventHandler, IBaasicAppOptions, ITokenHandler, IUserHandler } from 'core/contracts';

const TYPES = {
    IBaasicAppOptions: Symbol("IBaasicAppOptions"),
    IAppOptions: Symbol("IAppOptions"),
    IStorageHandler: Symbol("IStorageHandler"),
    IEventHandler: Symbol("IEventHandler"),
    ITokenHandler: Symbol("ITokenHandler"),
    IUserHandler: Symbol("IUserHandler"),
    IBaasicApp: Symbol("IBaasicApp")
};

export { TYPES };

