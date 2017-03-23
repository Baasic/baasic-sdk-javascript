/* globals module */
/**  
 * @module commerceCustomerRoute  
 * @description Baasic Commerce Customer Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Commerce Customer Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class CommerceCustomerRoute extends BaseRoute {

    public readonly findRoute: string = 'commerce/customers/{systemName}/{?customerId,searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'commerce/customers/{systemName}/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'commerce/customers/{systemName}/{id}';

    public readonly deleteRoute: string = 'commerce/customers/{systemName}/{id}';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                 
     * Parses find commerce customers route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify commerce resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain commerce subset from the storage.                
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the commerce property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example commerceCustomerRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return this.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceCustomerRoute.get(id, options);                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return this.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses update route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceCustomerRoute.update(data);                               
     **/
    update(data: any): any {
        return this.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceCustomerRoute.delete(data);                               
     **/
    delete(data: any): any {
        return this.baseDelete(this.deleteRoute, data);
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