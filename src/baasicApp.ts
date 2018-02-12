import { Utility, commonDIModule } from './common';
import { ITokenHandler, IToken, TokenType, TokenTypes, IUserHandler, IUser, IBaasicAppOptions, IBaasicOptions, IEventHandler, IBaasicApp, TYPES as coreTYPES } from './core/contracts';
import { coreDIModule as coreDIModule } from './core';
import { DIModule } from './';
import { httpDIModule as httpDIModule, ApiClient, httpTYPES } from './httpApi';
import * as modules from './modules';

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
    public readonly apiClient: ApiClient;

    public readonly membershipModule: modules.Membership.Root;
    //Modules
    public readonly applicationSettingModule: modules.ApplicationSettings.ApplicationSettingsClient;
    public readonly keyValueModule: modules.KeyValue.KeyValueClient;
    public readonly valueSetModule: modules.ValueSet.ValueSetClient;
    public readonly userProfileModule: modules.UserProfile.Root;
    public readonly templatingModule: modules.Templating.TemplatingClient;
    public readonly meteringModule: modules.Metering.MeteringClient;
    public readonly mediaVaultModule: modules.MediaVault.MediaVaultClient;
    public readonly mediaGalleryModule: modules.MediaGallery.Root;
    public readonly fileModule: modules.Files.FilesClient;
    public readonly dynamicResourceModule: modules.DynamicResource.DynamicResourceClient;
    public readonly notificationModule: modules.Notifications.NotificationsClient;
    public readonly articleModule: modules.Article.Root;
    public readonly commerceModule: modules.Commerce.CommerceClient;
    public readonly calendarModule: modules.Calendar.Root;
    public readonly messageCenterModule: modules.MessageCenter.Root;


    constructor(private apiKey: string, private options?: Partial<IBaasicOptions>) {
        this.utility = new Utility();
        if (!this.apiKey) {
            throw new Error("API Key is required.");
        }
        let opt: Partial<IBaasicOptions> = {};
        if (options) {
            opt = options;
        }

        this.settings = this.utility.extendAs<Readonly<IBaasicAppOptions>>({}, BaasicApp.defaultSettings, opt);

        this.diModule = new DIModule();
        this.diModule.init(this, [commonDIModule, coreDIModule, httpDIModule, modules]);

        this.tokenHandler = this.diModule.kernel.get<ITokenHandler>(coreTYPES.ITokenHandler);
        this.userHandler = this.diModule.kernel.get<IUserHandler>(coreTYPES.IUserHandler);
        this.eventHandler = this.diModule.kernel.get<IEventHandler>(coreTYPES.IEventHandler);
        this.apiClient = this.diModule.kernel.get<ApiClient>(httpTYPES.ApiClient);

        this.membershipModule = this.diModule.kernel.get<modules.Membership.Root>(modules.Membership.TYPES.Root);
        //Modules
        this.applicationSettingModule = this.diModule.kernel.get<modules.ApplicationSettings.ApplicationSettingsClient>(modules.ApplicationSettings.TYPES.ApplicationSettingsClient);
        this.keyValueModule = this.diModule.kernel.get<modules.KeyValue.KeyValueClient>(modules.KeyValue.TYPES.KeyValueClient);
        this.valueSetModule = this.diModule.kernel.get<modules.ValueSet.ValueSetClient>(modules.ValueSet.TYPES.ValueSetClient);
        this.userProfileModule = this.diModule.kernel.get<modules.UserProfile.Root>(modules.UserProfile.TYPES.Root);
        this.templatingModule = this.diModule.kernel.get<modules.Templating.TemplatingClient>(modules.Templating.TYPES.TemplatingClient);
        this.meteringModule = this.diModule.kernel.get<modules.Metering.MeteringClient>(modules.Metering.TYPES.MeteringClient);
        this.mediaVaultModule = this.diModule.kernel.get<modules.MediaVault.MediaVaultClient>(modules.MediaVault.TYPES.MediaVaultClient);
        this.mediaGalleryModule = this.diModule.kernel.get<modules.MediaGallery.Root>(modules.MediaGallery.TYPES.Root);
        this.fileModule = this.diModule.kernel.get<modules.Files.FilesClient>(modules.Files.TYPES.FilesClient);
        this.dynamicResourceModule = this.diModule.kernel.get<modules.DynamicResource.DynamicResourceClient>(modules.DynamicResource.TYPES.DynamicResourceClient);
        this.notificationModule = this.diModule.kernel.get<modules.Notifications.NotificationsClient>(modules.Notifications.TYPES.NotificationsClient);
        this.articleModule = this.diModule.kernel.get<modules.Article.Root>(modules.Article.TYPES.Root);
        this.commerceModule = this.diModule.kernel.get<modules.Commerce.CommerceClient>(modules.Commerce.TYPES.CommerceClient);
        this.calendarModule = this.diModule.kernel.get<modules.Calendar.Root>(modules.Calendar.TYPES.Root);
        this.messageCenterModule = this.diModule.kernel.get<modules.MessageCenter.Root>(modules.MessageCenter.TYPES.Root);
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

    getApiUrl(): string {
        return this.settings.apiUrl;
    }

    getUser(): IUser {
        return this.userHandler.getUser();
    }

    setUser(userInfo: IUser) {
        this.userHandler.setUser(userInfo);
    }
}