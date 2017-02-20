class ContainerModule {

}

export class DIModule {
    static modules : ContainerModule[];

    static add(module: ContainerModule): void {
        DIModule.modules.push(module);
    }
};