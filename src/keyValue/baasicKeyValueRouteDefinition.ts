/* globals module */ 
/**  
 * @module baasicKeyValueRouteDefinition 
 * @description Baasic Key Value Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Key Value Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IKeyValue } from 'keyValue/contracts';
import { ModelMapper, Utility } from '..';

export class BaasicKeyValueRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        protected modelMapper: ModelMapper, 
        protected utility: Utility
    ) { super(modelMapper, utility); }

     /**                 
      * Parses find key value route which can be expanded with additional options. Supported items are:                 
      * - `searchQuery` - A string value used to identify key value resources using the phrase search.                 
      * - `page` - A value used to set the page number, i.e. to retrieve certain key value subset from the storage.                 
      * - `rpp` - A value used to limit the size of result set per page.                 
      * - `sort` - A string used to set the key value property to sort the result collection by. 				
      * - `embed` - Comma separated list of resources to be contained within the current representation.                 
      * @method
      * @param options Query resource options object.                        
      * @example baasicKeyValueRouteDefinition.find(options);                               
      **/
    find(options: IOptions): any {
        return super.baseFind('key-values/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get key value route which must be expanded with the Id of the previously created key value resource in the system.                 
     * @method
     * @param id Key value resource unique identifier.
     * @param options Query resource options object.                    
     * @example baasicKeyValueRouteDefinition.get();                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('key-values/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create key value route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicKeyValueRouteDefinition.create();                           
     **/
    create(): any {
        return super.baseCreate('key-values', {});
    }

    /**
     * Parses update key value route.
     * @method
     * @param data Key Value object used to create update route.
     * @example baasicKeyValueRouteDefinition.update(data);
     */
    update(data: IKeyValue): any {
        return super.baseUpdate('key-values/{id}', data);
    }

    /**
     * Parses delete key value route.
     * @method
     * @param data Key Value object used to create delete route.
     * @example baasicKeyValueRouteDefinition.delete(data);
     */
    delete(data: IKeyValue): any {
        return super.baseDelete('key-values/{id}', data);
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