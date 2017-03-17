/* globals module */
/**  
 * @module roleRouteDefinition  
 * @description Baasic Role Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Role Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { IRole } from 'modules/membership/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class RoleRouteDefinition extends BaseRouteDefinition {


    /**                  
    * Find route with route and query parameters.
    **/
    public findRoute: string = 'lookups/roles/{?searchQuery,page,rpp,sort,embed,fields}';
    /**                  
    * Get route with route and query parameters.
    **/
    public getRoute: string = 'lookups/roles/{id}/{?embed,fields}';
    /**                  
    * Create route with route and query parameters.
    **/
    public createRoute: string = 'lookups/roles';
    /**                  
    * Update route with route and query parameters.
    **/
    public updateRoute: string = 'lookups/roles/{id}';
    /**                  
    * Remove route with route and query parameters.
    **/
    public removeRoute: string = 'lookups/roles/{id}';


    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                 
     * Parses find role route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify role resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain role subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the role property to sort the result collection by.                 
     * @method
     * @param options Query resource options object.                        
     * @example roleRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get role route which should be expanded with the role Id. Note that the role Id is the primary key of the role.                 
     * @method
     * @param id Role unique indentifer.
     * @param options Query resource options object.                        
     * @example roleRouteDefinition.get().expand({id: '<role-id>'});                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create role route; this URI template does not expose any additional options.                 
     * @method                        
     * @example roleRouteDefinition.create();                               
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update role route.
     * @method
     * @param data A role object used to update specified role resource.
     * @example roleRouteDefinition.update(data);
     */
    update(data: IRole): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete role route.
     * @method
     * @param data A role object used to delete specified role resource.
     * @example roleRouteDefinition.delete(data);
     */
    delete(data: IRole): any {
        return super.baseDelete(this.removeRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
*/