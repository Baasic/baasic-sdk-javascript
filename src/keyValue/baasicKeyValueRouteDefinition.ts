/* globals module */ 
/**  
 * @module baasicKeyValueRouteDefinition 
 * @description Baasic Key Value Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Key Value Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from '..';

export class BaasicKeyValueRouteDefinition extends BaasicBaseRouteDefinition {
    
    protected readonly CreateRouteURI: string = "key-values";
    protected readonly GetRouteURI: string = "key-values/{id}/{?embed,fields}";
    protected readonly FindRouteURI: string = "key-values/{?searchQuery,page,rpp,sort,embed,fields}";
    protected readonly UpdateRouteURI: string = "key-values/{id}";
    protected readonly DeleteRouteURI: string = "key-values/{id}";
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