/* globals module */
/**  
 * @module baasicOrganizationRouteDefinition  
 * @description Baasic Organization Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Organization Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { BaasicOrganizationBatchRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { IOrganization } from 'modules/userProfile/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class BaasicOrganizationRouteDefinition extends BaasicBaseRouteDefinition {

    get batch(): BaasicOrganizationBatchRouteDefinition {
        return this.baasicOrganizationBatchRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(userProfileTypes.BaasicOrganizationBatchRouteDefinition) protected baasicOrganizationBatchRouteDefinition: BaasicOrganizationBatchRouteDefinition
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
     * @example baasicOrganizationRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind('lookups/organizations/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id Organization id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example baasicOrganizationRouteDefinition.get(id, options);                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('lookups/organizations/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicOrganizationRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate('lookups/organizations', {});
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data An organization object used to update specified organization resource.                        
     * @example baasicOrganizationRouteDefinition.updata(data);                              
     **/
    update(data: IOrganization): any {
        return super.baseUpdate('lookups/organizations/{id}', data);
    }

    /**                 
     * Parses delete route; this URI template does not expose any additional options.                 
     * @method
     * @param data An organization object used to delete specified organization resource.                        
     * @example baasicOrganizationRouteDefinition.delete(data);                              
     **/
    delete(data: IOrganization): any {
        return super.baseDelete('lookups/organizations/{id}', data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */