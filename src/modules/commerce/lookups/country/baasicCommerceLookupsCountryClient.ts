/* globals module */
/**  
 * @module baasicCommerceCountryClient  
 * @description  Commerce Country Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceCountryClient` uses `baasicCommerceCountryRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { CommerceLookupsCountryBatchClient, CommerceLookupsCountryRouteDefinition, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class CommerceLookupsCountryClient {

    get routeDefinition(): CommerceLookupsCountryRouteDefinition {
        return this.baasicCommerceLookupsCountryRouteDefinition;
    }

    get batch(): CommerceLookupsCountryBatchClient {
        return this.baasicCommerceLookupsCountryBatchClient;
    }

    constructor(
        @inject(commerceTypes.CommerceLookupsCountryRouteDefinition) protected baasicCommerceLookupsCountryRouteDefinition: CommerceLookupsCountryRouteDefinition,
        @inject(commerceTypes.CommerceLookupsCountryBatchClient) protected baasicCommerceLookupsCountryBatchClient: CommerceLookupsCountryBatchClient,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceLookupsCountryClient.find({   
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
        return this.baasicApiClient.get(this.baasicCommerceLookupsCountryRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceLookupsCountryClient.get('<country-id>') 
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicCommerceLookupsCountryRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example baasicCommerceLookupsCountryClient.create({    
                    name : '<name>',   
                    abrv: '<abbreviation>',   
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
        return this.baasicApiClient.post(this.baasicCommerceLookupsCountryRouteDefinition.create(), this.baasicCommerceLookupsCountryRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceCountryRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceCountry); 
     * let uri = params['model'].links('put').href;
     * ```                  
     * @method                         
     * @example // commerceCountry is a resource previously fetched using get action. 
                        commerceCountry.phoneCode = '<phone-code>'; 
                        baasicCommerceLookupsCountryClient.update(commerceCountry)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicCommerceLookupsCountryRouteDefinition.update(data), this.baasicCommerceLookupsCountryRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsCountryRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceCountry); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceCountry is a resource previously fetched using get action.				 
                    baasicCommerceLookupsCountryClient.remove(commerceCountry) 
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicCommerceLookupsCountryRouteDefinition.delete(data));
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