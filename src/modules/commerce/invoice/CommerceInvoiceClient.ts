/* globals module */
/**  
 * @module commerceInvoiceClient  
 * @description  Commerce Invoice Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `commerceInvoiceClient` uses `commerceInvoiceRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { CommerceInvoiceRoute, CommerceInvoiceStreamsClient, TYPES as commerceTypes } from 'modules/commerce';

@injectable()
export class CommerceInvoiceClient {

    get routeDefinition(): CommerceInvoiceRoute {
        return this.commerceInvoiceRoute;
    }

    get streams(): CommerceInvoiceStreamsClient {
        return this.commerceInvoiceStreamsClient;
    }

    constructor(
        @inject(commerceTypes.CommerceInvoiceRoute) protected commerceInvoiceRoute: CommerceInvoiceRoute,
        @inject(commerceTypes.CommerceInvoiceStreamsClient) protected commerceInvoiceStreamsClient: CommerceInvoiceStreamsClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of commerce resources matching the given criteria.                  
     * @method                         
     * @example commerceInvoiceClient.find({   
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
     * @example commerceInvoiceClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.commerceInvoiceRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update commerce action has been performed; this action updates a commerce resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `commerceInvoiceRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceInvoice); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // commerceInvoice is a resource previously fetched using get action. 
                    commerceInvoice.invoiceStatusId : '<new-invoice-status-id>'; 
                    commerceInvoiceClient.update(commerceInvoice)
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
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a commerce resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `commerceInvoiceRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(commerceInvoice); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // commerceInvoice is a resource previously fetched using get action.				 
                        commerceInvoiceClient.remove(commerceInvoice) 
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