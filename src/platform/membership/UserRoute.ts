/* globals module */
/**  
 * @module userRoute  
 * @description Baasic User Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */
import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IOptions } from '../../common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IPlatformUser } from './contracts';

@injectable()
export class UserRoute extends BaseRoute {

    /**                  
    * Find route with route and query parameters.
    **/
    public findRoute: string = 'platform/users/{?searchQuery,page,rpp,sort,embed,fields}';
    /**                  
    * Get route with route and query parameters.
    **/
    public getRoute: string = 'platform/users/{username}/{?embed,fields}';
    /**                  
    * Create route with route and query parameters.
    **/
    public createRoute: string = 'platform/users';
    /**                  
    * Update route with route and query parameters.
    **/
    public updateRoute: string = 'platform/users/{id}';
    /**                  
    * Delete route with route and query parameters.
    **/
    public deleteRoute: string = 'platform/users/{id}';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) {
        super(appOptions);
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
     * Parses delete user route.
     * @method
     * @param data A user object used to delete specified user resource.
     * @example userRoute.delete(data);
     */
    delete(data: IPlatformUser): any {
        return super.baseDelete(this.deleteRoute, data);
    }

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
    find(options: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses create user route, this URI template does not expose any additional options.                 
     * @method                        
     * @example userRoute.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**
         * Parses update user route.
         * @method
         * @param data A user object used to update specified user resource.
         * @example userRoute.update(data);
         */
    update(data: IPlatformUser): any {
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */