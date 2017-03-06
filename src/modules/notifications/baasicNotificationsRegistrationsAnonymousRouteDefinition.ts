/* globals module */
/**  
 * @module baasicNotificationsRegistrationsAnonymousRouteDefinition  
 * @description Baasic Notifications Registrations Anonymous Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Registrations Anonymous Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';
import { IAnonymousRegistration } from 'modules/notifications/contracts';

@injectable()
export class BaasicNotificationsRegistrationsAnonymousRouteDefinition extends BaasicBaseRouteDefinition {

    get batch(): BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition {
        return this.baasicNotificationsRegistrationsAnonymousBatchRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(notificationsTypes.BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition) protected baasicNotificationsRegistrationsAnonymousBatchRouteDefinition: BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition
    ) { super(appOptions); }

    /**                          
     * Parses create anonymous registrations route; this route does not expose any additional options                          
     * @method                        
     * @example baasicNotificationsRegistrationsAnonymousRouteDefinition.create();                          
     */
    create(): any {
        return super.baseCreate('notifications/registrations/anonymous', {});
    }

    /**                          
     * Parses find anonymous registrations route which can be expanded with additional options. Supported items are:                          
     * - `searchQuery` - A string referencing user subscription properties using the phrase search.                          
     * - `providers` - Comma separated list of notification providers.                          
     * - `page` - A value used to set the page number, i.e. to retrieve certain user subscription subset from the storage.                          
     * - `rpp` - A value used to limit the size of result set per page.                          
     * - `sort` - A string used to set the user subscription property to sort the result collection by.                          
     * - `embed` - Comma separated list of resources to be contained within the current representation.                          
     * @method
     * @param options Query resource options object.                                 
     * @example baasicNotificationsRegistrationsAnonymousRouteDefinition.find({     
                   searchQuery: '<search-phrase>',     
                   providers: '<provider-name>,<provider-name>' 
               });                          
    */
    find(options?: IOptions): any {
        return super.baseFind('notifications/registrations/anonymous/{?searchQuery,providers,page,rpp,sort,embed,fields}', options);
    }

    /**                          
     * Parses get anonymous registrations route; this route should be expanded with the Id of anonymous registrations resource.                          
     * @method
     * @param id The registration identifier which uniquely identifies AnonymousRegistration resource that needs to be retrieved.
     * @param options Query resource options object.                       
     * @example baasicNotificationsRegistrationsAnonymousRouteDefinition.get({ id: '<registration-id>' });                          
     */
    get(id: string, options?: IOptions): any {
        return super.baseGet('notifications/registrations/anonymous/{id}/{?embed}', id, options);
    }

    /**                          
     * Parses update anonymous registrations route; this route should be expanded with the Id of anonymous registrations resource.                          
     * @method
     * @param data An object used to update specified AnonymousRegistration resource.               
     * @example baasicNotificationsRegistrationsAnonymousRouteDefinition.update(data);                          
     */
    update(data: IAnonymousRegistration): any {
        return super.baseUpdate('notifications/registrations/anonymous/{id}', data);
    }

    /**                          
     * Parses delete anonymous registrations route; this route should be expanded with the Id of anonymous registrations resource.                          
     * @method
     * @param data An object used to delete specified AnonymousRegistration resource.               
     * @example baasicNotificationsRegistrationsAnonymousRouteDefinition.delete(data);                          
     */
    delete(data: IAnonymousRegistration): any {
        return super.baseDelete('notifications/registrations/anonymous/{id}', data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */