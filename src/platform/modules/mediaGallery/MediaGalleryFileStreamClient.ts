/* globals module */
/**  
 * @module mediaGalleryFilesStreamsClient  
 * @description  Media Gallery Files Streams Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Streams Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { MediaGalleryFileStreamRoute, TYPES as mediaGalleryTypes } from './';
import { IMediaGalleryFile } from './contracts';

@injectable()
export class MediaGalleryFileStreamClient {

    get routeDefinition(): MediaGalleryFileStreamRoute {
        return this.mediaGalleryFilesStreamsRoute;
    }

    constructor(
        @inject(mediaGalleryTypes.MediaGalleryFileStreamRoute) protected mediaGalleryFilesStreamsRoute: MediaGalleryFileStreamRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.                     
     * @method
     * @param id Media Gallery Entry id which uniquely identifies media gallery file that needs to be retrieved.
     * @param data Media Gallery File object used to identify stream that needs to be retrieved from the system.                             
     * @returns A promise that is resolved once the get action has been performed. 
     * @example // Request the original file stream              
                    mediaGalleryFilesStreamsClient.get({id: '<file-id>'}, {mediaGalleryid: '<media-gallery-id>', t: '<timestamp>'})
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                            // perform error handling here 
                        });                    
     **/
    get(id: string, data: IMediaGalleryFile): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.mediaGalleryFilesStreamsRoute.get(id, data));
    }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
     * @method
     * @param id Media Gallery Entry id which uniquely identifies media gallery file that needs to be retrieved.
     * @param data Media Gallery File object used to identify stream that needs to be retrieved from the system.    
     * @returns A promise that is resolved once the get action has been performed.                            
     * @example // Request the original blob                
                    mediaGalleryFilesStreamsClient.getBlob('<file-id>', {mediaGalleryId:'<media-gallery-id>', t: '<timestamp>'})
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                            // perform error handling here 
                        });                   
     **/
    getBlob(id: string, data: IMediaGalleryFile): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.mediaGalleryFilesStreamsRoute.get(id, data), { 'Accept': 'application/octet-stream' });
    }

    /**                      
     * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).                      
     * @method
     * @param data Media GalleryFile object used to identify stream that needs to be updated.
     * @param stream                     
     * @returns A promise that is resolved once the update file stream action has been performed.
     * @example // Update original file stream 
                    mediaGalleryFilesStreamsClient.update({id:'<file-id>'}, <file-stream>)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });                    
     **/
    update(data: IMediaGalleryFile, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.apiClient.put(this.mediaGalleryFilesStreamsRoute.update(data), formData, { 'Content-Type': undefined });
    }

    /**                      
     * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                      
     * @method 
     * @param data Media GalleryFile object that need to be inserted into the system.
     * @param stream
     * @returns A promise that is resolved once the create file stream action has been performed.                      
     * @example mediaGalleryFilesStreamsClient.create({mediaGalleryId:'<media-gallery-id>'}, <blob>)
                   .then(function (data) {  
                        // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   });                     
    **/
    create(data: IMediaGalleryFile, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.apiClient.post(this.mediaGalleryFilesStreamsRoute.create(data), formData, { 'Content-Type': undefined });
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/