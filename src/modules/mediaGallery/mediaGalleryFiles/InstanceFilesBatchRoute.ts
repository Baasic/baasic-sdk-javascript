/* globals module */
/**  
 * @module mediaGalleryInstanceFilesBatchRoute  
 * @description Baasic Media Gallery Instance Files Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery Files Batch Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class MediaGalleryInstanceFilesBatchRoute extends BaseRoute {

    public readonly unlinkRoute: string = 'media-galleries/{mediaGalleryId}/files/batch/unlink';

    public readonly updateRoute: string = 'media-galleries/{mediaGalleryId}/files/batch';

    public readonly linkRoute: string = 'media-galleries/{mediaGalleryId}/files/batch/link';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses unlink route; this URI template does not expose any additional options.                                                        
     * @method
     * @param mediaGalleryId Media Gallery file id of the original media gallery file used to identify media gallery files on which delete action should be performed.
     * @example mediaGalleryInstanceFilesBatchRoute.unlink(mediaGalleryId);                                  
     **/
    unlink(mediaGalleryId: string): any {
        let params = { mediaGalleryId: mediaGalleryId };
        return super.baseCreate(this.unlinkRoute, params);
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.  
     * @method
     * @param mediaGalleryId Media Gallery id which uniquely identifies media gallery whose media gallery file need to be updated.                           
     * @example mediaGalleryInstanceFilesStreamsRoute.update(mediaGalleryId);                                  
     **/
    update(mediaGalleryId: string): any {
        let params = { mediaGalleryId: mediaGalleryId };
        return super.baseCreate(this.updateRoute, params);
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method
     * @param mediaGalleryId Media Gallery slug or id which uniquely identifies media gallery whose media gallery files need to be linked.                           
     * @example mediaGalleryInstanceFilesStreamsRoute.link(mediaGalleryId);                                  
     **/
    link(mediaGalleryId: string): any {
        let params = { mediaGalleryId: mediaGalleryId };
        return super.baseCreate(this.linkRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/
