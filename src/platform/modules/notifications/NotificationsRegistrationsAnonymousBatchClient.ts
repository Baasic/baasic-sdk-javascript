/* globals module */
/**  
 * @module notificationsRegistrationsAnonymousBatchClient  
 * @description  Notifications Registrations Anonymous Batch Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsRegistrationsAnonymousBatchClient` uses `notificationsRegistrationsAnonymousBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { IQueryModel, IOptions } from '../../../common/contracts';;
import {
    NotificationsRegistrationsAnonymousBatchRoute,
    TYPES as notificationsTypes
} from './';
import { IAnonymousRegistration } from './contracts';

@injectable()
export class NotificationsRegistrationsAnonymousBatchClient {

    get routeDefinition(): NotificationsRegistrationsAnonymousBatchRoute {
        return this.notificationsRegistrationsAnonymousBatchRoute;
    }

    constructor(
        @inject(notificationsTypes.NotificationsRegistrationsAnonymousBatchRoute) protected notificationsRegistrationsAnonymousBatchRoute: NotificationsRegistrationsAnonymousBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                              
     * Returns a promise that is resolved once the create anonymous registration action has been performed; this action creates new anonymous registration resources.                              
     * @method
     * @param data AnonymousRegistration objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create anonymous registration action has been performed.                                     
     * @example notificationsRegistrationsAnonymousBatchClient.create([{     
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
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                              
     * Returns a promise that is resolved once the remove action has been performed. This action will remove anonymous registration resources from the system if successfully completed.                              
     * @method
     * @param ids The registration ids which uniquely identify AnonymousRegistration resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                                    
     * @example notificationsRegistrationsAnonymousBatchClient.remove(subscriptionIds) 
                   .then(function (data) {     
                       // perform success action here 
                   },
                    function (response, status, headers, config) {     
                        // perform error handling here 
                   });		                            
    */
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.notificationsRegistrationsAnonymousBatchRoute.delete(), undefined, ids);
    }

    /**                              
     * Returns a promise that is resolved once the update anonymous registration action has been performed; this action updates specified anonymous registration  resources.                              
     * @method
     * @param data AnonymousRegistration objects used to update specified AnonymousRegistration resources.
     * @returns A promise that is resolved once the update anonymous registration action has been performed.                                     
     * @example notificationsRegistrationsAnonymousBatchClient.update(registrations)
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                             
     */
    update(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */