import { IHttpClient, TYPES as httpTYPES } from 'httpApi';
import { ITokenStore, TokenType, TokenTypes, IToken, IEventHandler, IBaasicAppOptions, IAppOptions, TYPES as coreTYPES } from 'core';
import { client as jQueryHttpClient } from 'httpApi/jQuery';
import { Container, interfaces, ContainerModule } from "inversify";
import 'reflect-metadata';

export class DIModule {
    static diModules: interfaces.ContainerModule[] = [];
    static kernel: Container = new Container();
    static init(apiKey: string, options: Partial<IBaasicAppOptions>, modules: any[]): void {
        let diModule = new ContainerModule((bind) => {

            if (options) {
                let appOptions: IAppOptions = {
                    apiKey: apiKey,
                    apiUrl: new URL(`${options.useSSL ? 'https' : 'http'}://${options.apiRootUrl}/${options.apiVersion}/${apiKey}/`)
                }
                DIModule.kernel.bind<IAppOptions>(coreTYPES.IAppOptions).toConstantValue(appOptions);

                DIModule.kernel.bind<Partial<IBaasicAppOptions>>(coreTYPES.IBaasicAppOptions).toConstantValue(options);
            }

            if (options.httpClient) {
                DIModule.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toFunction(options.httpClient);
            } else {
                DIModule.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toFunction(jQueryHttpClient);
            }

            if (options.tokenStore) {
                DIModule.kernel.bind<ITokenStore>(coreTYPES.ITokenStore).toFunction(options.tokenStore);
            } else {
                let get = function (type?: TokenType): IToken { return null; };
                //TODO: Fix this, provide default              
                DIModule.kernel.bind<ITokenStore>(coreTYPES.ITokenStore).toConstantValue({
                    store: null,
                    get: get
                });
            }

            if (options.eventHandler) {
                DIModule.kernel.bind<IEventHandler>(coreTYPES.IEventHandler).toFunction(options.eventHandler);
            } else {
                //TODO: Fix this, provide default              
                DIModule.kernel.bind<IEventHandler>(coreTYPES.IEventHandler).toConstantValue({});
            }

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