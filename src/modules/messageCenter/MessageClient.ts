/* globals module */
/**  
* @module messageClient  
* @description  Message Center Message Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Message Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify"; 
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MessageBatchClient, MessageRoute, TYPES as channelTypes } from './';
import { IMessage, IMessageOptions } from './contracts'; 

@injectable()
export class MessageClient {

    get routeDefinition(): MessageRoute {
        return this.messageRoute; 
    }

    get batch(): MessageBatchClient{
        return this.messageBatchClient;
    }

    constructor(
        @inject(channelTypes.MessageRoute) protected messageRoute: MessageRoute,
        @inject(channelTypes.MessageBatchClient) protected messageBatchClient: MessageBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient 
    ){ }

    /**                  
    * Returns a promise that is resolved once the find action has been performed. Success response returns a list of message resources matching the given criteria.                  
    * @method
    * @param options Query resource MessageOptions object. 
    * @returns A promise that is resolved once the find action has been performed.                      
    * @example messageClient.find({   
                   pageNumber : 1,   
                   pageSize : 10,   
                   orderBy : '<field>',   
                   orderDirection : '<asc|desc>',   
                   search : '<search-phrase>', 
                   ids : '<identifiers>', 
                   channelIds: '<channel_identifiers>' 
                })
               .then(function (collection) {   
                   // perform success action here 
                }, 
                function (response, status, headers, config) {   
                    // perform error handling here 
                });                    
    **/
    find(options?: IMessageOptions): PromiseLike<IHttpResponse<IQueryModel<IMessage>>> {
        return this.apiClient.get<IQueryModel<IMessage>>(this.routeDefinition.find(options));
    }

    /**                 
    * Returns a promise that is resolved once the get action has been performed. Success response returns the message resource.                 
    * @method
    * @param id Message id which uniquely identifies resource that needs to be retrieved.
    * @param options Query resource options object.
    * @returns A promise that is resolved once the get action has been performed.                       
    * @example messageClient.get(id, options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMessage>> {
        return this.apiClient.get<IMessage>(this.routeDefinition.get(id, options));
    }

    /**                  
    * Returns a promise that is resolved once the create message action has been performed; this action creates a new message resource.                  
    * @method
    * @param data An message object that needs to be inserted into the system.
    * @returns A promise that is resolved once the create message action has been performed.                          
    * @example messageClient.create({   
                    channelId: '<channelId>', 
                    messageContent?: '<message>'
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                    });                 
    **/
    create(data: IMessage): PromiseLike<IHttpResponse<IMessage>> {
        return this.apiClient.post<IMessage>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**                  
    * Returns a promise that is resolved once the update message action has been performed; this action updates an message resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `messageRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
    * ``` 
    * let params = modelMapper.removeParams(message); 
    * let uri = params['model'].links('put').href; 
    * ```                  
    * @method
    * @param data An message object used to update specified message resource.
    * @returns A promise that is resolved once the update message action has been performed.                         
    * @example // message is a resource previously fetched using get action. 
                    message.messageContent = '<message>'; 
                    messageClient.update(message)
                        .then(function (data) {   
                            // perform success action here 
                        }, 
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
    **/
    update(data: IMessage): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
    * Returns a promise that is resolved once the remove action has been performed. This action will remove an message resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `messageRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
    * ``` 
    * let params = modelMapper.removeParams(message); 
    * let uri = params['model'].links('delete').href; 
    * ```                  
    * @method
    * @param data An message object used to delete specified message resource.
    * @returns A promise that is resolved once the remove action has been performed.                         
    * @example // message is a resource previously fetched using get action.				 
                       messageClient.remove(message)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           });						        
    **/
    remove(data: IMessage): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
    * Returns a promise that is resolved once the purge action has been performed. This action will remove all Message resources from the system if succesfully completed.
    * @method
    * @returns A promise that is resolved once the purge action has been performed.
    * @example messageClient.purge()
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