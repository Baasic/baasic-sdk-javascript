/*global module */ 
/**  
 * @module baasicTemplatingRouteDefinition  
 * @description Baasic Templating Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Templating Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper } from 'common';
import { IOptions } from 'common/contracts';
import { ITemplate } from 'modules/templating/contracts';

export class BaasicTemplatingRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(protected modelMapper: ModelMapper) { super(modelMapper); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify template resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain template subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.               
     * - `sort` - A string used to set the template property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options.                        
     * @example baasicTemplatingRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind('templates/{?searchQuery,page,rpp,sort,embed,fields,moduleNames}', options);
    }

    /**                 
     * Parses get route which must be expanded with the Id of the previously created template resource in the system.                 
     * @method
     * @param id Template id which uniquely identifies Template resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example baasicTemplatingRouteDefinition.get({id: '<template-id>'});                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('templates/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicTemplatingRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate('templates', {});
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data An template object used to update specified Template resource.                        
     * @example baasicTemplatingRouteDefinition.update(data);                              
     **/
    update(data: ITemplate): any {
        return super.baseUpdate('templates/{id}', data)
    }

    /**                 
     * Parses delete route; this URI template does not expose any additional options.                 
     * @method
     * @param data An template object used to delete specified Template resource.                        
     * @example baasicTemplatingRouteDefinition.update(data);                              
     **/
    delete(data: ITemplate): any {
        return super.baseDelete('templates/{id}', data);
    }
}