import { injectable } from "inversify";

@injectable()
export class Utility {
    constructor() {

    }

    /**
     * Order an array by specified order type.
     * @param values of T type
     * @param orderType property name
     * @returns ordered array.
     */
    OrderByArray<T>(values: T[], orderType: any) {
        return values.sort((a, b) => {
            if (a[orderType] < b[orderType]) {
                return -1;
            }

            if (a[orderType] > b[orderType]) {
                return 1;
            }

            return 0
        });
    }

    /**
     * Checks if provided value is javascript object.
     * @param value any given value
     * @returns true if provided value is object, otherwise false.
     */
    isObject(value: any): boolean {
        return value !== null && typeof value === 'object';
    }

    isUndefined(value: any): boolean {
        return typeof value === 'undefined';
    }

    /**
     * Copies properties from source object to destination object.
     * @param dstObj destination object
     * @param srcObj source object
     * @returns destination object with new properties from source object.
     */
    extend(dstObj: any, ...srcObj: any[]): any {
        const newObj = dstObj;
        for (const obj of srcObj) {
            for (const key in obj) {
                //copy all the fields
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }

    /**
     * Copies properties from source object to destination object.
     * @param dstObj destination object
     * @param srcObj source object
     * @returns destination object with new properties from source object.
     */
    extendAs<destType>(dstObj: any, ...srcObj: any[]): destType {
        srcObj.unshift(dstObj)
        return <destType>this.extend.apply(this, srcObj);
    }
}