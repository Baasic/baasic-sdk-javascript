/* globals module */
/**
 * @module IBlogPostClient
 * @description  Blogs Client provides an easy way to consume  Blogs REST API end-points. In order to obtain needed routes `IBlogPostClient` uses `blogPostRoute`.
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions } from '../../common/contracts';;
import { Utility } from '../../common';
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { IBlogPost, IBlogPostOptions } from './contracts';
import { BlogPostRoute, BaasicBlogPostUtility, TYPES as blogTypes } from './';

@injectable()
export class BlogPostClient {

    private utility: Utility = new Utility();

    public blogPostUtility: BaasicBlogPostUtility = new BaasicBlogPostUtility();

    /**
     * Provides direct access to `IBlogPostRoute`.
     * @method
     * @example IBlogPostClient.routeDefinition.get();
     **/
    get routeDefinition(): BlogPostRoute {
        return this.blogRoute;
    }    

    constructor(
        @inject(blogTypes.BlogPostRoute) protected blogRoute: BlogPostRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of blogPost resources matching the given criteria.
     * @method
     * @param options A promise that is resolved once the find action has been performed.
     * @returns A promise that is resolved once the find action has been performed.
     * @example IBlogPostClient.find({
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
    find(options?: IBlogPostOptions): PromiseLike<IHttpResponse<IQueryModel<IBlogPost>>> {
        return this.apiClient.get<IQueryModel<IBlogPost>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns a single blogPost resource.
     * @method
     * @param id Blog slug or id which uniquely identifies blogPost resource that needs to be retrieved.
     * @param options Options object that contains embed items.
     * @returns a promise that is resolved once the get action has been performed.
     * @example IBlogPostClient.get('<blogPost-id>')
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IBlogPost>> {
        return this.apiClient.get<IBlogPost>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create blogPost action has been performed, this action creates a new blogPost resource.
     * @method
     * @param data An blogPost object that needs to be inserted into the system.
     * @returns a promise that is resolved once the create blogPost action has been performed.
     * @example IBlogPostClient.create({
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
    create(data: IBlogPost): PromiseLike<IHttpResponse<IBlogPost>> {
        return this.apiClient.post<IBlogPost>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPost action has been performed; this action updates an blogPost resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPost);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPost action has been performed.
     * @example // blogPost is a resource previously fetched using get action.
                    blogPost.title = '<title>';
                    IBlogPostClient.update(blogPost)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    update(data: IBlogPost): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }
    
    /**
     * Returns a promise that is resolved once the update blogPost action has been performed; this action updates an blogPost resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPost);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPost action has been performed.
     * @example // blogPost is a resource previously fetched using get action.
                    blogPost.title = '<title>';
                    IBlogPostClient.publish(blogPost)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    publish(data: IBlogPost): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.publish(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPost action has been performed; this action updates an blogPost resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPost);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPost action has been performed.
     * @example // blogPost is a resource previously fetched using get action.
                    blogPost.title = '<title>';
                    IBlogPostClient.unPublish(blogPost)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    unPublish(data: IBlogPost): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unPublish(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPost action has been performed; this action updates an blogPost resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPost);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPost action has been performed.
     * @example // blogPost is a resource previously fetched using get action.
                    blogPost.title = '<title>';
                    IBlogPostClient.draft(blogPost)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    draft(data: IBlogPost): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.draft(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPost action has been performed; this action updates an blogPost resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPost);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPost action has been performed.
     * @example // blogPost is a resource previously fetched using get action.
                    blogPost.title = '<title>';
                    IBlogPostClient.reject(blogPost)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    reject(data: IBlogPost): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.reject(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPost action has been performed; this action updates an blogPost resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPost);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPost action has been performed.
     * @example // blogPost is a resource previously fetched using get action.
                    blogPost.title = '<title>';
                    IBlogPostClient.archive(blogPost)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    archive(data: IBlogPost): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.archive(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPost action has been performed; this action updates an blogPost resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPost);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPost action has been performed.
     * @example // blogPost is a resource previously fetched using get action.
                    blogPost.title = '<title>';
                    IBlogPostClient.reviewPending(blogPost)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    reviewPending(data: IBlogPost): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.reviewPending(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove blogPost action has been performed. If the action is successfully completed, the blogPost resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(blogPost);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An blogPost object that needs to be removed from the system.
     * @returns A promise that is resolved once the remove blogPost action has been performed.
     * @example // blogPost is a resource previously fetched using get action.
                    IBlogPostClient.remove(blogPost)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    remove(data: IBlogPost): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge blogPosts action has been performed. Please note that all blogPost resources will be deleted from the system once the action is successfully completed and therefore it can only be executed by user assigned to account owner role.
     * @method
     * @example IBlogPostClient.purge()
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