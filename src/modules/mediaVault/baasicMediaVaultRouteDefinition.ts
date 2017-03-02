/* globals module */
/**  
 * @module baasicMediaVaultRouteDefinition  
 * @description Baasic Media Vault Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import {
    BaasicMediaVaultBatchRouteDefinition,
    BaasicMediaVaultProcessingProviderSettingsRouteDefinition,
    BaasicMediaVaultSettingsRouteDefinition,
    BaasicMediaVaultStreamsRouteDefinition,
    TYPES as mediaVaultTypes
} from 'modules/mediaVault';
import { IMediaEntry } from 'modules/mediaVault/contracts';

export class BaasicMediaVaultRouteDefinition extends BaasicBaseRouteDefinition {

    get streams(): BaasicMediaVaultStreamsRouteDefinition {
        return this.baasicMediaVaultStreamsRouteDefinition;
    }

    get batch(): BaasicMediaVaultBatchRouteDefinition {
        return this.baasicMediaVaultBatchRouteDefinition;
    }

    get settings(): BaasicMediaVaultSettingsRouteDefinition {
        return this.baasicMediaVaultSettingsRouteDefinition;
    }

    get processingProviderSettings(): BaasicMediaVaultProcessingProviderSettingsRouteDefinition {
        return this.baasicMediaVaultProcessingProviderSettingsRouteDefinition;
    }

    constructor(
        @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper,
        @inject(mediaVaultTypes.BaasicMediaVaultStreamsRouteDefinition) protected baasicMediaVaultStreamsRouteDefinition: BaasicMediaVaultStreamsRouteDefinition,
        @inject(mediaVaultTypes.BaasicMediaVaultBatchRouteDefinition) protected baasicMediaVaultBatchRouteDefinition: BaasicMediaVaultBatchRouteDefinition,
        @inject(mediaVaultTypes.BaasicMediaVaultSettingsRouteDefinition) protected baasicMediaVaultSettingsRouteDefinition: BaasicMediaVaultSettingsRouteDefinition,
        @inject(mediaVaultTypes.BaasicMediaVaultProcessingProviderSettingsRouteDefinition) protected baasicMediaVaultProcessingProviderSettingsRouteDefinition: BaasicMediaVaultProcessingProviderSettingsRouteDefinition
    ) { super(modelMapper); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing media vault properties using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain media vault subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the media vault property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example baasicMediaVaultRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind('media-vaults/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of media vault resource.                 
     * @method 
     * @param id Media vault id which uniquely identifies media vault resource that needs to be retrieved.
     * @param options Query resource options object.                       
     * @example baasicMediaVaultRouteDefinition.get({id: '<media-vault-id>'});                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('media-vaults/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses update route; this route should be expanded with the Id of media vault resource.                 
     * @method 
     * @param data Media vault object used to update specific Media vault resource in the system.                 
     * @example baasicMediaVaultRouteDefinition.get({id: '<media-vault-id>'});                               
     **/
    update(data: IMediaEntry): any {
        return super.baseUpdate('media-vaults/{id}', data);
    }

    /**                 
     * Parses delete route; this route should be expanded with the Id of media vault resource.                 
     * @method 
     * @param data Media vault object used to update specific Media vault resource in the system. 
     * @param options Options object.                
     * @example baasicMediaVaultRouteDefinition.delete({id: '<media-vault-id>'});                               
     **/
    delete(data: IMediaEntry, options?: Object): any {
        if (!options) {
            options = {};
        }
        let params = this.modelMapper.removeParams(data);
        if ('HAL') {
            return super.parse(params[this.modelMapper.modelPropertyName].links('delete').href + '{?height,width}').expand(options);
        } else {
            return super.parse('media-vaults/{id}/{?height,width}').expand(options);
        }
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */