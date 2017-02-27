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
    BaasicUserRouteDefinition
} from 'modules/membership';

const TYPES = {
    BaasicLoginRouteDefinition: Symbol("BaasicLoginRouteDefinition"),
    BaasicLoginClient: Symbol("BaasicLoginClient"),
    BaasicLoginSocialRouteDefinition: Symbol("BaasicLoginSocialRouteDefinition"),
    BaasicLoginSocialClient: Symbol("BaasicLoginSocialClient"),
    BaasicPassworRecoveryClient: Symbol("BaasicPasswordRecoveryClient"),
    BaasicPasswordRecoveryRouteDefinition: Symbol("BaasicPasswordRecoveryRouteDefinition"),
    BaasicRegisterClient: Symbol("BaasicRegisterClient"),
    BaasicRegisterRouteDefinition: Symbol("BaasicRegisterRouteDefinition"),
    BaasicRoleClient: Symbol("BaasicRoleClient"),
    BaasicRoleRouteDefinition: Symbol("BaasicRoleRouteDefinition"),
    BaasicUserSocialLoginClient: Symbol("BaasicUserSocialLoginClient"),
    BaasicUserSocialLoginRouteDefinition: Symbol("BaasicUserSocialLoginRouteDefinition"),
    BaasicUserClient: Symbol("BaasicUserClient"),
    BaasicUserRouteDefinition: Symbol("BaasicUserRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicLoginSocialRouteDefinition>(TYPES.BaasicLoginSocialRouteDefinition).toSelf();
    bind<BaasicLoginSocialClient>(TYPES.BaasicLoginSocialClient).toSelf();
    bind<BaasicLoginRouteDefinition>(TYPES.BaasicLoginRouteDefinition).toSelf();
    bind<BaasicLoginClient>(TYPES.BaasicLoginClient).toSelf();
    bind<BaasicPasswordRecoveryRouteDefinition>(TYPES.BaasicPasswordRecoveryRouteDefinition).toSelf();
    bind<BaasicPasswordRecoveryClient>(TYPES.BaasicPassworRecoveryClient).toSelf();
    bind<BaasicRegisterRouteDefinition>(TYPES.BaasicRegisterRouteDefinition).toSelf();
    bind<BaasicRegisterClient>(TYPES.BaasicRegisterClient).toSelf();
    bind<BaasicRoleRouteDefinition>(TYPES.BaasicRoleRouteDefinition).toSelf();
    bind<BaasicRoleClient>(TYPES.BaasicRoleClient).toSelf();
    bind<BaasicUserSocialLoginRouteDefinition>(TYPES.BaasicUserSocialLoginRouteDefinition).toSelf();
    bind<BaasicUserSocialLoginClient>(TYPES.BaasicUserSocialLoginClient).toSelf();
    bind<BaasicUserRouteDefinition>(TYPES.BaasicUserRouteDefinition).toSelf();
    bind<BaasicUserClient>(TYPES.BaasicUserClient).toSelf();
});

export { diModule };