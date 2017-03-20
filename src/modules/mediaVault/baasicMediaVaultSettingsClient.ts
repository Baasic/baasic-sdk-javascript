/* globals module */
/**  
 * @module mediaVaultSettingsClient  
 * @description  Media Vault Settings Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Settings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { MediaVaultSettingsRouteDefinition, TYPES as mediaVaultTypes } from 'modules/mediaVault';
import { IMediaVaultSettings } from 'modules/mediaVault/contracts';

@injectable()
export class MediaVaultSettingsClient {


    get routeDefinition(): MediaVaultSettingsRouteDefinition {
        return this.mediaVaultSettingsRouteDefinition;
    }

    constructor(
        @inject(mediaVaultTypes.MediaVaultSettingsRouteDefinition) protected mediaVaultSettingsRouteDefinition: MediaVaultSettingsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns media vault settings resource.                     
     * @method    
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example mediaVaultSettingsClient.get()
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                     
     **/
    get(): PromiseLike<IHttpResponse<IMediaVaultSettings>> {
        return this.apiClient.get<IMediaVaultSettings>(this.mediaVaultSettingsRouteDefinition.get());
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates the media vault settings resource.                   
     * @method    
     * @param data A media vault settings object used to update media vault settings in the system.
     * @returns A promise that is resolved once the update action has been performed.                    
     * @example mediaVaultSettingsClient.update(mediaVaultSettings)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                   
     **/
    update(data: IMediaVaultSettings): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.mediaVaultSettingsRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */