/* globals module */
/**
 * @module blogPostCommentClient
 * @description  Blogs Post Comment Client provides an easy way to consume  Blogs REST API end-points. In order to obtain needed routes `blogPostCommentClient` uses `blogPostCommentRoute`.
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions } from '../../common/contracts';;
import { Utility } from '../../common';
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { IBlogPostComment, IBlogPostCommentOptions } from './contracts';
import { BlogPostCommentRoute, TYPES as blogTypes } from './';

@injectable()
export class BlogPostCommentClient {

    private utility: Utility = new Utility();

    /**
     * Provides direct access to `blogPostCommentRoute`.
     * @method
     * @example blogPostCommentClient.routeDefinition.get();
     **/
    get routeDefinition(): BlogPostCommentRoute {
        return this.blogRoute;
    }    

    constructor(
        @inject(blogTypes.BlogPostCommentRoute) protected blogRoute: BlogPostCommentRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of blogPostComment resources matching the given criteria.
     * @method
     * @param options A promise that is resolved once the find action has been performed.
     * @returns A promise that is resolved once the find action has been performed.
     * @example blogPostCommentClient.find({
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
    find(options?: IBlogPostCommentOptions): PromiseLike<IHttpResponse<IQueryModel<IBlogPostComment>>> {
        return this.apiClient.get<IQueryModel<IBlogPostComment>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns a single blogPostComment resource.
     * @method
     * @param id Blog slug or id which uniquely identifies blogPostComment resource that needs to be retrieved.
     * @param options Options object that contains embed items.
     * @returns a promise that is resolved once the get action has been performed.
     * @example blogPostCommentClient.get('<blogPostComment-id>')
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IBlogPostComment>> {
        return this.apiClient.get<IBlogPostComment>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create blogPostComment action has been performed, this action creates a new blogPostComment resource.
     * @method
     * @param data An blogPostComment object that needs to be inserted into the system.
     * @returns a promise that is resolved once the create blogPostComment action has been performed.
     * @example blogPostCommentClient.create({
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
    create(data: IBlogPostComment): PromiseLike<IHttpResponse<IBlogPostComment>> {
        return this.apiClient.post<IBlogPostComment>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostCommentRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.title = '<title>';
                    blogPostCommentClient.update(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    update(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }    

    /**
     * Returns a promise that is resolved once the remove blogPostComment action has been performed. If the action is successfully completed, the blogPostComment resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostCommentRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(blogPostComment);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be removed from the system.
     * @returns A promise that is resolved once the remove blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostCommentClient.remove(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    remove(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.comment = '<comment>';
                    BlogPostCommentClient.approve(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    approve(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.approve(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.comment = '<comment>';
                    BlogPostCommentClient.unapprove(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    unapprove(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unapprove(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.comment = '<comment>';
                    BlogPostCommentClient.spam(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    spam(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.spam(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.comment = '<comment>';
                    BlogPostCommentClient.unspam(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    unspam(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unspam(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.comment = '<comment>';
                    BlogPostCommentClient.report(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    report(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.report(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.comment = '<comment>';
                    BlogPostCommentClient.unreport(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    unreport(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unreport(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.comment = '<comment>';
                    BlogPostCommentClient.flag(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    flag(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.flag(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update blogPostComment action has been performed; this action updates an blogPostComment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `blogPostRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(blogPostComment);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data An blogPostComment object that needs to be updated into the system.
     * @returns A promise that is resolved once the update blogPostComment action has been performed.
     * @example // blogPostComment is a resource previously fetched using get action.
                    blogPostComment.comment = '<comment>';
                    BlogPostCommentClient.unflag(blogPostComment)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    unflag(data: IBlogPostComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unflag(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the purge blogPostComments action has been performed. Please note that all blogPostComment resources will be deleted from the system once the action is successfully completed and therefore it can only be executed by user assigned to account owner role.
     * @method
     * @example blogPostCommentClient.purge()
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