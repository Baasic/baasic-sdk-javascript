/* globals module */
/**  
 * @module memberRoute  
 * @description Baasic Message Center Member Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Member Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { MemberBatchRoute, TYPES as memberTypes } from './';
import { IMember } from './contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

export class MemberRoute extends BaseRoute {

    public readonly findRoute: string = 'message-center/members/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly createRoute: string = 'message-center/members';

    public readonly getRoute: string = 'message-center/members/{id}/{?embed,fields}';

    public readonly updateRoute: string = 'message-center/members/{id}';

    public readonly deleteRoute: string = 'message-center/members/{id}';

    public readonly purgeRoute: string = 'message-center/members/purge';

    get batch(): MemberBatchRoute {
        return this.memberBatchRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(memberTypes.MemberBatchRoute) protected memberBatchRoute: MemberBatchRoute
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing member properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain member subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the member property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.       
     * @example memberRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**
     * Parses create route. This URI template does not expose any additional options.
     * @method
     * @param data A Member object that needs to be inserted into the system.
     * @example memberRoute.create(data);
     */
    create(data: IMember): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id Member id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example memberRoute.get();                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A Member object used to update specified Member resource.
     * @example memberRoute.update(data);
     */
    update(data: IMember): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A Member object used to update specified Member resource.
     * @example memberRoute.delete(data);
     */
    delete(data: IMember): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @example channelRoute.purge();
     */
    purge(): any {
        return super.baseDelete(this.purgeRoute, {});
    }
}

 /**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */