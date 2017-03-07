/* globals module */
/**  
 * @module baasicNotificationsSubscriptionsUsersRouteDefinition  
 * @description Baasic Notifications Subscriptions Users Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { BaasicNotificationsSubscriptionsUsersBatchRouteDefinition, TYPES as notitificationsTypes } from 'modules/notifications';
import { IUserSubscription } from 'modules/notifications/contracts';

@injectable()
export class BaasicNotificationsSubscriptionsUsersRouteDefinition extends BaasicBaseRouteDefinition {

    batch(): BaasicNotificationsSubscriptionsUsersBatchRouteDefinition {
        return this.baasicNotificationsSubscriptionsUsersBatchRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(notitificationsTypes.BaasicNotificationsSubscriptionsUsersBatchRouteDefinition) protected baasicNotificationsSubscriptionsUsersBatchRouteDefinition: BaasicNotificationsSubscriptionsUsersBatchRouteDefinition
    ) { super(appOptions); }

    /**                          
     * Parses create user subscription route; this route does not expose any additional options                          
     * @method                         
     * @example baasicNotificationsSubscriptionsUsersRouteDefinition.create();                          
     */
    create(): any {
        return super.baseCreate('notifications/subscriptions', {});
    }

    /**                          
     * Parses find user subscriptions route which can be expanded with additional options. Supported items are:                          
     * - `searchQuery` - A string referencing user subscription properties using the phrase search.                          
     * - `userIds` - Comma separated list of user identifiers.                          
     * - `channels` - Comma separated list of channels.                          
     * - `page` - A value used to set the page number, i.e. to retrieve certain user subscriptions subset from the storage.                          
     * - `rpp` - A value used to limit the size of result set per page.                          
     * - `sort` - A string used to set the user subscription property to sort the result collection by.                          
     * - `embed` - Comma separated list of resources to be contained within the current representation.                          
     * @method                         
     * @example baasicNotificationsSubscriptionsUsersRouteDefinition.find({ searchQuery: '<search-phrase>', channels: '<channel-name>,<channel-name>' });                          
     */
    find(options?: IOptions): any {
        return super.baseFind('notifications/subscriptions/{?searchQuery,userIds,channels,page,rpp,sort,embed,fields}', options);
    }

    /**                          
     * Parses get user subscription route; this route should be expanded with the Id of user subscription resource.                          
     * @method
     * @param id The subscription identifier which uniquely identifies UserSubscription resource that needs to be retrieved.
     * @param options Query resource options object.                         
     * @example baasicNotificationsSubscriptionsUsersRouteDefinition.get({ id: '<subscription-id>' });                          
     */
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet('notifications/subscriptions/{id}/{?embed,fields}', id, options);
    }

    /**                          
     * Parses delete user subscription route; this route should be expanded with the Id of user subscription resource.                          
     * @method
     * @param data An object used to delete specified UserSubscription resource.                   
     * @example baasicNotificationsSubscriptionsUsersRouteDefinition.delete(data);                          
     */
    delete(data: IUserSubscription): any {
        return super.baseDelete('notifications/subscriptions/{id}', data);
    }

    /**                          
     * Parses update user subscription route; this route should be expanded with the Id of user subscription resource.                          
     * @method
     * @param data An object used to update specified UserSubscription resource.                   
     * @example baasicNotificationsSubscriptionsUsersRouteDefinition.update(data);                          
     */
    update(data: IUserSubscription): any {
        return super.baseUpdate('notifications/subscriptions/{id}', data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */