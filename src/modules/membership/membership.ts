import * as m from 'modules/membership';
import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class Membership {

    constructor(
        @inject(m.TYPES.BaasicLoginClient) public Login: m.BaasicLoginClient,
        @inject(m.TYPES.BaasicLoginSocialClient) public LoginSocial: m.BaasicLoginSocialClient,
        @inject(m.TYPES.BaasicPasswordRecoveryClient) public PasswordRecovery: m.BaasicPasswordRecoveryClient,
        @inject(m.TYPES.BaasicRegisterClient) public Register: m.BaasicRegisterClient,
        @inject(m.TYPES.BaasicRoleClient) public Role: m.BaasicRoleClient,
        @inject(m.TYPES.BaasicUserClient) public User: m.BaasicUserClient,
        @inject(m.TYPES.BaasicUserSocialLoginClient) public UserSocialLogin: m.BaasicUserSocialLoginClient
    ) {

    }

}