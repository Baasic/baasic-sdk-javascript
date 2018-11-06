/* globals module */
/**  
 * @module commerceClient  
 * @description  Commerce Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `commerceClient` uses `commerceRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    CommerceRoute,
    CommerceCustomerClient,
    CommerceInvoiceClient,
    CommerceProductClient,
    CommercePaymentTransactionClient,
    Lookups,
    CommerceProductFilesClient,
    CommerceProductSettingsClient,
    CommerceCouponClient,
    CommerceCouponUseClient,
    TYPES as commerceTypes
} from './';

@injectable()
export class CommerceClient {

    get customers(): CommerceCustomerClient {
        return this.commerceCustomerClient;
    }

    get invoices(): CommerceInvoiceClient {
        return this.commerceInvoiceClient;
    }

    get products(): CommerceProductClient {
        return this.commerceProductClient;
    }

    get files(): CommerceProductFilesClient {
        return this.commerceProductFilesClient;
    }

    get settings(): CommerceProductSettingsClient {
        return this.commerceProductSettingsClient;
    }

    get paymentTransactions(): CommercePaymentTransactionClient {
        return this.commercePaymentTransactionClient;
    }

    get coupons(): CommerceCouponClient {
        return this.commerceCouponClient;
    }

    get couponUses(): CommerceCouponUseClient {
        return this.commerceCouponUseClient;
    }

    get lookups(): Lookups {
        return this.lookup;
    }

    get routeDefinition(): CommerceRoute {
        return this.commerceRoute;
    }

    constructor(
        @inject(commerceTypes.CommerceCustomerClient) protected commerceCustomerClient: CommerceCustomerClient,
        @inject(commerceTypes.CommerceInvoiceClient) protected commerceInvoiceClient: CommerceInvoiceClient,
        @inject(commerceTypes.CommerceProductClient) protected commerceProductClient: CommerceProductClient,
        @inject(commerceTypes.CommerceProductFilesClient) protected commerceProductFilesClient: CommerceProductFilesClient,
        @inject(commerceTypes.CommerceProductSettingsClient) protected commerceProductSettingsClient: CommerceProductSettingsClient,
        @inject(commerceTypes.CommercePaymentTransactionClient) protected commercePaymentTransactionClient: CommercePaymentTransactionClient,
        @inject(commerceTypes.CommerceCouponClient) protected commerceCouponClient: CommerceCouponClient,
        @inject(commerceTypes.CommerceCouponUseClient) protected commerceCouponUseClient: CommerceCouponUseClient,
        @inject(commerceTypes.Lookups) protected lookup: Lookups,
        @inject(commerceTypes.CommerceRoute) protected commerceRoute: CommerceRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example commerceClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    customerId: '<customer-id>' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                     
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<any>>> {
        return this.apiClient.get(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example commerceClient.get('<id>', {})
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.commerceRoute.get(id, options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example commerceClient.validateVAT({ countryCode: 'DE', vatId: 'DE999999999' })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    validateVAT(countryCode: string, vatId: string): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.commerceRoute.validateVAT(countryCode, vatId));
    }

    /**                  
     * Returns a promise that is resolved once the subscribe pre-process commerce action has been performed; this action performes pre-subscribe operations such as getting client tokens etc.                  
     * @method                         
     * @example commerceClient.preprocess({   
                    systemName : '<system-name>',   
                    productId : '<product-id>',   
                    customerId: '<id>' 
                }) 
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    preprocess(data: any): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.preprocess(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the subscribe commerce action has been performed; this action creates a new commerce subscription resource.                  
     * @method                         
     * @example commerceClient.subscribe({   
                    systemName : '<system-name>',  
                    productId : '<product-id>',   
                    customer: {     
                        id: '<id>',     
                        firstName: '<first-name>',     
                        lastName: '<last-name>'   
                    }
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    subscribe(data: any): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.subscribe(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the cancel subscription action has been performed. This action will remove a commerce subscription resource from the system if successfully completed. This route obtain routes from `commerceRoute` route template. Here is an example of how execute this action:                  
     * @method                         
     * @example	commerceClient.cancel({   
                    systemName: '<system-name>',   
                    id: '<subscription-id>',   
                    requestRefund: <true/false>,   
                    refundAmount: <refund-amount> 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });						
     **/
    cancel(data: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.cancel(data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */