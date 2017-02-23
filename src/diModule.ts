import { IBaasicAppOptions } from './';
import { IHttpClient, TYPES as httpTYPES } from 'httpApi';
import { ITokenStore, IEventHandler, TYPES as coreTYPES } from 'core';
import { client as jQueryHttpClient } from 'httpApi/jQuery';
import { Container, interfaces, ContainerModule } from "inversify";
import 'reflect-metadata';

export class DIModule {
    static diModules : interfaces.ContainerModule[] = [];
    static kernel: Container = new Container();
    static init(options: Partial<IBaasicAppOptions>, modules: any[]): void {    
        let diModule = new ContainerModule((bind) => {
            if (options.httpClient) {
                DIModule.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toFunction(options.httpClient);
            } else {
                DIModule.kernel.bind<IHttpClient>(httpTYPES.IHttpClient).toFunction(jQueryHttpClient);
            }

            if (options.tokenStore) {
                DIModule.kernel.bind<ITokenStore>(coreTYPES.ITokenStore).toFunction(options.tokenStore);
            } else {  
                //TODO: Fix this, provide default              
                DIModule.kernel.bind<ITokenStore>(coreTYPES.ITokenStore).toConstantValue({
                        store: null,
                        get: null
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
            if (m instanceof Object) {
                for (let module in m) {
                    if (modules[module] instanceof Object) {
                        let alias = modules[module];
                        for (let mod in alias) {
                            if (alias[mod] instanceof ContainerModule) {
                                DIModule.diModules.push(alias[mod]);                 
                            }
                        }
                    } else if (modules[module] instanceof ContainerModule) {
                                DIModule.diModules.push(modules[module]);
                    }
                }
            } else if (m instanceof ContainerModule) {
                DIModule.diModules.push(m);
            }
        }
        DIModule.kernel.load(...DIModule.diModules);        
    }
    private static addModule(module: any) {
        
    }
};