import { IStorageHandler } from 'core/contracts';
import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class LocalStorageHandler implements IStorageHandler {

    constructor(
    ) {
        if (!localStorage) {
            throw new Error("Local storage not found.");
        }
    }

    clear(): void {
        localStorage.clear();
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }

    set(key: string, data: any): void {
        localStorage.setItem(key, data);
    }

    get(key: string): any {
        return localStorage.getItem(key);
    }
};