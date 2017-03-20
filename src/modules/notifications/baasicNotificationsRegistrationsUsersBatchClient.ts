/* globals module */
/**  
 * @module notificationsRegistrationsUsersBatchClient  
 * @description  Notifications Registrations Users Batch Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsRegistrationsUsersBatchClient` uses `notificationsRegistrationsUsersBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { IQueryModel, IOptions } from 'common/contracts';
import { NotificationsRegistrationsUsersBatchRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';
import { IUserRegistration } from 'modules/notifications/contracts';

@injectable()
export class NotificationsRegistrationsUsersBatchClient {

    get routeDefinition(): NotificationsRegistrationsUsersBatchRouteDefinition {
        return this.notificationsRegistrationsUsersBatchRouteDefinition;
    }

    constructor(
        @inject(notificationsTypes.NotificationsRegistrationsUsersBatchRouteDefinition) protected notificationsRegistrationsUsersBatchRouteDefinition: NotificationsRegistrationsUsersBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                              
     * Returns a promise that is resolved once the create user registration action has been performed; this action creates new user registration resources.                              
     * @method
     * @param data UserRegistration collection that need to be inserted into the system.                                   
     * @returns A promise that is resolved once the create user registration action has been performed. 
     * @example notificationsRegistrationsUsersBatchClient.create([{     
                    provider: '<provider-name>',     
                    providerData: <provider-data>,     
                    userId: '<user-id>' 
                }])
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                             
     */
    create(data: IUserRegistration[]): PromiseLike<IHttpResponse<IUserRegistration[]>> {
        return this.apiClient.post<IUserRegistration[]>(this.routeDefinition.create(), this.notificationsRegistrationsUsersBatchRouteDefinition.createParams(data));
    }

    /**                              
     * Returns a promise that is resolved once the remove action has been performed. This action will remove user registration resources from the system if successfully completed.                              
     * @method 
     * @param ids The subscription ids which uniquely identify UserRegistration resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                                    
     * @example notificationsRegistrationsUsersBatchClient.remove(subscriptionIds)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });		                            
     */
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.notificationsRegistrationsUsersBatchRouteDefinition.delete(), undefined, ids);
    }

    /**                              
     * Returns a promise that is resolved once the update user registration action has been performed; this action updates specified user registration resources.                              
     * @method
     * @param data UserRegistration objects used to update specified UserRegistration resources.
     * @returns A promise that is resolved once the update user registration action has been performed.                                
     * @example notificationsRegistrationsUsersBatchClient.update(registrations)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                             
     */
    update(data: IUserRegistration[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.notificationsRegistrationsUsersBatchRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */