/* globals module */
/**  
 * @module mediaGalleryFileClient  
 * @description  Media Gallery File Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery File Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    MediaGalleryFileBatchClient,
    MediaGalleryFileRoute,
    TYPES as mediaGalleryTypes
} from './';
import { IMediaGalleryFile, IMediaGalleryOptions } from './contracts';

@injectable()
export class MediaGalleryFileClient {

    get routeDefinition(): MediaGalleryFileRoute {
        return this.mediaGalleryFileRoute;
    }

    get batch(): MediaGalleryFileBatchClient {
        return this.mediaGalleryFileBatchClient;
    }

    constructor(
        @inject(mediaGalleryTypes.MediaGalleryFileRoute) protected mediaGalleryFileRoute: MediaGalleryFileRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
        @inject(mediaGalleryTypes.MediaGalleryFileBatchClient) protected mediaGalleryFileBatchClient: MediaGalleryFileBatchClient,
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
    find(options?: IMediaGalleryOptions): PromiseLike<IHttpResponse<IQueryModel<IMediaGalleryFile>>> {
        return this.apiClient.get<IQueryModel<IMediaGalleryFile>>(this.routeDefinition.find(options));
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
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMediaGalleryFile>> {
        return this.apiClient.get<IMediaGalleryFile>(this.routeDefinition.get(id, options));
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
    update(data: IMediaGalleryFile): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.updateParams(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove one media gallery file resources from the system if successfully completed. Specified media gallery file and all accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicMediaGalleryFileRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(mediaGalleryFileEntry); 
     * let uri = params['id'].links('delete').href; 
     * ```                  
     * @method 
     * @param id Media gallery file id used to delete specific Media gallery resource from the system.
     * @example // id is a media gallery file resource id previously fetched using get action. The following action will remove the original media gallery file resource and all accompanying derived media gallery file resources.		
                   mediaGalleryFileClient.remove(id)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       });                						
    **/
    remove(id: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unlink(id));
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
    create(data: IMediaGalleryFile): PromiseLike<IHttpResponse<IMediaGalleryFile>> {
        return this.apiClient.post<IMediaGalleryFile>(this.routeDefinition.link(data), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */