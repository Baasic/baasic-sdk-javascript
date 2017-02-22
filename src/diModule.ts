import { Container, interfaces } from "inversify";
import 'reflect-metadata';

export class DIModule {
    static modules : interfaces.ContainerModule[] = [];
    static kernel: Container = new Container();
    static add(module: interfaces.ContainerModule): void {
        console.log(module);
        DIModule.modules.push(module);
    }
};