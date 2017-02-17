/**  
 * @module baasicDynamicResourceRouteDefinition  
 * @description Baasic Dynamic Resource Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Dynamic Resource Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { ModelMapper, Utility } from '..';

export class BaasicDynamicResourceRouteDefinition {

    constructor(
        protected utility: Utility,
        protected modelMapper: ModelMapper,
        protected baasicBaseRouteDefinition: BaasicBaseRouteDefinition) {}

    /** 				
     * Parses find route which can be expanded with additional options. Supported items are: 				
     * - `schemaName` - Name of the dynamic resource schema. 				
     * - `searchQuery` - A string referencing dynamic resource properties using the phrase or BQL (Baasic Query Language) search. 				
     * - `page` - A value used to set the page number, i.e. to retrieve certain dynamic resource subset from the storage. 				
     * - `rpp` - A value used to limit the size of result set per page. 				
     * - `sort` - A string used to set the dynamic resource property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicDynamicResourceRouteDefinition.find().expand({schemaName: '<schema-name>', searchQuery: '<search-phrase>' }); 				
     **/
    find(options: IOptions): any {
        return this.baasicBaseRouteDefinition.find('resources/{schemaName}/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route which must be expanded with the name of the previously created dynamic resource schema in the system and the Id of the previously created dynamic resource. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation. 				
     * @method      				
     * @example baasicDynamicResourceRouteDefinition.get().expand({ schemaName: '<schema-name>', id: '<schema-id>' });               				
     **/
    get(id: string, schemaName: string, options: IOptions): any {
        return this.baasicBaseRouteDefinition.get('resources/{schemaName}/{id}/{?embed,fields}', id, options, this.utility.extend({ schemaName: schemaName }, options));
    }
			
    // getParams??
    create(schemaName: string, data: any): any {
        let params = this.modelMapper.getParams(schemaName, data, 'schemaName');
        return this.baasicBaseRouteDefinition.create('resources/{schemaName}', params);
    }
	
    update(data: any, options: IOptions): any {
        let opt = this.utility.extend({}, options); // ??
        let params = this.modelMapper.updateParams(data);
        if ('HAL') {
            return this.baasicBaseRouteDefinition.parse(params[this.baasicConstants.modelPropertyName].links('put').href).expand(opt);
        } else {
            return this.baasicBaseRouteDefinition.parse('resources/{schemaName}/{id}').expand(opt);
        }
    }

    patch(data: any, options: IOptions): any {
        let opt = this.utility.extend({}, options);
        let params = this.modelMapper.updateParams(data);
        if ('HAL') {
            return this.baasicBaseRouteDefinition.parse(params[this.baasicConstants.modelPropertyName].links('patch').href).expand(opt);
        } else {
            return this.baasicBaseRouteDefinition.parse('resources/{schemaName}/{id}').expand(opt);
        }
    }

    delete(data: any, options: IOptions): any {
        let opt = this.utility.extend({}, options);
        let params = this.modelMapper.removeParams(data);
        if ('HAL') {
            return this.baasicBaseRouteDefinition.parse(params[baasicConstants.modelPropertyName].links('delete').href).expand(opt);
        } else {
            return this.baasicBaseRouteDefinition.parse('resources/{schemaName}/{id}').expand(opt);
        }
    }
}