/**  
 * @module valueSetItemRoute
 * @description Baasic Value Set Item Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Value Set Item Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */
import { injectable, inject } from 'inversify';
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IValueSetItem } from './contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class ValueSetItemRoute extends BaseRoute {

    public readonly findRoute: string = 'value-sets/{setName}/items/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'value-sets/{setName}/items/{id}/{?embed,fields}';

    public readonly createRoute: string = 'value-sets/{setName}/items/';

    public readonly updateRoute: string = 'value-sets/{setId}/items/{id}';

    public readonly deleteRoute: string = 'value-sets/{setId}/items/{id}';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /** 					
     * Parses find value set items route which can be expanded with additional options. Supported items are: 					
     * - `setName` - Value set name. 					
     * - `searchQuery` - A string value used to identify value set items using the phrase search. 					
     * - `page` - A value used to set the page number, i.e. to retrieve certain value set item subset from the storage. 					
     * - `rpp` - A value used to limit the size of result set per page. 					
     * - `sort` - A string used to set the value set item property to sort the result collection by. 					
     * - `embed` - Comma separated list of resources to be contained within the current representation. 					
     * @method items.find
     * @param options Options object.       					
     * @example valueSetItemRoute.find(options);               					
     **/
    find(options: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /** 					
     * Parses get route which must be expanded with the following items: 					
     * - `setName` - Value set name. 					
     * - `id` - Value set item id. 					
     * @method
     * @param setName Value set name.
     * @param id Value set id.
     * @param options Query resource options object.        					
     * @example valueSetItemRoute.get(setName, id, options);               					
     **/
    get(setName: string, id: string, options?: IGetRequestOptions): any {
        let params = this.utility.extend({}, options);
        params.setName = setName;
        return super.baseGet(this.getRoute, id, options);
    }

    /** 					
     * Parses create value set item route; the URI template should be expanded with the value set name. 					
     * @method
     * @param data A value set item object that needs to be inserted into the system.         					
     * @example valueSetItemRoute.create(data);              					
     **/
    create(data: IValueSetItem): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update value set item route.
     * @method
     * @param data A value set item object used to update specified value set resource.
     * @example valueSetItemRoute.update(data);
     */
    update(data: IValueSetItem): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete value set item route.
     * @method
     * @param data A value set item object used to delete specified value set resource.
     * @example valueSetItemRoute.delete(data);
     */
    delete(data: IValueSetItem): any {
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