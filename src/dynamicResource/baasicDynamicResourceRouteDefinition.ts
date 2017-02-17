/**  
 * @module baasicDynamicResourceRouteDefinition  
 * @description Baasic Dynamic Resource Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Dynamic Resource Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { BaasicDynamicResourceACLRouteDefinition } from 'dynamicResource/contracts';
import { ModelMapper, Utility } from '..';

export class BaasicDynamicResourceRouteDefinition extends BaasicBaseRouteDefinition {

    get acl(): BaasicDynamicResourceACLRouteDefinition {
        return this.baasicDynamicResourceACLRouteDefinition;
    }
    
    constructor(
        protected utility: Utility,
        protected modelMapper: ModelMapper,
        protected baasicDynamicResourceACLRouteDefinition: BaasicDynamicResourceACLRouteDefinition
    ) { super(modelMapper, utility); }

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
    find(options: IOptions): any {
        return super.find('resources/{schemaName}/{?searchQuery,page,rpp,sort,embed,fields}', options);
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
        return super.get('resources/{schemaName}/{id}/{?embed,fields}', id, options, this.utility.extend({ schemaName: schemaName }, options));
    }
			
    create(schemaName: string, data: any): any {
        let params = this.modelMapper.getParams(schemaName, data, 'schemaName');
        return super.create('resources/{schemaName}', params);
    }
	
    update(data: any, options: IOptions): any {
        return super.update('resources/{schemaName}/{id}/{?embed,fields}', data, options);
    }

    patch(data: any, options: IOptions): any {
        let opt = this.utility.extend({}, options);
        let params = this.modelMapper.updateParams(data);
        if ('HAL') {
            return super.parse(params[this.baasicConstants.modelPropertyName].links('patch').href).expand(opt);
        } else {
            return super.parse('resources/{schemaName}/{id}/{?embed,fields}').expand(opt);
        }
    }

    delete(data: any, options: IOptions): any {
        return super.delete('resources/{schemaName}/{id}', data, options);
    }
}