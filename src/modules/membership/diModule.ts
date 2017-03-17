import { ContainerModule } from "inversify";
import {
    BaasicLoginRouteDefinition,
    LoginClient,
    BaasicLoginSocialRouteDefinition,
    LoginSocialClient,
    PasswordRecoveryClient,
    BaasicPasswordRecoveryRouteDefinition,
    RegisterClient,
    BaasicRegisterRouteDefinition,
    RoleClient,
    BaasicRoleRouteDefinition,
    UserSocialLoginClient,
    BaasicUserSocialLoginRouteDefinition,
    UserClient,
    BaasicUserRouteDefinition,
    BaasicPermissionRouteDefinition,
    PermissionClient,
    BaasicLookupRouteDefinition,
    LookupClient,
    Root
} from 'modules/membership';

const TYPES = {
    BaasicLoginRouteDefinition: Symbol("BaasicLoginRouteDefinition"),
    LoginClient: Symbol("LoginClient"),
    BaasicLoginSocialRouteDefinition: Symbol("BaasicLoginSocialRouteDefinition"),
    LoginSocialClient: Symbol("LoginSocialClient"),
    PasswordRecoveryClient: Symbol("PasswordRecoveryClient"),
    BaasicPasswordRecoveryRouteDefinition: Symbol("BaasicPasswordRecoveryRouteDefinition"),
    RegisterClient: Symbol("RegisterClient"),
    BaasicRegisterRouteDefinition: Symbol("BaasicRegisterRouteDefinition"),
    RoleClient: Symbol("RoleClient"),
    BaasicRoleRouteDefinition: Symbol("BaasicRoleRouteDefinition"),
    UserSocialLoginClient: Symbol("UserSocialLoginClient"),
    BaasicUserSocialLoginRouteDefinition: Symbol("BaasicUserSocialLoginRouteDefinition"),
    UserClient: Symbol("UserClient"),
    BaasicUserRouteDefinition: Symbol("BaasicUserRouteDefinition"),
    BaasicPermissionRouteDefinition: Symbol("BaasicPermissionRouteDefinition"),
    PermissionClient: Symbol("PermissionClient"),
    BaasicLookupRouteDefinition: Symbol("BaasicLookupRouteDefinition"),
    LookupClient: Symbol("LookupClient"),
    Root: Symbol("Membership-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicLoginSocialRouteDefinition>(TYPES.BaasicLoginSocialRouteDefinition).to(BaasicLoginSocialRouteDefinition);
    bind<LoginSocialClient>(TYPES.LoginSocialClient).to(LoginSocialClient);
    bind<BaasicLoginRouteDefinition>(TYPES.BaasicLoginRouteDefinition).to(BaasicLoginRouteDefinition);
    bind<LoginClient>(TYPES.LoginClient).to(LoginClient);
    bind<BaasicPasswordRecoveryRouteDefinition>(TYPES.BaasicPasswordRecoveryRouteDefinition).to(BaasicPasswordRecoveryRouteDefinition);
    bind<PasswordRecoveryClient>(TYPES.PasswordRecoveryClient).to(PasswordRecoveryClient);
    bind<BaasicRegisterRouteDefinition>(TYPES.BaasicRegisterRouteDefinition).to(BaasicRegisterRouteDefinition);
    bind<RegisterClient>(TYPES.RegisterClient).to(RegisterClient);
    bind<BaasicRoleRouteDefinition>(TYPES.BaasicRoleRouteDefinition).to(BaasicRoleRouteDefinition);
    bind<RoleClient>(TYPES.RoleClient).to(RoleClient);
    bind<BaasicUserSocialLoginRouteDefinition>(TYPES.BaasicUserSocialLoginRouteDefinition).to(BaasicUserSocialLoginRouteDefinition);
    bind<UserSocialLoginClient>(TYPES.UserSocialLoginClient).to(UserSocialLoginClient);
    bind<BaasicUserRouteDefinition>(TYPES.BaasicUserRouteDefinition).to(BaasicUserRouteDefinition);
    bind<UserClient>(TYPES.UserClient).to(UserClient);
    bind<BaasicPermissionRouteDefinition>(TYPES.BaasicPermissionRouteDefinition).to(BaasicPermissionRouteDefinition);
    bind<PermissionClient>(TYPES.PermissionClient).to(PermissionClient);
    bind<BaasicLookupRouteDefinition>(TYPES.BaasicLookupRouteDefinition).to(BaasicLookupRouteDefinition);
    bind<LookupClient>(TYPES.LookupClient).to(LookupClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };