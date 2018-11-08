/* globals module */
/**
 * @module articleClient
 * @description  Articles Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `articleClient` uses `articleRoute`.
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { Utility } from '../../common';
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    ArticleACLClient,
    BaasicArticleUtility,
    ArticleRoute,
    ArticleInstanceSubscriptionsClient,
    ArticleInstanceCommentsClient,
    ArticleInstanceFilesClient,
    ArticleInstanceRatingsClient,
    ArticleInstanceTagsClient,
    ArticleStatus,
    CommentStatus,
    TYPES as articleTypes
} from './';
import { IArticle, IArticleOptions, IArticleStatus, ICommentStatus } from './contracts';

@injectable()
export class ArticleClient {

    private utility: Utility = new Utility();

    /**
     * Provides direct access to `articleRoute`.
     * @method
     * @example articleClient.routeDefinition.get();
     **/
    get routeDefinition(): ArticleRoute {
        return this.articleRoute;
    }

    get comments(): ArticleInstanceCommentsClient {
        return this.articleInstanceCommentsClient;
    }

    get files(): ArticleInstanceFilesClient {
        return this.articleInstanceFilesClient;
    }

    get tags(): ArticleInstanceTagsClient {
        return this.articleInstanceTagsClient;
    }

    get ratings(): ArticleInstanceRatingsClient {
        return this.articleInstanceRatingsClient;
    }

    get subscriptions(): ArticleInstanceSubscriptionsClient {
        return this.articleInstanceSubscriptionsClient;
    }

    get acl(): ArticleACLClient {
        return this.articleACLClient;
    }

    public articleUtility: BaasicArticleUtility = new BaasicArticleUtility();

    constructor(
        @inject(articleTypes.ArticleInstanceCommentsClient) protected articleInstanceCommentsClient: ArticleInstanceCommentsClient,
        @inject(articleTypes.ArticleInstanceFilesClient) protected articleInstanceFilesClient: ArticleInstanceFilesClient,
        @inject(articleTypes.ArticleInstanceRatingsClient) protected articleInstanceRatingsClient: ArticleInstanceRatingsClient,
        @inject(articleTypes.ArticleInstanceTagsClient) protected articleInstanceTagsClient: ArticleInstanceTagsClient,
        @inject(articleTypes.ArticleInstanceSubscriptionsClient) protected articleInstanceSubscriptionsClient: ArticleInstanceSubscriptionsClient,
        @inject(articleTypes.ArticleRoute) protected articleRoute: ArticleRoute,
        @inject(articleTypes.ArticleACLClient) protected articleACLClient: ArticleACLClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    public statuses: IArticleStatus = ArticleStatus;
    protected commentStatuses: ICommentStatus = CommentStatus;

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
    find(options?: IArticleOptions): PromiseLike<IHttpResponse<IQueryModel<IArticle>>> {
        return this.apiClient.get<IQueryModel<IArticle>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns a single article resource.
     * @method
     * @param id Article slug or id which uniquely identifies article resource that needs to be retrieved.
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
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticle>> {
        return this.apiClient.get<IArticle>(this.articleRoute.get(id, options));
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
                    status : baasicArticleService.statuses.draft,
                    $tags : ['<tag1>', '<tag2>']
                })
                .then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: IArticle): PromiseLike<IHttpResponse<IArticle>> {
        return this.apiClient.post<IArticle>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
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
    update(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the saveDraft article action has been performed. This action saves an article with "draft" status. If an article does not exist it will create a new article resource otherwise it will update an existing article resource.
     * @method
     * @param data An article object that needs to be inserted into the system.
     * @returns A promise that is resolved once the saveDraft article action has been performed.
     * @example // article is a resource previously fetched using get action.
                        articleClient.saveDraft(article)
                            .then(function (data) {
                                // perform success action here
                            },
                             function (response, status, headers, config) {
                                 // perform error handling here
                            });
     **/
    saveDraft(data: IArticle): PromiseLike<IHttpResponse<any>> {
        if (this.utility.isUndefined(data.id)) {
            // Create new draft
            return this.create(data);
        }
        // Update draft
        return this.update(data);
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
    remove(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the archive article action has been performed. This action sets the status of an article from "published" to "archive". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(article);
     * let uri = params['model'].links('archive').href;
     * ```
     * @method
     * @param data An article object.
     * @param options Notification options.
     * @returns A promise that is resolved once the archive article action has been performed.
     * @example // article is a resource previously fetched using get action.
                    articleClient.archive(article, articleOptions)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    archive(data: IArticle, options: IArticleOptions): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.archive(data), this.routeDefinition.updateParams(options));
    }

    /**
     * Returns a promise that is resolved once the restore article action has been performed. This action sets the status of an article from "archive" to "published". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(article);
     * let uri = params['model'].links('restore').href;
     * ```
     * @method
     * @param data Article object.
     * @returns A promise that is resolved once the restore article action has been performed.
     * @example // article is a resource previously fetched using get action.
                        articleClient.restore(article)
                            .then(function (data) {
                                // perform success action here
                            },
                             function (response, status, headers, config) {
                                 // perform error handling here
                            });
     **/
    restore(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.restore(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unpublish article action has been performed. This action sets the status of an article from "published" to "draft". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(article);
     * let uri = params['model'].links('unpublish').href;
     * ```
     * @method
     * @param data An article object.
     * @returns A promise that is resolved once the unpublish article action has been performed.
     * @example 	// article is a resource previously fetched using get action.
                        articleClient.unpublish(article)
                            .then(function (data) {
                                // perform success action here
                            },
                             function (response, status, headers, config) {
                                 // perform error handling here
                            });
     **/
    unpublish(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.unpublish(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the publish article action has been performed. This action sets the status of an article from "draft" to "published".
     * @method
     * @param data An article object.
     * @param articleOptions Notification options.
     * @returns A promise that is resolved once the unpublish article action has been performed.
     * @example articleClient.publish(article, articleOptions)
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    publish(data: IArticle, articleOptions: IArticleOptions): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.publish(data), this.routeDefinition.updateParams(articleOptions));
    }

    /**
     * Returns a promise that is resolved once the purge articles action has been performed. Please note that all article resources will be deleted from the system once the action is successfully completed and therefore it can only be executed by user assigned to account owner role.
     * @method
     * @example articleClient.purge({})
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    purge(options: Object): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge(options));
    }
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.
 */