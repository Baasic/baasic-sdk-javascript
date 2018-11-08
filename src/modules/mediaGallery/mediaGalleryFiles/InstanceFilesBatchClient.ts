/* globals module */
/**  
 * @module mediaGalleryInstanceFilesBatchClient  
 * @description  Media Gallery Instance Files Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import {
    MediaGalleryInstanceFilesBatchRoute,
    TYPES as mediaGalleryTypes
} from '../';
import { IMediaGalleryFile } from '../contracts';

@injectable()
export class MediaGalleryInstanceFilesBatchClient {

    get routeDefinition(): MediaGalleryInstanceFilesBatchRoute {
        return this.mediaGalleryInstanceFilesBatchRoute;
    }

    constructor(
        @inject(mediaGalleryTypes.MediaGalleryInstanceFilesBatchRoute) protected mediaGalleryInstanceFilesBatchRoute: MediaGalleryInstanceFilesBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system.                   
     * @method
     * @param mediaGalleryId Media Gallery file id of the original media gallery file used to identify media gallery files on which delete action should be performed.
     * @param data Collection of media gallery delete requests which uniquely identifies media gallery files that need to be deleted.
     * @returns A promise that is resolved once the unlink action has been performed.                           
     * @example // Remove original file resources                
                   mediaGalleryInstanceFilesBatchClient.unlink([{ id: '<file-id>' }])
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       });		                    
    **/
    unlink(mediaGalleryId: string, data: IMediaGalleryFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.mediaGalleryInstanceFilesBatchRoute.unlink(mediaGalleryId), undefined, data);
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                  
     * @method
     * @param mediaGalleryId Media Gallery id which uniquely identifies media gallery whose media gallery file need to be updated.
     * @param data Media Gallery file object that need to be updated in the system.
     * @returns A promise that is resolved once the update action has been performed.                         
     * @example mediaGalleryInstanceFilesBatchClient.update('<media-gallery-id>', files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    update(mediaGalleryId: string, data: IMediaGalleryFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(mediaGalleryId), this.routeDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
     * @method
     * @param mediaGalleryId Media Gallery slug or id which uniquely identifies media gallery whose media gallery files need to be linked.
     * @param data A collection of media gallery file objects that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                          
     * @example mediaGalleryInstanceFilesBatchClient.link(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    link(mediaGalleryId: string, data: IMediaGalleryFile[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.link(mediaGalleryId), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/
