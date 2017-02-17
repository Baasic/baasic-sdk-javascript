/* globals module */ 
/**  
 * @module baasicKeyValueRouteDefinition 
 * @description Baasic Key Value Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Key Value Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { ModelMapper, Utility } from '..';

export class BaasicKeyValueRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(protected modelMapper: ModelMapper, protected utility: Utility) { super(modelMapper, utility); }

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
        return super.find('key-values/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get key value route which must be expanded with the Id of the previously created key value resource in the system.                 
     * @method                        
     * @example baasicKeyValueRouteDefinition.get().expand({id: '<key-value-id>'});                               
     **/
    get(id: string, options: IOptions): any {
        return super.get('key-values/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create key value route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicKeyValueRouteDefinition.create().expand({});                              
     **/
    create(): any {
        return super.create('key-values');
    }

    /**
     * Parses update key value route.
     * @method
     */
    update(data: any): any {
        return super.update('key-values/{id}', data);
    }

    /**
     * Parses delete key value route.
     * @method
     */
    delete(data: any): any {
        return super.delete('key-values/{id}', data);
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