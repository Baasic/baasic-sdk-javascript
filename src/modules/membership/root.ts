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
        @inject(TYPES.BaasicLoginClient) public login: BaasicLoginClient,
        @inject(TYPES.BaasicLoginSocialClient) public loginSocial: BaasicLoginSocialClient,
        @inject(TYPES.BaasicPasswordRecoveryClient) public passwordRecovery: BaasicPasswordRecoveryClient,
        @inject(TYPES.BaasicRegisterClient) public register: BaasicRegisterClient,
        @inject(TYPES.BaasicRoleClient) public role: BaasicRoleClient,
        @inject(TYPES.BaasicUserClient) public user: BaasicUserClient,
        @inject(TYPES.BaasicUserSocialLoginClient) public userSocialLogin: BaasicUserSocialLoginClient
    ) {

    }

}