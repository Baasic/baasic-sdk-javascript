import {
    BaasicLoginClient,
    BaasicLoginSocialClient,
    BaasicPasswordRecoveryClient,
    BaasicRegisterClient,
    BaasicRoleClient,
    BaasicUserSocialLoginClient,
    BaasicUserClient,
    BaasicPermissionClient,
    BaasicLookupClient,
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
        @inject(TYPES.BaasicPermissionClient) public permissions: BaasicPermissionClient,
        @inject(TYPES.BaasicLookupClient) public lookups: BaasicLookupClient
    ) {

    }

}