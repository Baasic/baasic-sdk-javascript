/* globals module */
/**  
 * @module baasicUserProfileAvatarStreamsRouteDefinition  
 * @description Baasic User Profile Avatar Streams Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Profile Avatar Streams Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, TYPES as commonTypes } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class BaasicUserProfileAvatarStreamsRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses get route; this route should be expanded with id of profile. Additional supported items are:                     
     * - `width` - width of desired derived image.                     
     * - `height` - height of desired derived image.                     
     * @method                    
     * @example baasicUserProfileAvatarStreamsRouteDefinition.get({id: '<file-id>'});                                   
     **/
    get(data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        return super.baseCreate('profiles/{id}/avatar-streams/{?width,height}', data);
    }

    /**                     
     * Parses create route; this route should be expanded with the filename which indicates where the stream will be saved as well with id of the profile.                     
     * @method                     
     * @example baasicUserProfileAvatarStreamRouteDefinition.create({ filename: '<filename>', id: '<file-id>' });                                   
     **/
    create(id: string, data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                filename: data
            };
        }
        let params = this.utility.extend({}, data);
        params.id = id;
        return super.baseCreate('profiles/{id}/avatar-streams/{filename}', params);
    }

    /**                     
     * Parses update route; this route should be expanded with the id of the profile. Additional supported items are:                     
     * - `width` - width of derived image to update.                     
     * - `height` - height of derived image to update.                                        
     * @method 
     * @param data                       
     * @example baasicUserProfileAvatarStreamsRouteDefinition.update({id: '<file-id>'});                                   
     **/
    update(data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        return super.baseCreate('profiles/{id}/avatar-streams/{?width,height}', data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */