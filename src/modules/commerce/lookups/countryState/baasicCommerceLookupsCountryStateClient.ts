/* globals module */
/**  
 * @module baasicCommerceCountryStateClient  
 * @description Baasic Commerce Country State Client provides an easy way to consume Baasic Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceCountryStateClient` uses `baasicCommerceCountryStateRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicCommerceLookupsCountryStateBatchClient, BaasicCommerceLookupsCountryStateRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class BaasicCommerceLookupsCountryStateClient {

    get routeDefinition(): BaasicCommerceLookupsCountryStateRouteDefinition {
        return this.baasicCommerceLookupsCountryStateRouteDefinition;
    }

    get batch(): BaasicCommerceLookupsCountryStateBatchClient {
        return this.baasicCommerceLookupsCountryStateBatchClient;
    }

    constructor(
        @inject(commerceTypes.BaasicCommerceLookupsCountryStateRouteDefinition) protected baasicCommerceLookupsCountryStateRouteDefinition: BaasicCommerceLookupsCountryStateRouteDefinition,
        @inject(commerceTypes.BaasicCommerceLookupsCountryStateBatchClient) protected baasicCommerceLookupsCountryStateBatchClient: BaasicCommerceLookupsCountryStateBatchClient,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceLookupsCountryStateClient.find({   
                    countryId: '<country-id>'   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    search : '<search-phrase>' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                     
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<any>>> {
        return this.baasicApiClient.get(this.baasicCommerceLookupsCountryStateRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceLookupsCountryStateClient.get('<state-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicCommerceLookupsCountryStateRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example baasicCommerceLookupsCountryStateClient.create({    
                      countryId : '<country-id>',   
                      name: '<name>',   
                      abrv: '<abrv>',   
                      description: '<description>' 
                  }) 
                  .then(function (data) {   
                      // perform success action here 
                  },
                   function (response, status, headers, config) {   
                       // perform error handling here 
                  });                  
   **/
    create(data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicCommerceLookupsCountryStateRouteDefinition.create(), this.baasicCommerceLookupsCountryStateRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsCountryStateRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceCountryState); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceCountryState is a resource previously fetched using get action. 
                    commerceCountryState.description = '<description>'; 
                    baasicCommerceLookupsCountryStateClient.update(commerceCountryState)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicCommerceLookupsCountryStateRouteDefinition.update(data), this.baasicCommerceLookupsCountryStateRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsCountryStateRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceCountryState); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceCountryState is a resource previously fetched using get action.				 
                   baasicCommerceLookupsCountryStateClient.remove(commerceCountryState)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       });						
    **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicCommerceLookupsCountryStateRouteDefinition.delete(data));
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