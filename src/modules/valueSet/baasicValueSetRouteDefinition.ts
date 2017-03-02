/**  
 * @module baasicValueSetRouteDefinition
 * @description Baasic Value Set Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Value Set Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { injectable, inject } from 'inversify';
import { BaasicValueSetItemRouteDefinition, TYPES as valueSetTypes } from 'modules/valueSet';
import { IValueSet } from 'modules/valueSet/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class BaasicValueSetRouteDefinition extends BaasicBaseRouteDefinition {

    get items(): BaasicValueSetItemRouteDefinition {
        return this.baasicValueSetItemRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(valueSetTypes.BaasicValueSetItemRouteDefinition) protected baasicValueSetItemRouteDefinition: BaasicValueSetItemRouteDefinition
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
     * @example baasicValueSetRouteDefinition.find(options);                               
     **/
    find(options: IOptions): any {
        return super.baseFind('value-sets/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get value set route which must be expanded with the name of the previously created value set resource in the system.                 
     * @method 
     * @param setName Value Set name.
     * @param options Query resource options object.                       
     * @example baasicValueSetRouteDefinition.get(setName, options);                               
     **/
    get(setName: string, options?: IOptions): any {
        return super.baseGet('value-sets/{setName}/{?embed,fields}', setName, options, 'setName');
    }

    /**                 
     * Parses create value set route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicValueSetRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate('value-sets', {});
    }

    /**
     * Parses update value set route.
     * @method
     * @param data Value set object used to update specified value set resource.
     * @example baasicValueSetRouteDefinition.update(data);
     */
    update(data: IValueSet): any {
        return super.baseUpdate('value-sets/{id}', data);
    }

    /**
     * Parses delete value set route.
     * @method
     * @param data A value set object used to delete specified value set resource.
     * @example baasicValueSetRouteDefinition.delete(data);
     */
    delete(data: IValueSet): any {
        return super.baseDelete('value-sets/{id}', data);
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