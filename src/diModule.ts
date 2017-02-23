import { IBaasicAppOptions } from './';
import { Container, interfaces, ContainerModule } from "inversify";
import 'reflect-metadata';

export class DIModule {
    static diModules : interfaces.ContainerModule[] = [];
    static kernel: Container = new Container();
    static init(options: IBaasicAppOptions, modules: any): void {        
        

        for (let module in modules) {            
            if (modules[module] instanceof ContainerModule) {
                DIModule.diModules.push(modules[module]);                 
            }
        }
        DIModule.kernel.load(...DIModule.diModules);        
    }
};