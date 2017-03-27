/* globals module */
/**  
 * @module commercePaymentTransactionRoute  
 * @description Baasic Commerce PaymentTransaction Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Commerce PaymentTransaction Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';

@injectable()
export class CommercePaymentTransactionRoute extends BaseRoute {

    public readonly findRoute: string = 'commerce/payment-transactions/{?customerId,searchQuery,invoiceStatusId,subscriptionId,paymentMethodId,firstName,lastName,transactionStatuses,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'commerce/payment-transactions/{id}/{?embed,fields}';

    public readonly createRoute: string = 'commerce/payment-transactions';

    public readonly updateRoute: string = 'commerce/payment-transactions/{id}';

    public readonly deleteRoute: string = 'commerce/payment-transactions/{id}';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                 
     * Parses find commerce payment transaction route which can be expanded with additional options. Supported items are:                 
     * - `customerId` - A customer unique identifier.                 
     * - `searchQuery` - A string value used to identify commerce resources using the phrase search.                 
     * - `invoiceStatusId` - A invoice status unique identifier.                 
     * - `subscriptionId` - A subscription unique identifier.                 
     * - `paymentMethodId` - A payment method unique identifier.                 
     * - `firstName` - A customer first name.                 
     * - `lastName` - A customer last name.                 
     * - `transactionStatuses` - A transaction statuses in CSV format.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain commerce subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the commerce property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example commercePaymentTransactionRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method                        
     * @example commercePaymentTransactionRoute.get(id, options);                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create route; this route doesn't expose any properties.                 
     * @method                        
     * @example commercePaymentTransactionRoute.create();                               
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                 
     * Parses update route; this route doesn't expose any properties.                 
     * @method                        
     * @example commercePaymentTransactionRoute.update(data);                               
     **/
    update(data: any): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete route; this route doesn't expose any properties.                 
     * @method                        
     * @example commercePaymentTransactionRoute.delete(data);                               
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