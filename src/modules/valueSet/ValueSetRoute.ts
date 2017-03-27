/**  
 * @module valueSetRoute
 * @description Baasic Value Set Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Value Set Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from 'inversify';
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ValueSetItemRoute, TYPES as valueSetTypes } from 'modules/valueSet';
import { IValueSet } from 'modules/valueSet/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class ValueSetRoute extends BaseRoute {

    public readonly findRoute: string = 'value-sets/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'value-sets/{setName}/{?embed,fields}';

    public readonly createRoute: string = 'value-sets';

    public readonly updateRoute: string = 'value-sets/{id}';

    public readonly deleteRoute: string = 'value-sets/{id}';

    get items(): ValueSetItemRoute {
        return this.valueSetItemRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(valueSetTypes.ValueSetItemRoute) protected valueSetItemRoute: ValueSetItemRoute
    ) { super(appOptions); }

    /**                 
     * Parses find value set route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify value set resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain value set subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the value set property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example valueSetRoute.find(options);                               
     **/
    find(options: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get value set route which must be expanded with the name of the previously created value set resource in the system.                 
     * @method 
     * @param setName Value Set name.
     * @param options Query resource options object.                       
     * @example valueSetRoute.get(setName, options);                               
     **/
    get(setName: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, setName, options, 'setName');
    }

    /**                 
     * Parses create value set route; this URI template does not expose any additional options.                 
     * @method                        
     * @example valueSetRoute.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update value set route.
     * @method
     * @param data Value set object used to update specified value set resource.
     * @example valueSetRoute.update(data);
     */
    update(data: IValueSet): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete value set route.
     * @method
     * @param data A value set object used to delete specified value set resource.
     * @example valueSetRoute.delete(data);
     */
    delete(data: IValueSet): any {
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
 - All end-point objects are transformed by the associated route service. 
*/