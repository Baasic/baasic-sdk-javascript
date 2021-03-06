/* globals module */
/**  
 * @module mediaVaultProcessingProviderSettingsClient  
 * @description  Media Vault Processing Provider Settings Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Processing Provider Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MediaVaultProcessingProviderSettingsRoute, TYPES as mediaVaultTypes } from './';
import { IPreprocessingProviderSettings } from './contracts';

@injectable()
export class MediaVaultProcessingProviderSettingsClient {

    get routeDefinition(): MediaVaultProcessingProviderSettingsRoute {
        return this.mediaVaultProcessingProviderSettingsRoute;
    }

    constructor(
        @inject(mediaVaultTypes.MediaVaultProcessingProviderSettingsRoute) protected mediaVaultProcessingProviderSettingsRoute: MediaVaultProcessingProviderSettingsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                    
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of media vault processing providers matching the given criteria.                    
     * @method 
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                          
     * @example mediaVaultProcessingProviderSettingsClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IPreprocessingProviderSettings>>> {
        return this.apiClient.get<IQueryModel<IPreprocessingProviderSettings>>(this.routeDefinition.find(options));
    }

    /**                   
     * Returns a promise that is resolved once the get action has been performed. Success response returns the media vault processing provider resource.                   
     * @method       
     * @param id Preprocessing provider id which uniquely identifies preprocessing provider whose settings need to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                   
     * @example mediaVaultProcessingProviderSettingsClient.get('<id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                   
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IPreprocessingProviderSettings>> {
        return this.apiClient.get<IPreprocessingProviderSettings>(this.mediaVaultProcessingProviderSettingsRoute.get(id, options));
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates a media vault processing provider setting resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `mediaVaultProcessingProviderSettingsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(processingProviderSetting); 
     * let uri = params['model'].links('put').href; 
     * ```                   
     * @method
     * @param data A media vault preprocessing provider settings object used to update specified media vault preprocessing provider settings in the system.
     * @returns A promise that is resolved once the update action has been performed.                          
     * @example // processingProviderSettings is a resource previously fetched using get action. 
                    processingProviderSettings.settings.faceDetection = true; 
                    mediaVaultProcessingProviderSettingsClient.update(processingProviderSetting)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 			
     **/
    update(data: IPreprocessingProviderSettings): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */