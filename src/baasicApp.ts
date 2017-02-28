import { Utility, diModule as commonDIModule } from 'common';
import { ITokenHandler, IToken, TokenType, TokenTypes, IUserHandler, IUser, IBaasicAppOptions } from 'core/contracts';
import { TYPES as coreTYPES, diModule as coreDIModule } from 'core';
import { DIModule, IBaasicApp } from './';
import { diModule as httpDIModule } from 'httpApi';
import { Container } from "inversify";

import * as modules from 'modules';

export class BaasicApp implements IBaasicApp {

    private readonly kernel: Container;
    private readonly utility: Utility;
    private static readonly defaultSettings: IBaasicAppOptions = {
        useSSL: true,
        apiRootUrl: 'api.baasic.com',
        apiVersion: 'v1'
    };

    public readonly settings: Partial<IBaasicAppOptions>;
    public readonly tokenHandler: ITokenHandler;
    public readonly userHandler: IUserHandler;

    //Modules
    public readonly keyValue: modules.KeyValue.BaasicKeyValueClient;


    constructor(public apiKey: string, options?: Partial<IBaasicAppOptions>) {
        this.utility = new Utility();
        if (!this.apiKey) {
            throw new Error("API Key is required.");
        }

        this.settings = this.utility.extendAs<Readonly<IBaasicAppOptions>>({}, BaasicApp.defaultSettings, options || {});
        DIModule.init(this, [commonDIModule, coreDIModule, httpDIModule, modules]);

        this.tokenHandler = DIModule.kernel.get<ITokenHandler>(coreTYPES.ITokenHandler);
        this.userHandler = DIModule.kernel.get<IUserHandler>(coreTYPES.IUserHandler);

        //Modules
        this.keyValue = DIModule.kernel.get<modules.KeyValue.BaasicKeyValueClient>(modules.KeyValue.TYPES.BaasicKeyValueClient);



    }

    getAccessToken(): IToken {
        return this.tokenHandler.get(<TokenType>TokenTypes.Access);
    };

    updateAccessToken(value: IToken) {
        this.tokenHandler.store(value);
    };


    getApiKey(): string {
        return this.apiKey;
    };

    getApiUrl(): URL {
        return this.settings.apiUrl;
    };

    getUser(): IUser {
        return this.userHandler.getUser();
    }

    setUser(userInfo: IUser) {
        this.userHandler.setUser(userInfo);
    };
}