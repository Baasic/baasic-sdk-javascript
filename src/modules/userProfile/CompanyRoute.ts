/* globals module */
/**  
 * @module companyRoute  
 * @description Baasic Company Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Company Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { CompanyBatchRoute, TYPES as userProfileTypes } from './';
import { ICompany } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

export class CompanyRoute extends BaseRoute {

    public readonly findRoute: string = 'lookups/companies/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly createRoute: string = 'lookups/companies';

    public readonly getRoute: string = 'lookups/companies/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'lookups/companies/{id}';

    public readonly deleteRoute: string = 'lookups/companies/{id}';

    get batch(): CompanyBatchRoute {
        return this.companyBatchRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(userProfileTypes.CompanyBatchRoute) protected companyBatchRoute: CompanyBatchRoute
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing company properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain company subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the company property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.       
     * @example companyRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method                        
     * @example companyRoute.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id Company id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example companyRoute.get();                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    update(data: ICompany): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    delete(data: ICompany): any {
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