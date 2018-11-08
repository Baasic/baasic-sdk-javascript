/* globals module */
/**  
 * @module userProfileAvatarClient  
 * @description  User Profile Avatar Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Profile Avatar Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { UserProfileAvatarRoute, UserProfileAvatarStreamsClient, TYPES as userProfileTypes } from './';
import { IProfileAvatar } from './contracts';

@injectable()
export class UserProfileAvatarClient {

    get routeDefinition(): UserProfileAvatarRoute {
        return this.userProfileAvatarRoute;
    }

    get streams(): UserProfileAvatarStreamsClient {
        return this.userProfileAvatarStreamsClient;
    }

    constructor(
        @inject(userProfileTypes.UserProfileAvatarRoute) protected userProfileAvatarRoute: UserProfileAvatarRoute,
        @inject(userProfileTypes.UserProfileAvatarStreamsClient) protected userProfileAvatarStreamsClient: UserProfileAvatarStreamsClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method
     * @param id User Profile id which uniquely identifies user avatar resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example userProfileAvatarClient.get('<file-id>')
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IProfileAvatar>> {
        return this.apiClient.get<IProfileAvatar>(this.userProfileAvatarRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userProfileAvatarRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(fileEntry); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data Avatar file object that need to be updated in the system.
     * @returns A promise that is resolved once the update file action has been performed.                         
     * @example // fileEntry is a file resource previously fetched using get action. 
                       fileEntry.description = '<description>'; 
                       userProfileAvatarClient.update(fileEntry)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                           }); 				
                                // perform error handling here 
    **/
    update(data: IProfileAvatar): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.userProfileAvatarRoute.update(data), data);
    }

    /**                 
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Profile Files module (For example: file resources from the Media Vault module can be linked directly into the Profile Files module).                 
     * @method
     * @param id User Profile id which uniquely identifies user avatar resource that needs to be retrieved.
     * @param data A profile avatar file object that need to be inserted into the system. 
     * @returns A promise that is resolved once the link action has been performed.                       
     * @example userProfileAvatarClient.link(fileObject)
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });                
     **/
    link(id: string, data: IProfileAvatar): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.link(id, data), this.routeDefinition.createParams(data, id));
    }

    /**                 
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply userProfileAvatarRoute route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                 
     * @method
     * @param data A profile avatar file object used to remove specific profile avatar from the system.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the unlink action has been performed.                          
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                    userProfileAvatarRoute.remove(fileEntry)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });                
     **/
    unlink(data: IProfileAvatar, options?: any): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.delete(this.userProfileAvatarRoute.unlink(data, options));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */