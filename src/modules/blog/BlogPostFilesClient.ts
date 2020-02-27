/* globals module */
/**
 * @module blogPostFilesClient
 * @description  Blog Post Files Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    BlogPostFilesBatchClient,
    BlogPostFilesRoute,
    BlogPostFilesStreamsClient,
    TYPES as blogTypes
} from './';
import { IBlogPostFile, IBlogPostOptions } from './contracts';

@injectable()
export class BlogPostFilesClient {

    get routeDefinition(): BlogPostFilesRoute {
        return this.blogPostFilesRoute;
    }

    get streams(): BlogPostFilesStreamsClient {
        return this.blogPostFilesStreamsClient;
    }

    get batch(): BlogPostFilesBatchClient {
        return this.BlogPostFilesBatchClient;
    }

    constructor(
        @inject(blogTypes.BlogPostFilesRoute) protected blogPostFilesRoute: BlogPostFilesRoute,
        @inject(blogTypes.BlogPostFilesStreamsClient) protected blogPostFilesStreamsClient: BlogPostFilesStreamsClient,
        @inject(blogTypes.BlogPostFilesBatchClient) protected BlogPostFilesBatchClient: BlogPostFilesBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example blogPostFilesClient.find({
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
    find(options?: IBlogPostOptions): PromiseLike<IHttpResponse<IQueryModel<IBlogPostFile>>> {
        return this.apiClient.get<IQueryModel<IBlogPostFile>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.
     * @method
     * @param id BlogPost file id which uniquely identifies blogPost resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed.
     * @example blogPostFilesClient.get('<file-id>')
                   .then(function (data) {
                       // perform success action here
                   },
                    function (response, status, headers, config) {
                       // perform error handling here
                   });
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IBlogPostFile>> {
        return this.apiClient.get(this.blogPostFilesRoute.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicBlogPostFilesRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(fileEntry);
     * let uri = params['model'].links('unlink').href;
     * ```
     * @method
     * @param data BlogPost file object.
     * @param options options object.
     * @returns A promise that is resolved once the unlink action has been performed.
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.
                    blogPostFilesRoute.remove(fileEntry)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    unlink(data: IBlogPostFile, options: Object): PromiseLike<IHttpResponse<void>> {
        if (!options) {
            options = {};
        }
        return this.apiClient.delete<void>(this.blogPostFilesRoute.unlink(data, options));
    }

    /**
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicBlogPostFilesRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     ```
     let params = modelMapper.updateParams(fileEntry);
     let uri = params['model'].links('put').href;
     ```
     * @method
     * @param data BlogPost file object that need to be updated in the system.
     * @returns A promise that is resolved once the update file action has been performed.
     * @example // fileEntry is a file resource previously fetched using get action.
                   fileEntry.description = '<description>';
                   blogPostFilesClient.update(fileEntry)
                       .then(function (data) {
                           // perform success action here
                       },
                        function (response, status, headers, config) {
                           // perform error handling here
                       });
    **/
    update(data: IBlogPostFile): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the BlogPost Files module (For example: file resources from the Media Vault module can be linked directly into the BlogPost Files module).
     * @method
     * @param data BlogPost file object.
     * @returns A promise that is resolved once the link action has been performed.
     * @example blogPostFilesClient.link(fileObject)
                    .then(function (response, status, headers, config) {
                        // perform success handling here
                    },
                        function (response, status, headers, config) {
                        // perform error handling here
                    });
     **/
    link(data: IBlogPostFile): PromiseLike<IHttpResponse<IBlogPostFile>> {
        return this.apiClient.post(this.routeDefinition.link(), this.routeDefinition.createParams(data));
    }
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.
*/