/* globals module */ 
/**  
 * @module baasicKeyValueRouteDefinition 
 * @description Baasic Key Value Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Key Value Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from '..';

export class BaasicKeyValueRouteDefinition extends BaasicBaseRouteDefinition {
    /**                
     * Parses find key value route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify key value resources using the phrase search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain key value subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the key value property to sort the result collection by. 
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @returns key value query resources uri with search params
     * @method
     * @example baasicKeyValueRouteDefinition.find().expand({searchQuery: '<search-phrase>'});
     **/
    find(): any {
        return this.baasicUriTemplateProcessor.parse("key-values/{?searchQuery,page,rpp,sort,embed,fields}");
    }

     /**
      * Parses get key value route which must be expanded with the Id of the previously created key value resource in the system.
      * @returns key value get resource uri
      * @method 
      * @example baasicKeyValueRouteDefinition.get().expand({id: '<key-value-id>'});
      **/   	
    get(): any {
        return this.baasicUriTemplateProcessor.parse("key-values/{id}/{?embed,fields}");
    }

    /**
     * Parses create key value route; this URI template does not expose any additional options.
     * @returns key value create new resource uri
     * @method
     * @example baasicKeyValueRouteDefinition.create().expand({});
     **/  	
    create(): any {
        return this.baasicUriTemplateProcessor.parse("key-values");
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