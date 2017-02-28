/* globals module */
/**  
 * @module baasicMediaVaultStreamsClient  
 * @description Baasic Media Vault Streams Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Streams Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicMediaVaultStreamsRouteDefinition, TYPES as mediaVaultTypes } from 'modules/mediaVault';

export class BaasicMediaVaultStreamsClient {

    get routeDefinition(): BaasicMediaVaultStreamsRouteDefinition {
        return this.baasicMediaVaultStreamsRouteDefinition;
    }

    constructor(
        @inject(mediaVaultTypes.BaasicMediaVaultStreamsRouteDefinition) protected baasicMediaVaultStreamsRouteDefinition: BaasicMediaVaultStreamsRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the media vault stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of media vault resource, the operation will return a stream of the derived resource. Otherwise, stream of the original media vault resource will be retrieved.                     
     * @method                            
     * @example // Request the original media vault stream   
                        baasicMediaVaultStreamsClient.get('<path>')
                            .then(function (data) {     
                                // perform success action here 
                            },
                             function (response, status, headers, config) {     
                                 // perform error handling here 
                            }); 
                // Request derived media vault stream 
                        baasicMediaVaultStreamsClient.get({id: '<path>', width: <width>, height: <height>})
                            .then(function (data) {     
                                // perform success action here 
                            },
                             function (response, status, headers, config) {     
                                 // perform error handling here 
                            });                     
     **/
    get(data: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicMediaVaultStreamsRouteDefinition.get(data));
    }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the media vault stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of media vault resource, the operation will return a blob of the derived media vault resource. Otherwise, blob of the original media vault resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
     * @method                            
     * @example // Request the original blob   
                        baasicMediaVaultStreamsClient.getBlob('<path>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {     
                                 // perform error handling here 
                            }); 
                // Request derived blob   
                        baasicMediaVaultStreamsClient.getBlob({id: '<path>', width: <width>, height: <height>})
                            .then(function (data) {     
                                // perform success action here 
                            },
                             function (response, status, headers, config) {     
                                 // perform error handling here 
                            });                     
     **/
    getBlob(data: any): PromiseLike<IHttpResponse<any>> {
        // responseType: 'blob'
        return this.baasicApiClient.get(this.baasicMediaVaultStreamsRouteDefinition.get(data));
    }

    /**                      
     * Returns a promise that is resolved once the create media vault stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                      
     * @method                   
     * @example baasicMediaVaultStreamsClient.create('<path>', <blob>)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here
                    });                     
     **/
    create(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.baasicApiClient.post(this.baasicMediaVaultStreamsRouteDefinition.create(data), formData, { 'Content-Type': undefined });
    }

    /**                      
     * Returns a promise that is resolved once the update media vault stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of media vault stream data type).                      
     * @method                      
     * @example // Update existing original media vault stream 
                        baasicMediaVaultStreamsClient.update('<path>', <media-vault-stream>)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            }); 
                // Update derived media vault stream 
                    baasicMediaVaultStreamsClient.update({id: '<path>', width: <width>, height: <height>}, <media-vault-stream>)
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
        return this.baasicApiClient.put(this.baasicMediaVaultStreamsRouteDefinition.update(data), formData, { 'Content-Type': undefined });
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */