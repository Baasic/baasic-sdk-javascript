/* globals module */
/**  
 * @module memberBatchClient  
 * @description  Message Center Member Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Member Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import {injectable, inject } from "inversify"; 
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { MemberBatchRoute, TYPES as channelTypes } from './';
import { IMember } from './contracts'; 

@injectable()
export class MemberBatchClient{

    get routeDefinition(): MemberBatchRoute{
        return this.memberBatchRoute;
    }

    constructor(
        @inject(channelTypes.MemberBatchRoute) protected memberBatchRoute: MemberBatchRoute, 
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

        /**                   
     * Returns a promise that is resolved once the create member action has been performed; this action creates new member resources.                   
     * @method
     * @param data A collection of member objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create member action has been performed.                          
     * @example   memberBatchClient.create([{        
                    channelId: '<channelId>', 
                    hasHistoryAccess?: '<hasHistoryAccess>'   
                  }])
                  .then(function (data) {     
                      // perform success action here   
                   }, 
                    function (response, status, headers, config) {     
                        // perform error handling here   
                   });                   
     **/
    create(data: IMember[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

        /**                   
     * Returns a promise that is resolved once the update member action has been performed; this action updates specified member resources.                   
     * @method
     * @param data A collection of member objects used to update specified member resources.
     * @returns A promise that is resolved once the update member action has been performed.                         
     * @example   memberBatchClient.update(members)
                    .then(function (data) {     
                        // perform success action here   
                    }, 
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });                   
     **/
    update(data: IMember[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

        /**                   
     * Returns a promise that is resolved once the remove action has been performed. This action will remove member resources from the system if successfully completed.                   
     * @method                         
     * @example memberBatchClient.remove(memberIds)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });		                  
     **/
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(), undefined, ids);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */
