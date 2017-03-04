/**  
 * @module baasicDynamicResourceRouteDefinition  
 * @description Baasic Dynamic Resource Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Dynamic Resource Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { BaasicDynamicResourceACLRouteDefinition, TYPES as dynamicResourceTypes } from 'modules/dynamicResource';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class BaasicDynamicResourceRouteDefinition extends BaasicBaseRouteDefinition {

    get acl(): BaasicDynamicResourceACLRouteDefinition {
        return this.baasicDynamicResourceACLRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(dynamicResourceTypes.BaasicDynamicResourceACLRouteDefinition) protected baasicDynamicResourceACLRouteDefinition: BaasicDynamicResourceACLRouteDefinition
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
     * @example baasicDynamicResourceRouteDefinition.find(options); 				
     **/
    find(schemaName: string, options: IOptions): any {
        return super.baseFind('resources/{schemaName}/{?searchQuery,page,rpp,sort,embed,fields}', this.utility.extend({ schemaName: schemaName }, options));
    }

    /**                 
     * Parses get route which must be expanded with the name of the previously created dynamic resource schema in the system and the Id of the previously created dynamic resource. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @param id Unique identifier of dynamic resources
     * @param schemaName schema name
     * @param options query resource options object
     * @example baasicDynamicResourceRouteDefinition.get(id, schemaName, options);               				
     **/
    get(id: string, schemaName: string, options: IOptions): any {
        return super.baseGet('resources/{schemaName}/{id}/{?embed,fields}', id, this.utility.extend({ schemaName: schemaName }, options));
    }

    create(schemaName: string, data: any): any {
        let params = this.modelMapper.getParams(schemaName, data, 'schemaName');
        return super.baseCreate('resources/{schemaName}', params);
    }

    update(data: any, options: IOptions): any {
        return super.baseUpdate('resources/{schemaName}/{id}/{?embed,fields}', data, options);
    }

    patch(data: any, options: IOptions): any {
        return super.baseUpdate('resources/{schemaName}/{id}/{?embed,fields}', data, options, 'patch');
    }

    delete(data: any, options: IOptions): any {
        return super.baseDelete('resources/{schemaName}/{id}', data, options);
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