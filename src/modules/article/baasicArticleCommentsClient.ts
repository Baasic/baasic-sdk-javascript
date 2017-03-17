/* globals module */
/**  
 * @module baasicArticleCommentsClient  
 * @description  Article Comments Client provides an easy way to consume  Article Comments REST API end-points. `baasicArticleCommentsClient` functions enable performing standard CRUD operations directly on article comment resources, whereas the `baasicArticleClient` functions allow management between article and article comments. In order to obtain needed routes `baasicArticleCommentsClient` uses `baasicArticleCommentsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleCommentsRouteDefinition, ArticleCommentRepliesClient, CommentStatus, TYPES as articleTypes } from 'modules/article';
import { IArticleComment, INotificationConfiguration, ICommentStatus } from 'modules/article/contracts';

@injectable()
export class ArticleCommentsClient {

    /**
    * Contains a reference to valid list of article comment states. It returns an object containing all article comment states.
    * @method
    * @example baasicArticleCommentsClient.statuses.approved;
    **/
    public statuses: ICommentStatus = CommentStatus;

    /**
     * Provides direct access to `baasicArticleCommentRepliesClient`.
     * @method 
     **/
    get replies(): ArticleCommentRepliesClient {
        return this.baasicArticleCommentRepliesClient;
    }


    /**
     * Provides direct access to `baasicArticleCommentsRouteDefinition`.
     * @method 
     * @example baasicArticleCommentsRouteDefinition.routeDefinition.get();
     **/
    get routeDefinition(): BaasicArticleCommentsRouteDefinition {
        return this.baasicArticleCommentsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleCommentRepliesClient) protected baasicArticleCommentRepliesClient: ArticleCommentRepliesClient,
        @inject(articleTypes.BaasicArticleCommentsRouteDefinition) protected baasicArticleCommentsRouteDefinition: BaasicArticleCommentsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the approve article comment action has been performed. This action sets the state of an article comment to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-approve').href; 
     * ```
     * @method
     * @param data Article Comment object.
     * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
     * @returns A promise that is resolved once the approve article comment action has been performed. 
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.approve(articleComment, commentOptions)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    approve(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentsRouteDefinition.approve(data), this.baasicArticleCommentsRouteDefinition.updateParams(options));
    }

    /**
     * Returns a promise that is resolved once the unapprove article comment action has been performed. This action sets the state of an article comment to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unapprove').href; 
     * ```
     * @method 
     * @param data Article Comment object.
     * @returns A promise that is resolved once the unapprove article comment action has been performed.
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.unapprove(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unapprove(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentsRouteDefinition.unapprove(data), this.baasicArticleCommentsRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the create article comment action has been performed; this action creates a new comment for an article.
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the create article comment action has been performed.
     * @example baasicArticleCommentsClient.create({ 
                        articleId : '<article-id>', 
                        comment : <comment>, 
                        userId : '<user-id>' })
                    .then(function (data) { 
                        // perform success action here 
                    },
                     function (response, status, headers, config) { 
                        // perform error handling here 
                    });
     **/
    create(data: IArticleComment): PromiseLike<IHttpResponse<IArticleComment>> {
        return this.baasicApiClient.post<IArticleComment>(this.baasicArticleCommentsRouteDefinition.create(data), this.baasicArticleCommentsRouteDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment resources matching the given criteria.
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.  
     * @example baasicArticleCommentsClient.find({ 
                    pageNumber : 1, 
                    pageSize : 10, 
                    orderBy : '<field>', 
                    orderDirection : '<asc|desc>', 
                    search : '<search-phrase>' 
                })
                .success(function (collection) { 
                    // perform success action here 
                })
                .error(function (response, status, headers, config) { 
                    // perform error handling here 
                });
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleComment>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IArticleComment>>(this.baasicArticleCommentsRouteDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the flag article comment action has been performed. This action sets the state of an article comment to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-flag').href; 
     * ```                     
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the flag article comment action has been performed. 
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.flag(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });		                
     **/
    flag(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentsRouteDefinition.flag(data), this.baasicArticleCommentsRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unflag article comment action has been performed. This action removes the "flagged" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unflag').href; 
     * ```
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the unflag article comment action has been performed. 
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.unflag(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unflag(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentsRouteDefinition.unflag(data), this.baasicArticleCommentsRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment resource.
     * @method 
     * @param id Id which uniquely identifies article comment resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed. 
     * @example baasicArticleCommentsClient.get('<article-id>', '<comment-id>')
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                       // perform error handling here 
                   });
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleComment>> {
        return this.baasicApiClient.get<IArticleComment>(this.baasicArticleCommentsRouteDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the remove article comment action has been performed. If the action is successfully completed, the article comment resource and its replies will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     ``` 
     let params = modelMapper.removeParams(articleComment); 
     let uri = params['model'].links('delete').href; 
     ```
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the remove article comment action has been performed.  
     * @example // articleComment is a resource previously fetched using get action. 
                       baasicArticleCommentsClient.remove(articleComment)
                           .then(function (data) { 
                               // perform success action here 
                           }, 
                            function (response, status, headers, config) { 
                               // perform error handling here 
                           });
    **/
    remove(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleCommentsRouteDefinition.delete(data));
    }

    /** 
     * Returns a promise that is resolved once the report article comment action has been performed. This action sets the state of an article comment to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-report').href; 
     * ```
     * @method
     * @param data Article Comment object.
     * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
     * @returns A promise that is resolved once the report article comment action has been performed. 
     * @example // articleComment is a resource previously fetched using get action.
                    baasicArticleCommentsClient.report(articleComment, commentOptions)
                        .success(function (data) { 
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    report(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentsRouteDefinition.report(data), this.baasicArticleCommentsRouteDefinition.updateParams(options));
    }

    /**
     * Returns a promise that is resolved once the unreport article comment action has been performed. This action removes the "reported" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unreport').href; 
     * ```
     * @method 
     * @param data Article Comment object.
     * @returns A promise that is resolved once the unreport article comment action has been performed. 
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.unreport(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unreport(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentsRouteDefinition.unreport(data), this.baasicArticleCommentsRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the update article comment action has been performed; this action updates an article comment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('put').href; 
     * ```                     
     * @method 
     * @param data Article Comment object.
     * @returns A promise that is resolved once the update article comment action has been performed.                    
     * @example // articleComment is a resource previously fetched using get action.				 
                    baasicArticleCommentsClient.update(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                             // perform error handling here 
                        });		                
     **/
    update(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleCommentsRouteDefinition.update(data), this.baasicArticleCommentsRouteDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */