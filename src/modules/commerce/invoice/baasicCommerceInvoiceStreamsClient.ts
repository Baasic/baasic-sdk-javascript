/* globals module */
/**  
 * @module baasicCommerceInvoiceStreamsClient  
 * @description Baasic Commerce Invoice Streams Client provides an easy way to consume Baasic Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceInvoiceStreamsClient` uses `baasicCommerceInvoiceStreamsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicCommerceInvoiceStreamsRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class BaasicCommerceInvoiceStreamsClient {

    get routeDefinition(): BaasicCommerceInvoiceStreamsRouteDefinition {
        return this.baasicCommerceInvoiceStreamsRouteDefinition;
    }

    constructor(
        @inject(commerceTypes.BaasicCommerceInvoiceStreamsRouteDefinition) protected baasicCommerceInvoiceStreamsRouteDefinition: BaasicCommerceInvoiceStreamsRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected BaasicApiClient: BaasicApiClient
    ) { }


    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the invoice stream if successfully completed.                     
     * @method                         
     * @example // commerceInvoice is a resource previously fetched using get action.	
                    baasicCommerceInvoiceStreamsClient.get({id: commerceInvoice.id})
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here 
                        });                                        
     **/
    get(data: any): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.get(this.baasicCommerceInvoiceStreamsRouteDefinition.get(data));
    }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the invoice stream as a blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
     * @method                           
     * @example // Request the original blob                
                        baasicCommerceInvoiceClient.getBlobl({id: commerceInvoice.id})
                            .then(function (data) {     
                                // perform success action here 
                            },
                             function (response, status, headers, config) {     
                                 // perform error handling here 
                            });                     
     **/
    getBlob(data: any): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.get(this.baasicCommerceInvoiceStreamsRouteDefinition.get(data), { 'Accept': 'application/octet-stream' });
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