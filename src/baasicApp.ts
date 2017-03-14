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

    public readonly membershipModule: modules.Membership.Root;
    //Modules
    public readonly applicationSettingModule: modules.ApplicationSettings.BaasicApplicationSettingsClient;
    public readonly keyValueModule: modules.KeyValue.BaasicKeyValueClient;
    public readonly valueSetModule: modules.ValueSet.BaasicValueSetClient;
    public readonly userProfileModule: modules.UserProfile.Root;
    public readonly templatingModule: modules.Templating.BaasicTemplatingClient;
    public readonly meteringModule: modules.Metering.BaasicMeteringClient;
    public readonly mediaVaultModule: modules.MediaVault.BaasicMediaVaultClient;
    public readonly fileModule: modules.Files.BaasicFilesClient;
    public readonly dynamicResourceModule: modules.DynamicResource.BaasicDynamicResourceClient;
    public readonly notificationModule: modules.Notifications.BaasicNotificationsClient;
    public readonly articleModule: modules.Article.Root;
    public readonly commerceModule: modules.Commerce.BaasicCommerceClient;


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

        this.membershipModule = this.diModule.kernel.get<modules.Membership.Root>(modules.Membership.TYPES.Root);
        //Modules
        this.applicationSettingModule = this.diModule.kernel.get<modules.ApplicationSettings.BaasicApplicationSettingsClient>(modules.ApplicationSettings.TYPES.BaasicApplicationSettingsClient);
        this.keyValueModule = this.diModule.kernel.get<modules.KeyValue.BaasicKeyValueClient>(modules.KeyValue.TYPES.BaasicKeyValueClient);
        this.valueSetModule = this.diModule.kernel.get<modules.ValueSet.BaasicValueSetClient>(modules.ValueSet.TYPES.BaasicValueSetClient);
        this.userProfileModule = this.diModule.kernel.get<modules.UserProfile.Root>(modules.UserProfile.TYPES.Root);
        this.templatingModule = this.diModule.kernel.get<modules.Templating.BaasicTemplatingClient>(modules.Templating.TYPES.BaasicTemplatingClient);
        this.meteringModule = this.diModule.kernel.get<modules.Metering.BaasicMeteringClient>(modules.Metering.TYPES.BaasicMeteringClient);
        this.mediaVaultModule = this.diModule.kernel.get<modules.MediaVault.BaasicMediaVaultClient>(modules.MediaVault.TYPES.BaasicMediaVaultClient);
        this.fileModule = this.diModule.kernel.get<modules.Files.BaasicFilesClient>(modules.Files.TYPES.BaasicFilesClient);
        this.dynamicResourceModule = this.diModule.kernel.get<modules.DynamicResource.BaasicDynamicResourceClient>(modules.DynamicResource.TYPES.BaasicDynamicResourceClient);
        this.notificationModule = this.diModule.kernel.get<modules.Notifications.BaasicNotificationsClient>(modules.Notifications.TYPES.BaasicNotificationsClient);
        this.articleModule = this.diModule.kernel.get<modules.Article.Root>(modules.Article.TYPES.Root);
        this.commerceModule = this.diModule.kernel.get<modules.Commerce.BaasicCommerceClient>(modules.Commerce.TYPES.BaasicCommerceClient);
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