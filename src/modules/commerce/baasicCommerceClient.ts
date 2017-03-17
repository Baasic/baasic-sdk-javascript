/* globals module */
/**  
 * @module baasicCommerceClient  
 * @description  Commerce Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceClient` uses `baasicCommerceRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    CommerceRouteDefinition,
    CommerceCustomerClient,
    CommerceInvoiceClient,
    CommerceProductClient,
    CommercePaymentTransactionClient,
    Lookups,
    TYPES as commerceTypes
} from 'modules/commerce';

@injectable()
export class CommerceClient {

    get customers(): CommerceCustomerClient {
        return this.baasicCommerceCustomerClient;
    }

    get invoices(): CommerceInvoiceClient {
        return this.baasicCommerceInvoiceClient;
    }

    get products(): CommerceProductClient {
        return this.baasicCommerceProductClient;
    }

    get paymentTransactions(): CommercePaymentTransactionClient {
        return this.baasicCommercePaymentTransactionClient;
    }

    get lookups(): Lookups {
        return this.lookup;
    }

    get routeDefinition(): CommerceRouteDefinition {
        return this.baasicCommerceRouteDefinition;
    }

    constructor(
        @inject(commerceTypes.CommerceCustomerClient) protected baasicCommerceCustomerClient: CommerceCustomerClient,
        @inject(commerceTypes.CommerceInvoiceClient) protected baasicCommerceInvoiceClient: CommerceInvoiceClient,
        @inject(commerceTypes.CommerceProductClient) protected baasicCommerceProductClient: CommerceProductClient,
        @inject(commerceTypes.CommercePaymentTransactionClient) protected baasicCommercePaymentTransactionClient: CommercePaymentTransactionClient,
        @inject(commerceTypes.Lookups) protected lookup: Lookups,
        @inject(commerceTypes.CommerceRouteDefinition) protected baasicCommerceRouteDefinition: CommerceRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceClient.find({   
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
        return this.baasicApiClient.get(this.baasicCommerceRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceClient.get('<id>', {})
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicCommerceRouteDefinition.get(id, options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceClient.validateVAT({ countryCode: 'DE', vatId: 'DE999999999' })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    validateVAT(countryCode: string, vatId: string): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicCommerceRouteDefinition.validateVAT(countryCode, vatId));
    }

    /**                  
     * Returns a promise that is resolved once the subscribe pre-process commerce action has been performed; this action performes pre-subscribe operations such as getting client tokens etc.                  
     * @method                         
     * @example baasicCommerceClient.preprocess({   
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
        return this.baasicApiClient.post(this.baasicCommerceRouteDefinition.preprocess(), this.baasicCommerceRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the subscribe commerce action has been performed; this action creates a new commerce subscription resource.                  
     * @method                         
     * @example baasicCommerceClient.subscribe({   
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
        return this.baasicApiClient.post(this.baasicCommerceRouteDefinition.subscribe(), this.baasicCommerceRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the cancel subscription action has been performed. This action will remove a commerce subscription resource from the system if successfully completed. This route obtain routes from `baasicCommerceRouteDefinition` route template. Here is an example of how execute this action:                  
     * @method                         
     * @example	baasicCommerceClient.cancel({   
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
        return this.baasicApiClient.delete<void>(this.baasicCommerceRouteDefinition.cancel(data));
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