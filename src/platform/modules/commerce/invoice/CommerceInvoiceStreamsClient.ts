/* globals module */
/**
 * @module commerceInvoiceStreamsClient
 * @description  Commerce Invoice Streams Client provides an easy way to consume  Commerce REST API end-points. In order to obtain a needed routes `commerceInvoiceStreamsClient` uses `commerceInvoiceStreamsRoute`.
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { CommerceInvoiceStreamsRoute, TYPES as commerceTypes } from '../';

@injectable()
export class CommerceInvoiceStreamsClient {

    get routeDefinition(): CommerceInvoiceStreamsRoute {
        return this.commerceInvoiceStreamsRoute;
    }

    constructor(
        @inject(commerceTypes.CommerceInvoiceStreamsRoute) protected commerceInvoiceStreamsRoute: CommerceInvoiceStreamsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }


    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the invoice stream if successfully completed.
     * @method
     * @example // commerceInvoice is a resource previously fetched using get action.
                    commerceInvoiceStreamsClient.get({id: commerceInvoice.id})
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    get(data: any): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.routeDefinition.get(data));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the invoice stream as a blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
     * @method
     * @example // Request the original blob
                        commerceInvoiceClient.getBlobl({id: commerceInvoice.id})
                            .then(function (data) {
                                // perform success action here
                            },
                             function (response, status, headers, config) {
                                 // perform error handling here
                            });
     **/
    getBlob(data: any): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.request({
            url: this.commerceInvoiceStreamsRoute.get(data),
            responseType: 'blob',
            headers: { 'Accept': 'application/octet-stream' },
            method: 'GET'
        });
    }
}

/**
 * @copyright (c) 2017 Mono Ltd
 * @license MIT
 * @author Mono Ltd
 * @overview
 ***Notes:**
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.
 */