import { Utility, commonDIModule } from './common';
import { ITokenHandler, IToken, TokenType, TokenTypes, IUserHandler, IUser, IBaasicAppOptions, IBaasicOptions, IEventHandler, IBaasicPlatform, TYPES as coreTYPES } from './core/contracts';
import { coreDIModule as coreDIModule } from './core';
import { PlatformDIModule } from './';
import { httpDIModule as httpDIModule, ApiClient, httpTYPES } from './httpApi';
import * as modules from './platform';

export class BaasicPlatform implements IBaasicPlatform {

    private readonly diModule: PlatformDIModule;
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
    public readonly applicationModule: modules.Application.Root;
    public readonly maintenanceModule: modules.Maintenance.Root;


    constructor(private options?: Partial<IBaasicOptions>) {
        this.utility = new Utility();
        let opt: Partial<IBaasicOptions> = {};
        if (options) {
            opt = options;
        }

        this.settings = this.utility.extendAs<Readonly<IBaasicAppOptions>>({}, BaasicPlatform.defaultSettings, opt);

        this.diModule = new PlatformDIModule();
        this.diModule.init(this, [commonDIModule, coreDIModule, httpDIModule, modules]);

        this.tokenHandler = this.diModule.kernel.get<ITokenHandler>(coreTYPES.ITokenHandler);
        this.userHandler = this.diModule.kernel.get<IUserHandler>(coreTYPES.IUserHandler);
        this.eventHandler = this.diModule.kernel.get<IEventHandler>(coreTYPES.IEventHandler);
        this.apiClient = this.diModule.kernel.get<ApiClient>(httpTYPES.ApiClient);

        this.membershipModule = this.diModule.kernel.get<modules.Membership.Root>(modules.Membership.TYPES.Root);
        //Modules
        this.applicationModule = this.diModule.kernel.get<modules.Application.Root>(modules.Application.TYPES.Root);
        this.maintenanceModule = this.diModule.kernel.get<modules.Maintenance.Root>(modules.Maintenance.TYPES.Root);
    }

    getAccessToken(): IToken {
        return this.tokenHandler.get(<TokenType>TokenTypes.Access);
    }

    updateAccessToken(value: IToken) {
        this.tokenHandler.store(value);
    }

    getApiKey(): string {
        return 'platform';
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