/* globals module */
/**  
 * @module meteringRouteDefinition  
 * @description Baasic Metering Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */
import { injectable, inject } from "inversify";
import { BaseRouteDefinition, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import {
    MeteringACLRouteDefinition,
    MeteringBatchRouteDefinition,
    MeteringStatisticsRouteDefinition,
    TYPES as meteringTypes
} from 'modules/metering';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IMeteringData } from 'modules/metering/contracts';

@injectable()
export class MeteringRouteDefinition extends BaseRouteDefinition {

    public readonly findRoute: string = 'metering/data/{?applicationId,searchQuery,categories,from,to,names,moduleNames,statuses,endpoints,sources,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'metering/data/{id}/{?embed,fields}';

    public readonly createRoute: string = 'metering/data';

    public readonly updateRoute: string = 'metering/data/{id}';

    public readonly deleteRoute: string = '/metering/data/{id}';

    public readonly purgeRoute: string = 'metering/data/purge';
    
    get batch(): MeteringBatchRouteDefinition {
        return this.meteringBatchRouteDefinition;
    }

    get statistics(): MeteringStatisticsRouteDefinition {
        return this.meteringStatisticsRouteDefinition;
    }

    get acl(): MeteringACLRouteDefinition {
        return this.meteringACLRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(meteringTypes.MeteringBatchRouteDefinition) protected meteringBatchRouteDefinition: MeteringBatchRouteDefinition,
        @inject(meteringTypes.MeteringStatisticsRouteDefinition) protected meteringStatisticsRouteDefinition: MeteringStatisticsRouteDefinition,
        @inject(meteringTypes.MeteringACLRouteDefinition) protected meteringACLRouteDefinition: MeteringACLRouteDefinition
    ) { super(appOptions); }

    /**                 
     * Parses find metering route which can be expanded with additional options. Supported items are:                 
     * - `applicationId` - The application identifier.                 
     * - `categories` - The metering categories  in CSV format.                 
     * - `from` - The from date.                 
     * - `to` - The to date.                 
     * - `names` - The name of the resource inside the category in CSV format.                 
     * - `moduleNames` - The name of the resource inside the category in CSV format.                 
     * - `statuses` - The operation status in CSV format.                 
     * - `endpoints` - The back-end endpoint in CSV format.                 
     * - `sources` - The metering collector source in CSV format.                 
     * - `searchQuery` - A string value used to identify metering resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain metering subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the metering property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example meteringRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method  
     * @param id MeteringData id which uniquely identifies MeteringData resource that needs to be retrieved.
     * @param options Query resource options object.                      
     * @example meteringRouteDefinition.get();                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create metering route; this URI template does not expose any additional options.                 
     * @method                        
     * @example meteringRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                 
     * Parses update metering route; this URI template does not expose any additional options.                 
     * @method                        
     * @param data An metering data object used to update specified MeteringData resource.
     * @example meteringRouteDefinition.update(data);                              
     **/
    update(data: IMeteringData): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete metering route; this URI template does not expose any additional options.                 
     * @method                        
     * @param data An metering data object used to delete specified MeteringData resource.
     * @example meteringRouteDefinition.delete(data);                              
     **/
    delete(data: IMeteringData): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**                 
     * Parses purge metering data route: this URI template does not expose any additional options.                 
     * @method                 
     * @example meteringRouteDefinition.purge();                  
     **/
    purge(): any {
        return super.baseDelete(this.purgeRoute, {});
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