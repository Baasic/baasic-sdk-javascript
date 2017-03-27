/* globals module */
/**  
 * @module commerceLookupsSubscriptionStatusClient  
 * @description  Commerce Lookups SubscriptionStatus Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `commerceLookupsSubscriptionStatusClient` uses `commerceLookupsSubscriptionStatusRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import { CommerceLookupsSubscriptionStatusBatchClient, CommerceLookupsSubscriptionStatusRoute, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class CommerceLookupsSubscriptionStatusClient {

    get routeDefinition(): CommerceLookupsSubscriptionStatusRoute {
        return this.commerceLookupsSubscriptionStatusRoute;
    }

    get batch(): CommerceLookupsSubscriptionStatusBatchClient {
        return this.commerceLookupsSubscriptionStatusBatchClient;
    }

    constructor(
        @inject(commerceTypes.CommerceLookupsSubscriptionStatusBatchClient) protected commerceLookupsSubscriptionStatusBatchClient: CommerceLookupsSubscriptionStatusBatchClient,
        @inject(commerceTypes.CommerceLookupsSubscriptionStatusRoute) protected commerceLookupsSubscriptionStatusRoute: CommerceLookupsSubscriptionStatusRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example commerceLookupsSubscriptionStatusClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<any>>> {
        return this.apiClient.get(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example commerceLookupsSubscriptionStatusClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.commerceLookupsSubscriptionStatusRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `commerceLookupsSubscriptionStatusRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceSubscriptionStatus); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceSubscriptionStatus is a resource previously fetched using get action. 
                    commerceSubscriptionStatus.description = '<description>'; 
                    commerceLookupsSubscriptionStatusClient.update(commerceSubscriptionStatus)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the create commerce action has been performed; this action creates a new commerce resource.                  
     * @method                         
     * @example commerceLookupsSubscriptionStatusClient.create({    
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
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `commerceLookupsSubscriptionStatusRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceSubscriptionStatus); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceSubscriptionStatus is a resource previously fetched using get action.				 
                    commerceLookupsSubscriptionStatusClient.remove(commerceSubscriptionStatus)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }
}

/**  
 * @copyright(c) 2017 Mono Ltd  
 * @license MIT 
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */