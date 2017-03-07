/* globals module */
/**  
 * @module baasicArticleInstanceFilesStreamsClient  
 * @description Baasic Article Instance Files Streams Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Streams Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicArticleInstanceFilesStreamsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceFilesStreamsClient {

    get routeDefinition(): BaasicArticleInstanceFilesStreamsRouteDefinition {
        return this.baasicArticleInstanceFilesStreamsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleInstanceFilesStreamsRouteDefinition) protected baasicArticleInstanceFilesStreamsRouteDefinition: BaasicArticleInstanceFilesStreamsRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.                     
     * @method streams.get                            
     * @example // Request the original file stream              
                    baasicArticleInstanceFilesStreamsClient.get({id: '<file-id>'})
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                            // perform error handling here 
                        });

                // Request derived file stream                
                        baasicArticleInstanceFilesStreamsClient.get({id: '<file-id>', width: <width>, height: <height>})
                            .then(function (data) {     
                                // perform success action here 
                            },
                             function (response, status, headers, config) {    
                                 // perform error handling here 
                            });                     
     **/
    get(articleId: string, data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicArticleInstanceFilesStreamsRouteDefinition.get(articleId, data));
    }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
     * @method streams.getBlob                            
     * @example // Request the original blob                
                    baasicArticleInstanceFilesStreamsClient.getBlob('<file-id>')
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                            // perform error handling here 
                        }); 
                        
                // Request derived blob                 
                        baasicArticleInstanceFilesStreamsClient.getBlob({
                            id: '<file-id>', 
                            width: <width>, 
                            height: <height>
                        })
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                            // perform error handling here 
                        });                     
     **/
    getBlob(articleId: string, data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicArticleInstanceFilesStreamsRouteDefinition.get(articleId, data), { 'Accept': 'application/octet-stream' });
    }

    /**                      
     * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).                      
     * @method streams.update                      
     * @example // Update original file stream 
                    baasicArticleInstanceFilesStreamsClient.update('<file-id>', <file-stream>)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 
                // Update derived file stream 
                    baasicArticleInstanceFilesStreamsClient.update({id: '<file-id>', width: <width>, height: <height>}, <file-stream>)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });                     
     **/
    update(articleId: string, data: any, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.baasicApiClient.put(this.baasicArticleInstanceFilesStreamsRouteDefinition.update(articleId, data), formData, { 'Content-Type': undefined });
    }

    /**                      
     * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                      
     * @method streams.create                      
     * @example baasicArticleInstanceFilesStreamsClient.create('<file-id>', <blob>)
                   .then(function (data) {  
                        // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   });                     
    **/
    create(articleId: string, data: IArticleFile, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.baasicApiClient.post(this.baasicArticleInstanceFilesStreamsRouteDefinition.create(articleId, data), formData, { 'Content-Type': undefined });
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/