import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    LoginRoute,
    LoginClient,
    LoginSocialRoute,
    LoginSocialClient,
    PasswordRecoveryClient,
    PasswordRecoveryRoute,
    RegisterClient,
    RegisterRoute,
    RoleBatchClient,
    RoleBatchRoute,
    RoleClient,
    RoleRoute,
    UserSocialLoginClient,
    UserSocialLoginRoute,
    UserClient,
    UserRoute,
    PermissionRoute,
    PermissionClient,
    LookupRoute,
    LookupClient,
    Root
} from './';

const TYPES = {
    LoginRoute: Symbol("LoginRoute"),
    LoginClient: Symbol("LoginClient"),
    LoginSocialRoute: Symbol("LoginSocialRoute"),
    LoginSocialClient: Symbol("LoginSocialClient"),
    PasswordRecoveryClient: Symbol("PasswordRecoveryClient"),
    PasswordRecoveryRoute: Symbol("PasswordRecoveryRoute"),
    RegisterClient: Symbol("RegisterClient"),
    RegisterRoute: Symbol("RegisterRoute"),
    RoleBatchClient: Symbol("RoleBatchClient"),
    RoleBatchRoute: Symbol("RoleBatchRoute"),
    RoleClient: Symbol("RoleClient"),
    RoleRoute: Symbol("RoleRoute"),
    UserSocialLoginClient: Symbol("UserSocialLoginClient"),
    UserSocialLoginRoute: Symbol("UserSocialLoginRoute"),
    UserClient: Symbol("UserClient"),
    UserRoute: Symbol("UserRoute"),
    PermissionRoute: Symbol("PermissionRoute"),
    PermissionClient: Symbol("PermissionClient"),
    LookupRoute: Symbol("LookupRoute"),
    LookupClient: Symbol("LookupClient"),
    Root: Symbol("Membership-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<LoginSocialRoute>(TYPES.LoginSocialRoute).to(LoginSocialRoute);
    bind<LoginSocialClient>(TYPES.LoginSocialClient).to(LoginSocialClient);
    bind<LoginRoute>(TYPES.LoginRoute).to(LoginRoute);
    bind<LoginClient>(TYPES.LoginClient).to(LoginClient);
    bind<PasswordRecoveryRoute>(TYPES.PasswordRecoveryRoute).to(PasswordRecoveryRoute);
    bind<PasswordRecoveryClient>(TYPES.PasswordRecoveryClient).to(PasswordRecoveryClient);
    bind<RegisterRoute>(TYPES.RegisterRoute).to(RegisterRoute);
    bind<RegisterClient>(TYPES.RegisterClient).to(RegisterClient);
    bind<RoleBatchRoute>(TYPES.RoleBatchRoute).to(RoleBatchRoute);
    bind<RoleBatchClient>(TYPES.RoleBatchClient).to(RoleBatchClient);
    bind<RoleRoute>(TYPES.RoleRoute).to(RoleRoute);
    bind<RoleClient>(TYPES.RoleClient).to(RoleClient);
    bind<UserSocialLoginRoute>(TYPES.UserSocialLoginRoute).to(UserSocialLoginRoute);
    bind<UserSocialLoginClient>(TYPES.UserSocialLoginClient).to(UserSocialLoginClient);
    bind<UserRoute>(TYPES.UserRoute).to(UserRoute);
    bind<UserClient>(TYPES.UserClient).to(UserClient);
    bind<PermissionRoute>(TYPES.PermissionRoute).to(PermissionRoute);
    bind<PermissionClient>(TYPES.PermissionClient).to(PermissionClient);
    bind<LookupRoute>(TYPES.LookupRoute).to(LookupRoute);
    bind<LookupClient>(TYPES.LookupClient).to(LookupClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };