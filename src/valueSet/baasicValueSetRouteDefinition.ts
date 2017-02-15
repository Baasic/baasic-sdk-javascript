/**  
 * @module baasicValueSetRouteDefinition
 * @description Baasic Value Set Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Value Set Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from '..';
import { BaasicValueSetItemRouteDefinition } from 'valueSet';

export class BaasicValueSetRouteDefinition extends BaasicBaseRouteDefinition {

    protected findRouteURI(): string {
        return "value-sets/{?searchQuery,page,rpp,sort,embed,fields}";
    }

    protected getRouteURI(): string {
        return "value-sets/{setName}/{?embed,fields}";
    }

    protected createRouteURI(): string {
        return "value-sets";
    }

    protected updateRouteURI(): string {
        return "value-sets/{id}";
    }

    protected deleteRouteURI(): string {
        return "value-sets/{id}";
    }
    
    public readonly items: BaasicValueSetItemRouteDefinition = new BaasicValueSetItemRouteDefinition();
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