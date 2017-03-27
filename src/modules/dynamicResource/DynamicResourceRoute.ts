/**  
 * @module dynamicResourceRoute  
 * @description Baasic Dynamic Resource Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Dynamic Resource Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { DynamicResourceACLRoute, DynamicSchemaRoute, TYPES as dynamicResourceTypes } from './';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class DynamicResourceRoute extends BaseRoute {

    public readonly findRoute: string = 'resources/{schemaName}/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'resources/{schemaName}/{id}/{?embed,fields}';

    public readonly createRoute: string = 'resources/{schemaName}';

    public readonly updateRoute: string = 'resources/{schemaName}/{id}/{?embed,fields}';

    public readonly patchRoute: string = 'resources/{schemaName}/{id}/{?embed,fields}';

    public readonly deleteRoute: string = 'resources/{schemaName}/{id}';
    
    get acl(): DynamicResourceACLRoute {
        return this.dynamicResourceACLRoute;
    }

    get dynamicSchema(): DynamicSchemaRoute {
        return this.dynamicSchemaRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(dynamicResourceTypes.DynamicResourceACLRoute) protected dynamicResourceACLRoute: DynamicResourceACLRoute,
        @inject(dynamicResourceTypes.DynamicSchemaRoute) protected dynamicSchemaRoute: DynamicSchemaRoute,
    ) { super(appOptions); }

    /** 				
     * Parses find route which can be expanded with additional options. Supported items are: 				
     * - `schemaName` - Name of the dynamic resource schema. 				
     * - `searchQuery` - A string referencing dynamic resource properties using the phrase or BQL (Baasic Query Language) search. 				
     * - `page` - A value used to set the page number, i.e. to retrieve certain dynamic resource subset from the storage. 				
     * - `rpp` - A value used to limit the size of result set per page. 				
     * - `sort` - A string used to set the dynamic resource property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method
     * @param options query resource options object      				
     * @example dynamicResourceRoute.find(options); 				
     **/
    find(schemaName: string, options: IOptions): any {
        return super.baseFind(this.findRoute, this.utility.extend({ schemaName: schemaName }, options));
    }

    /**                 
     * Parses get route which must be expanded with the name of the previously created dynamic resource schema in the system and the Id of the previously created dynamic resource. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @param id Unique identifier of dynamic resources
     * @param schemaName schema name
     * @param options query resource options object
     * @example dynamicResourceRoute.get(id, schemaName, options);               				
     **/
    get(id: string, schemaName: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, this.utility.extend({ schemaName: schemaName }, options));
    }

    create(schemaName: string, data: any): any {
        let params = this.modelMapper.getParams(schemaName, data, 'schemaName');
        return super.baseCreate(this.createRoute, params);
    }

    update(data: any, options: IOptions): any {
        return super.baseUpdate(this.updateRoute, data, options);
    }

    patch(data: any, options: IOptions): any {
        return super.baseUpdate(this.patchRoute, data, options, 'patch');
    }

    delete(data: any, options: IOptions): any {
        return super.baseDelete(this.deleteRoute, data, options);
    }

    createParams(schemaName: string, data: any): any {
        let params = this.modelMapper.getParams(schemaName, data, 'schemaName');
        return super.createParams(params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */