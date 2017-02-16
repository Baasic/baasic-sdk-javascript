/* globals module */ 
/**  
 * @module baasicRoleRouteDefinition  
 * @description Baasic Role Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Role Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition } from 'common';

export class BaasicRoleRouteDefinition {

    constructor(private baasicBaseRouteDefinition: BaasicBaseRouteDefinition) {}

    /**                 
     * Parses find role route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify role resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain role subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the role property to sort the result collection by.                 
     * @method                        
     * @example baasicRoleRouteDefinition.find().expand({searchQuery: '<search-phrase>'});                               
     **/
    find(): any {
        return this.baasicBaseRouteDefinition.find('lookups/roles/{?searchQuery,page,rpp,sort,embed,fields}');
    }

    /**                 
     * Parses get role route which should be expanded with the role Id. Note that the role Id is the primary key of the role.                 
     * @method                        
     * @example baasicRoleRouteDefinition.get().expand({id: '<role-id>'});                               
     **/ 
    get(): any {
        return this.baasicBaseRouteDefinition.get('lookups/roles/{id}/{?embed,fields}');
    }

    /**                 
     * Parses create role route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicRoleRouteDefinition.create().expand({});                               
     **/   				
    create(): any {
        return this.baasicBaseRouteDefinition.create('lookups/roles');
    }

    /**
     * Parses update role route.
     * @method
     */
    update(params: any): any {
        return this.baasicBaseRouteDefinition.update('lookups/roles/{id}', params);
    }

    /**
     * Parses delete role route.
     * @method
     */
    delete(params: any): any {
        return this.baasicBaseRouteDefinition.delete('lookups/roles/{id}', params);
    }

    parse(link: string): any {
        return this.baasicBaseRouteDefinition.parse(link);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/