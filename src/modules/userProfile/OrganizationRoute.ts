/* globals module */
/**  
 * @module organizationRoute  
 * @description Baasic Organization Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Organization Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { OrganizationBatchRoute, TYPES as userProfileTypes } from 'modules/userProfile';
import { IOrganization } from 'modules/userProfile/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class OrganizationRoute extends BaseRoute {

    public readonly findRoute: string = 'lookups/organizations/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'lookups/organizations/{id}/{?embed,fields}';

    public readonly createRoute: string = 'lookups/organizations';

    public readonly updateRoute: string = 'lookups/organizations/{id}';

    public readonly deleteRoute: string = 'lookups/organizations/{id}';

    get batch(): OrganizationBatchRoute {
        return this.organizationBatchRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(userProfileTypes.OrganizationBatchRoute) protected organizationBatchRoute: OrganizationBatchRoute
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing organization properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain organization subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the organization property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example organizationRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id Organization id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example organizationRoute.get(id, options);                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method                        
     * @example organizationRoute.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data An organization object used to update specified organization resource.                        
     * @example organizationRoute.updata(data);                              
     **/
    update(data: IOrganization): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete route; this URI template does not expose any additional options.                 
     * @method
     * @param data An organization object used to delete specified organization resource.                        
     * @example organizationRoute.delete(data);                              
     **/
    delete(data: IOrganization): any {
        return super.baseDelete(this.deleteRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */