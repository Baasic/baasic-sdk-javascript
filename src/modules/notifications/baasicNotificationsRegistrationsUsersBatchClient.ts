/* globals module */
/**  
 * @module baasicNotificationsRegistrationsUsersBatchClient  
 * @description Baasic Notifications Registrations Users Batch Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsRegistrationsUsersBatchClient` uses `baasicNotificationsRegistrationsUsersBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicNotificationsRegistrationsUsersBatchRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';
import { IUserRegistration } from 'modules/notifications/contracts';

@injectable()
export class BaasicNotificationsRegistrationsUsersBatchClient {

    get routeDefinition(): BaasicNotificationsRegistrationsUsersBatchRouteDefinition {
        return this.baasicNotificationsRegistrationsUsersBatchRouteDefinition;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsRegistrationsUsersBatchRouteDefinition) protected baasicNotificationsRegistrationsUsersBatchRouteDefinition: BaasicNotificationsRegistrationsUsersBatchRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                              
     * Returns a promise that is resolved once the create user registration action has been performed; this action creates new user registration resources.                              
     * @method
     * @param data UserRegistration collection that need to be inserted into the system.                                   
     * @returns A promise that is resolved once the create user registration action has been performed. 
     * @example baasicNotificationsRegistrationsUsersBatchClient.create([{     
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
        return this.baasicApiClient.post(this.baasicNotificationsRegistrationsUsersBatchRouteDefinition.create(), this.baasicNotificationsRegistrationsUsersBatchRouteDefinition.createParams(data));
    }

    /**                              
     * Returns a promise that is resolved once the remove action has been performed. This action will remove user registration resources from the system if successfully completed.                              
     * @method 
     * @param ids The subscription ids which uniquely identify UserRegistration resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                                    
     * @example baasicNotificationsRegistrationsUsersBatchClient.remove(subscriptionIds)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });		                            
     */
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicNotificationsRegistrationsUsersBatchRouteDefinition.delete(), undefined, ids);
    }

    /**                              
     * Returns a promise that is resolved once the update user registration action has been performed; this action updates specified user registration resources.                              
     * @method
     * @param data UserRegistration objects used to update specified UserRegistration resources.
     * @returns A promise that is resolved once the update user registration action has been performed.                                
     * @example baasicNotificationsRegistrationsUsersBatchClient.update(registrations)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                             
     */
    update(data: IUserRegistration[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicNotificationsRegistrationsUsersBatchRouteDefinition.update(), this.baasicNotificationsRegistrationsUsersBatchRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */