/* globals module */
/**  
 * @module articleInstanceCommentsClient  
 * @description  Article Instance Comments Client provides an easy way to consume  Article Comments REST API end-points. `articleCommentsClient` functions enable performing standard CRUD operations directly on article comment resources, whereas the `articleClient` functions allow management between article and article comments. In order to obtain needed routes `articleCommentsClient` uses `articleCommentsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    ArticleInstanceCommentRepliesClient,
    ArticleInstanceCommentsRouteDefinition,
    CommentStatus,
    TYPES as articleTypes
} from 'modules/article';
import { IArticle, IArticleComment, INotificationConfiguration, ICommentStatus } from 'modules/article/contracts';

@injectable()
export class ArticleInstanceCommentsClient {

    /**
   * Contains a reference to valid list of article comment states. It returns an object containing all article comment states.
   * @method
   * @example articleInstanceCommentsClient.statuses.approved;
   **/
    public statuses: ICommentStatus = CommentStatus;

    get routeDefinition(): ArticleInstanceCommentsRouteDefinition {
        return this.articleInstanceCommentsRouteDefinition;
    }

    get replies(): ArticleInstanceCommentRepliesClient {
        return this.articleInstanceCommentsRepliesClient;
    }

    constructor(
        @inject(articleTypes.ArticleInstanceCommentsRouteDefinition) protected articleInstanceCommentsRouteDefinition: ArticleInstanceCommentsRouteDefinition,
        @inject(articleTypes.ArticleCommentRepliesClient) protected articleInstanceCommentsRepliesClient: ArticleInstanceCommentRepliesClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the approve article comment action has been performed. This action sets the state of an article comment to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-approve').href; 
     * ```
     * @method
     * @param data Article Comment object.
     * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
     * @returns A promise that is resolved once the approve article comment action has been performed. 
     * @example // articleComment is a resource previously fetched using get action. 
                    articleInstanceCommentsClient.approve(articleComment, commentOptions)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    approve(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.approve(data), this.routeDefinition.createParams(options));
    }

    /**
     * Returns a promise that is resolved once the unapprove article comment action has been performed. This action sets the state of an article comment to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unapprove').href; 
     * ```
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the unapprove article comment action has been performed.  
     * @example // articleComment is a resource previously fetched using get action. 
                    articleInstanceCommentsClient.unapprove(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unapprove(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unapprove(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the create article comment action has been performed; this action creates a new comment for an article.
     * @method
     * @param data An article comment object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create article comment action has been performed.  
     * @example articleInstanceCommentsClient.create({ 
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
        return this.apiClient.post<IArticleComment>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment resources matching the given criteria.
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose comment resources need to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed. 
     * @example articleInstanceCommentsClient.find({ 
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
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IArticleComment>>> {
        return this.apiClient.get<IQueryModel<IArticleComment>>(this.articleInstanceCommentsRouteDefinition.find(articleId, options));
    }

    /**
     * Returns a promise that is resolved once the flag article comment action has been performed. This action sets the state of an article comment to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-flag').href; 
     * ```                     
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the flag article comment action has been performed. 
     * @example // articleComment is a resource previously fetched using get action. 
                    articleInstanceCommentsClient.flag(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });		                
     **/
    flag(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.flag(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unflag article comment action has been performed. This action removes the "flagged" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unflag').href; 
     * ```
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the unflag article comment action has been performed. 
     * @example // articleComment is a resource previously fetched using get action. 
                    articleInstanceCommentsClient.unflag(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unflag(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unflag(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment resource.
     * @method 
     * @param articleId Article slug or id which uniquely identifies article whose comment resource needs to be retrieved.
     * @param commentId Id which identifies article comment resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed. 
     * @example articleInstanceCommentsClient.get('<article-id>', '<comment-id>')
                   .then(function (data) { 
                       // perform success action here 
                   },
                    function (response, status, headers, config) { 
                       // perform error handling here 
                   });
    **/
    get(articleId: string, commentId: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleComment>> {
        return this.apiClient.get<IArticleComment>(this.articleInstanceCommentsRouteDefinition.get(articleId, commentId, options));
    }

    /**
     * Returns a promise that is resolved once the remove article comment action has been performed. If the action is successfully completed, the article comment resource and its replies will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     ``` 
     let params = modelMapper.removeParams(articleComment); 
     let uri = params['model'].links('delete').href; 
     ```
     * @method
     * @param data An article comment object used to delete specified article comment resource.
     * @returns A promise that is resolved once the remove article comment action has been performed.
     * @example // articleComment is a resource previously fetched using get action. 
                       articleInstanceCommentsClient.remove(articleComment)
                           .then(function (data) { 
                               // perform success action here 
                           }, 
                            function (response, status, headers, config) { 
                               // perform error handling here 
                           });
    **/
    remove(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**                     
     * Returns a promise that is resolved once the removeAll article comment action has been performed. This action will remove all comments and comment replies from an article if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleInstanceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleComment); 
     * let uri = params['model'].links('delete-comments-by-article').href; 
     * ```                     
     * @method
     * @param data An article object used to delete specified article comment resource.
     * @returns A promise that is resolved once the removeAll article comment action has been performed.                      
     * @example // articleComment is a resource previously fetched using get action.					
                    articleInstanceCommentsClient.removeAll(articleComment)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						    
     **/
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.deleteAll(data));
    }

    /** 
     * Returns a promise that is resolved once the report article comment action has been performed. This action sets the state of an article comment to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-report').href; 
     * ```
     * @method
     * @param data Article Comment object.
     * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
     * @returns A promise that is resolved once the report article comment action has been performed.  
     * @example // articleComment is a resource previously fetched using get action.
                    articleInstanceCommentsClient.report(articleComment, commentOptions)
                        .success(function (data) { 
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    report(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.report(data), this.routeDefinition.updateParams(options));
    }

    /**
     * Returns a promise that is resolved once the unreport article comment action has been performed. This action removes the "reported" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unreport').href; 
     * ```
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the unreport article comment action has been performed.  
     * @example // articleComment is a resource previously fetched using get action. 
                    articleInstanceCommentsClient.unreport(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/
    unreport(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unreport(data), this.routeDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the update article comment action has been performed; this action updates an article comment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('put').href; 
     * ```                     
     * @method
     * @param data An article comments object used to update specified article comment resource.
     * @returns A promise that is resolved once the update article comment action has been performed.                      
     * @example // articleComment is a resource previously fetched using get action.				 
                    articleInstanceCommentsClient.update(articleComment)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                             // perform error handling here 
                        });		                
     **/
    update(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the mark as spam article comment action has been performed. This action sets the state of an article comment to "spam". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleInstanceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-spam').href; 
     * ```                      
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the mark as spam article comment action has been performed.                             
     * @example // articleComment is a resource previously fetched using get action.				 
                    articleInstanceClient.spam(articleComment)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						    
     **/
    spam(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.spam(data), this.routeDefinition.updateParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the unspam article comment action has been performed. This action removes the "spam" comment state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleInstanceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unspam').href; 
     * ```                      
     * @method
     * @param data Article Comment object.
     * @returns A promise that is resolved once the unspam article comment action has been performed.                           
     * @example // articleComment is a resource previously fetched using get action.				 
                        articleInstanceClient.unspam(articleComment)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });						    
     **/
    unspam(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unspam(data), this.routeDefinition.updateParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */