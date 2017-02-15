/**  
 * @module baasicValueSetItemRouteDefinition
 * @description Baasic Value Set Item Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Value Set Item Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from '..';

export class BaasicValueSetItemRouteDefinition extends BaasicBaseRouteDefinition {
    
    protected findRouteURI(): string {
        return "value-sets/{setName}/items/{?searchQuery,page,rpp,sort,embed,fields}";
    }

    protected getRouteURI(): string {
        return "value-sets/{setName}/items/{id}/{?embed,fields}";
    }

    protected createRouteURI(): string {
        return "value-sets/{setName}/items/";
    }

    protected updateRouteURI(): string {
        return "value-sets/{setId}/items/{id}";
    }

    protected deleteRouteURI(): string {
        return "value-sets/{setId}/items/{id}";
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