import { Utility, diModule as commonDIModule } from 'common';
import { ITokenHandler, IToken, TokenType, TokenTypes, IUserHandler, IUser, IBaasicAppOptions, IBaasicApp, TYPES as coreTYPES } from 'core/contracts';
import { diModule as coreDIModule } from 'core';
import { DIModule } from './';
import { diModule as httpDIModule } from 'httpApi';
import { Container } from "inversify";

import * as modules from 'modules';

export class BaasicApp implements IBaasicApp {

    private readonly kernel: Container;
    private readonly utility: Utility;
    private static readonly defaultSettings: IBaasicAppOptions = {
        useSSL: true,
        apiRootUrl: 'api.baasic.com',
        apiVersion: 'v1',
        enableHALJSON: false
    };

    public readonly settings: Partial<IBaasicAppOptions>;
    public readonly tokenHandler: ITokenHandler;
    public readonly userHandler: IUserHandler;

    public readonly membership: modules.Membership.Root;
    //Modules
    public readonly applicationSettings: modules.ApplicationSettings.BaasicApplicationSettingsClient;
    public readonly keyValue: modules.KeyValue.BaasicKeyValueClient;
    public readonly valueSet: modules.ValueSet.BaasicValueSetClient;
    public readonly userProfile: modules.UserProfile.BaasicUserProfileClient;
    public readonly templating: modules.Templating.BaasicTemplatingClient;
    public readonly metering: modules.Metering.BaasicMeteringClient;
    public readonly mediaVault: modules.MediaVault.BaasicMediaVaultClient;
    public readonly files: modules.Files.BaasicFilesClient;
    public readonly dynamicResource: modules.DynamicResource.BaasicDynamicResourceClient;


    constructor(private apiKey: string, private options?: Partial<IBaasicAppOptions>) {
        this.utility = new Utility();
        if (!this.apiKey) {
            throw new Error("API Key is required.");
        }

        this.settings = this.utility.extendAs<Readonly<IBaasicAppOptions>>({}, BaasicApp.defaultSettings, options || {});
        DIModule.init(this, [commonDIModule, coreDIModule, httpDIModule, modules]);

        this.tokenHandler = DIModule.kernel.get<ITokenHandler>(coreTYPES.ITokenHandler);
        this.userHandler = DIModule.kernel.get<IUserHandler>(coreTYPES.IUserHandler);

        this.membership = DIModule.kernel.get<modules.Membership.Root>(modules.Membership.TYPES.Root);
        //Modules
        this.applicationSettings = DIModule.kernel.get<modules.ApplicationSettings.BaasicApplicationSettingsClient>(modules.ApplicationSettings.TYPES.BaasicApplicationSettingsClient);
        this.keyValue = DIModule.kernel.get<modules.KeyValue.BaasicKeyValueClient>(modules.KeyValue.TYPES.BaasicKeyValueClient);
        this.valueSet = DIModule.kernel.get<modules.ValueSet.BaasicValueSetClient>(modules.ValueSet.TYPES.BaasicValueSetClient);
        this.userProfile = DIModule.kernel.get<modules.UserProfile.BaasicUserProfileClient>(modules.UserProfile.TYPES.BaasicUserProfileClient);
        this.templating = DIModule.kernel.get<modules.Templating.BaasicTemplatingClient>(modules.Templating.TYPES.BaasicTemplatingClient);
        this.metering = DIModule.kernel.get<modules.Metering.BaasicMeteringClient>(modules.Metering.TYPES.BaasicMeteringClient);
        this.mediaVault = DIModule.kernel.get<modules.MediaVault.BaasicMediaVaultClient>(modules.MediaVault.TYPES.BaasicMediaVaultClient);
        this.files = DIModule.kernel.get<modules.Files.BaasicFilesClient>(modules.Files.TYPES.BaasicFilesClient);
        this.dynamicResource = DIModule.kernel.get<modules.DynamicResource.BaasicDynamicResourceClient>(modules.DynamicResource.TYPES.BaasicDynamicResourceClient);

    }

    getAccessToken(): IToken {
        return this.tokenHandler.get(<TokenType>TokenTypes.Access);
    }

    updateAccessToken(value: IToken) {
        this.tokenHandler.store(value);
    }

    getApiKey(): string {
        return this.apiKey;
    }

    getApiUrl(): URL {
        return this.settings.apiUrl;
    }

    getUser(): IUser {
        return this.userHandler.getUser();
    }

    setUser(userInfo: IUser) {
        this.userHandler.setUser(userInfo);
    }
}