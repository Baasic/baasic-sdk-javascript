import { ContainerModule } from "inversify";
import {
    BaasicPasswordRecoveryClient,
    BaasicPasswordRecoveryRouteDefinition,
    BaasicRegisterClient,
    BaasicRegisterRouteDefinition,
    BaasicRoleClient,
    BaasicRoleRouteDefinition,
    BaasicSocialLoginClient,
    BaasicSocialLoginRouteDefinition,
    BaasicUserClient,
    BaasicUserRouteDefinition
} from 'modules/membership';

const TYPES = {
    BaasicPassworRecoveryClient: Symbol("BaasicPasswordRecoveryClient"),
    BaasicPasswordRecoveryRouteDefinition: Symbol("BaasicPasswordRecoveryRouteDefinition"),
    BaasicRegisterClient: Symbol("BaasicRegisterClient"),
    BaasicRegisterRouteDefinition: Symbol("BaasicRegisterRouteDefinition"),
    BaasicRoleClient: Symbol("BaasicRoleClient"),
    BaasicRoleRouteDefinition: Symbol("BaasicRoleRouteDefinition"),
    BaasicSocialLoginClient: Symbol("BaasicSocialLoginClient"),
    BaasicSocialLoginRouteDefinition: Symbol("BaasicSocialLoginRouteDefinition"),
    BaasicUserClient: Symbol("BaasicUserClient"),
    BaasicUserRouteDefinition: Symbol("BaasicUserRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicPasswordRecoveryRouteDefinition>(TYPES.BaasicPasswordRecoveryRouteDefinition).toSelf();
    bind<BaasicPasswordRecoveryClient>(TYPES.BaasicPassworRecoveryClient).toSelf();
    bind<BaasicRegisterRouteDefinition>(TYPES.BaasicRegisterRouteDefinition).toSelf();
    bind<BaasicRegisterClient>(TYPES.BaasicRegisterClient).toSelf();
    bind<BaasicRoleRouteDefinition>(TYPES.BaasicRoleRouteDefinition).toSelf();
    bind<BaasicRoleClient>(TYPES.BaasicRoleClient).toSelf();
    bind<BaasicSocialLoginRouteDefinition>(TYPES.BaasicSocialLoginRouteDefinition).toSelf();
    bind<BaasicSocialLoginClient>(TYPES.BaasicSocialLoginClient).toSelf();
    bind<BaasicUserRouteDefinition>(TYPES.BaasicUserRouteDefinition).toSelf();
    bind<BaasicUserClient>(TYPES.BaasicUserClient).toSelf();
});

export { diModule };