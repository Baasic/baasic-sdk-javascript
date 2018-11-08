/* globals module */
/**  
 * @module commerceProductInstanceFilesBatchClient  
 * @description  Product Instance Files Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    CommerceProductInstanceFilesBatchRoute,
    TYPES as productTypes
} from '../.././';
import { IProductFile } from '../.././contracts';

@injectable()
export class CommerceProductInstanceFilesBatchClient {

    get routeDefinition(): CommerceProductInstanceFilesBatchRoute {
        return this.productInstanceFilesBatchRoute;
    }

    constructor(
        @inject(productTypes.CommerceProductInstanceFilesBatchRoute) protected productInstanceFilesBatchRoute: CommerceProductInstanceFilesBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system.                   
     * @method
     * @param productId Product file id of the original product file used to identify product files on which delete action should be performed.
     * @param data Collection of product delete requests which uniquely identifies product files that need to be deleted.
     * @returns A promise that is resolved once the unlink action has been performed.                           
     * @example // Remove original file resources                
                   productInstanceFilesBatchClient.unlink([{ id: '<file-id>' }])
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       });		                    
    **/
    unlink(productId: string, data: IProductFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.productInstanceFilesBatchRoute.unlink(productId), undefined, data);
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                  
     * @method
     * @param productId Product id which uniquely identifies product whose product file need to be updated.
     * @param data Product file object that need to be updated in the system.
     * @returns A promise that is resolved once the update action has been performed.                         
     * @example productInstanceFilesBatchClient.update('<product-id>', files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    update(productId: string, data: IProductFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(productId), this.routeDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
     * @method
     * @param productId Product slug or id which uniquely identifies product whose product files need to be linked.
     * @param data A collection of product file objects that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                          
     * @example productInstanceFilesBatchClient.link(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    link(productId: string, data: IProductFile[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.link(productId), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/
