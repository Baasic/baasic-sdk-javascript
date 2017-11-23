/* globals module */
/**  
 * @module commerceProductFilesBatchClient  
 * @description  Files Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import {
    CommerceProductFilesBatchRoute,
    TYPES as productTypes
} from '.././';
import { IProductFile } from '.././contracts';

@injectable()
export class CommerceProductFilesBatchClient {

    get routeDefinition(): CommerceProductFilesBatchRoute {
        return this.productFilesBatchRoute;
    }

    constructor(
        @inject(productTypes.CommerceProductFilesBatchRoute) protected productFilesBatchRoute: CommerceProductFilesBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
     * @method
     * @param data Collection of product files that needs to be deleted.
     * @returns A promise that is resolved once the unlink action has been performed.                          
     * @example // Remove original file resources                
                   productFilesBatchClient.unlink([{ id: '<file-id>' }])
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       });		
               // Remove derived file resources  
                   productFilesBatchClient.unlink([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       });		                    
    **/
    unlink(data: IProductFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.productFilesBatchRoute.unlink(), undefined, data);
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                  
     * @method
     * @param data A collection of product files objects used to update specified product files.
     * @returns A promise that is resolved once the update action has been performed.                       
     * @example productFilesClient.batch.update(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    update(data: IProductFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
     * @method
     * @param data A collection of product file objects that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                          
     * @example productFilesClient.batch.link(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    link(data: IProductFile[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.link(), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/
