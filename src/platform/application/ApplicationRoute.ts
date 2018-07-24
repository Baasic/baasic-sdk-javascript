/* globals module */
/**  
 * @module applicationRoute  
 * @description Baasic Application Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Application Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */
import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IPlatformApplication } from './contracts';

@injectable()
export class ApplicationRoute extends BaseRoute {


    /**                  
     * Application activate route with route and query parameters.
     **/
    public activateRoute: string = 'platform/applications/{id}/activate';

    /**                  
     * Application activate route with route and query parameters.
     **/
    public deactivateRoute: string = 'platform/applications/{id}/deactivate';

    /**                  
     * Application delete route with route and query parameters.
     **/
    public deleteRoute: string = 'platform/applications/{id}';

    /**                  
     * Application find route with route and query parameters.
     **/
    public findRoute: string = 'platform/applications/{?searchQuery,page,rpp,sort,embed,fields}';
    /**                  
    * Get route with route and query parameters.
    **/
    public getRoute: string = 'platform/applications/{id}';
    /**                  
    * Create route with route and query parameters.
    **/
    public createRoute: string = 'platform/applications';
    /**                  
    * Update route with route and query parameters.
    **/
    public updateRoute: string = 'platform/applications/{id}';


    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) {
        super(appOptions);
    }

    /** 			
     * Parses activation route; route should be expanded with the `id` which uniquely identifies the application that needs to be activated. 			
     * @method
     * @param data Id which uniquely identifies application that needs to be activated.        			
     * @example applicationRoute.activate({id: '<identifier>'});               			
     **/
    activate(data: string): any {
        let params = this.modelMapper.getParams(data, undefined, 'id');
        return super.baseCreate(this.activateRoute, params);
    }

    /** 			
     * Parses deactivation route; route should be expanded with the `id` which uniquely identifies the application that needs to be deactivated. 			
     * @method
     * @param data Id which uniquely identifies application that needs to be deactivated.        			
     * @example applicationRoute.deactivate({id: '<identifier>'});               			
     **/
    deactivate(data: string): any {
        let params = this.modelMapper.getParams(data, undefined, 'id');
        return super.baseCreate(this.deactivateRoute, params);
    }

    /**                 
  * Parses get application route which must be expanded with the identifier of the previously created application resource in the system. 
  * @method                        
  * @example applicationRoute.get(id)
  **/
    get(id: string): any {
        return super.baseGet(this.getRoute, id, {});
    }

    /**
     * Parses delete application route.
     * @method
     * @param data A application object used to delete specified application resource.
     * @example applicationRoute.delete(data);
     */
    delete(data: IPlatformApplication): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**                 
     * Parses find application route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing application properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain application subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the application property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example applicationRoute.find({searchQuery: '<search-phrase>'});                              
     **/
    find(options: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses create application route, this URI template does not expose any additional options.                 
     * @method                        
     * @example applicationRoute.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update application route.
     * @method
     * @param data A application object used to update specified application resource.
     * @example applicationRoute.update(data);
     */
    update(data: IPlatformApplication): any {
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * verview  
 ***Notes:**
 - Refer to e [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing itith an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */