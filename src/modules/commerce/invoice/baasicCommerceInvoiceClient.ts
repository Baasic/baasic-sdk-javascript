/* globals module */
/**  
 * @module baasicCommerceInvoiceClient  
 * @description Baasic Commerce Invoice Client provides an easy way to consume Baasic Commerce REST API end-points. In order to obtain a needed routes `baasicCommerceInvoiceClient` uses `baasicCommerceInvoiceRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicCommerceInvoiceRouteDefinition, BaasicCommerceInvoiceStreamsClient, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class BaasicCommerceInvoiceClient {

    get routeDefinition(): BaasicCommerceInvoiceRouteDefinition {
        return this.baasicCommerceInvoiceRouteDefinition;
    }

    get streams(): BaasicCommerceInvoiceStreamsClient {
        return this.baasicCommerceInvoiceStreamsClient;
    }

    constructor(
        @inject(commerceTypes.BaasicCommerceInvoiceRouteDefinition) protected baasicCommerceInvoiceRouteDefinition: BaasicCommerceInvoiceRouteDefinition,
        @inject(commerceTypes.BaasicCommerceInvoiceStreamsClient) protected baasicCommerceInvoiceStreamsClient: BaasicCommerceInvoiceStreamsClient,
        @inject(httpTypes.BaasicApiClient) protected BaasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example baasicCommerceInvoiceClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.get(this.baasicCommerceInvoiceRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the commerce resource.                 
     * @method                        
     * @example baasicCommerceInvoiceClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.BaasicApiClient.get(this.baasicCommerceInvoiceRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceInvoiceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceInvoice); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceInvoice is a resource previously fetched using get action. 
                    commerceInvoice.invoiceStatusId : '<new-invoice-status-id>'; 
                    baasicCommerceInvoiceClient.update(commerceInvoice)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: any): PromiseLike<IHttpResponse<void>> {
        return this.BaasicApiClient.put<void>(this.baasicCommerceInvoiceRouteDefinition.update(data), this.baasicCommerceInvoiceRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCommerceInvoiceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceInvoice); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceInvoice is a resource previously fetched using get action.				 
                        baasicCommerceInvoiceClient.remove(commerceInvoice) 
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });						
     **/
    remove(data: any): PromiseLike<IHttpResponse<void>> {
        return this.BaasicApiClient.delete<void>(this.baasicCommerceInvoiceRouteDefinition.delete(data));
    }
}