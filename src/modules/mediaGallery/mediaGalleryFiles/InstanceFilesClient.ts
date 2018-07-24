/* globals module */
/**  
 * @module mediaGalleryInstanceFilesClient  
 * @description  Media Gallery Instance Files Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    MediaGalleryInstanceFilesBatchClient,
    MediaGalleryInstanceFilesRoute,
    TYPES as mediaGalleryTypes
} from '../';
import { IMediaGalleryFile, IMediaGalleryOptions } from '../contracts';

@injectable()
export class MediaGalleryInstanceFilesClient {

    get routeDefinition(): MediaGalleryInstanceFilesRoute {
        return this.mediaGalleryInstanceFilesRoute;
    }

    get batch(): MediaGalleryInstanceFilesBatchClient {
        return this.MediaGalleryInstanceFilesBatchClient;
    }

    constructor(
        @inject(mediaGalleryTypes.MediaGalleryInstanceFilesRoute) protected mediaGalleryInstanceFilesRoute: MediaGalleryInstanceFilesRoute,
        @inject(mediaGalleryTypes.MediaGalleryInstanceFilesBatchClient) protected MediaGalleryInstanceFilesBatchClient: MediaGalleryInstanceFilesBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
     * @method  
     * @param mediaGalleryId Media Galleryslug or id which uniquely identifies media gallery whose media gallery files need to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                        
     * @example mediaGalleryInstanceFilesClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',
                    ids: '1,2,3',
                    from: '',
                    to: '',                   
                    search : '<search-phrase>'
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    find(mediaGalleryId: string, options?: IMediaGalleryOptions): PromiseLike<IHttpResponse<IQueryModel<IMediaGalleryFile>>> {
        return this.apiClient.get<IQueryModel<IMediaGalleryFile>>(this.mediaGalleryInstanceFilesRoute.find(mediaGalleryId, options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method
     * @param mediaGalleryId Media Galleryslug or id which uniquely identifies media gallery whose media gallery files need to be retrieved.
     * @param id Media Galleryfile id which uniquely identifies media gallery file that needs to be retrieved.
     * @param options options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed.                         
     * @example mediaGalleryInstanceFilesClient.get('<file-id>')
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   });                 
    **/
    get(mediaGalleryId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMediaGalleryFile>> {
        return this.apiClient.get<IMediaGalleryFile>(this.mediaGalleryInstanceFilesRoute.get(mediaGalleryId, id, options));
    }

    /**                  
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicMediaGalleryFilesRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                  
     * @method
     * @param mediaGalleryId Media Gallery slug or id which uniquely identifies media gallery whose media gallery files need to be deleted.
     * @param data
     * @param options
     * @returns A promise that is resolved once the unlink action has been performed.                         
     * @example // fileEntry is a file resource previously fetched using get action. The following action will unlink the original file resource and all accompanying derived file resources.			 
                    mediaGalleryInstanceFilesRoute.unlink(galleryId, fileEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    unlink(mediaGalleryId: string, data: IMediaGalleryFile): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.mediaGalleryInstanceFilesRoute.unlink(mediaGalleryId, data));
    }

    /**                      
     * Returns a promise that is resolved once the unlink by media gallery action has been performed. This action will remove all file resources from the system related to the requested media gallery if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicMediaGalleryService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink-by-media-gallery').href; 
     * ```                     
     * @method
     * @param mediaGalleryId Media Galleryslug or id which uniquely identifies media gallery whose media gallery files need to be deleted.
     * @param data
     * @param options
     * @returns A promise that is resolved once the unlink by media gallery action has been performed.                           
     * @example // fileEntry is a file resource previously fetched using get action.		 
                    mediaGalleryInstanceFilesClient.unlinkByMediaGallery(fileEntry)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                             // perform error handling here 
                        });                     
     **/
    unlinkByMediaGallery(mediaGalleryId: string, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.mediaGalleryInstanceFilesRoute.unlinkByMediaGallery(mediaGalleryId, options));
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMediaGalleryFilesRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     ``` 
     let params = modelMapper.updateParams(fileEntry); 
     let uri = params['model'].links('put').href; 
     ```                  
     * @method
     * @param mediaGalleryId An media gallery object used to update specified media gallery resource.
     * @param data Media GalleryFile object used to update specific media gallery file data in the system.
     * @returns A promise that is resolved once the update file action has been performed.                          
     * @example // fileEntry is a file resource previously fetched using get action. 
                   fileEntry.description = '<description>'; 
                   mediaGalleryInstanceFilesClient.update(fileEntry)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       }); 				
    **/
    update(mediaGalleryId: string, data: IMediaGalleryFile): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(mediaGalleryId, data), this.routeDefinition.updateParams(data));
    }

    /** 
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Media GalleryFiles module (For example: file resources from the Media Vault module can be linked directly into the Media GalleryFiles module).                  
     * @method
     * @param mediaGalleryId Media Gallery id which uniquely identifies media gallery whose media gallery files need to be linked.
     * @param data A media gallery file object that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                        
     * @example mediaGalleryInstanceFilesClient.link(fileObject)
                    .then(function (response, status, headers, config) {   
                        // perform success handling here 
                    },
                        function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    link(mediaGalleryId: string, data: IMediaGalleryFile): PromiseLike<IHttpResponse<IMediaGalleryFile>> {
        return this.apiClient.post<IMediaGalleryFile>(this.routeDefinition.link(mediaGalleryId, data), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/