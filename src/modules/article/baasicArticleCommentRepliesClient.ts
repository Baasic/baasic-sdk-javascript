/* globals module */
/**  
 * @module baasicArticleCommentRepliesClient
 * @description  Article Comment Replies Client provides an easy way to consume  Article Comment Replies REST API end-points. `baasicArticleCommentRepliesService` functions enable performing standard CRUD operations directly on article comment reply resources, whereas the `baasicArticleClient` functions allow management between article and article comment reply. In order to obtain needed routes `baasicArticleCommentRepliesService` uses `baasicArticleCommentRepliesRouteDefinition`. 
*/

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicArticleCommentRepliesRouteDefinition, CommentStatus, TYPES as articleTypes } from 'modules/article';
import { IArticleCommentReply, INotificationConfiguration, ICommentStatus } from 'modules/article/contracts';

@injectable()
export class ArticleCommentRepliesClient {


    /**
     * Contains a reference to valid list of article comment reply states. It returns an object containing all article comment reply states.
     * @method 
     * @example baasicArticleCommentRepliesClient.statuses.approved;
     **/
    public statuses: ICommentStatus = CommentStatus;

    /**
     * Provides direct access to `baasicArticleCommentRepliesRouteDefinition`.
     * @method 
     * @example baasicArticleCommentRepliesClient.routeDefinition.get();
     **/
    get routeDefinition(): BaasicArticleCommentRepliesRouteDefinition {
        return this.baasicArticleCommentRepliesRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleCommentRepliesRouteDefinition) protected baasicArticleCommentRepliesRouteDefinition: BaasicArticleCommentRepliesRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the approve article comment reply action has been performed. This action sets the state of an article comment reply to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-approve').href; 
     * ```
     * @method
     * @param data Article Comment Reply object.
     * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
     * @returns A promise that is resolved once the approve article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.approve(articleCommentReply, commentOptions)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    approve(data: IArticleCommentReply, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.approve(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unapprove article comment reply action has been performed. This action sets the state of an article comment reply to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unapprove').href; 
     * ```
     * @method
     * @param data Article Comment Reply object.
     * @returns A promise that is resolved once the unapprove article comment reply action has been performed.  
     * @example // articleCommentReply is a resource previously fetched using get action.
                    baasicArticleCommentRepliesClient.unapprove(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unapprove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.unapprove(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the create article comment reply action has been performed; this action creates a new comment reply for an article.
     * @method
     * @param data An article comment reply object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create article comment reply action has been performed. 
     * @example baasicArticleCommentRepliesClient.create('<article-id>', { 
                    commentId : '<comment-id>', 
                    comment : <comment>, 
                    userId : '<user-id>' })
                .then(function (data) { 
                    // perform success action here 
                },
                 function (response, status, headers, config) { 
                    // perform error handling here 
                });
     **/
    create(data: IArticleCommentReply): PromiseLike<IHttpResponse<IArticleCommentReply>> {
        return this.baasicApiClient.post<IArticleCommentReply>(this.baasicArticleCommentRepliesRouteDefinition.create(data), this.baasicArticleCommentRepliesRouteDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment reply resources matching the given criteria.
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed. 
     * @example baasicArticleCommentRepliesClient.find({ 
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleCommentReply>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IArticleCommentReply>>(this.baasicArticleCommentRepliesRouteDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the flag article comment reply action has been performed. This action sets the state of an article comment reply to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-flag').href; 
     * ```
     * @method
     * @param data Article Comment Reply object.
     * @returns A promise that is resolved once the flag article comment reply action has been performed. 
     * @example     // articleCommentReply is a resource previously fetched using get action.
                        baasicArticleCommentRepliesClient.flag(articleCommentReply)
                            .then(function (data) { 
                                // perform success action here 
                            },
                             function (response, status, headers, config) { 
                                // perform error handling here 
                            });
     **/
    flag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.flag(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unflag article comment reply action has been performed. This action removes the "flagged" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unflag').href; 
     * ```
     * @method 
     * @param data Article Comment Reply object.
     * @returns A promise that is resolved once the unflag article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.unflag(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        }).error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unflag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.unflag(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment reply resource.
     * @method
     * @param id Id which uniquely identifies article comment reply resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed. 
     * @example baasicArticleCommentRepliesClient.get('<comment-reply-id>')
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) {
                         // perform error handling here 
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleCommentReply>> {
        return this.baasicApiClient.get<IArticleCommentReply>(this.baasicArticleCommentRepliesRouteDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the remove article comment reply action has been performed. If the action is successfully completed, the article comment reply resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = baasicApiClient.removeParams(articleCommentReply); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @method
     * @param data An article Comment Reply object used to update specified article comment reply resource. 
     * @returns A promise that is resolved once the remove article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.remove(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    remove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleCommentRepliesRouteDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the report article comment reply action has been performed. This action sets the state of an article comment reply to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-report').href; 
     * ```
     * @method 
     * @param data Article Comment Reply object.
     * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
     * @returns A promise that is resolved once the report article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.report(articleCommentReply, commentOptions)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    report(data: IArticleCommentReply, options?: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.report(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(options));
    }

    /**
     * Returns a promise that is resolved once the unreport article comment reply action has been performed. This action removes the "reported" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unreport').href; 
     * ```
     * @method
     * @param data Article Comment Reply object.
     * @returns A promise that is resolved once the unreport article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.unreport(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unreport(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.unreport(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the mark as spam article comment reply action has been performed. This action sets the state of an article comment reply to "spam". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-spam').href; 
     * ```
     * @method
     * @param data Article Comment Reply object.
     * @returns A promise that is resolved once the mark as spam article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.spam(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    spam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.spam(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unspam article comment reply action has been performed. This action removes the "spam" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unspam').href; 
     * ```
     * @method 
     * @param data Article Comment Reply object.
     * @returns A promise that is resolved once the unspam article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                      baasicArticleCommentRepliesClient.unspam(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unspam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.unspam(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update article comment reply action has been performed; this action updates an article comment reply resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @method
     * @param data An Article Comments Reply object used to update specified article comment reply resource.
     * @returns A promise that is resolved once the update article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.update(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    update(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentRepliesRouteDefinition.update(data), this.baasicArticleCommentRepliesRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */