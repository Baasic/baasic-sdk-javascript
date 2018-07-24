/* globals module */
/**
 * @module commerceProductFilesStreamsClient
 * @description  Product Files Streams Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Streams Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { CommerceProductFilesStreamsRoute, TYPES as productTypes } from '.././';
import { IProductFile } from '.././contracts';

@injectable()
export class CommerceProductFilesStreamsClient {

    get routeDefinition(): CommerceProductFilesStreamsRoute {
        return this.productFilesStreamsRoute;
    }

    constructor(
        @inject(productTypes.CommerceProductFilesStreamsRoute) protected productFilesStreamsRoute: CommerceProductFilesStreamsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.
     * @method
     * @param data Product file id of the original product file used to identify stream that needs to be retrieved from the system.
     * @returns A promise that is resolved once the get action has been performed.
     * @example // Request the original file stream
                    productFilesStreamsClient.get({id: '<file-id>'})
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });

                // Request derived file stream
                        productFilesStreamsClient.get({id: '<file-id>', width: <width>, height: <height>})
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
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
     * @method
     * @param data Product file id of the original product file used to identify stream that needs to be retrieved from the system.
     * @returns A promise that is resolved once the get action has been performed.
     * @example // Request the original blob
                    productFilesStreamsClient.getBlob('<file-id>')
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });

                // Request derived blob
                        productFilesStreamsClient.getBlob({
                            id: '<file-id>',
                            width: <width>,
                            height: <height>
                        })
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    getBlob(data: any): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.request({
            url: this.productFilesStreamsRoute.get(data),
            responseType: 'blob',
            headers: { 'Accept': 'application/octet-stream' },
            method: 'GET'
        });
    }

    /**
     * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).
     * @method
     * @param data Product file used to identify stream that needs to be updated.
     * @param stream
     * @returns A promise that is resolved once the update file stream action has been performed.
     * @example // Update original file stream
                    productFilesStreamsClient.update('<file-id>', <file-stream>)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });
                // Update derived file stream
                    productFilesStreamsClient.update({id: '<file-id>', width: <width>, height: <height>}, <file-stream>)
                        .then(function (data) {
                            //  perform success action here
                       },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    update(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.apiClient.put(this.productFilesStreamsRoute.update(data), formData, { 'Content-Type': undefined });
    }

    /**
     * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
     * @method
     * @param data Product file that needs to be saved into the system.
     * @param stream
     * @returns A promise that is resolved once the create file stream action has been performed.
     * @example productFilesStreamsClient.create('<file-id>', <blob>)
                   .then(function (data) {
                        // perform success action her
                   },
                    function (response, status, headers, config) {
                       // perform error handling here
                   });
    **/
    create(data: IProductFile, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.apiClient.post(this.productFilesStreamsRoute.create(data), formData, { 'Content-Type': undefined });
    }
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.
*/