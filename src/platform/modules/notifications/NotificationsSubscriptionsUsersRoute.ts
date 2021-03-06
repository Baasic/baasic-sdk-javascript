/* globals module */
/**
 * @module notificationsSubscriptionsUsersRoute
 * @description Baasic Notifications Subscriptions Users Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';
import { NotificationsSubscriptionsUsersBatchRoute, TYPES as notitificationsTypes } from './';
import { IUserSubscription } from './contracts';

@injectable()
export class NotificationsSubscriptionsUsersRoute extends BaseRoute {

    public readonly createRoute: string = 'notifications/subscriptions/user';

    public readonly findRoute: string = 'notifications/subscriptions/user/{?searchQuery,userIds,channels,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'notifications/subscriptions/user/{id}/{?embed,fields}';

    public readonly deleteRoute: string = 'notifications/subscriptions/user/{id}';

    public readonly updateRoute: string = 'notifications/subscriptions/user/{id}';

    batch(): NotificationsSubscriptionsUsersBatchRoute {
        return this.notificationsSubscriptionsUsersBatchRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(notitificationsTypes.NotificationsSubscriptionsUsersBatchRoute) protected notificationsSubscriptionsUsersBatchRoute: NotificationsSubscriptionsUsersBatchRoute
    ) { super(appOptions); }

    /**
     * Parses create user subscription route; this route does not expose any additional options
     * @method
     * @example notificationsSubscriptionsUsersRoute.create();
     */
    create(): any {
        return super.baseCreate(this.createRoute, {});
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
     * @example notificationsSubscriptionsUsersRoute.find({ searchQuery: '<search-phrase>', channels: '<channel-name>,<channel-name>' });
     */
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**
     * Parses get user subscription route; this route should be expanded with the Id of user subscription resource.
     * @method
     * @param id The subscription identifier which uniquely identifies UserSubscription resource that needs to be retrieved.
     * @param options Query resource options object.
     * @example notificationsSubscriptionsUsersRoute.get({ id: '<subscription-id>' });
     */
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses delete user subscription route; this route should be expanded with the Id of user subscription resource.
     * @method
     * @param data An object used to delete specified UserSubscription resource.
     * @example notificationsSubscriptionsUsersRoute.delete(data);
     */
    delete(data: IUserSubscription): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses update user subscription route; this route should be expanded with the Id of user subscription resource.
     * @method
     * @param data An object used to update specified UserSubscription resource.
     * @example notificationsSubscriptionsUsersRoute.update(data);
     */
    update(data: IUserSubscription): any {
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