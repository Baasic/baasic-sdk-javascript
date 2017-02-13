/* globals module */
/**
 * @module modelMapper  
 * @description This service is used to perform low level model or option transformations before they are sent to the Baasic back-end.
 **/

export class ModelMapper {
    private FindParams(options: any): any {
        let object;
        if (angular.isObject(options)) {
            angular.extend(object, options);
            if(options.hasOwnProperty('orderBy') && options.hasOwnProperty('orderDirection')) {
                object.sort = options.orderBy ? options.orderby + '|' + options.orderDirection : null;
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

    private KeyParams(id: any, options: any, propName: any): any {
        let object;
        if (angular.isObject(id)) {
            angular.extend(this, id);
        } else {
            if (propName !== undefined) {
                object[propName] = id;
            } else {
                object[baasicConstants.idPropertyName] = id;
            }
        }
        if (options !== undefined && angular.isObject(options)) {
            angular.extend(this, options);
        }

        return object;
    }

    private ModelParams(data: any): any {
        let object;
        if (data.hasOwnProperty(baasicConstants.modelPropertyName)) {
            angular.extend(this, data);
        } else {
            object[baasicConstants.modelPropertyName] = data;
        }

        return object;
    }

    /**                 
     * Parses Baasic Api pagination, sorting and search parameters.
     * @param options query resources options object                 
     * @method                        
     * @example modelMapper.findParams({ pageNumber:1, pageSize:10 });
     **/     
    findParams(options: any): any {
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
    getParams(id: string, options: any, propName?: any) {
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
}