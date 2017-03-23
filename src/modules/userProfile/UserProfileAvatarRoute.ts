/* globals module */
/**  
 * @module userProfileAvatarRoute  
 * @description Baasic User Profile Avatar Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Profile Avatar Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { UserProfileAvatarStreamsRoute, TYPES as userProfileTypes } from 'modules/userProfile';
import { IProfileAvatar } from 'modules/userProfile/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class UserProfileAvatarRoute extends BaseRoute {

    public readonly getRoute: string = 'profiles/{id}/avatars/{?embed,fields}';

    public readonly updateRoute: string = 'profiles/{userId}/avatars';

    public readonly linkRoute: string = 'profiles/{id}/avatars/link';

    public readonly unlinkRoute: string = 'profiles/{userId}/avatars/unlink';

    get streams(): UserProfileAvatarStreamsRoute {
        return this.userProfileAvatarStreamsRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(userProfileTypes.UserProfileAvatarStreamsRoute) protected userProfileAvatarStreamsRoute: UserProfileAvatarStreamsRoute
    ) { super(appOptions); }

    /**                 
     * Parses get route; this route should be expanded with the Id of the profile.                 
     * @method 
     * @param id User Profile id which uniquely identifies user avatar resource that needs to be retrieved.
     * @param options Query resource options object.                       
     * @example userProfileAvatarRoute.get({id: '<file-id>'});                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data A Profile Avatar object used to update specified Profile Avatar resource.                        
     * @example userProfileAvatarRoute.update(data);                              
     **/
    update(data: IProfileAvatar): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses link route; this route should be expanded with the Id of the profile.                 
     * @method 
     * @param id User Profile id which uniquely identifies user avatar resource that needs to be retrieved. 
     * @param data A Profile Avatar object used to link specified Profile Avatar resource.                      
     * @example userProfileAvatarRoute.link({id: '<file-id>'});                              
     **/
    link(id: string, data: IProfileAvatar): any {
        let params = this.utility.extend({}, data);
        params.id = id;
        return super.baseCreate(this.linkRoute, params);
    }

    /**                 
     * Parses link route; this route should be expanded with the Id of the profile.                 
     * @method
     * @param data A Profile Avatar object used to unlink specified Profile Avatar resource.
     * @param options Query resource options object.                         
     * @example userProfileAvatarRoute.unlink(data);                              
     **/
    unlink(data: IProfileAvatar, options?: any): any {
        if (!options) {
            options = {};
        }
        return super.baseDelete(this.unlinkRoute, data, options);
    }

    createParams(data: any, id: string): any {
        let params = this.utility.extend(data);
        params.id = id;
        return super.createParams(params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */