/* globals module */
/**  
 * @module baasicNotificationsRegistrationsAnonymousClient  
 * @description Baasic Notifications Registrations Anonymous Client provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsRegistrationsAnonymousClient` uses `baasicNotificationsRegistrationsAnonymousRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import {
    BaasicNotificationsRegistrationsAnonymousBatchClient,
    BaasicNotificationsRegistrationsAnonymousRouteDefinition,
    TYPES as notificationsTypes
} from 'modules/notifications';
import { IAnonymousRegistration } from 'modules/notifications/contracts';

@injectable()
export class BaasicNotificationsRegistrationsAnonymousClient {

    get routeDefinition(): BaasicNotificationsRegistrationsAnonymousRouteDefinition {
        return this.baasicNotificationsRegistrationsAnonymousRouteDefinition;
    }

    get batch(): BaasicNotificationsRegistrationsAnonymousBatchClient {
        return this.baasicNotificationsRegistrationsAnonymousBatchClient;
    }

    constructor(
        @inject(notificationsTypes.BaasicNotificationsRegistrationsAnonymousRouteDefinition) protected baasicNotificationsRegistrationsAnonymousRouteDefinition: BaasicNotificationsRegistrationsAnonymousRouteDefinition,
        @inject(notificationsTypes.BaasicNotificationsRegistrationsAnonymousBatchClient) protected baasicNotificationsRegistrationsAnonymousBatchClient: BaasicNotificationsRegistrationsAnonymousBatchClient,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                          
     * Returns a promise that is resolved once the create anonymous registration action has been performed; this action creates a new anonymous registration resource.                          
     * @method
     * @param data An AnonymousRegistration object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create anonymous registration action has been performed.                        
     * @example baasicNotificationsRegistrationsAnonymousClient.create({     
                    provider: '<provider-name>',     
                    providerdata: <provider-data>,     
                    expirationData: '<expiration-date>' 
                })
                .then(function (data) {    
                    // perform success action here 
                },
                 function (response, status, headers, config) {     
                     // perform error handling here 
                });                         
     */
    create(data: IAnonymousRegistration): PromiseLike<IHttpResponse<IAnonymousRegistration>> {
        return this.baasicApiClient.post(this.baasicNotificationsRegistrationsAnonymousRouteDefinition.create(), this.baasicNotificationsRegistrationsAnonymousRouteDefinition.createParams(data));
    }

    /**                          
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of anonymous registration resources matching the given criteria.                          
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                                
     * @example baasicNotificationsRegistrationsAnonymousClient.find({     
                   pageNumber : 1,     
                   pageSize : 10,     
                   orderBy : '<field>',     
                   orderDirection : '<asc|desc>',     
                   search : '<search-phrase>',     
                   providers: '<provider-name1>,<provider-name2>',     
                   embed: '<embed>' 
               })
               .then(function (collection) {     
                   // perform success action here 
               },
                function (response, status, headers, config) {     
                    // perform error handling here 
               });                            
    */
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAnonymousRegistration>>> {
        return this.baasicApiClient.get(this.baasicNotificationsRegistrationsAnonymousRouteDefinition.find(options));
    }

    /**                          
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified anonymous registration resource.                          
     * @method
     * @param id The registration identifier which uniquely identifies AnonymousRegistration resource that needs to be retrieved.
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the get action has been performed.                                
     * @example baasicNotificationsRegistrationsAnonymousClient.get('<registration-id>')
                    .then(function (data) {     
                        // perform success action here 
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here 
                    });                         
     */
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousRegistration>> {
        return this.baasicApiClient.get(this.baasicNotificationsRegistrationsAnonymousRouteDefinition.get(id, options));
    }

    /**                          
     * Returns a promise that is resolved once the remove anonymous registration action has been performed. This action will remove a anonymous registration resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRegistrationsAnonymousRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(registration); 
     * var uri = params['model'].links('delete').href; 
     * ```                          
     * @method
     * @param data An object used to delete specified AnonymousRegistration resource. 
     * @returns A promise that is resolved once the remove anonymous registration action has been performed.                                
     * @example // registration is a resource previously fetched using get action.				 
                    baasicNotificationsRegistrationsAnonymousClient.remove(registration) 
                        .then(function (data) {     
                            // perform success action here 
                        },
                         function (response, status, headers, config) {     
                             // perform error handling here 
                        });						        
     */
    remove(data: IAnonymousRegistration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicNotificationsRegistrationsAnonymousRouteDefinition.delete(data));
    }

    /**                          
     * Returns a promise that is resolved once the update anonymous registration action has been performed; this action updates a anonymous registration resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRegistrationsAnonymousRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(registration); 
     * var uri = params['model'].links('put').href; 
     * ```                          
     * @method
     * @param data An object used to update specified AnonymousRegistration resource.
     * @returns A promise that is resolved once the update anonymous registration action has been performed                                  
     * @example // registration is a resource previously fetched using get action. 
                        subscription.provider = '<provider-name>'; 
                        baasicNotificationsRegistrationsAnonymousClient.update(registration)
                            .then(function (data) {         
                                // perform success action here 
                            },
                             function (response, status, headers, config) {         
                                 // perform error handling here 
                            }); 				        
     */
    update(data: IAnonymousRegistration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicNotificationsRegistrationsAnonymousRouteDefinition.update(data), this.baasicNotificationsRegistrationsAnonymousRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */