export class Utility
{
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