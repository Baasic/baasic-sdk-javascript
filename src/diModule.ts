import { Container, interfaces } from "inversify";

export class DIModule {
    static modules : interfaces.ContainerModule[];
    static kernel: Container = new Container();
    static add(module: interfaces.ContainerModule): void {
        DIModule.modules.push(module);
    }
};