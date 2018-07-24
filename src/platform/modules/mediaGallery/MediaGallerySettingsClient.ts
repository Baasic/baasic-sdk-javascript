/* globals module */
/**  
 * @module mediaGallerySettingsClient  
 * @description  Media Gallery Settings Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Gallery Settings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { MediaGallerySettingsRoute, TYPES as mediaGalleryTypes } from './';
import { IMediaGallerySettings } from './contracts';

@injectable()
export class MediaGallerySettingsClient {


    get routeDefinition(): MediaGallerySettingsRoute {
        return this.mediaGallerySettingsRoute;
    }

    constructor(
        @inject(mediaGalleryTypes.MediaGallerySettingsRoute) protected mediaGallerySettingsRoute: MediaGallerySettingsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns media gallery settings resource.                     
     * @method    
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example mediaGallerySettingsClient.get()
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                     
     **/
    get(): PromiseLike<IHttpResponse<IMediaGallerySettings>> {
        return this.apiClient.get<IMediaGallerySettings>(this.routeDefinition.get());
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates the media gallery settings resource.                   
     * @method    
     * @param data A media gallery settings object used to update media gallery settings in the system.
     * @returns A promise that is resolved once the update action has been performed.                    
     * @example mediaGallerySettingsClient.update(mediaGallerySettings)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                   
     **/
    update(data: IMediaGallerySettings): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */