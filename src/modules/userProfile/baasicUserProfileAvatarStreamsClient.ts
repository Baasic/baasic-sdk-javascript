/* globals module */
/**  
 * @module baasicUserProfileAvatarStreamsClient  
 * @description  User Profile Avatar Streams Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Profile Avatar Streams Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicUserProfileAvatarStreamsRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';

@injectable()
export class UserProfileAvatarStreamsClient {

    get routeDefinition(): BaasicUserProfileAvatarStreamsRouteDefinition {
        return this.baasicUserProfileAvatarStreamsRouteDefinition;
    }

    constructor(
        @inject(userProfileTypes.BaasicUserProfileAvatarStreamsRouteDefinition) protected baasicUserProfileAvatarStreamsRouteDefinition: BaasicUserProfileAvatarStreamsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.                     
     * @method 
     * @param data User unique identifier.
     * @returns A promise that is resolved once the get action has been performed.                           
     * @example // Request the original file stream              
                    baasicUserProfileAvatarStreamsClient.get({id: '<file-id>'})
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here 
                        });                    
                    // Request derived file stream                
                    baasicUserProfileAvatarStreamsClient.get({id: '<file-id>', width: <width>, height: <height>})
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here 
                        });                     
     **/
    get(data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicUserProfileAvatarStreamsRouteDefinition.get(data));
    }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
     * @method                          
     * @example // Request the original blob                
                    baasicUserProfileAvatarStreamsClient.getBlob('<file-id>')
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here 
                        }); 
                        // Request derived blob                 
                        baasicUserProfileAvatarStreamsClient.getBlob({id: '<file-id>', width: <width>, height: <height>})
                            .then(function (data) {     
                                // perform success action here 
                            },
                             function (response, status, headers, config) {     
                                 // perform error handling here 
                            });                     
     **/
    getBlob(data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicUserProfileAvatarStreamsRouteDefinition.get(data), { 'Accept': 'application/octet-stream' });
    }

    /**                     
     * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
     * @method
     * @param id
     * @param data
     * @param stream
     * @returns A promise that is resolved once the create file stream action has been performed.                    
     * @example baasicUserProfileAvatarStreamsClient.create('<file-id>', '<filename'>, <blob>)
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });                    
     **/
    create(id: string, data: any, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.baasicApiClient.post(this.baasicUserProfileAvatarStreamsRouteDefinition.create(id, data), data, { 'Content-Type': undefined });
    }

    /**                     
     * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).                     
     * @method
     * @param data
     * @param stream
     * @returns A promise that is resolved once the update file stream action has been performed.                     
     * @example // Update original file stream 
                    baasicUserProfileAvatarStreamsClient.update('<file-id>', <file-stream>)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        }); 
                        // Update derived file stream 
                        baasicUserProfileAvatarStreamsClient.update({id: '<file-id>', width: <width>, height: <height>}, <file-stream>)
                            .then(function (data) {  
                                // perform success action here 
                            },
                             function (response, status, headers, config) {  
                                 // perform error handling here 
                            });                    
     **/
    update(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.baasicApiClient.put(this.baasicUserProfileAvatarStreamsRouteDefinition.update(data), data, { 'Content-Type': undefined });
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */