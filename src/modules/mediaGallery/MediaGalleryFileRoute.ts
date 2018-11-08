/* globals module */
/**  
 * @module MediaGalleryFileRoute  
 * @description Baasic Media Gallery File Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery File Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import {
    TYPES as mediaGalleryTypes,
    MediaGalleryFileBatchRoute
} from './';
import { IMediaGalleryFile, IMediaGalleryOptions } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class MediaGalleryFileRoute extends BaseRoute {

    public readonly findRoute: string = 'media-gallery-files/{?searchQuery,fileName,minFileSize,maxFileSize,ids,from,to,page,rpp,sort,embed,fields,mediaGalleryIds,isCover}';

    public readonly getRoute: string = 'media-gallery-files/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'media-gallery-files/{id}';

    public readonly unlinkRoute: string = 'media-gallery-files/unlink({id}';

    public readonly linkRoute: string = 'media-gallery-files/';


    get batch(): MediaGalleryFileBatchRoute {
        return this.mediaGalleryBatchRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(mediaGalleryTypes.MediaGalleryFileBatchRoute) protected mediaGalleryBatchRoute: MediaGalleryFileBatchRoute
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
     * @example mediaGalleryFileRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IMediaGalleryOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of media gallery resource.                 
     * @method 
     * @param id Media gallery file id which uniquely identifies media gallery resource that needs to be retrieved.
     * @param options Query resource options object.                       
     * @example mediaGalleryFileRoute.get({id: '<media-gallery-id>'});                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses update route; this route should be expanded with the Id of media gallery resource.                 
     * @method 
     * @param data Media gallery file object used to update specific Media gallery file resource in the system.                 
     * @example mediaGalleryFileRoute.update(data);                               
     **/
    update(data: IMediaGalleryFile): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete route; this route should be expanded with the Id of media gallery file resource.                 
     * @method 
     * @param id Media gallery file object id used to delete specific Media gallery file file resource in the system. 
     * @example mediaGalleryFileRoute.delete({id: '<media-gallery-file--id>'});                               
     **/
    unlink(id: string): any {
        return super.baseDelete(this.unlinkRoute, id);
    }

    /**
    * Parses create route; this URI template doesnt support any additional options.
    * @method
    * @param data An media gallery file object that needs to be inserted into the system.
    * @example mediaGalleryFileRoute.create(data);
    **/
    link(data: IMediaGalleryFile): any {
        return super.baseCreate(this.linkRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */