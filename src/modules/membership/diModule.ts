import { ContainerModule } from "inversify";
import {
    LoginRouteDefinition,
    LoginClient,
    LoginSocialRouteDefinition,
    LoginSocialClient,
    PasswordRecoveryClient,
    PasswordRecoveryRouteDefinition,
    RegisterClient,
    RegisterRouteDefinition,
    RoleClient,
    RoleRouteDefinition,
    UserSocialLoginClient,
    UserSocialLoginRouteDefinition,
    UserClient,
    UserRouteDefinition,
    PermissionRouteDefinition,
    PermissionClient,
    LookupRouteDefinition,
    LookupClient,
    Root
} from 'modules/membership';

const TYPES = {
    LoginRouteDefinition: Symbol("LoginRouteDefinition"),
    LoginClient: Symbol("LoginClient"),
    LoginSocialRouteDefinition: Symbol("LoginSocialRouteDefinition"),
    LoginSocialClient: Symbol("LoginSocialClient"),
    PasswordRecoveryClient: Symbol("PasswordRecoveryClient"),
    PasswordRecoveryRouteDefinition: Symbol("PasswordRecoveryRouteDefinition"),
    RegisterClient: Symbol("RegisterClient"),
    RegisterRouteDefinition: Symbol("RegisterRouteDefinition"),
    RoleClient: Symbol("RoleClient"),
    RoleRouteDefinition: Symbol("RoleRouteDefinition"),
    UserSocialLoginClient: Symbol("UserSocialLoginClient"),
    UserSocialLoginRouteDefinition: Symbol("UserSocialLoginRouteDefinition"),
    UserClient: Symbol("UserClient"),
    UserRouteDefinition: Symbol("UserRouteDefinition"),
    PermissionRouteDefinition: Symbol("PermissionRouteDefinition"),
    PermissionClient: Symbol("PermissionClient"),
    LookupRouteDefinition: Symbol("LookupRouteDefinition"),
    LookupClient: Symbol("LookupClient"),
    Root: Symbol("Membership-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<LoginSocialRouteDefinition>(TYPES.LoginSocialRouteDefinition).to(LoginSocialRouteDefinition);
    bind<LoginSocialClient>(TYPES.LoginSocialClient).to(LoginSocialClient);
    bind<LoginRouteDefinition>(TYPES.LoginRouteDefinition).to(LoginRouteDefinition);
    bind<LoginClient>(TYPES.LoginClient).to(LoginClient);
    bind<PasswordRecoveryRouteDefinition>(TYPES.PasswordRecoveryRouteDefinition).to(PasswordRecoveryRouteDefinition);
    bind<PasswordRecoveryClient>(TYPES.PasswordRecoveryClient).to(PasswordRecoveryClient);
    bind<RegisterRouteDefinition>(TYPES.RegisterRouteDefinition).to(RegisterRouteDefinition);
    bind<RegisterClient>(TYPES.RegisterClient).to(RegisterClient);
    bind<RoleRouteDefinition>(TYPES.RoleRouteDefinition).to(RoleRouteDefinition);
    bind<RoleClient>(TYPES.RoleClient).to(RoleClient);
    bind<UserSocialLoginRouteDefinition>(TYPES.UserSocialLoginRouteDefinition).to(UserSocialLoginRouteDefinition);
    bind<UserSocialLoginClient>(TYPES.UserSocialLoginClient).to(UserSocialLoginClient);
    bind<UserRouteDefinition>(TYPES.UserRouteDefinition).to(UserRouteDefinition);
    bind<UserClient>(TYPES.UserClient).to(UserClient);
    bind<PermissionRouteDefinition>(TYPES.PermissionRouteDefinition).to(PermissionRouteDefinition);
    bind<PermissionClient>(TYPES.PermissionClient).to(PermissionClient);
    bind<LookupRouteDefinition>(TYPES.LookupRouteDefinition).to(LookupRouteDefinition);
    bind<LookupClient>(TYPES.LookupClient).to(LookupClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };