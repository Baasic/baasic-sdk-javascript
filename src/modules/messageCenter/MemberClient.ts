/* globals module */
/**  
* @module memberClient  
* @description  Message Center Member Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Member Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify"; 
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MemberBatchClient, MemberRoute, TYPES as channelTypes } from './';
import { IMember } from './contracts'; 

@injectable()
export class MemberClient {

    get routeDefinition(): MemberRoute {
        return this.memberRoute;
    }

    get batch(): MemberBatchClient {
        return this.memberBatchClient;
    }

    constructor(
        @inject(channelTypes.MemberRoute) protected memberRoute: MemberRoute, 
        @inject(channelTypes.MemberBatchClient) protected memberBatchClient: MemberBatchClient, 
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ){ }

    /**                  
    * Returns a promise that is resolved once the find action has been performed. Success response returns a list of member resources matching the given criteria.                  
    * @method
    * @param options Query resource options object. 
    * @returns A promise that is resolved once the find action has been performed.                      
    * @example memberClient.find({   
                   pageNumber : 1,   
                   pageSize : 10,   
                   orderBy : '<field>',   
                   orderDirection : '<asc|desc>',   
                   search : '<search-phrase>' 
                })
               .then(function (collection) {   
                   // perform success action here 
                }, 
                function (response, status, headers, config) {   
                    // perform error handling here 
                });                    
    **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IMember>>> {
        return this.apiClient.get<IQueryModel<IMember>>(this.routeDefinition.find(options));
    }

    /**                 
    * Returns a promise that is resolved once the get action has been performed. Success response returns the member resource.                 
    * @method
    * @param id Member id which uniquely identifies resource that needs to be retrieved.
    * @param options Query resource options object.
    * @returns A promise that is resolved once the get action has been performed.                       
    * @example memberClient.get(id, options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMember>> {
        return this.apiClient.get<IMember>(this.routeDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create member action has been performed; this action creates a new member resource.                  
     * @method
     * @param data An member object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create member action has been performed.                          
     * @example memberClient.create({   
                    channelId: '<channelId>',
                    hasHistoryAccess?: '<hasHistoryAccess>'
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                 
     **/
    create(data: IMember): PromiseLike<IHttpResponse<IMember>> {
        return this.apiClient.post<IMember>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**                  
    * Returns a promise that is resolved once the update member action has been performed; this action updates an member resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `channelRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
    * ``` 
    * let params = modelMapper.removeParams(member); 
    * let uri = params['model'].links('put').href; 
    * ```                  
    * @method
    * @param data An member object used to update specified member resource.
    * @returns A promise that is resolved once the update member action has been performed.                         
    * @example // member is a resource previously fetched using get action. 
                    member.hasHistoryAccess = '<hashistoryAccess>'; 
                    memberClient.update(member)
                        .then(function (data) {   
                            // perform success action here 
                        }, 
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
    **/
    update(data: IMember): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
    * Returns a promise that is resolved once the remove action has been performed. This action will remove an member resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `channelRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
    * ``` 
    * let params = modelMapper.removeParams(member); 
    * let uri = params['model'].links('delete').href; 
    * ```                  
    * @method
    * @param data An member object used to delete specified member resource.
    * @returns A promise that is resolved once the remove action has been performed.                         
    * @example // member is a resource previously fetched using get action.				 
                       memberClient.remove(member)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           });						        
    **/
    remove(data: IMember): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
    * Returns a promise that is resolved once the purge action has been performed. This action will remove all Channel resources from the system if succesfully completed.
    * @method
    * @returns A promise that is resolved once the purge action has been performed.
    * @example memberClient.purge()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
    **/
    purge( ): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge());
    }
}