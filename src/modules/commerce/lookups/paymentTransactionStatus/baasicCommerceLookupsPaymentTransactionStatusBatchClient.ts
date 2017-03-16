/* globals module */
/**  
 * @module baasicCommercePaymentTransactionStatusBatchClient  
 * @description Baasic Commerce Payment Method Batch Client provides an easy way to consume Baasic Commerce REST API end-points. In order to obtain a needed routes `baasicCommercePaymentTransactionStatusBatchClient` uses `baasicCommercePaymentTransactionStatusBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class BaasicCommerceLookupsPaymentTransactionStatusBatchClient {

    constructor(
        @inject(commerceTypes.BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition) protected baasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition: BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resources.                     
     * @method                      
     * @example baasicCommerceLookupsPaymentTransactionStatusBatchClient.create([{    
                   name : '<name>',   
                   abrv: '<abbreviation>',   
                   description: '<description>' 
               }]) 
               .then(function (data) {   
                   // perform success action here 
               },
                function (response, status, headers, config) {   
                    // perform error handling here 
               });                     
    **/
    create(data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition.create(), this.baasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition.createParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates specified commerce resources.                     
     * @method                         
     * @example baasicCommerceLookupsPaymentTransactionStatusBatchClient.update(commercePaymentTransactionStatuses)   
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });                     
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition.update(), this.baasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition.updateParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the remove commerce action has been performed. This action will remove commerce resources from the system if successfully completed.                     
     * @method                        
     * @example baasicCommerceLookupsPaymentTransactionStatusBatchClient.remove(commercePaymentTransactionStatusIds)   
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });		                    
     **/
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition.delete(), undefined, ids);
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