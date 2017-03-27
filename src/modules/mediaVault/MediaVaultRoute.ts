/* globals module */
/**  
 * @module mediaVaultRoute  
 * @description Baasic Media Vault Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import {
    MediaVaultBatchRoute,
    MediaVaultProcessingProviderSettingsRoute,
    MediaVaultSettingsRoute,
    MediaVaultStreamsRoute,
    TYPES as mediaVaultTypes
} from './';
import { IMediaEntry } from './contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class MediaVaultRoute extends BaseRoute {

    public readonly findRoute: string = 'media-vaults/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'media-vaults/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'media-vaults/{id}';

    public readonly deleteRoute: string = 'media-vaults/{id}/{?height,width}';
    
    get streams(): MediaVaultStreamsRoute {
        return this.mediaVaultStreamsRoute;
    }

    get batch(): MediaVaultBatchRoute {
        return this.mediaVaultBatchRoute;
    }

    get settings(): MediaVaultSettingsRoute {
        return this.mediaVaultSettingsRoute;
    }

    get processingProviderSettings(): MediaVaultProcessingProviderSettingsRoute {
        return this.mediaVaultProcessingProviderSettingsRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(mediaVaultTypes.MediaVaultStreamsRoute) protected mediaVaultStreamsRoute: MediaVaultStreamsRoute,
        @inject(mediaVaultTypes.MediaVaultBatchRoute) protected mediaVaultBatchRoute: MediaVaultBatchRoute,
        @inject(mediaVaultTypes.MediaVaultSettingsRoute) protected mediaVaultSettingsRoute: MediaVaultSettingsRoute,
        @inject(mediaVaultTypes.MediaVaultProcessingProviderSettingsRoute) protected mediaVaultProcessingProviderSettingsRoute: MediaVaultProcessingProviderSettingsRoute
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing media vault properties using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain media vault subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the media vault property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example mediaVaultRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of media vault resource.                 
     * @method 
     * @param id Media vault id which uniquely identifies media vault resource that needs to be retrieved.
     * @param options Query resource options object.                       
     * @example mediaVaultRoute.get({id: '<media-vault-id>'});                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses update route; this route should be expanded with the Id of media vault resource.                 
     * @method 
     * @param data Media vault object used to update specific Media vault resource in the system.                 
     * @example mediaVaultRoute.get({id: '<media-vault-id>'});                               
     **/
    update(data: IMediaEntry): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete route; this route should be expanded with the Id of media vault resource.                 
     * @method 
     * @param data Media vault object used to update specific Media vault resource in the system. 
     * @param options Options object.                
     * @example mediaVaultRoute.delete({id: '<media-vault-id>'});                               
     **/
    delete(data: IMediaEntry, options?: Object): any {
        return super.baseDelete(this.deleteRoute, data, options);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */