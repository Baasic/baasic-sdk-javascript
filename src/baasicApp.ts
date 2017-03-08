import { Utility, diModule as commonDIModule } from 'common';
import { ITokenHandler, IToken, TokenType, TokenTypes, IUserHandler, IUser, IBaasicAppOptions, IEventHandler, IBaasicApp, TYPES as coreTYPES } from 'core/contracts';
import { diModule as coreDIModule } from 'core';
import { DIModule } from './';
import { diModule as httpDIModule, BaasicApiClient, TYPES as httpApiTypes } from 'httpApi';
import { Container } from "inversify";

import * as modules from 'modules';

export class BaasicApp implements IBaasicApp {

    private readonly diModule: DIModule;
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
    public readonly eventHandler: IEventHandler;
    public readonly baasicApiClient: BaasicApiClient;

    public readonly membership: modules.Membership.Root;
    //Modules
    public readonly applicationSettings: modules.ApplicationSettings.BaasicApplicationSettingsClient;
    public readonly keyValue: modules.KeyValue.BaasicKeyValueClient;
    public readonly valueSet: modules.ValueSet.BaasicValueSetClient;
    public readonly userProfile: modules.UserProfile.Root;
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
        this.diModule = new DIModule();
        this.diModule.init(this, [commonDIModule, coreDIModule, httpDIModule, modules]);

        this.tokenHandler = this.diModule.kernel.get<ITokenHandler>(coreTYPES.ITokenHandler);
        this.userHandler = this.diModule.kernel.get<IUserHandler>(coreTYPES.IUserHandler);
        this.eventHandler = this.diModule.kernel.get<IEventHandler>(coreTYPES.IEventHandler);
        this.baasicApiClient = this.diModule.kernel.get<BaasicApiClient>(httpApiTypes.BaasicApiClient);

        this.membership = this.diModule.kernel.get<modules.Membership.Root>(modules.Membership.TYPES.Root);
        //Modules
        this.applicationSettings = this.diModule.kernel.get<modules.ApplicationSettings.BaasicApplicationSettingsClient>(modules.ApplicationSettings.TYPES.BaasicApplicationSettingsClient);
        this.keyValue = this.diModule.kernel.get<modules.KeyValue.BaasicKeyValueClient>(modules.KeyValue.TYPES.BaasicKeyValueClient);
        this.valueSet = this.diModule.kernel.get<modules.ValueSet.BaasicValueSetClient>(modules.ValueSet.TYPES.BaasicValueSetClient);
        this.userProfile = this.diModule.kernel.get<modules.UserProfile.Root>(modules.UserProfile.TYPES.Root);
        this.templating = this.diModule.kernel.get<modules.Templating.BaasicTemplatingClient>(modules.Templating.TYPES.BaasicTemplatingClient);
        this.metering = this.diModule.kernel.get<modules.Metering.BaasicMeteringClient>(modules.Metering.TYPES.BaasicMeteringClient);
        this.mediaVault = this.diModule.kernel.get<modules.MediaVault.BaasicMediaVaultClient>(modules.MediaVault.TYPES.BaasicMediaVaultClient);
        this.files = this.diModule.kernel.get<modules.Files.BaasicFilesClient>(modules.Files.TYPES.BaasicFilesClient);
        this.dynamicResource = this.diModule.kernel.get<modules.DynamicResource.BaasicDynamicResourceClient>(modules.DynamicResource.TYPES.BaasicDynamicResourceClient);

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