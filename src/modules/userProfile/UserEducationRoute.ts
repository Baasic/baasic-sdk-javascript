/* globals module */
/**  
 * @module userEducationRoute  
 * @description Baasic User Education Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Education Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IUserEducation } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

export class UserEducationRoute extends BaseRoute {

    public readonly findRoute: string = 'profiles/{userId}/educations/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'profiles/{userId}/educations/{id}/{?embed,fields}';

    public readonly createRoute: string = 'profiles/{userId}/educations';

    public readonly updateRoute: string = 'profiles/{userId}/educations/{id}';

    public readonly deleteRoute: string = 'profiles/{userId}/educations/{id}';

    constructor(@inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing user education properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain user education subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the user education property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example userEducationRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method 
     * @param id User education id which uniquely identifies user education resource that needs to be retrieved. 
     * @param options Query resource options object.                      
     * @example userEducationRoute.get(id);                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method
     * @param data An user education object that needs to be inserted into the system.                        
     * @example userEducationRoute.create(data);                              
     **/
    create(data: IUserEducation): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data An user education object used to update specified skill resource.                        
     * @example userEducationRoute.update(data);                              
     **/
    update(data: IUserEducation): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delte route; this URI template does not expose any additional options.                 
     * @method
     * @param data An user education object used to delete specified skill resource.                        
     * @example userEducationRoute.delete(data);                              
     **/
    delete(data: IUserEducation): any {
        return super.baseDelete(this.deleteRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */