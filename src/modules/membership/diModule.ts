import { ContainerModule } from "inversify";
import {
    BaasicLoginRouteDefinition,
    BaasicLoginClient,
    BaasicLoginSocialRouteDefinition,
    BaasicLoginSocialClient,
    BaasicPasswordRecoveryClient,
    BaasicPasswordRecoveryRouteDefinition,
    BaasicRegisterClient,
    BaasicRegisterRouteDefinition,
    BaasicRoleClient,
    BaasicRoleRouteDefinition,
    BaasicUserSocialLoginClient,
    BaasicUserSocialLoginRouteDefinition,
    BaasicUserClient,
    BaasicUserRouteDefinition,
    Root
} from 'modules/membership';

const TYPES = {
    BaasicLoginRouteDefinition: Symbol("BaasicLoginRouteDefinition"),
    BaasicLoginClient: Symbol("BaasicLoginClient"),
    BaasicLoginSocialRouteDefinition: Symbol("BaasicLoginSocialRouteDefinition"),
    BaasicLoginSocialClient: Symbol("BaasicLoginSocialClient"),
    BaasicPasswordRecoveryClient: Symbol("BaasicPasswordRecoveryClient"),
    BaasicPasswordRecoveryRouteDefinition: Symbol("BaasicPasswordRecoveryRouteDefinition"),
    BaasicRegisterClient: Symbol("BaasicRegisterClient"),
    BaasicRegisterRouteDefinition: Symbol("BaasicRegisterRouteDefinition"),
    BaasicRoleClient: Symbol("BaasicRoleClient"),
    BaasicRoleRouteDefinition: Symbol("BaasicRoleRouteDefinition"),
    BaasicUserSocialLoginClient: Symbol("BaasicUserSocialLoginClient"),
    BaasicUserSocialLoginRouteDefinition: Symbol("BaasicUserSocialLoginRouteDefinition"),
    BaasicUserClient: Symbol("BaasicUserClient"),
    BaasicUserRouteDefinition: Symbol("BaasicUserRouteDefinition"),
    Root: Symbol("Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicLoginSocialRouteDefinition>(TYPES.BaasicLoginSocialRouteDefinition).to(BaasicLoginSocialRouteDefinition);
    bind<BaasicLoginSocialClient>(TYPES.BaasicLoginSocialClient).to(BaasicLoginSocialClient);
    bind<BaasicLoginRouteDefinition>(TYPES.BaasicLoginRouteDefinition).to(BaasicLoginRouteDefinition);
    bind<BaasicLoginClient>(TYPES.BaasicLoginClient).to(BaasicLoginClient);
    bind<BaasicPasswordRecoveryRouteDefinition>(TYPES.BaasicPasswordRecoveryRouteDefinition).to(BaasicPasswordRecoveryRouteDefinition);
    bind<BaasicPasswordRecoveryClient>(TYPES.BaasicPasswordRecoveryClient).to(BaasicPasswordRecoveryClient);
    bind<BaasicRegisterRouteDefinition>(TYPES.BaasicRegisterRouteDefinition).to(BaasicRegisterRouteDefinition);
    bind<BaasicRegisterClient>(TYPES.BaasicRegisterClient).to(BaasicRegisterClient);
    bind<BaasicRoleRouteDefinition>(TYPES.BaasicRoleRouteDefinition).to(BaasicRoleRouteDefinition);
    bind<BaasicRoleClient>(TYPES.BaasicRoleClient).to(BaasicRoleClient);
    bind<BaasicUserSocialLoginRouteDefinition>(TYPES.BaasicUserSocialLoginRouteDefinition).to(BaasicUserSocialLoginRouteDefinition);
    bind<BaasicUserSocialLoginClient>(TYPES.BaasicUserSocialLoginClient).to(BaasicUserSocialLoginClient);
    bind<BaasicUserRouteDefinition>(TYPES.BaasicUserRouteDefinition).to(BaasicUserRouteDefinition);
    bind<BaasicUserClient>(TYPES.BaasicUserClient).to(BaasicUserClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };