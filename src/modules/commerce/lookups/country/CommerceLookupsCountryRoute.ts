/* globals module */
/**  
 * @module commerceLookupsCountryRoute  
 * @description Baasic Commerce Lookups Country Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Commerce Lookups Country Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../../common';
import { IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { CommerceLookupsCountryBatchRoute, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class CommerceLookupsCountryRoute extends BaseRoute {

    public readonly findRoute: string = 'commerce/lookups/countries/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'commerce/lookups/countries/{id}/{?embed,fields}';

    public readonly createRoute: string = 'commerce/lookups/countries';

    public readonly updateRoute: string = 'commerce/lookups/countries/{id}';

    public readonly deleteRoute: string = 'commerce/lookups/countries/{id}';

    get batch(): CommerceLookupsCountryBatchRoute {
        return this.commerceCountryBatchRoute;
    }

    constructor(
        @inject(commerceTypes.CommerceLookupsCountryBatchRoute) protected commerceCountryBatchRoute: CommerceLookupsCountryBatchRoute,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                 
     * Parses find commerce country route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify commerce resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain commerce subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the commerce property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example commerceLookupsCountryRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceLookupsCountryRoute.get();                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create commerce country route; this URI template does not expose any additional options.                 
     * @method                        
     * @example commerceLookupsCountryRoute.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                 
    * Parses update commerce country route; this URI template does not expose any additional options.                 
    * @method                        
    * @example commerceLookupsCountryRoute.update(data);                              
    **/
    update(data: any): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
    * Parses delete commerce country route; this URI template does not expose any additional options.                 
    * @method                        
    * @example commerceLookupsCountryRoute.delete(data);                              
    **/
    delete(data: any): any {
        return super.baseDelete(this.deleteRoute, data);
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