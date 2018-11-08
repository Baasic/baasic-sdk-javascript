/* globals module */
/**  
 * @module mediaVaultProcessingProviderSettingsRoute  
 * @description Baasic Media Vault Processing Provider Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Processing Provider Settings Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IPreprocessingProviderSettings } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class MediaVaultProcessingProviderSettingsRoute extends BaseRoute {

    public readonly findRoute: string = 'media-vault-preprocessing-settings/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'media-vault-settings';

    public readonly updateRoute: string = 'media-vault-preprocessing-settings/{id}';

    constructor(@inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses find route which can be expanded with additional options. Supported items are:                     
     * - `searchQuery` - A string referencing media vault processing provider setting properties using the phrase search.                     
     * - `page` - A value used to set the page number, i.e. to retrieve certain media vault processing provider setting subset from the storage.                     
     * - `rpp` - A value used to limit the size of result set per page.                     
     * - `sort` - A string used to set the media vault processing provider setting property to sort the result collection by.                     
     * - `embed` - Comma separated list of resources to be contained within the current representation.                     
     * @method                            
     * @example mediaVaultProcessingProviderSettingsRoute.find({searchQuery: '<search-phrase>'});                                   
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                     
     * Parses get route; this route should be expanded with Id of the media vault processing provider setting resource.                     
     * @method                            
     * @example mediaVaultProcessingProviderSettingsRoute.get({id: '<id>'});                                   
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                     
     * Parses update route; this route should be expanded with Id of the media vault processing provider setting resource.                     
     * @method   
     * @param data A media vault preprocessing provider settings object used to update specified media vault preprocessing provider settings in the system.                         
     * @example mediaVaultProcessingProviderSettingsRoute.update(data);                                   
     **/
    update(data: IPreprocessingProviderSettings): any {
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */