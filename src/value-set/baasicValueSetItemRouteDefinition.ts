/**  
 * @module baasicValueSetItemRouteDefinition
 * @description Baasic Value Set Item Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Value Set Item Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from '..';

export class BaasicValueSetItemRouteDefinition extends BaasicBaseRouteDefinition {
    
    /**
     * Parses find value set items route which can be expanded with additional options. Supported items are: 
     * - `setName` - Value set name.
     * - `searchQuery` - A string value used to identify value set items using the phrase search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain value set item subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the value set item property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @example baasicValueSetItemRouteDefinition.find.expand({searchQuery: '<search-phrase>'});
     **/ 				
    find(): any {
        return this.baasicUriTemplateProcessor.parse("value-sets/{setName}/items/{?searchQuery,page,rpp,sort,embed,fields}");
    }

    /**
     * Parses get route which must be expanded with the following items:
     * - `setName` - Value set name.
     * - `id` - Value set item id. 
     * @method
     * @example baasicValueSetItemRouteDefinition.get.expand({setName: '<value-set-name>', id: '<value-set-item-id>' });
     **/	
    get(): any {
        return this.baasicUriTemplateProcessor.parse("value-sets/{setName}/items/{id}/{?embed,fields}");
    }

    /**
     * Parses create value set item route; the URI template should be expanded with the value set name.
     * @method
     * @example baasicValueSetItemRouteDefinition.create.expand({});
     **/ 
    create(): any {
        return this.baasicUriTemplateProcessor.parse("value-sets/{setName}/items/");
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