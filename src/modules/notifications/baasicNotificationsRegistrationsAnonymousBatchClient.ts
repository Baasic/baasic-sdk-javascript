/* globals module */
/**  
 * @module baasicNotificationsRegistrationsAnonymousBatchClient  
 * @description Baasic Notifications Registrations Anonymous Batch Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsRegistrationsAnonymousBatchClient` uses `baasicNotificationsRegistrationsAnonymousBatchRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import {
    BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition,
    TYPES as notificationsTypes
} from 'modules/notifications';
import { IAnonymousRegistration } from 'modules/notifications/contracts';

@injectable()
export class BaasicNotificationsRegistrationsAnonymousBatchClient {

    get routeDefinition(): BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition {
        return this.baasicNotificationsRegistrationsAnonymousBatchRouteDefinition;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition) protected baasicNotificationsRegistrationsAnonymousBatchRouteDefinition: BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                              
     * Returns a promise that is resolved once the create anonymous registration action has been performed; this action creates new anonymous registration resources.                              
     * @method
     * @param data AnonymousRegistration objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create anonymous registration action has been performed.                                     
     * @example baasicNotificationsRegistrationsAnonymousBatchClient.create([{     
                    provider: '<provider-name>',     
                    providerData: <provider-data>,     
                    expirationDate: <expiration-date> 
                }]) 
                .then(function (data) {     
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                             
     */
    create(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<IAnonymousRegistration[]>> {
        return this.baasicApiClient.post(this.baasicNotificationsRegistrationsAnonymousBatchRouteDefinition.create(), this.baasicNotificationsRegistrationsAnonymousBatchRouteDefinition.createParams(data));
    }

    /**                              
     * Returns a promise that is resolved once the remove action has been performed. This action will remove anonymous registration resources from the system if successfully completed.                              
     * @method
     * @param ids The registration ids which uniquely identify AnonymousRegistration resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                                    
     * @example baasicNotificationsRegistrationsAnonymousBatchClient.remove(subscriptionIds) 
                   .then(function (data) {     
                       // perform success action here 
                   },
                    function (response, status, headers, config) {     
                        // perform error handling here 
                   });		                            
    */
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicNotificationsRegistrationsAnonymousBatchRouteDefinition.delete(), undefined, ids);
    }

    /**                              
     * Returns a promise that is resolved once the update anonymous registration action has been performed; this action updates specified anonymous registration  resources.                              
     * @method
     * @param data AnonymousRegistration objects used to update specified AnonymousRegistration resources.
     * @returns A promise that is resolved once the update anonymous registration action has been performed.                                     
     * @example baasicNotificationsRegistrationsAnonymousBatchClient.update(registrations)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                             
     */
    update(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicNotificationsRegistrationsAnonymousBatchRouteDefinition.update(), this.baasicNotificationsRegistrationsAnonymousBatchRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */