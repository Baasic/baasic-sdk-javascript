/**  
 * @module baasicValueSetItemRouteDefinition
 * @description Baasic Value Set Item Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Value Set Item Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { injectable, inject } from 'inversify';
import { IValueSetItem } from 'modules/valueSet/contracts';

export class BaasicValueSetItemRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(@inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper) { super(modelMapper); }

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
     * @example baasicValueSetItemRouteDefinition.find(options);               					
     **/ 				
    find(options: IOptions): any {
        return super.baseFind('value-sets/{setName}/items/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /** 					
     * Parses get route which must be expanded with the following items: 					
     * - `setName` - Value set name. 					
     * - `id` - Value set item id. 					
     * @method
     * @param setName Value set name.
     * @param id Value set id.
     * @param options Query resource options object.        					
     * @example baasicValueSetItemRouteDefinition.get(setName, id, options);               					
     **/					
    get(setName: string, id: string, options?: IOptions): any {
        let params = this.utility.extend({}, options);
        params.setName = setName;
        return super.baseGet('value-sets/{setName}/items/{id}/{?embed,fields}', id, options);
    }

    /** 					
     * Parses create value set item route; the URI template should be expanded with the value set name. 					
     * @method
     * @param data A value set item object that needs to be inserted into the system.         					
     * @example baasicValueSetItemRouteDefinition.create(data);              					
     **/
    create(data: IValueSetItem): any {
        return super.baseCreate('value-sets/{setName}/items/', data);
    }

    /**
     * Parses update value set item route.
     * @method
     * @param data A value set item object used to update specified value set resource.
     * @example baasicValueSetItemRouteDefinition.update(data);
     */
    update(data: IValueSetItem): any {
        return super.baseUpdate('value-sets/{setId}/items/{id}', data);
    }

    /**
     * Parses delete value set item route.
     * @method
     * @param data A value set item object used to delete specified value set resource.
     * @example baasicValueSetItemRouteDefinition.delete(data);
     */
    delete(data: IValueSetItem): any {
        return super.baseDelete('value-sets/{setId}/items/{id}', data);
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