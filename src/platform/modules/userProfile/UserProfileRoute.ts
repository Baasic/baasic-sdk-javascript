/* globals module */
/**  
 * @module userProfileRoute  
 * @description Baasic User Profile Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Profile Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';;
import { UserProfileACLRoute, TYPES as userProfileTypes } from './';
import { IUserProfile } from './contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class UserProfileRoute extends BaseRoute {

    public readonly findRoute: string = 'profiles/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'profiles/{id}/{?embed,fields}';

    public readonly createRoute: string = 'profiles';

    public readonly updateRoute: string = 'profiles/{id}';

    public readonly deleteRoute: string = 'profiles/{id}';

    get acl(): UserProfileACLRoute {
        return this.userProfileACLRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(userProfileTypes.UserProfileACLRoute) protected userProfileACLRoute: UserProfileACLRoute
    ) { super(appOptions); }

    /**                 
     * Parses find user profile route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify user profile resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain user profile subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the user profile property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example userProfileRoute.find.({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id User profile id which uniquely identifies user profile resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example userProfileRoute.get(id, options);                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create user profile route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicUserProfileRouteService.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                 
     * Parses update user profile route; this URI template does not expose any additional options.                 
     * @method 
     * @param data An user profile object used to update specified user profile resource.                       
     * @example baasicUserProfileRouteService.update(data);                              
     **/
    update(data: IUserProfile): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses update user profile route; this URI template does not expose any additional options.                 
     * @method 
     * @param data An user profile object used to delete specified user profile resource.                       
     * @example baasicUserProfileRouteService.delete(data);                              
     **/
    delete(data: IUserProfile): any {
        return super.baseDelete(this.deleteRoute, data);
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */