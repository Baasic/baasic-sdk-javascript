/* globals module */
/**  
 * @module commerceRoute  
 * @description Baasic Commerce Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Commerce Product Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class CommerceRoute extends BaseRoute {

    public readonly findRoute: string = 'commerce/subscriptions/{?customerId,systemName,searchQuery,plan,statuses,productId,firstName,lastName,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'commerce/subscriptions/{id}/{?embed,fields}';

    public readonly validateVATRoute: string = 'commerce/vat-validations/{?countryCode,vatId}';

    public readonly preprocessRoute: string = 'commerce/subscriptions/preprocess';

    public readonly subscribeRoute: string = 'commerce/subscriptions';

    public readonly cancelRoute: string = 'commerce/subscriptions/{systemName}/{id}/{?requestRefund,refundAmount}';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                 
     * Parses find commerce route which can be expanded with additional options. Supported items are:                 
     * - `customerId` - The customer identifier.                 
     * - `systemName` - The commerce payment gateway system name.                 
     * - `searchQuery` - A string value used to identify commerce resources using the phrase search.                 
     * - `plan` - Product name.                 
     * - `statuses` - Subscription status unique identifier or abbreviation in CSV format.                 
     * - `productId` - Product unique identifier.                 
     * - `firstName` - Customer first name.                 
     * - `lastName` - Customer last name.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain commerce subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the commerce property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example commerceRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceRoute.get(id, options);                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses validate VAT route; this route doesn't expose any properties.                 
     * @method                        
     * @example commerceRoute.validateVAT({ countryCode: 'DE', vatId: 'DE999999999' });                               
     **/
    validateVAT(countryCode: string, vatId: string): any {
        return super.baseCreate(this.validateVATRoute, { countryCode: countryCode, vatId: vatId });
    }

    /**                 
     * Parses subscription pre-process commerce route; this URI template does not expose any additional options.                 
     * @method                        
     * @example commerceRoute.preprocess();                              
     **/
    preprocess(): any {
        return super.baseCreate(this.preprocessRoute, {});
    }

    /**                 
     * Parses subscription commerce route; this URI template does not expose any additional options.                 
     * @method                        
     * @example commerceRoute.subscribe();                              
     **/
    subscribe(): any {
        return super.baseCreate(this.subscribeRoute, {});
    }

    /**                
     * Parses cancel subscription commerce route; this URI template does not expose any additional options.                 
     * @method                        
     * @example commerceRoute.cancel({ systemName: '<system-name>' });                              
     **/
    cancel(data: any): any {
        return super.baseCreate(this.cancelRoute, data);
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