import { Container, interfaces, ContainerModule } from "inversify";
import 'reflect-metadata';
import { IHttpClient, httpTYPES } from 'httpApi';
import { IStorageHandler, IDefaultStorageConfig, TokenType, TokenTypes, IToken, IEventHandler, IBaasicAppOptions, IAppOptions, IBaasicApp, TYPES as coreTYPES } from 'core/contracts';
import { JQueryHttpClient } from 'httpApi/jQuery';
import { LocalStorageHandler } from 'core/localStorage';
import { BrowserEventHandler } from 'core/browserEvents';


export class DIModule {
    diModules: interfaces.ContainerModule[] = [];
    kernel: Container = new Container();
    init(app: IBaasicApp, modules: any[]): void {
        let diModule = new ContainerModule((bind) => {
            let apiKey = app.getApiKey();
            if (app.settings) {
                let appOptions: IAppOptions = {
                    apiKey: apiKey,
                    apiUrl: new URL(`${app.settings.useSSL ? 'https' : 'http'}://${app.settings.apiRootUrl}/${app.settings.apiVersion}/${apiKey}/`),
                    enableHALJSON: app.settings.enableHALJSON
                };
                app.settings.apiUrl = appOptions.apiUrl;
                this.kernel.bind<IAppOptions>(coreTYPES.IAppOptions).toConstantValue(appOptions);

                this.kernel.bind<Partial<IBaasicAppOptions>>(coreTYPES.IBaasicAppOptions).toConstantValue(app.settings);
            }

            this.bindHandler<IHttpClient>(httpTYPES.IHttpClient, app.settings.httpClient, JQueryHttpClient);
            this.bindHandlerWithOptions<IStorageHandler, IDefaultStorageConfig>(coreTYPES.IStorageHandler, coreTYPES.IDefaultStorageConfig, app.settings.storageHandler, LocalStorageHandler);
            this.bindHandler<IEventHandler>(coreTYPES.IEventHandler, app.settings.eventHandler, BrowserEventHandler);

            this.kernel.bind<IBaasicApp>(coreTYPES.IBaasicApp).toConstantValue(app);

        });
        this.diModules.push(diModule);

        for (let m of modules) {
            this.addModule(m);
        }
        this.kernel.load(...this.diModules);
    }

    private bindHandler<THandler>(type: symbol, value: () => THandler, defaultBinding: new (...args: any[]) => THandler) {
        if (value) {
            this.kernel.bind<THandler>(type).toConstantValue(value());
        } else {
            this.kernel.bind<THandler>(type).to(defaultBinding);
        }
    }

    private bindHandlerWithOptions<THandler, TOption>(type: symbol, optionType: symbol, value: () => THandler | TOption, defaultBinding: new (...args: any[]) => THandler) {
        if (value) {
            if (value instanceof Function) {
                this.kernel.bind<THandler>(type).toConstantValue((<() => THandler>value)());
                return;
            } else {
                this.kernel.bind<TOption>(optionType).toConstantValue(value);
            }
        }

        this.kernel.bind<THandler>(type).to(defaultBinding);
    }


    private addModule(module: any) {
        if (module instanceof ContainerModule) {
            this.diModules.push(module);
        } else if (module instanceof Object && !(module instanceof Function)) {
            for (let mod in module) {
                this.addModule(module[mod]);
            }
        }
    }
};