/* globals module */
/**  
 * @module baasicNotificationsSettingsClient  
 * @description Baasic Notifications Settings Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsSettingsClient` uses `baasicNotificationsSettingsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicNotificationsSettingsRouteDefinition, TYPES as notificationsTypes } from 'modules/notifications';

@injectable()
export class BaasicNotificationsSettingsClient {

    get routeDefinition(): BaasicNotificationsSettingsRouteDefinition {
        return this.baasicNotificationsSettingsRouteDefinition;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsSettingsRouteDefinition) protected baasicNotificationsSettingsRouteDefinition: BaasicNotificationsSettingsRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                      
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified setting resource.                      
     * @method                            
     * @param provider The notification provider name.
     * @returns A promise that is resolved once the get action has been performed. 
     * @example baasicNotificationsSettingsClient.get('<provider-name>')
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                     
     */
    get(provider: string): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicNotificationsSettingsRouteDefinition.get(provider));
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
                    baasicNotificationsSettingsClient.update(settings) 
                        .then(function (data) {         
                            // perform success action here 
                        },
                         function (response, status, headers, config) {         
                             // perform error handling here 
                        });                     
     */
    update(data: Object): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicNotificationsSettingsRouteDefinition.update(data), this.baasicNotificationsSettingsRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */