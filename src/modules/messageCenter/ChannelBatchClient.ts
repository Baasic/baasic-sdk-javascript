/* globals module */
/**  
 * @module channelBatchClient  
 * @description  Message Center Channel Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Channel Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { ChannelBatchRoute, TYPES as channelTypes } from './';
import { IChannel } from './contracts';

@injectable()
export class ChannelBatchClient {

    get routeDefinition(): ChannelBatchRoute{
        return this.channelBatchRoute;
    }

    constructor (
        @inject(channelTypes.ChannelBatchRoute) protected channelBatchRoute: ChannelBatchRoute, 
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ){ }

    /**                   
    * Returns a promise that is resolved once the create channel action has been performed; this action creates new channel resources.                   
    * @method
    * @param data A collection of channel objects that need to be inserted into the system.
    * @returns A promise that is resolved once the create channel action has been performed.                          
    * @example  channelBatchClient.create([{     
                   name?: '<name>', 
                   memberIds?: '<memberIds>'
                }])
                .then(function (data) {     
                    // perform success action here   
                 },
                  function (response, status, headers, config) {     
                    // perform error handling here   
                });                   
    **/
    create(data: IChannel[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                   
    * Returns a promise that is resolved once the update channel action has been performed; this action updates specified channel resources.                   
    * @method
    * @param data A collection of channel objects used to update specified channel resources.
    * @returns A promise that is resolved once the update channel action has been performed.                         
    * @example   channelBatchClient.update(channels)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });                   
    **/
    update(data: IChannel[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**                   
    * Returns a promise that is resolved once the remove action has been performed. This action will remove channel resources from the system if successfully completed.                   
    * @method
    * @param ids Collection of channel ids which uniquely identifies channel resources that need to be deleted.
    * @returns A promise that is resolved once the remove action has been performed.                          
    * @example channelBatchClient.remove(channelIds)
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