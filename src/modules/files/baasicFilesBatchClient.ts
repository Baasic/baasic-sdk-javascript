/* globals module */
/**  
 * @module baasicFilesBatchClient  
 * @description Baasic Files Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicFilesBatchRouteDefinition, TYPES as filesTypes } from 'modules/files';
import { IFileEntry } from 'modules/files/contracts';

@injectable()
export class BaasicFilesBatchClient {

    get routeDefinition(): BaasicFilesBatchRouteDefinition {
        return this.baasicFilesBatchRouteDefinition;
    }

    constructor(
        @inject(filesTypes.BaasicFilesBatchRouteDefinition) protected baasicFilesBatchRouteDefinition: BaasicFilesBatchRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                   
     * @method 
     * @param data A collection of file objects used to update specified file resources.
     * @returns A promise that is resolved once the update action has been performed.                      
     * @example baasicFilesClient.update(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                   
     **/
    update(data: IFileEntry[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicFilesBatchRouteDefinition.update(), this.baasicFilesBatchRouteDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
     * @method
     * @param data A collection of file objects that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                       
     * @example baasicFilesBatchClient.link(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                   
     **/
    link(data: IFileEntry[]): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicFilesBatchRouteDefinition.link(), this.baasicFilesBatchRouteDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
     * @method  
     * @param data Collection of file delete requests which uniquely identifies file resources that need to be deleted.                        
     * @returns A promise that is resolved once the unlink action has been performed. 
     * @example // Remove original file resources                
                    baasicFilesBatchClient.unlink([{ id: '<file-id>' }])
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                            // perform error handling here 
                        });		
                // Remove derived file resources  
                    baasicFilesBatchClient.unlink([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });		                    
     **/
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicFilesBatchRouteDefinition.unlink(), this.baasicFilesBatchRouteDefinition.deleteParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
     * @method
     * @param data Collection of file delete requests which uniquely identifies file resources that need to be deleted.
     * @returns A promise that is resolved once the unlink action has been performed.                       
     * @example // Remove original file resources                
                    baasicFilesBatchClient.remove([{ id: '<file-id>' }])
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });		
                // Remove derived file resources  
                        baasicFilesBatchClient.remove([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });		                    
     **/
    remove(data: Object[]): PromiseLike<IHttpResponse<void>> {
        return this.unlink(data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */