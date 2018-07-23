import {
    LoginClient,
    LookupClient,
    PasswordRecoveryClient,
    RegisterClient,
    UserClient,
    TYPES
} from '.';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.LoginClient) public login: LoginClient,
        @inject(TYPES.LookupClient) public lookup: LookupClient,
        @inject(TYPES.PasswordRecoveryClient) public passwordRecovery: PasswordRecoveryClient,
        @inject(TYPES.RegisterClient) public register: RegisterClient,
        @inject(TYPES.UserClient) public user: UserClient,
    ) {

    }

}