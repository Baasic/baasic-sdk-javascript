/* globals module */
/**
 * @module blogPostFilesStreamsClient
 * @description  Blog Post Files Streams Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Streams Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { BlogPostFilesStreamsRoute, TYPES as blogTypes } from './';
import { IBlogPostFile } from './contracts';

@injectable()
export class BlogPostFilesStreamsClient {

    get routeDefinition(): BlogPostFilesStreamsRoute {
        return this.blogPostFilesStreamsRoute;
    }

    constructor(
        @inject(blogTypes.BlogPostFilesStreamsRoute) protected blogPostFilesStreamsRoute: BlogPostFilesStreamsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.
     * @method
     * @param data Blog Post file id of the original blogPost file used to identify stream that needs to be retrieved from the system.
     * @returns A promise that is resolved once the get action has been performed.
     * @example // Request the original file stream
                    blogPostFileStreamClient.get({id: '<file-id>'})
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });

                // Request derived file stream
                        blogPostFileStreamClient.get({id: '<file-id>', width: <width>, height: <height>, t: <timestamp>})
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
     * @param data Article file id of the original blogPost file used to identify stream that needs to be retrieved from the system.
     * @returns A promise that is resolved once the get action has been performed.
     * @example // Request the original blob
                    blogPostFileStreamClient.getBlob('<file-id>')
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });

                // Request derived blob
                        blogPostFileStreamClient.getBlob({
                            id: '<file-id>',
                            width: <width>,
                            height: <height>,
                            t: <timestamp>
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
            url: this.blogPostFilesStreamsRoute.get(data),
            responseType: 'blob',
            headers: { 'Accept': 'application/octet-stream' },
            method: 'GET'
        });
    }

    /**
     * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).
     * @method
     * @param data blogPost file used to identify stream that needs to be updated.
     * @param stream
     * @returns A promise that is resolved once the update file stream action has been performed.
     * @example // Update original file stream
                    blogPostFileStreamClient.update('<file-id>', <file-stream>)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });
                // Update derived file stream
                    blogPostFileStreamClient.update({id: '<file-id>', width: <width>, height: <height>}, <file-stream>)
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
        return this.apiClient.put(this.blogPostFilesStreamsRoute.update(data), formData, { 'Content-Type': undefined });
    }

    /**
     * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
     * @method
     * @param data blogPost file that needs to be saved into the system.
     * @param stream
     * @returns A promise that is resolved once the create file stream action has been performed.
     * @example blogPostFileStreamClient.create('<file-id>', <blob>)
                   .then(function (data) {
                        // perform success action her
                   },
                    function (response, status, headers, config) {
                       // perform error handling here
                   });
    **/
    create(data: IBlogPostFile, stream: any): PromiseLike<IHttpResponse<any>> {
        let formData = new FormData();
        formData.append('file', stream);
        return this.apiClient.post(this.blogPostFilesStreamsRoute.create(data), formData, { 'Content-Type': undefined });
    }
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.
*/