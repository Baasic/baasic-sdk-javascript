/* globals module */
/**  
 * @module baasicCommerceLookupsAddressTypeClient  
 * @description Baasic Commerce Lookups Address Type Client provides an easy way to consume Baasic Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceLookupsAddressTypesClient` uses `baasicCommerceLookupsAddressTypeRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import {
    BaasicCommerceLookupsAddressTypesBatchClient,
    BaasicCommerceLookupsAddressTypeRouteDefinition,
    TYPES as commerceTypes
} from 'modules/commerce';

@injectable()
export class BaasicCommerceLookupsAddressTypesClient {

    get routeDefinition(): BaasicCommerceLookupsAddressTypeRouteDefinition {
        return this.baasicCommerceLookupsAddressTypeRouteDefinition;
    }

    get batch(): BaasicCommerceLookupsAddressTypesBatchClient {
        return this.baasicCommerceLookupsAddressTypesBatchClient;
    }

    constructor(
        @inject(commerceTypes.BaasicCommerceLookupsAddressTypeRouteDefinition) protected baasicCommerceLookupsAddressTypeRouteDefinition: BaasicCommerceLookupsAddressTypeRouteDefinition,
        @inject(commerceTypes.BaasicCommerceLookupsAddressTypesBatchClient) protected baasicCommerceLookupsAddressTypesBatchClient: BaasicCommerceLookupsAddressTypesBatchClient,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceLookupsAddressTypeClient.find({   
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
        return this.baasicApiClient.get(this.baasicCommerceLookupsAddressTypeRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceLookupsAddressTypeClient.get()
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicCommerceLookupsAddressTypeRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example baasicCommerceLookupsAddressTypeClient.create({    
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
        return this.baasicApiClient.post(this.baasicCommerceLookupsAddressTypeRouteDefinition.create(), this.baasicCommerceLookupsAddressTypeRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsAddressTypeRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceAddressType); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceAddressType is a resource previously fetched using get action. 
                    commerceAddressType.description = '<description>'; 
                    baasicCommerceLookupsAddressTypeClient.update(commerceAddressType) 
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicCommerceLookupsAddressTypeRouteDefinition.update(data), this.baasicCommerceLookupsAddressTypeRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceLookupsAddressTypeRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceAddressType); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceAddressType is a resource previously fetched using get action.				 
                    baasicCommerceLookupsAddressTypeClient.remove(commerceAddressType) 
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicCommerceLookupsAddressTypeRouteDefinition.delete(data));
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