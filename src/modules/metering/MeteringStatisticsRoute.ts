/* globals module */
/**  
 * @module meteringStatisticsRoute  
 * @description Baasic Metering Statistics Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Statistics Route Definition Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IOptions } from 'common/contracts';
import { IMeteringData } from 'modules/metering/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class MeteringStatisticsRoute extends BaseRoute {

    public readonly findRoute: string = 'metering/statistics/{category}/{?applicationIds,rateBy,from,to,names,moduleNames,statuses,endpoints,sources,page,rpp,sort,embed,fields}';
    
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses find metering route which can be expanded with additional options. Supported items are:                     
     * - `category` - The metering category.                     
     * - `applicationId` - The application identifier.                     
     * - `rateBy` - The sampling rate by minute,hour,day,week, month or year.                     
     * - `from` - The from date.                     
     * - `to` - The to date.                     
     * - `names` - The name of the resource inside the category in CSV format.                     
     * - `moduleNames` - The name of the resource inside the category in CSV format.                     
     * - `statuses` - The operation status in CSV format.                     
     * - `endpoints` - The back-end endpoint in CSV format.                     
     * - `sources` - The metering collector source in CSV format.                                        
     * - `page` - A value used to set the page number, i.e. to retrieve certain metering subset from the storage.                     
     * - `rpp` - A value used to limit the size of result set per page.                     
     * - `sort` - A string used to set the metering property to sort the result collection by.                     
     * - `embed` - Comma separated list of resources to be contained within the current representation.                     
     * @method
     * @param options Query resource options object.                           
     * @example meteringStatisticsRoute.find({category: '<category-name-or-id>'});                                   
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
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