/* globals module */
/**  
 * @module baasicRoleRouteDefinition  
 * @description Baasic Role Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Role Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { IRole } from 'modules/membership/contracts';

@injectable()
export class BaasicRoleRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper) { super(modelMapper); }

    /**                 
     * Parses find role route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify role resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain role subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the role property to sort the result collection by.                 
     * @method
     * @param options Query resource options object.                        
     * @example baasicRoleRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options: IOptions): any {
        return super.baseFind('lookups/roles/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get role route which should be expanded with the role Id. Note that the role Id is the primary key of the role.                 
     * @method
     * @param id Role unique indentifer.
     * @param options Query resource options object.                        
     * @example baasicRoleRouteDefinition.get().expand({id: '<role-id>'});                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('lookups/roles/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create role route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicRoleRouteDefinition.create();                               
     **/
    create(): any {
        return super.baseCreate('lookups/roles', {});
    }

    /**
     * Parses update role route.
     * @method
     * @param data A role object used to update specified role resource.
     * @example baasicRoleRouteDefinition.update(data);
     */
    update(data: IRole): any {
        return super.baseUpdate('lookups/roles/{id}', data);
    }

    /**
     * Parses delete role route.
     * @method
     * @param data A role object used to delete specified role resource.
     * @example baasicRoleRouteDefinition.delete(data);
     */
    delete(data: IRole): any {
        return super.baseDelete('lookups/roles/{id}', data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
*/