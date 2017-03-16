/* globals module */
/**  
 * @module baasicUserProfileAvatarClient  
 * @description Baasic User Profile Avatar Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Profile Avatar Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicUserProfileAvatarRouteDefinition, BaasicUserProfileAvatarStreamsClient, TYPES as userProfileTypes } from 'modules/userProfile';
import { IProfileAvatar } from 'modules/userProfile/contracts';

@injectable()
export class BaasicUserProfileAvatarClient {

    get routeDefinition(): BaasicUserProfileAvatarRouteDefinition {
        return this.baasicUserProfileAvatarRouteDefinition;
    }

    get streams(): BaasicUserProfileAvatarStreamsClient {
        return this.baasicUserProfileAvatarStreamsClient;
    }

    constructor(
        @inject(userProfileTypes.BaasicUserProfileAvatarRouteDefinition) protected baasicUserProfileAvatarRouteDefinition: BaasicUserProfileAvatarRouteDefinition,
        @inject(userProfileTypes.BaasicUserProfileAvatarStreamsClient) protected baasicUserProfileAvatarStreamsClient: BaasicUserProfileAvatarStreamsClient,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method
     * @param id User Profile id which uniquely identifies user avatar resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example baasicUserProfileAvatarClient.get('<file-id>')
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IProfileAvatar>> {
        return this.baasicApiClient.get<IProfileAvatar>(this.baasicUserProfileAvatarRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserProfileAvatarRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(fileEntry); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data Avatar file object that need to be updated in the system.
     * @returns A promise that is resolved once the update file action has been performed.                         
     * @example // fileEntry is a file resource previously fetched using get action. 
                       fileEntry.description = '<description>'; 
                       baasicUserProfileAvatarClient.update(fileEntry)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                           }); 				
                                // perform error handling here 
    **/
    update(data: IProfileAvatar): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicUserProfileAvatarRouteDefinition.update(data), data);
    }

    /**                 
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Profile Files module (For example: file resources from the Media Vault module can be linked directly into the Profile Files module).                 
     * @method
     * @param id User Profile id which uniquely identifies user avatar resource that needs to be retrieved.
     * @param data A profile avatar file object that need to be inserted into the system. 
     * @returns A promise that is resolved once the link action has been performed.                       
     * @example baasicUserProfileAvatarClient.link(fileObject)
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });                
     **/
    link(id: string, data: IProfileAvatar): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicUserProfileAvatarRouteDefinition.link(id, data), this.baasicUserProfileAvatarRouteDefinition.createParams(data, id));
    }

    /**                 
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicUserProfileAvatarRouteDefinition route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                 
     * @method
     * @param data A profile avatar file object used to remove specific profile avatar from the system.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the unlink action has been performed.                          
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                    baasicUserProfileAvatarRouteDefinition.remove(fileEntry)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });                
     **/
    unlink(data: IProfileAvatar, options?: any): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicUserProfileAvatarRouteDefinition.unlink(data, options));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */