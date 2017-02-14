export class Utility {

    /**
     * Checks if provided value is javascript object.
     * @param value any given value
     * @returns true if provided value is object, otherwise false.
     */
    isObject(value: any): boolean {
        return value !== null && typeof value === 'object';
    }

    /**
     * Copies properties from source object to destination object.
     * @param dstObj destination object
     * @param srcObj source object
     * @returns destination object with new properties from source object.
     */
    extend(dstObj: any, srcObj: any): any {
        if(!this.isObject(dstObj) || !this.isObject(srcObj) { return; }
        for (let key in srcObj) {
            dstObj[key] = srcObj[key];
        }
        return dstObj;
    }
}