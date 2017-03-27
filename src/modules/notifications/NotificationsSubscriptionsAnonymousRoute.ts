/* globals module */
/**  
 * @module notificationsSubscriptionsAnonymousRoute  
 * @description Baasic Notifications Subscriptions Anonymous Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Subscriptions Anonymous Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { NotificationsSubscriptionsAnonymousBatchRoute, TYPES as notificationsTypes } from 'modules/notifications';
import { IAnonymousSubscription } from './contracts';

@injectable()
export class NotificationsSubscriptionsAnonymousRoute extends BaseRoute {

    public readonly createRoute: string = 'notifications/subscriptions/batch';

    public readonly findRoute: string = 'notifications/subscriptions/anonymous/{?searchQuery,registrationIds,channels,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'notifications/subscriptions/anonymous/{id}/{?embed,fields}';

    public readonly deleteRoute: string = 'notifications/subscriptions/anonymous/{id}';

    public readonly updateRoute: string = 'notifications/subscriptions/anonymous/{id}';

    get batch(): NotificationsSubscriptionsAnonymousBatchRoute {
        return this.notificationsSubscriptionsAnonymousBatchRoute;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSubscriptionsAnonymousBatchRoute) protected notificationsSubscriptionsAnonymousBatchRoute: NotificationsSubscriptionsAnonymousBatchRoute,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                          
     * Parses create anonymous subscription route; this route does not expose any additional options                          
     * @method                          
     * @example notificationsSubscriptionsAnonymousRoute.create();                          
     */
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                          
     * Parses find anonymous subscriptions route which can be expanded with additional options. Supported items are:                          
     * - `searchQuery` - A string referencing user subscription properties using the phrase search.                          
     * - `registrationIds` - Comma separated list of anonymous registration identifiers.                          
     * - `channels` - Comma separated list of channels.                          
     * - `page` - A value used to set the page number, i.e. to retrieve certain user subscription subset from the storage.                          
     * - `rpp` - A value used to limit the size of result set per page.                          
     * - `sort` - A string used to set the user subscription property to sort the result collection by.                          
     * - `embed` - Comma separated list of resources to be contained within the current representation.                          
     * @method
     * @param options Query resource options object.                                 
     * @example notificationsSubscriptionsAnonymousRoute.find({     
                   searchQuery: '<search-phrase>',     
                   channels: '<channel-name>,<channel-name>' 
               });                          
    */
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                          
     * Parses get anonymous subscription route; this route should be expanded with the Id of anonymous subscription resource.                          
     * @method
     * @param id The subscription identifier which uniquely identifies AnonymousSubscription resource that needs to be retrieved.
     * @param options Query resource options object.                          
     * @example notificationsSubscriptionsAnonymousRoute.get({id: '<subscription-id>'});                          
     */
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                          
     * Parses delete anonymous subscription route; this route should be expanded with the Id of anonymous subscription resource.                          
     * @method
     * @param data The subscription identifier used to delete specific subscription resource in the system.                        
     * @example notificationsSubscriptionsAnonymousRoute.delete(data);                          
     */
    delete(data: IAnonymousSubscription): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**                          
     * Parses update anonymous subscription route; this route should be expanded with the Id of anonymous subscription resource.                          
     * @method
     * @param data The subscription identifier used to update specific subscription resource in the system.                        
     * @example notificationsSubscriptionsAnonymousRoute.update(data);                          
     */
    update(data: IAnonymousSubscription): any {
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */