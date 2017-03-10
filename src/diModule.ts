import { Container, interfaces, ContainerModule } from "inversify";
import 'reflect-metadata';
import { IHttpClient, TYPES as httpTYPES } from 'httpApi';
import { IStorageHandler, TokenType, TokenTypes, IToken, IEventHandler, IBaasicAppOptions, IAppOptions, IBaasicApp, TYPES as coreTYPES } from 'core/contracts';
import { client as jQueryHttpClient } from 'httpApi/jQuery';
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

            if (app.settings.httpClient) {
                if (app.settings.httpClient instanceof Function) {
                    this.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toFunction(app.settings.httpClient);
                } else {
                    this.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toConstantValue(app.settings.httpClient);
                }
            } else {
                this.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toFunction(jQueryHttpClient);
            }

            if (app.settings.storageHandler) {
                if (app.settings.storageHandler instanceof Function) {
                    this.kernel.bind<IStorageHandler>(coreTYPES.IStorageHandler).toFunction(app.settings.storageHandler);
                } else {
                    this.kernel.bind<IStorageHandler>(coreTYPES.IStorageHandler).toConstantValue(app.settings.storageHandler);
                }
            } else {
                this.kernel.bind<IStorageHandler>(coreTYPES.IStorageHandler).to(LocalStorageHandler);
            }

            if (app.settings.eventHandler) {
                if (app.settings.eventHandler instanceof Function) {
                    this.kernel.bind<IEventHandler>(coreTYPES.IEventHandler).toFunction(app.settings.eventHandler);
                } else {
                    this.kernel.bind<IEventHandler>(coreTYPES.IEventHandler).toConstantValue(app.settings.eventHandler);
                }
            } else {
                this.kernel.bind<IEventHandler>(coreTYPES.IEventHandler).to(BrowserEventHandler);
            }

            this.kernel.bind<IBaasicApp>(coreTYPES.IBaasicApp).toConstantValue(app);

        });
        this.diModules.push(diModule);

        for (let m of modules) {
            this.addModule(m);
        }
        this.kernel.load(...this.diModules);
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