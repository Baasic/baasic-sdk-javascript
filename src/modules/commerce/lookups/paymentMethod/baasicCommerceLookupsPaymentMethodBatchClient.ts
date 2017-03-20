/* globals module */
/**  
 * @module commercePaymentMethodBatchClient  
 * @description  Commerce Payment Method Batch Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `commercePaymentMethodBatchClient` uses `commercePaymentMethodBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { CommerceLookupsPaymentMethodBatchRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class CommerceLookupsPaymentMethodBatchClient {

    get routeDefinition(): CommerceLookupsPaymentMethodBatchRouteDefinition {
        return this.commerceLookupsPaymentMethodBatchRouteDefinition;
    }

    constructor(
        @inject(commerceTypes.CommerceLookupsPaymentMethodBatchRouteDefinition) protected commerceLookupsPaymentMethodBatchRouteDefinition: CommerceLookupsPaymentMethodBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resources.                     
     * @method                          
     * @example commerceLookupsPaymentMethodBatchClient.create([{    
                        name : '<name>',   
                        abrv: '<abbreviation>',   
                        description: '<description>',   
                        published: '<published>' 
                    }]) 
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    create(data: any): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.create(), this.commerceLookupsPaymentMethodBatchRouteDefinition.createParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates specified commerce resources.                     
     * @method                         
     * @example   commerceLookupsPaymentMethodBatchClient.update(commercePaymentMethods)   
                        .then(function (data) {     
                            // perform success action here   
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here   
                        });                     
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.commerceLookupsPaymentMethodBatchRouteDefinition.updateParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the remove commerce action has been performed. This action will remove commerce resources from the system if successfully completed.                     
     * @method                          
     * @example commerceLookupsPaymentMethodBatchClient.remove(commercePaymentMethodIds)   
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });		                    
     **/
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.commerceLookupsPaymentMethodBatchRouteDefinition.delete(), undefined, ids);
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