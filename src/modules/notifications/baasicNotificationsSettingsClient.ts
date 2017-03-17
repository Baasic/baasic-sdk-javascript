/* globals module */
/**  
 * @module notificationsSettingsClient  
 * @description  Notifications Settings Client provides an easy way to consume  Notifications REST API end-points. In order to obtain needed routes `notificationsSettingsClient` uses `baasicNotificationsSettingsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { NotificationsSettingsRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';

@injectable()
export class NotificationsSettingsClient {

    get routeDefinition(): NotificationsSettingsRouteDefinition {
        return this.baasicNotificationsSettingsRouteDefinition;
    }

    constructor(
        @inject(notificationsTypes.NotificationsSettingsRouteDefinition) protected baasicNotificationsSettingsRouteDefinition: NotificationsSettingsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                      
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified setting resource.                      
     * @method                            
     * @param provider The notification provider name.
     * @returns A promise that is resolved once the get action has been performed. 
     * @example notificationsSettingsClient.get('<provider-name>')
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                     
     */
    get(provider: string): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.baasicNotificationsSettingsRouteDefinition.get(provider));
    }

    /**                      
     * Returns a promise that is resolved once the update settings action has been performed; this action updates a settings resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(settings); 
     * let uri = params['model'].links('put').href; 
     * ```                         
     * @method 
     * @param data The notification settings.
     * @returns A promise that is resolved once the update settings action has been performed.                               
     * @example // settings is a resource previously fetched using get action. 
                    notificationsSettingsClient.update(settings) 
                        .then(function (data) {         
                            // perform success action here 
                        },
                         function (response, status, headers, config) {         
                             // perform error handling here 
                        });                     
     */
    update(data: Object): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.baasicNotificationsSettingsRouteDefinition.update(data), this.baasicNotificationsSettingsRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */