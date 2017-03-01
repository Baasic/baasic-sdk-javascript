export interface IStorageHandler {
    clear(): void;
    remove(key: string): void;
    set(key: string, data: any): void;
    get(key: string): any;
}