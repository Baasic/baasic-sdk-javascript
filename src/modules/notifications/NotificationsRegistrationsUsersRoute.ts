/* globals module */
/**  
 * @module notificationsRegistrationsUsersRoute  
 * @description Baasic Notifications Registrations Users Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Registrations Users Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { NotificationsRegistrationsUsersBatchRoute, TYPES as notificationsTypes } from 'modules/notifications';
import { IUserRegistration } from './contracts';

@injectable()
export class NotificationsRegistrationsUsersRoute extends BaseRoute {

    public readonly createRoute: string = 'notifications/registrations';

    public readonly findRoute: string = 'notifications/registrations/{?searchQuery,userIds,providers,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'notifications/registrations/{id}/{?embed}';

    public readonly deleteRoute: string = 'notifications/registrations/{id}';

    public readonly updateRoute: string = 'notifications/registrations/{id}';

    get batch(): NotificationsRegistrationsUsersBatchRoute {
        return this.notificationsRegistrationsUsersBatchRoute;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(notificationsTypes.NotificationsRegistrationsUsersBatchRoute) protected notificationsRegistrationsUsersBatchRoute: NotificationsRegistrationsUsersBatchRoute
    ) { super(appOptions); }

    /**                          
     * Parses create users registrations route; this route does not expose any additional options                          
     * @method                         
     * @example notificationsRegistrationsUsersRoute.create();                          
     */
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                          
     * Parses find users registrations route which can be expanded with additional options. Supported items are:                          
     * - `searchQuery` - A string referencing user subscription properties using the phrase search.                          
     * - `userIds` - Comma separated list of user identifiers.                          
     * - `providers` - Comma separated list of notification providers.                          
     * - `page` - A value used to set the page number, i.e. to retrieve certain user subscription subset from the storage.                          
     * - `rpp` - A value used to limit the size of result set per page.                          
     * - `sort` - A string used to set the user subscription property to sort the result collection by.                          
     * - `embed` - Comma separated list of resources to be contained within the current representation.                          
     * @method 
     * @param options Query resource options object.                                
     * @example notificationsRegistrationsUsersRoute.find({ searchQuery: '<search-phrase>', providers: '<provider-name>,<provider-name>' });                          
     */
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                          
     * Parses get users registrations route; this route should be expanded with the Id of users registrations resource.                         
     * @method
     * @param id The registration identifier which uniquely identifies UserRegistration resource that needs to be retrieved.
     * @param options Query resource options object.                       
     * @example notificationsRegistrationsUsersRoute.get({ id: '<registration-id>' });                          
     */
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                          
     * Parses delete users registrations route; this route should be expanded with the Id of users registrations resource.                         
     * @method
     * @param data An object used to delete specified UserRegistration resource.                          
     * @example notificationsRegistrationsUsersRoute.delete(data);                          
     */
    delete(data: IUserRegistration): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**                          
     * Parses update users registrations route; this route should be expanded with the Id of users registrations resource.                         
     * @method
     * @param data An object used to update specified UserRegistration resource.                          
     * @example notificationsRegistrationsUsersRoute.update(data);                          
     */
    update(data: IUserRegistration): any {
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