/* globals module */
/**
 * @module blogClient
 * @description  Blogs Client provides an easy way to consume  Blogs REST API end-points. In order to obtain needed routes `articleClient` uses `articleRoute`.
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions } from '../../common/contracts';;
import { Utility } from '../../common';
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { IBlog, IBlogOptions } from './contracts';
import { BlogRoute, TYPES as blogTypes } from './';

@injectable()
export class BlogClient {

    private utility: Utility = new Utility();

    /**
     * Provides direct access to `blogRoute`.
     * @method
     * @example blogClient.routeDefinition.get();
     **/
    get routeDefinition(): BlogRoute {
        return this.blogRoute;
    }    

    constructor(
        @inject(blogTypes.BlogRoute) protected blogRoute: BlogRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article resources matching the given criteria.
     * @method
     * @param options A promise that is resolved once the find action has been performed.
     * @returns A promise that is resolved once the find action has been performed.
     * @example articleClient.find({
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
    find(options?: IBlogOptions): PromiseLike<IHttpResponse<IQueryModel<IBlog>>> {
        return this.apiClient.get<IQueryModel<IBlog>>(this.routeDefinition.find(options));
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
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IBlog>> {
        return this.apiClient.get<IBlog>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create article action has been performed, this action creates a new article resource.
     * @method
     * @param data An article object that needs to be inserted into the system.
     * @returns a promise that is resolved once the create article action has been performed.
     * @example articleClient.create({
                    publishDate : new Date(),
                    title : '<title>',
                    content : '<content>',
                    slug : '',
                    status : baasicBlogService.statuses.draft,
                    $tags : ['<tag1>', '<tag2>']
                })
                .then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: IBlog): PromiseLike<IHttpResponse<IBlog>> {
        return this.apiClient.post<IBlog>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update article action has been performed; this action updates an article resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(article);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An article object that needs to be updated into the system.
     * @returns A promise that is resolved once the update article action has been performed.
     * @example // article is a resource previously fetched using get action.
                    article.title = '<title>';
                    articleClient.update(article)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    update(data: IBlog): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }    

    /**
     * Returns a promise that is resolved once the remove article action has been performed. If the action is successfully completed, the article resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(article);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An article object that needs to be removed from the system.
     * @returns A promise that is resolved once the remove article action has been performed.
     * @example // article is a resource previously fetched using get action.
                    articleClient.remove(article)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    remove(data: IBlog): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge articles action has been performed. Please note that all article resources will be deleted from the system once the action is successfully completed and therefore it can only be executed by user assigned to account owner role.
     * @method
     * @example articleClient.purge()
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