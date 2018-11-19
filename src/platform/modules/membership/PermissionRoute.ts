/* globals module */
/**  
 * @module loginRoute  
 * @description Baasic Login Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Login Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */
import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../../common';
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';
import { IAccessPolicy, IAccessAction } from './contracts';

@injectable()
export class PermissionRoute extends BaseRoute {

    /**
     * Find all route with route and query parameters.
     */
    public findAllRoute: string = 'permissions/sections{?searchQuery,sort,embed,fields}';
    /**
    * Find route with route and query parameters.
    **/
    public findRoute: string = 'permissions/sections/{section}/{?searchQuery,sort,embed,fields}';
    /**                  
    * Get actions route with route and query parameters.
    **/
    public getActionsRoute: string = 'permissions/actions/{?searchQuery,sort,embed,fields}';
    /**                  
    * Get roles route with route and query parameters.
    **/
    public getRolesRoute: string = 'lookups/roles/{?searchQuery,page,rpp,sort,embed,fields}';
    /**                  
    * Get users route with route and query parameters.
    **/
    public getUsersRoute: string = 'users/{?searchQuery,page,rpp,sort,embed,fields}';
    /**                  
    * Create route with route and query parameters.
    **/
    public createRoute: string = 'permissions/';
    /**                  
    * Remove route with route and query parameters.
    **/
    public removeRoute: string = 'permissions/sections/{section}/actions/{action}/{{operation}}/{{subject}}/';


    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) {
        super(appOptions);
    }

    /**
     * Parses find all route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string value used to identify access policy resources using the phrase search.
     * - `sort` - A string used to set the access policy property to sort the result collection by.
     * @method
     * @example
     permissionRoute.findAll(
     {searchQuery: '<search-phrase>'}
     );
     **/
    findAll(options?: any): any {
        var opt = options || {};
        return super.baseFind(this.findAllRoute, this.utility.extend(opt));
    }
    /**
    * Parses find route which can be expanded with additional options. Supported items are: 
    * - `section` - Section abbreviation which identifies part of the application for which security privileges can be retrieved and managed.
    * - `searchQuery` - A string value used to identify access policy resources using the phrase search. 
    * - `sort` - A string used to set the access policy property to sort the result collection by.				
    * @method        
    * @example 
permissionRoute.find(
	'sectionName',
	{searchQuery: '<search-phrase>'}
);               
    **/
    find(section: string, options?: any): any {
        var opt = options || {};
        return super.baseFind(this.findRoute, this.utility.extend({ section: section }, opt));
    }
    /**
    * Parses getActions route which can be expanded with additional options. Supported items are: 
    * - `searchQuery` - A string value used to identify access action resources using the phrase search.  
    * - `sort` - A string used to set the access action property to sort the result collection by.				
    * @method        
    * @example 
permissionRoute.getActions(
{searchQuery: '<search-phrase>'}
);               
    **/
    getActions(options?: any): any {
        var opt = options || {};
        return super.baseFind(this.getActionsRoute, opt);
    }
    /**
    * Parses getRoles route which can be expanded with additional options. Supported items are: 
    * - `searchQuery` - A string value used to identify access policy resources using the phrase search.   
    * - `sort` - A string used to set the access policy property to sort the result collection by.	
    * - `page` - A value used to set the page number, i.e. to retrieve certain access policy subset from the storage.
    * - `rpp` - A value used to limit the size of result set per page.				
    * @method        
    * @example 
permissionRoute.getRoles(
{searchQuery: '<search-phrase>'}
);               
    **/
    getRoles(options?: any): any {
        var opt = options || {};
        return super.baseFind(this.getRolesRoute, opt);
    }
    /**
    * Parses getUsers route which can be expanded with additional options. Supported items are: 
    * - `searchQuery` - A string value used to identify access policy resources using the phrase search.     
    * - `sort` - A string used to set the access policy property to sort the result collection by.	
    * - `page` - A value used to set the page number, i.e. to retrieve certain access policy subset from the storage.
    * - `rpp` - A value used to limit the size of result set per page.				
    * @method        
    * @example 
permissionRoute.getRoles(
{searchQuery: '<search-phrase>'}
);               
    **/
    getUsers(options?: any): any {
        var opt = options || {};
        return super.baseFind(this.getUsersRoute, opt);
    }
    /**
    * Parses create permission route; this URI template doesn't expose any additional properties.
    * @method        
    * @example permissionRoute.create({});               
    **/
    create(): any {
        return super.baseCreate(this.createRoute);
    }
    /**                  
     * Returns a promise that is resolved once the remove permission action has been performed. This action will remove a permission from the system, if completed successfully. 
     * @param data A permission object used to delete specified permission resource.
     * @returns A promise that is resolved once the remove action has been performed.                
     * @method                         
     * @example // Permission is a resource previously fetched using get action.				 
                    permissionClient.remove(permission)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IAccessPolicy): any {
        var params = super.deleteParams(data);
        var action = data.actions[0];
        let operation = '';
        let subject = '';
        if (data.role && data.role.length > 0) {
            operation = 'Role';
            subject = data.role;
        } else {
            operation = 'User';
            subject = data.userName;
        }

        let route = this.removeRoute.replace('{{operation}}', operation.toLowerCase() + 's').replace('{{subject}}', subject);
        return super.baseDelete(route, data, null, 'delete' + action.abrv + operation);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */