/* globals module */
/**  
 * @module baasicMeteringCategoryRouteDefinition  * @description Baasic Metering Category Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Category Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { injectable, inject } from "inversify";
import { BaasicMeteringCategoryBatchRouteDefinition, TYPES as meteringTypes } from 'modules/metering';
import { IMeteringCategory } from 'modules/metering/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class BaasicMeteringCategoryRouteDefinition extends BaasicBaseRouteDefinition {

    get batch(): BaasicMeteringCategoryBatchRouteDefinition {
        return this.baasicMeteringCategoryBatchRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(meteringTypes.BaasicMeteringCategoryBatchRouteDefinition) protected baasicMeteringCategoryBatchRouteDefinition: BaasicMeteringCategoryBatchRouteDefinition
    ) { super(appOptions); }

    /**                 
     * Parses find metering category route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify metering resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain metering subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the metering property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method 
     * @param options Query resource options object.                       
     * @example baasicMeteringCategoryRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind('metering/categories/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id MeteringCategory id which uniquely identifies MeteringCategory resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example baasicMeteringCategoryRouteDefinition.get(id);                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('metering/categories/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create metering category route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicMeteringCategoryRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate('metering/categories', {});
    }

    /**                 
     * Parses update metering category route; this URI template does not expose any additional options.                 
     * @method
     * @param data An meteringCategory object used to update specified MeteringCategory resource.                                            
     * @example baasicMeteringCategoryRouteDefinition.update();                              
     **/
    update(data: IMeteringCategory): any {
        return super.baseUpdate('metering/categories/{id}', data);
    }

    /**                 
     * Parses delete metering category route; this URI template does not expose any additional options.                 
     * @method
     * @param data An meteringCategory object used to delete specified MeteringCategory resource.                                            
     * @example baasicMeteringCategoryRouteDefinition.delete();                              
     **/
    delete(data: IMeteringCategory): any {
        return super.baseDelete('metering/categories/{id}', data);
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd 
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */