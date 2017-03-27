/**  
 * @module dynamicSchemaRoute  
 * @description Baasic Dynamic Schema Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Dynamic Schema Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IResourceSchema } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class DynamicSchemaRoute extends BaseRoute {

    public readonly findRoute: string = 'schemas/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'schemas/{name}/{?embed,fields}';

    public readonly generateRoute: string = 'schemas/generate';

    public readonly createRoute: string = 'schemas';

    public readonly updateRoute: string = 'schemas/{id}';

    public readonly deleteRoute: string = 'schemas/{id}';
    
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /** 				
     * Parses find route which can be expanded with additional options. Supported items are: 				
     * - `searchQuery` - A string referencing dynamic resource schema properties using the phrase or BQL (Baasic Query Language) search. 				
     * - `page` - A value used to set the page number, i.e. to retrieve certain dynamic resource schema subset from the storage. 				
     * - `rpp` - A value used to limit the size of result set per page. 				
     * - `sort` - A string used to set the dynamic resource schema property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example dynamicSchemaRoute.find({searchQuery: '<search-phrase>'});               				
     **/
    find(options: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route which must be expanded with name of the previously created dynamic resource schema. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example dynamicSchemaRoute.find({name: '<schema-name>'});
     **/
    get(name: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, this.modelMapper.getParams(name, options, 'name'));
    }

    /** 				
     * Parses create route; this URI template doesn't expose any additional properties. 				
     * @method      				
     * @example dynamicSchemaRoute.generate();              				
     **/
    generate(): any {
        return super.baseCreate(this.generateRoute, {});
    }

    /** 				
     * Parses create route; this URI template doesn't expose any additional properties. 		
     * @method      				
     * @example dynamicSchemaRoute.create(data);              				
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update route.
     * @method
     * @param data A dynamic schema object used to update specified dynamic resource schema.
     * @example dynamicSchemaRoute.update(data);
     */
    update(data: IResourceSchema): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete route.
     * @method
     * @param data A dynamic schema object used to delete specified dynamic resource schema.   
     */
    delete(data: IResourceSchema): any {
        return super.baseDelete(this.deleteRoute, data);
    }
}

/**
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */