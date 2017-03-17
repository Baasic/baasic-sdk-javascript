import {
    LoginClient,
    LoginSocialClient,
    PasswordRecoveryClient,
    RegisterClient,
    RoleClient,
    UserSocialLoginClient,
    UserClient,
    PermissionClient,
    LookupClient,
    TYPES
} from 'modules/membership';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.LoginClient) public login: LoginClient,
        @inject(TYPES.LoginSocialClient) public loginSocial: LoginSocialClient,
        @inject(TYPES.PasswordRecoveryClient) public passwordRecovery: PasswordRecoveryClient,
        @inject(TYPES.RegisterClient) public register: RegisterClient,
        @inject(TYPES.RoleClient) public role: RoleClient,
        @inject(TYPES.UserClient) public user: UserClient,
        @inject(TYPES.PermissionClient) public permissions: PermissionClient,
        @inject(TYPES.LookupClient) public lookups: LookupClient
    ) {

    }

}