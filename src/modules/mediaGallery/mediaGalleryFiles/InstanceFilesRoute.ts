/* globals module */
/**  
 * @module mediaGalleryInstanceFilesRoute  
 * @description Baasic Media Gallery Instance Files Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';;
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import {
    MediaGalleryInstanceFilesBatchRoute,
    TYPES as mediaGalleryTypes
} from '../';
import { IMediaGalleryFile, IMediaGalleryOptions } from '../contracts';

@injectable()
export class MediaGalleryInstanceFilesRoute extends BaseRoute {

    public readonly findRoute: string = 'media-galleries/{mediaGalleryId}/files/{?searchQuery,fileName,minFileSize,maxFileSize,ids,from,to,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'media-galleries/{mediaGalleryId}/files/{id}/{?embed,fields}';

    public readonly linkRoute: string = 'media-galleries/{mediaGalleryId}/files/link';

    public readonly unlinkRoute: string = 'media-galleries/{mediaGalleryId}/files/unlink/{id}';

    public readonly unlinkByMediaGalleryRoute: string = 'media-galleries/{mediaGalleryId}/files/unlink';

    public readonly updateRoute: string = 'media-galleries/{mediaGalleryId}/files/{id}';

    get batch(): MediaGalleryInstanceFilesBatchRoute {
        return this.mediaGalleryInstanceFilesBatchRoute;
    }

    constructor(
        @inject(mediaGalleryTypes.MediaGalleryInstanceFilesBatchRoute) protected mediaGalleryInstanceFilesBatchRoute: MediaGalleryInstanceFilesBatchRoute,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing file properties using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain file subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the file property to sort the result collection by. 	
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param mediaGalleryId Media Gallery slug or id which uniquely identifies media gallery whose media gallery files need to be retrieved.
     * @param options Query resource options object.                        
     * @example mediaGalleryInstanceFilesRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(mediaGalleryId: string, options?: IMediaGalleryOptions): any {
        let params = this.modelMapper.findParams(options);
        params.mediaGalleryId = mediaGalleryId;
        return super.baseGet(this.findRoute, params);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of the file resource.
     * @method
     * @param mediaGalleryId Media Gallery id which uniquely identifies media gallery whose media gallery files need to be retrieved.
     * @param id Media Gallery file id which uniquely identifies media gallery file that needs to be retrieved.
     * @param options options object that contains embed data. 
     * @example mediaGalleryInstanceFilesRoute.get({id: '<file-id>'});
     **/
    get(mediaGalleryId: string, id: string, options?: IGetRequestOptions): any {
        let params = this.utility.extend({}, options);
        params.mediaGalleryId = mediaGalleryId;
        params.id = id;
        return super.baseGet(this.getRoute, params);
    }

    /**
     * Parses link route; this URI template does not expose any additional options.
     * @method
     * @param mediaGalleryId Media Gallery id which uniquely identifies media gallery whose media gallery files need to be deleted.
     * @param data
     * @param options  
     * @example mediaGalleryInstanceFilesRoute.link();
     **/
    link(mediaGalleryId: string, data: IMediaGalleryFile): any {
        let params = this.utility.extend({}, data);
        params.mediaGalleryId = mediaGalleryId;
        return super.baseCreate(this.linkRoute, params);
    }

    /**
     * Parses unlink route; this URI template does not expose any additional options.
     * @method
     * @param mediaGalleryId Media Gallery id which uniquely identifies gallery whose gallery files need to be deleted.
     * @param data
     * @example mediaGalleryFilesRoute.unlink(mediaGalleryId,data);
     **/
    unlink(mediaGalleryId: string, data: IMediaGalleryFile): any {
        data.mediaGalleryId = mediaGalleryId;
        return super.baseDelete(this.unlinkRoute, data);
    }

    /**
     * Parses unlink by media gallery route; this URI template does not expose any additional options.
     * @method
     * @param mediaGalleryId Media Gallery id which uniquely identifies media gallery whose media gallery files need to be deleted.
     * @param data
     * @param options  
     * @example mediaGalleryFilesRoute.unlinkByMediaGallery(data);
     **/
    unlinkByMediaGallery(mediaGalleryId: string, options?: any) {
        return super.baseDelete(this.unlinkByMediaGalleryRoute, mediaGalleryId, options, 'unlink-by-media-gallery');
    }

    /**
     * Parses update route; this URI template does not expose any additional options.
     * @method  
     * @example mediaGalleryInstanceFilesRoute.update(data);
     **/
    update(mediaGalleryId: string, data: IMediaGalleryFile): any {
        let params = this.modelMapper.updateParams(data);
        params.mediaGalleryId = mediaGalleryId;
        return super.baseUpdate(this.updateRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/