/* globals module */
/**  
* @module messageBatchClient  
* @description  Message Center Message Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Message Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MessageBatchRoute, TYPES as channelTypes } from './';
import { IMessage } from './contracts';

@injectable()
export class MessageBatchClient {

    get routeDefinition(): MessageBatchRoute {
        return this.messageBatchRoute; 
    }

    constructor(
        @inject(channelTypes.MessageBatchRoute) protected messageBatchRoute: MessageBatchRoute, 
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
    * Returns a promise that is resolved once the create message action has been performed; this action creates new message resources.                   
    * @method
    * @param data A collection of message objects that need to be inserted into the system.
    * @returns A promise that is resolved once the create message action has been performed.                          
    * @example  messageBatchClient.create([{     
                   channelId: '<channelId>', 
                   messageContent?: '<message>'
                }])
                .then(function (data) {     
                    // perform success action here   
                },
                  function (response, status, headers, config) {     
                      // perform error handling here   
                });                   
    **/
    create(data: IMessage[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }
    
    /**                   
    * Returns a promise that is resolved once the update message action has been performed; this action updates specified message resources.                   
    * @method
    * @param data A collection of message objects used to update specified message resources.
    * @returns A promise that is resolved once the update message action has been performed.                         
    * @example   messageBatchClient.update(messages)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });                   
    **/
    update(data: IMessage[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**                   
    * Returns a promise that is resolved once the remove action has been performed. This action will remove message resources from the system if successfully completed.                   
    * @method
    * @param ids Collection of message ids which uniquely identifies message resources that need to be deleted.
    * @returns A promise that is resolved once the remove action has been performed.                          
    * @example messageBatchClient.remove(memberIds)
                   .then(function (data) {     
                       // perform success action here   
                   }, 
                    function (response, status, headers, config) {     
                        // perform error handling here   
                   });		                  
    **/
    remove(ids: string[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.delete(this.routeDefinition.delete(), undefined, ids);
    }
}