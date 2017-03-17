/* globals module */
/**  
 * @module commerceInvoiceRouteDefinition  
 * @description Baasic Commerce Invoice Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Commerce Invoice Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { CommerceInvoiceStreamsRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class CommerceInvoiceRouteDefinition extends BaseRouteDefinition {

    public readonly findRoute: string = 'commerce/invoices/{?customerId,invoiceStatusId,subscriptionId,dateCreatedMin,dateCreatedMax,searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'commerce/invoices/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'commerce/invoices/{id}';

    public readonly deleteRoute: string = 'commerce/invoices/{id}';

    get streams(): CommerceInvoiceStreamsRouteDefinition {
        return this.commerceInvoiceStreamsRouteDefinition;
    }

    constructor(
        @inject(commerceTypes.CommerceInvoiceStreamsRouteDefinition) protected commerceInvoiceStreamsRouteDefinition: CommerceInvoiceStreamsRouteDefinition,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                 
     * Parses find commerce invoice route which can be expanded with additional options. Supported items are:                 
     * - `customerId` - The customer identifier.                 
     * - `invoiceStatusId` - A invoice status unique identifier.                 
     * - `subscriptionId` - A subscription unique identifier.                 
     * - `dateCreatedMin` - A date created minimum date filter.                 
     * - `dateCreatedMax` - A date created maximum date filter.                 
     * - `searchQuery` - A string value used to identify commerce resources using the phrase search.                
     * - `page` - A value used to set the page number, i.e. to retrieve certain commerce subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                
     * - `sort` - A string used to set the commerce property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example commerceInvoiceRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceInvoiceRouteDefinition.get(id, options);                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses update route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceInvoiceRouteDefinition.update(data);                               
     **/
    update(data: any): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceInvoiceRouteDefinition.delete(data);                               
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