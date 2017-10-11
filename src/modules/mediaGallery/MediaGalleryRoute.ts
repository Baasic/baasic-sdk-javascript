/* globals module */
/**  
 * @module MediaGalleryRoute  
 * @description Baasic Media Gallery Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import {    
    TYPES as mediaGalleryTypes,
    MediaGalleryBatchRoute
} from './';
import { IMediaGallery, IMediaGalleryOptions } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class MediaGalleryRoute extends BaseRoute {

    public readonly findRoute: string = 'media-galleries/{?searchQuery,ids,from,to,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'media-galleries/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'media-galleries/{id}';

    public readonly deleteRoute: string = 'media-galleries/{id}';

    public readonly createRoute: string = 'media-galleries/';

    public readonly purgeRoute: string = 'media-galleries/purge';
    
    get streams(): MediaGalleryStreamsRoute {
        return this.mediaGalleryStreamsRoute;
    }

    get batch(): MediaGalleryBatchRoute {
        return this.mediaGalleryBatchRoute;
    }

    get settings(): MediaGallerySettingsRoute {
        return this.mediaGallerySettingsRoute;
    }

    get processingProviderSettings(): MediaGalleryProcessingProviderSettingsRoute {
        return this.mediaGalleryProcessingProviderSettingsRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(mediaGalleryTypes.MediaGalleryStreamsRoute) protected mediaGalleryStreamsRoute: MediaGalleryStreamsRoute,
        @inject(mediaGalleryTypes.MediaGalleryBatchRoute) protected mediaGalleryBatchRoute: MediaGalleryBatchRoute,
        @inject(mediaGalleryTypes.MediaGallerySettingsRoute) protected mediaGallerySettingsRoute: MediaGallerySettingsRoute,
        @inject(mediaGalleryTypes.MediaGalleryProcessingProviderSettingsRoute) protected mediaGalleryProcessingProviderSettingsRoute: MediaGalleryProcessingProviderSettingsRoute
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing media gallery properties using the phrase search.               
     * - `ids` - Comma separated list of media gallery ids to be retrieved.       *              
     * - `from` - The from date.               
     * - `to` - The to date.  
     * - `page` - A value used to set the page number, i.e. to retrieve certain media gallery subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the media gallery property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example mediaGalleryRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IMediaGalleryOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of media gallery resource.                 
     * @method 
     * @param id Media gallery id which uniquely identifies media gallery resource that needs to be retrieved.
     * @param options Query resource options object.                       
     * @example mediaGalleryRoute.get({id: '<media-gallery-id>'});                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses update route; this route should be expanded with the Id of media gallery resource.                 
     * @method 
     * @param data Media gallery object used to update specific Media gallery resource in the system.                 
     * @example mediaGalleryRoute.update(data);                               
     **/
    update(data: IMediaGallery): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete route; this route should be expanded with the Id of media gallery resource.                 
     * @method 
     * @param id Media gallery object id used to delete specific Media gallery resource in the system. 
     * @example mediaGalleryRoute.delete({id: '<media-gallery-id>'});                               
     **/
    delete(id: string): any {
        return super.baseDelete(this.deleteRoute, id);
    }

     /**
     * Parses create route; this URI template doesnt support any additional options.
     * @method
     * @param data An media gallery  object that needs to be inserted into the system.
     * @example mediaGalleryRoute.create(data);
     **/
    create(data: IMediaGallery): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**                     
     * Parses purge route; this URI template does not expose any additional options.                                             
     * @method                           
     * @example mediaGalleryPurgeRoute.purge();                                 
     **/
    purge(): any {
        return super.baseDelete(this.purgeRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */