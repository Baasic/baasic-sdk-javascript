/* globals module */
/**  
 * @module baasicMediaVaultSettingsClient  
 * @description Baasic Media Vault Settings Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Settings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicMediaVaultSettingsRouteDefinition, TYPES as mediaVaultTypes } from 'modules/mediaVault';
import { IMediaVaultSettings } from 'modules/mediaVault/contracts';

@injectable()
export class BaasicMediaVaultSettingsClient {

    constructor(
        @inject(mediaVaultTypes.BaasicMediaVaultSettingsRouteDefinition) protected baasicMediaVaultSettingsRouteDefinition: BaasicMediaVaultSettingsRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns media vault settings resource.                     
     * @method    
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example baasicMediaVaultSettingsClient.get()
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                     
     **/
    get(): PromiseLike<IHttpResponse<IMediaVaultSettings>> {
        return this.baasicApiClient.get(this.baasicMediaVaultSettingsRouteDefinition.get());
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates the media vault settings resource.                   
     * @method    
     * @param data A media vault settings object used to update media vault settings in the system.
     * @returns A promise that is resolved once the update action has been performed.                    
     * @example baasicMediaVaultSettingsClient.update(mediaVaultSettings)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                   
     **/
    update(data: IMediaVaultSettings): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicMediaVaultSettingsRouteDefinition.update(), this.baasicMediaVaultSettingsRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */