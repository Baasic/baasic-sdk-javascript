/* globals module */
/**
 * @module blogPostStatusClient
 * @description  Blog Post Status Client provides an easy way to consume  Blogs REST API end-points. In order to obtain needed routes `blogPostStatusClient` uses `blogPostStatusRoute`.
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';
import { Utility } from '../../common';
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { IBlogPostStatus } from './contracts';
import { BlogPostStatusRoute, TYPES as blogTypes } from './';

@injectable()
export class BlogPostStatusClient {

    private utility: Utility = new Utility();

    /**
     * Provides direct access to `blogPostStatusRoute`.
     * @method
     * @example blogPostStatusClient.routeDefinition.get();
     **/
    get routeDefinition(): BlogPostStatusRoute {
        return this.blogPostStatusRoute;
    }    

    constructor(
        @inject(blogTypes.BlogPostStatusRoute) protected blogPostStatusRoute: BlogPostStatusRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of blog post statuses resources matching the given criteria.
     * @method
     * @param options A promise that is resolved once the find action has been performed.
     * @returns A promise that is resolved once the find action has been performed.
     * @example blogPostStatusClient.find({
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IBlogPostStatus>>> {
        return this.apiClient.get<IQueryModel<IBlogPostStatus>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns a single article resource.
     * @method
     * @param id Blog slug or id which uniquely identifies article resource that needs to be retrieved.
     * @param options Options object that contains embed items.
     * @returns a promise that is resolved once the get action has been performed.
     * @example articleClient.get('<article-id>')
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IBlogPostStatus>> {
        return this.apiClient.get<IBlogPostStatus>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create blog post status action has been performed, this action creates a new blog post status resource.
     * @method
     * @param data An blog post status object that needs to be inserted into the system.
     * @returns a promise that is resolved once the create blog post status action has been performed.
     * @example blogPostStatusClient.create({
                    name : '<name>',
                    abrv : '<abrv>',
                })
                .then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: IBlogPostStatus): PromiseLike<IHttpResponse<IBlogPostStatus>> {
        return this.apiClient.post<IBlogPostStatus>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blog post status action has been performed; this action updates an blog post status resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostStatusRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostStatus);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostStatus object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostStatus action has been performed.
     * @example // blogPostStatus is a resource previously fetched using get action.
                    blogPostStatus.name = '<name>';
                    blogPostStatusClient.update(blogPostStatus)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    update(data: IBlogPostStatus): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }    

    /**
     * Returns a promise that is resolved once the remove blog post status action has been performed. If the action is successfully completed, the blogPostStatus resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostStatusRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(article);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An blogPostStatus object that needs to be removed from the system.
     * @returns A promise that is resolved once the remove blogPostStatus action has been performed.
     * @example // blogPostStatus is a resource previously fetched using get action.
                    blogPostStatusClient.remove(blogPostStatus)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    remove(data: IBlogPostStatus): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge blogPostStatus action has been performed. Please note that all blogPostStatus resources will be deleted from the system once the action is successfully completed and therefore it can only be executed by user assigned to account owner role.
     * @method
     * @example blogPostStatusClient.purge()
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    purge(): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge());
    }
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.
 */