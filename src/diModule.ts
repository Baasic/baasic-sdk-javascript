//Note Start: These are temporary classes
export interface IContainerModule {    
    registry: ContainerModuleCallBack;
}

export interface ContainerModuleCallBack extends Function {
    (
        bind: any,
        unbind: any,
        isBound: any,
        rebind: any
    ): void;
}
//Note End: These are temporary classes

export class ContainerModule implements IContainerModule {
    constructor(public registry: ContainerModuleCallBack) {

    }
}

export class DIModule {
    static modules : ContainerModule[];

    static add(module: ContainerModule): void {
        DIModule.modules.push(module);
    }
};