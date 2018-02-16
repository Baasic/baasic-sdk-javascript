/* globals module */
/**  
* @module channelClient  
* @description  Message Center Channel Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Channel Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify"; 
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { ChannelBatchClient, ChannelRoute, TYPES as channelTypes } from './';
import { IChannel, IChannelOptions } from './contracts'; 

@injectable()
export class ChannelClient {

    get routeDefinition(): ChannelRoute {
        return this.channelRoute; 
    }

    get batch(): ChannelBatchClient{
        return this.channelBatchClient;
    }

    constructor(
        @inject(channelTypes.ChannelRoute) protected channelRoute: ChannelRoute,
        @inject(channelTypes.ChannelBatchClient) protected channelBatchClient: ChannelBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient 
    ){ }

    /**                  
    * Returns a promise that is resolved once the find action has been performed. Success response returns a list of channel resources matching the given criteria.                  
    * @method
    * @param options Query resource ChannelOptions object. 
    * @returns A promise that is resolved once the find action has been performed.                      
    * @example channelClient.find({   
                   pageNumber : 1,   
                   pageSize : 10,   
                   orderBy : '<field>',   
                   orderDirection : '<asc|desc>',   
                   search : '<search-phrase>', 
                   ids : '<identifiers>', 
                   memberIds : '<member_identifiers>'
                })
               .then(function (collection) {   
                   // perform success action here 
                }, 
                function (response, status, headers, config) {   
                    // perform error handling here 
                });                    
    **/
    find(options?: IChannelOptions): PromiseLike<IHttpResponse<IQueryModel<IChannel>>> {
        return this.apiClient.get<IQueryModel<IChannel>>(this.routeDefinition.find(options));
    }

    /**                 
    * Returns a promise that is resolved once the get action has been performed. Success response returns the channel resource.                 
    * @method
    * @param id Channel id which uniquely identifies resource that needs to be retrieved.
    * @param options Query resource options object.
    * @returns A promise that is resolved once the get action has been performed.                       
    * @example channelClient.get(id, options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IChannel>> {
        return this.apiClient.get<IChannel>(this.routeDefinition.get(id, options));
    }

    
    /**                  
    * Returns a promise that is resolved once the create channel action has been performed; this action creates a new channel resource.                  
    * @method
    * @param data An channel object that needs to be inserted into the system.
    * @returns A promise that is resolved once the create channel action has been performed.                          
    * @example channelClient.create({   
                    name?: '<name>',
                    memberIds?: '<memberIds>'
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                 
    **/
    create(data: IChannel): PromiseLike<IHttpResponse<IChannel>> {
        return this.apiClient.post<IChannel>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**                  
    * Returns a promise that is resolved once the update channel action has been performed; this action updates an channel resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `channelRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
    * ``` 
    * let params = modelMapper.removeParams(channel); 
    * let uri = params['model'].links('put').href; 
    * ```                  
    * @method
    * @param data An channel object used to update specified channel resource.
    * @returns A promise that is resolved once the update channel action has been performed.                         
    * @example // channel is a resource previously fetched using get action. 
                    channel.name = '<name>'; 
                    channelClient.update(channel)
                        .then(function (data) {   
                            // perform success action here 
                        }, 
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
    **/
    update(data: IChannel): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
    * Returns a promise that is resolved once the remove action has been performed. This action will remove an channel resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `channelRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
    * ``` 
    * let params = modelMapper.removeParams(channel); 
    * let uri = params['model'].links('delete').href; 
    * ```                  
    * @method
    * @param data An channel object used to delete specified channel resource.
    * @returns A promise that is resolved once the remove action has been performed.                         
    * @example // channel is a resource previously fetched using get action.				 
                       channelClient.remove(channel)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           });						        
    **/
    remove(data: IChannel): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
    * Returns a promise that is resolved once the purge action has been performed. This action will remove all Channel resources from the system if succesfully completed.
    * @method
    * @returns A promise that is resolved once the purge action has been performed.
    * @example channelClient.purge()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
    */
    purge( ): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge());
    }
}