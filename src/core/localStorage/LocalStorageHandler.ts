import { IStorageHandler, IDefaultStorageConfig, TYPES } from 'core/contracts';
import { injectable, inject, optional } from "inversify";
import 'reflect-metadata';

@injectable()
export class LocalStorageHandler implements IStorageHandler {

    constructor(
        @inject(TYPES.IDefaultStorageConfig) @optional() config: IDefaultStorageConfig 
    ) {
        config = config || {};
        if (!localStorage) {
            throw new Error("Local storage not found.");
        }
        let parseKey = config.keyGenerator;
        let getHandler: (fn: Function) => any;
        if (parseKey) {
            getHandler = function (fn) { arguments[0] = parseKey(arguments[0]); fn.apply(this, arguments); }
        } else {
            getHandler = (fn) => fn;
            
        }
        this.clear = localStorage.clear;
        this.remove = getHandler(localStorage.removeItem);
        this.set = getHandler(this.setItem);
        this.get = getHandler(this.getItem);
    }

    clear: () => void;

    remove: (key: string) => void;

    set: (key: string, data: any) => void;

    get: (key: string) => any;

    private getItem(key:string) : any {
        return JSON.parse(localStorage.getItem(key));
    }

    private setItem(key:string, data:any) {
        localStorage.setItem(key, JSON.stringify(data));
    }
};