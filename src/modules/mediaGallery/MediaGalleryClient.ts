/* globals module */
/**  
 * @module mediaGalleryClient  
 * @description  Media Gallery Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    MediaGalleryBatchClient,
    MediaGalleryRoute,
    MediaGallerySettingsClient,
    MediaGalleryFileStreamClient,
    MediaGalleryInstanceFilesClient,
    TYPES as mediaGalleryTypes
} from './';
import { IMediaGallery, IMediaGalleryOptions } from './contracts';

@injectable()
export class MediaGalleryClient {

    get routeDefinition(): MediaGalleryRoute {
        return this.mediaGalleryRoute;
    }

    get streams() : MediaGalleryFileStreamClient {
        return this.mediaGalleryFileStreamClient;
    }

    get batch(): MediaGalleryBatchClient {
        return this.mediaGalleryBatchClient;
    }

    get files(): MediaGalleryInstanceFilesClient {
        return this.mediaGalleryInstanceFilesClient;
    }
    
    constructor(
        @inject(mediaGalleryTypes.MediaGalleryRoute) protected mediaGalleryRoute: MediaGalleryRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
        @inject(mediaGalleryTypes.MediaGalleryBatchClient) protected mediaGalleryBatchClient: MediaGalleryBatchClient,
        @inject(mediaGalleryTypes.MediaGalleryFileStreamClient) protected mediaGalleryFileStreamClient: MediaGalleryFileStreamClient,
        @inject(mediaGalleryTypes.MediaGalleryInstanceFilesClient) protected mediaGalleryInstanceFilesClient: MediaGalleryInstanceFilesClient,
        @inject(mediaGalleryTypes.MediaGallerySettingsClient) protected mediaGallerySettingsClient: MediaGallerySettingsClient        
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of media gallery resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                          
     * @example mediaGalleryClient.find({
                  pageNumber : 1,   
                  pageSize : 10,   
                  orderBy : '<field>',   
                  orderDirection : '<asc|desc>',   
                  search : '<search-phrase>',
                  ids: '1,2,5',
                  from: '',
                  to: ''
               })
               .then(function (collection) {   
                   // perform success action here 
              },
               function (response, status, headers, config) {   
                   // perform error handling here 
              });                    
   **/
    find(options?: IMediaGalleryOptions): PromiseLike<IHttpResponse<IQueryModel<IMediaGallery>>> {
        return this.apiClient.get<IQueryModel<IMediaGallery>>(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested media gallery resource.                 
     * @method
     * @param id Media gallery id which uniquely identifies media gallery resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                         
     * @example mediaGalleryClient.get('<media-gallery-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMediaGallery>> {
        return this.apiClient.get<IMediaGallery>(this.routeDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update media gallery action has been performed; this action will update a media gallery resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `mediaGalleryRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(mediaGalleryEntry); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A media gallery object used to update specified media gallery resource.
     * @returns A promise that is resolved once the update media gallery action has been performed.                          
     * @example // mediaGalleryEntry is a media gallery resource previously fetched using get action. 
                    mediaGalleryEntry.description = '<description>'; 
                    mediaGalleryClient.update(mediaGalleryEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMediaGallery): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove one media gallery resources from the system if successfully completed. Specified media gallery and all accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicMediaGalleryRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(mediaGalleryEntry); 
     * let uri = params['id'].links('delete').href; 
     * ```                  
     * @method 
     * @param id Media gallery id used to delete specific Media gallery resource from the system.
     * @example // id is a media gallery resource id previously fetched using get action. The following action will remove the original media gallery resource and all accompanying derived media gallery resources.		
                   mediaGalleryClient.remove(id)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       });                						
    **/
    remove(id: IMediaGallery): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(id));
    }

    /**
     * Returns a promise that is resolved once the create media gallery action has been performed; this action creates a new media gallery.
     * @method
     * @param data Media Gallery object.
     * @returns A promise that is resolved once the create media gallery action has been performed.
     * @example mediaGalleryClient.create(mediaGallery)
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });
     **/
    create(data: IMediaGallery): PromiseLike<IHttpResponse<IMediaGallery>> {
        return this.apiClient.post<IMediaGallery>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all media gallery resources from the system if successfully completed.
     * @method                     
     * @example // Remove original media gallery resources		 
                        mediaGalleryClient.purge()
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });	 	                  
     **/
    purge(): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge());
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */