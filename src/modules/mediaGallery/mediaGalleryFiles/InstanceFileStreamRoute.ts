/* globals module */
/**  
 * @module MediaGalleryInstanceFilesStreamsRoute  
 * @description Baasic Media Gallery Instance Files Streams Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery Files Streams Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/


import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';
import { IMediaGalleryFile } from '../contracts';

@injectable()
export class MediaGalleryInstanceFileStreamRoute extends BaseRoute {

    public readonly getRoute: string = 'media-galleries/{mediaGalleryId}/file-streams/{id}';

    public readonly createRoute: string = 'media-galleries/{mediaGalleryId}/file-streams/{filename}';

    public readonly updateRoute: string = 'media-galleries/{mediaGalleryId}/file-streams/{id}';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses get route; this route should be expanded with id of desired file stream. 
     * @method
     * @param mediaGalleryId Media Gallery id which uniquely identifies media gallery whose media gallery file need to be retrieved.
     * @param data Media Gallery File object used to identify stream that needs to be retrieved from the system.    
     * @example mediaGalleryInstanceFileStreamRoute.get(id);
     **/
    get(mediaGalleryId: string, data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        let params = this.utility.extend({}, data);
        params.mediaGalleryId = mediaGalleryId;
        return super.baseGet(this.getRoute, params);
    }

    /**                     
     * Parses create route; this route should be expanded with the filename which indicates where the stream will be saved.                     
     * @method
     * @param mediaGalleryId Media Gallery slug or id which uniquely identifies media gallery whose media gallery file need to be inserted.
     * @param data Media Gallery File object that need to be inserted into the system. 
     * @example mediaGalleryInstanceFileStreamRoute.create({filename: '<filename>'});                                   
     **/
    create(mediaGalleryId: string, data: IMediaGalleryFile): any {
        let params = this.utility.extend({}, data);
        params.mediaGalleryId = mediaGalleryId;
        return super.baseCreate(this.createRoute, params);
    }

    /**                     
     * Parses update route; this route should be expanded with the id of the previously saved resource. Additional supported items are:                     
     * - `width` - width of derived image to update.                     
     * - `height` - height of derived image to update.                                        
     * @method
     * @param mediaGalleryId Media Gallery slug or id which uniquely identifies media gallery whose media gallery file need to be updated.
     * @param data Media Gallery File object used to identify stream that needs to be updated.                        
     * @example mediaGalleryInstanceFileStreamRoute.update({id: '<filename>'});
     **/
    update(mediaGalleryId: string, data: IMediaGalleryFile): any {
        let params = this.utility.extend({}, data);
        params.mediaGalleryId = mediaGalleryId;
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/