/* globals module */
/**  
 * @module baasicCommerceCountryBatchClient  
 * @description  Commerce Country Batch Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceCountryBatchClient` uses `baasicCommerceCountryBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { CommerceLookupsCountryBatchRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class CommerceLookupsCountryBatchClient {

    constructor(
        @inject(commerceTypes.CommerceLookupsCountryBatchRouteDefinition) protected baasicCommerceLookupsCountryBatchRouteDefinition: CommerceLookupsCountryBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resources.                     
     * @method                          
     * @example baasicCommerceLookupsCountryClient.create([{    
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
        return this.baasicApiClient.post(this.baasicCommerceLookupsCountryBatchRouteDefinition.create(), this.baasicCommerceLookupsCountryBatchRouteDefinition.createParams(data));
    }

    /**                    
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates specified commerce resources.                     
     * @method                        
     * @example   baasicCommerceLookupsCountryClient.update(commerceCountries)   
                      .then(function (data) {     
                          // perform success action here   
                      },
                       function (response, status, headers, config) {     
                           // perform error handling here   
                      });                     
   **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicCommerceLookupsCountryBatchRouteDefinition.update(), this.baasicCommerceLookupsCountryBatchRouteDefinition.updateParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the remove commerce action has been performed. This action will remove commerce resources from the system if successfully completed.                     
     * @method                         
     * @example baasicCommerceLookupsCountryClient.remove(commerceCountryIds)   
                   .then(function (data) {     
                       // perform success action here   
                   },
                    function (response, status, headers, config) {     
                        // perform error handling here   
                   });		                    
    **/
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicCommerceLookupsCountryBatchRouteDefinition.delete(), undefined, ids);
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