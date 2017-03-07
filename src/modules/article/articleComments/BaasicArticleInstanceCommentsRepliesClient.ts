/* globals module */
/**  
 * @module baasicArticleInstanceCommentRepliesClient
 * @description Baasic Article Instance Comment Replies Client provides an easy way to consume Baasic Article Comment Replies REST API end-points. `baasicArticleCommentRepliesService` functions enable performing standard CRUD operations directly on article comment reply resources, whereas the `baasicArticleClient` functions allow management between article and article comment reply. In order to obtain needed routes `baasicArticleCommentRepliesService` uses `baasicArticleCommentRepliesRouteDefinition`. 
*/

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicArticleInstanceCommentRepliesRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticle, IArticleCommentReply, INotificationConfiguration, IStatuses } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceCommentRepliesClient {


    /**
     * Contains a reference to valid list of article comment reply states. It returns an object containing all article comment reply states.
     * @method 
     * @example baasicArticleCommentRepliesClient.statuses.approved;
     **/
    public commentStatuses: IStatuses = {
        approved: 1,
        spam: 2,
        reported: 4,
        flagged: 8,
        unapproved: 16
    };

    /**
     * Provides direct access to `baasicArticleCommentRepliesRouteDefinition`.
     * @method 
     * @example baasicArticleInstanceCommentRepliesClient.routeDefinition.get();
     **/
    get routeDefinition(): BaasicArticleInstanceCommentRepliesRouteDefinition {
        return this.baasicArticleInstanceCommentRepliesRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleInstanceCommentRepliesRouteDefinition) protected baasicArticleInstanceCommentRepliesRouteDefinition: BaasicArticleInstanceCommentRepliesRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
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
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleInstanceCommentRepliesClient.approve(articleCommentReply, commentOptions)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    approve(data: IArticleCommentReply, options: IOptions): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.approve(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(data));
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
                    baasicArticleInstanceCommentRepliesClient.unapprove(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unapprove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.unapprove(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the create article comment reply action has been performed; this action creates a new comment reply for an article.
     * @method
     * @param articleId Article id which uniquely identifies article that needs to be updated with new comment reply resource.
     * @param data An article comment reply object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create article comment reply action has been performed. 
     * @example baasicArticleInstanceCommentRepliesClient.create('<article-id>', { 
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
    create(articleId: string, data: IArticleCommentReply): PromiseLike<IHttpResponse<IArticleCommentReply>> {
        return this.baasicApiClient.post(this.baasicArticleInstanceCommentRepliesRouteDefinition.create(articleId, data), this.baasicArticleInstanceCommentRepliesRouteDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment reply resources matching the given criteria.
     * @method
     * @param articleId Article id which uniquely identifies article whose comment reply resources need to be retrieved.
     * @param commentId Comment id which uniquely identifies comment whose reply resources need to be retrieved.
     * @param options Query resource options.
     * @returns A promise that is resolved once the find action has been performed. 
     * @example baasicArticleInstanceCommentRepliesClient.find({ 
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
    find(articleId: string, commentId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleCommentReply>>> {
        return this.baasicApiClient.get(this.baasicArticleInstanceCommentRepliesRouteDefinition.find(articleId, commentId, options));
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
                        baasicArticleInstanceCommentRepliesClient.flag(articleCommentReply)
                            .then(function (data) { 
                                // perform success action here 
                            },
                             function (response, status, headers, config) { 
                                // perform error handling here 
                            });
     **/
    flag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.flag(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(data));
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
                    baasicArticleInstanceCommentRepliesClient.unflag(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        }).error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unflag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.unflag(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment reply resource.
     * @method
     * @param articleId Article id which uniquely identifies article whose comment reply resource needs to be retrieved.
     * @param commentId Comment id which uniquely identifies comment whose reply resource needs to be retrieved.
     * @param replyId Id which uniquely identifies article comment reply resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed. 
     * @example baasicArticleInstanceCommentRepliesClient.get('<comment-reply-id>')
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) {
                         // perform error handling here 
                    });
     **/
    get(articleId: string, commentId: string, replyId: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleCommentReply>> {
        return this.baasicApiClient.get(this.baasicArticleInstanceCommentRepliesRouteDefinition.get(articleId, commentId, replyId, options));
    }

    /**
     * Returns a promise that is resolved once the remove article comment reply action has been performed. If the action is successfully completed, the article comment reply resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = baasicApiClient.removeParams(articleCommentReply); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @method
     * @param data An article comment object used to delete specified article comment reply resource.
     * @returns A promise that is resolved once the remove article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleInstanceCommentRepliesClient.remove(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    remove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.delete(data));
    }

    /**                         
     * Returns a promise that is resolved once the removeAll article comment reply action has been performed. This action will remove all comment replies from an article comment if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleInstanceCommentsRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleCommentReply); 
     * let uri = params['model'].links('delete-comments-by-article').href; 
     * ```                         
     * @method
     * @param data Article object used to delete all article comments in the system.
     * @returns a promise that is resolved once the removeAll article comment reply action has been performed.                           
     * @example // articleCommentReply is a resource previously fetched using get action.					
                    baasicArticleInstanceCommentRepliesClient.removeAll(articleCommentReply)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });		                        
     **/
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.deleteAll(data));
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
                    baasicArticleInstanceCommentRepliesClient.report(articleCommentReply, commentOptions)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    report(data: IArticleCommentReply, options?: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.report(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(options));
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
                    baasicArticleInstanceCommentRepliesClient.unreport(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unreport(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.unreport(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(data));
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
                    baasicArticleInstanceCommentRepliesClient.spam(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    spam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.spam(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unspam article comment reply action has been performed. This action removes the "spam" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unspam').href; 
     * ```
     * @method 
     * @param data Article Comment Reply object.
     * @returns a promise that is resolved once the unspam article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                      baasicArticleInstanceCommentRepliesClient.unspam(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unspam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.unspam(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update article comment reply action has been performed; this action updates an article comment reply resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @method
     * @param data An article comment object used to update specified article comment reply resource.
     * @returns A promise that is resolved once the update article comment reply action has been performed. 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleInstanceCommentRepliesClient.update(articleCommentReply)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    update(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceCommentRepliesRouteDefinition.update(data), this.baasicArticleInstanceCommentRepliesRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */