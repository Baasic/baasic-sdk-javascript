/* globals module */
/**  
 * @module mediaVaultClient  
 * @description  Media Vault Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    MediaVaultBatchClient,
    MediaVaultProcessingProviderSettingsClient,
    MediaVaultRouteDefinition,
    MediaVaultSettingsClient,
    MediaVaultStreamsClient,
    TYPES as mediaVaultTypes
} from 'modules/mediaVault';
import { IMediaEntry } from 'modules/mediaVault/contracts';

@injectable()
export class MediaVaultClient {

    get routeDefinition(): MediaVaultRouteDefinition {
        return this.baasicMediaVaultRouteDefinition;
    }

    get streams(): MediaVaultStreamsClient {
        return this.mediaVaultStreamsClient;
    }

    get batch(): MediaVaultBatchClient {
        return this.mediaVaultBatchClient;
    }

    get settings(): MediaVaultSettingsClient {
        return this.mediaVaultSettingsClient;
    }

    get processingProviderSettings(): MediaVaultProcessingProviderSettingsClient {
        return this.mediaVaultProcessingProviderSettingsClient;
    }

    constructor(
        @inject(mediaVaultTypes.MediaVaultRouteDefinition) protected baasicMediaVaultRouteDefinition: MediaVaultRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
        @inject(mediaVaultTypes.MediaVaultStreamsClient) protected mediaVaultStreamsClient: MediaVaultStreamsClient,
        @inject(mediaVaultTypes.MediaVaultBatchClient) protected mediaVaultBatchClient: MediaVaultBatchClient,
        @inject(mediaVaultTypes.MediaVaultSettingsClient) protected mediaVaultSettingsClient: MediaVaultSettingsClient,
        @inject(mediaVaultTypes.MediaVaultProcessingProviderSettingsClient) protected mediaVaultProcessingProviderSettingsClient: MediaVaultProcessingProviderSettingsClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of media vault resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                          
     * @example mediaVaultClient.find({
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IMediaEntry>>> {
        return this.apiClient.get<IQueryModel<IMediaEntry>>(this.baasicMediaVaultRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested media vault resource.                 
     * @method
     * @param id Media vault id which uniquely identifies media vault resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                         
     * @example mediaVaultClient.get('<media-vault-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMediaEntry>> {
        return this.apiClient.get<IMediaEntry>(this.baasicMediaVaultRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update media vault action has been performed; this action will update a media vault resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMediaVaultRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(mediaVaultEntry); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A media vault object used to update specified media vault resource.
     * @returns A promise that is resolved once the update media vault action has been performed.                          
     * @example // mediaVaultEntry is a media vault resource previously fetched using get action. 
                    mediaVaultEntry.description = '<description>'; 
                    mediaVaultClient.update(mediaVaultEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMediaEntry): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.baasicMediaVaultRouteDefinition.updateParams(data), this.baasicMediaVaultRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove one or many media vault resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of media vault resource, the operation will remove just derived resource. Otherwise, specified media vault and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicMediaVaultRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(mediaVaultEntry); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method 
     * @param data Media vault object used to delete specific Media vault resource from the system.
     * @param options Options object.                        
     * @example // mediaVaultEntry is a media vault resource previously fetched using get action. The following action will remove the original media vault resource and all accompanying derived media vault resources.		
                   mediaVaultClient.remove(mediaVaultEntry)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       }); 
               // mediaVaultEntry is a media vault resource previously fetched using get action. The following action will remove derived media vault resource only.		 
                   mediaVaultClient.remove(mediaVaultEntry, {width: <width>, height: <height>})
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       });						
    **/
    remove(data: IMediaEntry, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.baasicMediaVaultRouteDefinition.delete(data, options));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */