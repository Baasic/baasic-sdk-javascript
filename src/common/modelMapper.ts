/**
 * @module modelMapper  
 * @description This service is used to perform low level model or option transformations before they are sent to the Baasic back-end.
 **/

import { IOptions } from './contracts';
import { Utility } from './';

export class ModelMapper {

    public idPropertyName: string = 'id';
    public modelPropertyName: string = 'model';

    private utility: Utility;

    constructor() {
        this.utility = new Utility();
    }

    private FindParams(options?: IOptions): any {
        let object: any = {};
        if (this.utility.isObject(options)) {
            this.utility.extend(object, options);
            if (options.orderBy && options.orderDirection) {
                const orderByParams = options.orderBy.split(',');
                const orderDirectionParams = options.orderDirection.split(',');
                if (orderByParams.length === orderDirectionParams.length) {
                    object.sort = orderByParams.map((item, index) => {
                        return `${item}|${orderDirectionParams[index]}`;
                    }).join(', ');
                }                
            }
            if (options.hasOwnProperty('search')) {
                object.searchQuery = options.search;
            }
            if (options.hasOwnProperty('pageNumber')) {
                object.page = options.pageNumber;
            }
            if (options.hasOwnProperty('pageSize')) {
                object.rpp = options.pageSize;
            }
        } else {
            object.searchQuery = options;
        }

        return object;
    }

    private KeyParams(id: any, options?: IOptions, propName?: any): any {
        let object: any = {};
        if (this.utility.isObject(id)) {
            this.utility.extend(object, id);
        } else {
            if (propName !== undefined) {
                object[propName] = id;
            } else {
                object[this.idPropertyName] = id;
            }
        }
        if (options !== undefined && this.utility.isObject(options)) {
            this.utility.extend(object, options);
        }

        return object;
    }

    private ModelParams(data: any): any {
        let object: any = {};
        if (data && data.hasOwnProperty(this.modelPropertyName)) {
            this.utility.extend(object, data);
        } else {
            object[this.modelPropertyName] = data;
        }

        return object;
    }

    /**                 
     * Parses Baasic Api pagination, sorting and search parameters.
     * @param options query resources options object                 
     * @method                        
     * @example modelMapper.findParams({ pageNumber:1, pageSize:10 });
     **/
    findParams(options?: any): any {
        return this.FindParams(options);
    }

    /**
     * Parses specified key parameters; initial object can be expanded with additional parameters.
     * @param id Resources unique identifier
     * @param options query resources options object
     * @param propName property name
     * @method
     * @example modelMapper.getParams(('<value>', {additionalOptions: '<option>'},'<property-name>'));
     **/
    getParams(id: any, options?: any, propName?: any) {
        return this.KeyParams(id, options, propName);
    }

    /**
     * Performs create resource transforms on an object so that it can be safely expanded with additional properties.
     * @param data data object
     * @method
     * @example modelMapper.createParams({});
     **/
    createParams(data: any) {
        return this.ModelParams(data);
    }

    /**
     * Performs update resource transforms on transforms an object so that it can be safely expanded with additional properties.
     * @param data data object
     * @method
     * @example modelMapper.updateParams({});
     **/
    updateParams(data: any) {
        return this.ModelParams(data);
    }

    /**
     * Performs remove resource transforms on transforms an object so that it can be safely expanded with additional properties.
     * @param data data object
     * @method 
     * @example modelMapper.removeParams({});
     **/
    removeParams(data: any) {
        return this.ModelParams(data);
    }

        /**
     * Performs remove resource transforms on transforms an object so that it can be safely expanded with additional properties.
     * @param data data object
     * @method 
     * @example modelMapper.batchRemoveParams({});
     **/
    batchRemoveParams(data: any[]) {
        let items: string[] = [];
        data.forEach((item) => { 
            if (this.utility.isObject(item)) {
                items.push(item[this.idPropertyName]);
            }
        });

        return items;
    }
}