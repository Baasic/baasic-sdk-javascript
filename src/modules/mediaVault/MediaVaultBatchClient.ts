/* globals module */
/**  
 * @module mediaVaultBatchClient  
 * @description  Media Vault Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MediaVaultBatchRoute, TYPES as mediaVaultTypes } from './';
import { IMediaEntry } from './contracts';

@injectable()
export class MediaVaultBatchClient {

    get routeDefinition(): MediaVaultBatchRoute {
        return this.mediaVaultBatchRoute;
    }

    constructor(
        @inject(mediaVaultTypes.MediaVaultBatchRoute) protected mediaVaultBatchRoute: MediaVaultBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified media vault resources.                   
     * @method
     * @param data A collection of media vault objects used to update specified media vault resources.
     * @returns A promise that is resolved once the update action has been performed.                          
     * @example mediaVaultStreamsClient.update(files)
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                   
    **/
    update(data: IMediaEntry[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the remove action has been performed. This action will remove media vault resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of media vault resource, the operation will remove just derived resource. Otherwise, specified media vault and all its accompanying derived resources will be removed from the system.                   
     * @method
     * @param data Collection of media vault delete requests which uniquely identifies media vault resources that need to be deleted.                         
     * @example // Remove original media vault resources		 
                        mediaVaultBatchClient.remove([{ id: '<media-vault-id>' }])
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });	
                // Remove derived media vault resources		 
                        mediaVaultBatchClient.remove([{ id: '<media-vault-id>', fileFormat: { width: <width>, height: <height> } }])
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });	  	                  
     **/
    remove(data: any[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.mediaVaultBatchRoute.delete(), undefined, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */