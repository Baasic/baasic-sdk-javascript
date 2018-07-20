import {
    LoginClient,
    TYPES
} from '.';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.LoginClient) public login: LoginClient
    ) {

    }

}