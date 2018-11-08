/* globals module */
/**  
 * @module userRoute  
 * @description Baasic User Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IOptions } from '../../common/contracts';
import { UserSocialLoginRoute, TYPES as membershipTypes } from './';
import { IAppUser, IUserOptions } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class UserRoute extends BaseRoute {

    /**                  
    * Find route with route and query parameters.
    **/
    public findRoute: string = 'users/{?searchQuery,userIds,roleIds,roleNames,isApproved,isLocked,page,rpp,sort,embed,fields}';
    /**                  
    * Get route with route and query parameters.
    **/
    public getRoute: string = 'users/{username}/{?embed,fields}';
    /**                  
    * Create route with route and query parameters.
    **/
    public createRoute: string = 'users';
    /**                  
    * Update route with route and query parameters.
    **/
    public updateRoute: string = 'users/{id}';
    /**                  
    * Delete route with route and query parameters.
    **/
    public deleteRoute: string = 'users/{id}';
    /**                  
    * Exists route with route and query parameters.
    **/
    public existsRoute: string = 'users/{username}/exists/';
    /**                  
    * Change password route with route and query parameters.
    **/
    public changePasswordRoute: string = 'users/{username}/change-password';
    /**                  
    * Unlock route with route and query parameters.
    **/
    public unlockRoute: string = 'users/{id}/unlock';
    /**                  
    * Lock route with route and query parameters.
    **/
    public lockRoute: string = 'users/{id}/lock';
    /**                  
    * Approve route with route and query parameters.
    **/
    public approveRoute: string = 'users/{id}/approve';
    /**                  
    * Disapprove route with route and query parameters.
    **/
    public disapproveRoute: string = 'users/{id}/disapprove';

    get socialLogin(): UserSocialLoginRoute {
        return this.userSocialLoginRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(membershipTypes.UserSocialLoginRoute) protected userSocialLoginRoute: UserSocialLoginRoute
    ) { super(appOptions); }

    /**                 
     * Parses find user route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing user properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain user subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the user property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example userRoute.find({searchQuery: '<search-phrase>'});                              
     **/
    find(options: IUserOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get user route which must be expanded with the username of the previously created user resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example userRoute.get({username: '<username>'})
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet(this.getRoute, id, options, 'username');
    }

    /**                 
     * Parses create user route, this URI template does not expose any additional options.                 
     * @method                        
     * @example userRoute.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    update(data: IAppUser): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    delete(data: IAppUser): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**                 
     * Parses user exists route; URI template should be expanded with the username whose availability you'd like to check.                                
     * @method
     * @param username A username which uniquely identifies an application user.                        
     * @example userRoute.exists({username: '<username>'});                               
     **/
    exists(username: string, options?: any): any {
        return super.baseGet(this.existsRoute, username, options, 'username');
    }

    /**                 
     * Parses change password route, URI template should be expanded with the username of the user resource whose password should be updated.                 
     * @method
     * @param username A username or id which uniquely identifies user resource.                        
     * @example userRoute.changePassword({username: '<username>'});                              
     **/
    changePassword(username: string): any {
        return super.baseUpdate(this.changePasswordRoute, { username: username });
    }

    unlock(data: IAppUser): any {
        return super.baseUpdate(this.unlockRoute, data, null, 'unlock');
    }

    lock(data: IAppUser): any {
        return super.baseUpdate('users/{id}/lock', data, null, 'lock');
    }

    approve(data: IAppUser): any {
        return super.baseUpdate(this.approveRoute, data, null, 'approve');
    }

    disapprove(data: IAppUser): any {
        return super.baseUpdate(this.disapproveRoute, data, null, 'disapprove');
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */