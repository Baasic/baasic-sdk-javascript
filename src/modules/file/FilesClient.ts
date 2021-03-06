/* globals module */
/**  
 * @module filesClient  
 * @description  Files Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    FilesACLClient,
    FilesBatchClient,
    FilesRoute,
    FilesStreamsClient,
    TYPES as filesTypes
} from './';
import { IFileEntry } from './contracts';

@injectable()
export class FilesClient {

    get routeDefinition(): FilesRoute {
        return this.filesRoute;
    }

    get streams(): FilesStreamsClient {
        return this.filesStreamsClient;
    }

    get batch(): FilesBatchClient {
        return this.filesBatchClient;
    }

    get acl(): FilesACLClient {
        return this.filesACLClient;
    }

    constructor(
        @inject(filesTypes.FilesRoute) protected filesRoute: FilesRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
        @inject(filesTypes.FilesStreamsClient) protected filesStreamsClient: FilesStreamsClient,
        @inject(filesTypes.FilesBatchClient) protected filesBatchClient: FilesBatchClient,
        @inject(filesTypes.FilesACLClient) protected filesACLClient: FilesACLClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
     * @method 
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example filesClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IFileEntry>>> {
        return this.apiClient.get<IQueryModel<IFileEntry>>(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method  
     * @param id File id which uniquely identifies file resource that needs to be retrieved.
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the get action has been performed.                      
     * @example filesClient.get('<file-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IFileEntry>> {
        return this.apiClient.get<IFileEntry>(this.filesRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `filesRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(fileEntry); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A file entry object used to update specific file entry resource in the system.                          
     * @example // fileEntry is a file resource previously fetched using get action. 
                    fileEntry.description = '<description>'; 
                    filesClient.update(fileEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IFileEntry): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicFilesRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                  
     * @method 
     * @param data
     * @param options
     * @returns A promise that is resolved once the unlink action has been performed.                         
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                    filesClient.unlink(fileEntry) 
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 
                // fileEntry is a file resource previously fetched using get action. The following action will remove derived file resource only.		 
                    filesClient.unlink(fileEntry, {width: <width>, height: <height>})
                        .then(function (data) {   
                            // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });						
     **/
    unlink(data: IFileEntry, options?: IOptions): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.filesRoute.unlink(data, options));
    }

    /**                  
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                  
     * @method
     * @param data A file object that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                      
     * @example filesClient.link(fileObject)
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                 
    **/
    link(data: IFileEntry): PromiseLike<IHttpResponse<IFileEntry>> {
        return this.apiClient.post(this.routeDefinition.link(), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
    */