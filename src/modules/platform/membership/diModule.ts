import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    LoginRoute,
    LoginClient,
    LookupRoute,
    LookupClient,
    PasswordRecoveryRoute,
    PasswordRecoveryClient,
    RegisterRoute,
    RegisterClient,
    UserRoute,
    UserClient,
    Root
} from '.';

const TYPES = {
    LoginRoute: Symbol("LoginRoute"),
    LoginClient: Symbol("LoginClient"),
    LookupRoute: Symbol("LookupRoute"),
    LookupClient: Symbol("LookupClient"),
    PasswordRecoveryRoute: Symbol("PasswordRecoveryRoute"),
    PasswordRecoveryClient: Symbol("PasswordRecoveryClient"),
    RegisterRoute: Symbol("RegisterRoute"),
    RegisterClient: Symbol("RegisterClient"),
    UserRoute: Symbol("UserRoute"),
    UserClient: Symbol("UserClient"),
    Root: Symbol("Membership-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<LoginRoute>(TYPES.LoginRoute).to(LoginRoute);
    bind<LoginClient>(TYPES.LoginClient).to(LoginClient);
    bind<LookupRoute>(TYPES.LookupRoute).to(LookupRoute);
    bind<LookupClient>(TYPES.LookupClient).to(LookupClient);
    bind<PasswordRecoveryRoute>(TYPES.PasswordRecoveryRoute).to(PasswordRecoveryRoute);
    bind<PasswordRecoveryClient>(TYPES.PasswordRecoveryClient).to(PasswordRecoveryClient);
    bind<RegisterRoute>(TYPES.RegisterRoute).to(RegisterRoute);
    bind<RegisterClient>(TYPES.RegisterClient).to(RegisterClient);
    bind<UserRoute>(TYPES.UserRoute).to(UserRoute);
    bind<UserClient>(TYPES.UserClient).to(UserClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };