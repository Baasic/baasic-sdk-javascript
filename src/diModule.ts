import { IHttpClient, TYPES as httpTYPES } from 'httpApi';
import { IStorageHandler, TokenType, TokenTypes, IToken, IEventHandler, IBaasicAppOptions, IAppOptions, IBaasicApp, TYPES as coreTYPES } from 'core/contracts';
import { client as jQueryHttpClient } from 'httpApi/jQuery';
import { LocalStorageHandler } from 'core/localStorage';
import { BrowserEventHandler } from 'core/browserEvents';
import { Container, interfaces, ContainerModule } from "inversify";
import 'reflect-metadata';

export class DIModule {
    static diModules: interfaces.ContainerModule[] = [];
    static kernel: Container = new Container();
    static init(app: IBaasicApp, modules: any[]): void {
        let diModule = new ContainerModule((bind) => {

            if (app.settings) {
                let appOptions: IAppOptions = {
                    apiKey: app.apiKey,
                    apiUrl: new URL(`${app.settings.useSSL ? 'https' : 'http'}://${app.settings.apiRootUrl}/${app.settings.apiVersion}/${app.apiKey}/`)
                }
                DIModule.kernel.bind<IAppOptions>(coreTYPES.IAppOptions).toConstantValue(appOptions);

                DIModule.kernel.bind<Partial<IBaasicAppOptions>>(coreTYPES.IBaasicAppOptions).toConstantValue(app.settings);
            }

            if (app.settings.httpClient) {
                DIModule.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toFunction(app.settings.httpClient);
            } else {
                DIModule.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toFunction(jQueryHttpClient);
            }

            if (app.settings.storageHandler) {
                DIModule.kernel.bind<IStorageHandler>(coreTYPES.IStorageHandler).toFunction(app.settings.storageHandler);
            } else {
                DIModule.kernel.bind<IStorageHandler>(coreTYPES.IStorageHandler).to(LocalStorageHandler);
            }

            if (app.settings.eventHandler) {
                DIModule.kernel.bind<IEventHandler>(coreTYPES.IEventHandler).toFunction(app.settings.eventHandler);
            } else {
                DIModule.kernel.bind<IEventHandler>(coreTYPES.IEventHandler).to(BrowserEventHandler);
            }

            DIModule.kernel.bind<IBaasicApp>(coreTYPES.IBaasicApp).toConstantValue(app);

        });
        DIModule.diModules.push(diModule);

        for (let m of modules) {
            DIModule.addModule(m);
        }
        DIModule.kernel.load(...DIModule.diModules);
    }
    private static addModule(module: any) {
        if (module instanceof ContainerModule) {
            DIModule.diModules.push(module);
        } else if (module instanceof Object) {
            for (let mod in module) {
                DIModule.addModule(module[mod]);
            }
        }
    }
};