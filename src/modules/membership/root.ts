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
    TYPES
} from 'modules/membership';

import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class Root {

    constructor(
        @inject(TYPES.BaasicLoginClient) public Login: BaasicLoginClient,
        @inject(TYPES.BaasicLoginSocialClient) public LoginSocial: BaasicLoginSocialClient,
        @inject(TYPES.BaasicPasswordRecoveryClient) public PasswordRecovery: BaasicPasswordRecoveryClient,
        @inject(TYPES.BaasicRegisterClient) public Register: BaasicRegisterClient,
        @inject(TYPES.BaasicRoleClient) public Role: BaasicRoleClient,
        @inject(TYPES.BaasicUserClient) public User: BaasicUserClient,
        @inject(TYPES.BaasicUserSocialLoginClient) public UserSocialLogin: BaasicUserSocialLoginClient
    ) {

    }

}