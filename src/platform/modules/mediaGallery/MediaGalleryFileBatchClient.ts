/* globals module */
/**  
 * @module mediaGalleryFileBatchClient  
 * @description  Media Gallery Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { MediaGalleryFileBatchRoute, TYPES as mediaGalleryTypes } from './';
import { IMediaGalleryFile } from './contracts';

@injectable()
export class MediaGalleryFileBatchClient {

    get routeDefinition(): MediaGalleryFileBatchRoute {
        return this.mediaGalleryBatchRoute;
    }

    constructor(
        @inject(mediaGalleryTypes.MediaGalleryBatchRoute) protected mediaGalleryBatchRoute: MediaGalleryFileBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified media gallery file resources.                   
     * @method
     * @param data A collection of media gallery file objects used to update specified media gallery file resources.
     * @returns A promise that is resolved once the update action has been performed.                          
     * @example mediaGalleryFileBatchClient.update(files)
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                   
    **/
    update(data: IMediaGalleryFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove media gallery file resources from the system if successfully completed. Specified media galleries and all accompanying derived resources will be removed from the system.                   
     * @method
     * @param ids Collection of media gallery Id which uniquely identifies media gallery file resources that need to be deleted.                         
     * @example // Remove original media gallery file resources		 
                        mediaGalleryFileBatchClient.unlink([<media-gallery-id>])
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });	 	                  
     **/
    unlink(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.mediaGalleryBatchRoute.unlink(), undefined, ids);
    }

    /**                   
    * Returns a promise that is resolved once the create action has been performed; this action creates specified media gallery file resources.                   
    * @method
    * @param data A collection of media gallery file objects used to create specified media gallery file resources.
    * @returns A promise that is resolved once the create action has been performed.                          
    * @example mediaGalleryFileBatchClient.link(files)
                  .then(function (data) {   
                      // perform success action here 
                  },
                   function (response, status, headers, config) {   
                       // perform error handling here 
                  });                   
   **/
    link(data: IMediaGalleryFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.post<void>(this.routeDefinition.link(), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */