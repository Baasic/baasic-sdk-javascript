/* globals module */
/**
 * @module dynamicResourceBatchClient
 * @description  DynamicResourceBatchClient provides an easy way to consume DynamicResourceBatchBatch REST API end-points. In order to obtain needed routes `dynamicResourceBatchClient` uses `dynamicResourceBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as dynamicResourceTypes,
    DynamicResourceBatchRoute
} from './';

@injectable()
export class DynamicResourceBatchClient {

    get routeDefinition(): DynamicResourceBatchRoute {
        return this.dynamicResourceBatchRoute;
    }

    constructor(
        @inject(dynamicResourceTypes.DynamicResourceBatchRoute) protected dynamicResourceBatchRoute: DynamicResourceBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create JSON object action has been performed; this action creates new JSON object resources.
     * @method
     * @param data JSON object objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create JSON object action has been performed.
     * @example dynamicResourceBatchClient.create([{                    
                    name: '<name>'
                }])
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    create(data: any[]): PromiseLike<IHttpResponse<any[]>> {
        return this.apiClient.post<any[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update JSON object action has been performed; this action updates JSON object resources. 
     * @method
     * @param data JSON object objects used to update specified JSON object resources.
     * @returns A promise that is resolved once the update JSON object action has been performed.
     * @example JSON object are resources previously fetched using get action.
                dynamicResourceBatchClient.update([{                    
                    id: '<id>',
                    name: '<name>'
                }])
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(data: any[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the patch JSON object action has been performed; this action patches JSON object resources. 
     * @method
     * @param data JSON object objects used to patch specified JSON object resources.
     * @returns A promise that is resolved once the patch JSON object action has been performed.
     * @example JSON object are resources previously fetched using get action.
                dynamicResourceBatchClient.patch([{                    
                    id: '<id>',
                    name: '<name>'
                }])
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    patch(data: any[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.patch(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove JSON object resources from the system if successfully completed.
     * @method
     * @param data JSON object Ids which uniquely identify JSON object resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example JSON object Ids are identifiers which uniquely identify JSON object resources.
                dynamicResourceBatchClient.remove(['<id1>', '<id2>']])
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    remove(data: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(), this.routeDefinition.deleteParams(data));
    }
}

/**
 * @copyright (c) 2017 Mono Ltd
 * @license MIT
 * @author Mono Ltd
 * @overview
 ***Notes:**
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route definition.
 */