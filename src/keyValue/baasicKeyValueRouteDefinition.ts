/* globals module */ 
/**  
 * @module baasicKeyValueRouteDefinition 
 * @description Baasic Key Value Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Key Value Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';

export class BaasicKeyValueRouteDefinition {

    constructor(protected baasicBaseRouteDefinition: BaasicBaseRouteDefinition) {}

     /**                 
      * Parses find key value route which can be expanded with additional options. Supported items are:                 
      * - `searchQuery` - A string value used to identify key value resources using the phrase search.                 
      * - `page` - A value used to set the page number, i.e. to retrieve certain key value subset from the storage.                 
      * - `rpp` - A value used to limit the size of result set per page.                 
      * - `sort` - A string used to set the key value property to sort the result collection by. 				
      * - `embed` - Comma separated list of resources to be contained within the current representation.                 
      * @method                        
      * @example baasicKeyValueRouteDefinition.find().expand({searchQuery: '<search-phrase>'});                               
      **/
    find(options: IOptions): any {
        return this.baasicBaseRouteDefinition.find('key-values/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get key value route which must be expanded with the Id of the previously created key value resource in the system.                 
     * @method                        
     * @example baasicKeyValueRouteDefinition.get().expand({id: '<key-value-id>'});                               
     **/
    get(id: string, options: IOptions): any {
        return this.baasicBaseRouteDefinition.get('key-values/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create key value route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicKeyValueRouteDefinition.create().expand({});                              
     **/
    create(): any {
        return this.baasicBaseRouteDefinition.create('key-values');
    }

    /**
     * Parses update key value route.
     * @method
     */
    update(params: any): any {
        return this.baasicBaseRouteDefinition.update('key-values/{id}', params);
    }

    /**
     * Parses delete key value route.
     * @method
     */
    delete(params: any): any {
        return this.baasicBaseRouteDefinition.delete('key-values/{id}', params);
    }

    createParams(data: any): any {
        return this.baasicBaseRouteDefinition.createParams(data);
    }

    updateParams(params: any): any {
        return this.baasicBaseRouteDefinition.updateParams(params);
    }

    deleteParams(params: any): any {
        return this.baasicBaseRouteDefinition.deleteParams(params);
    }

    /**                 
     * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.                 
     * @method                 
     * @example baasicKeyValueRouteDefinition.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});                 
     **/
    parse(route: string): any {
        return this.baasicBaseRouteDefinition.parse(route);
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd 
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */