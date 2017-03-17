/* globals module */
/**  
 * @module baasicArticleClient  
 * @description Baasic Articles Client provides an easy way to consume Baasic Articles REST API end-points. In order to obtain needed routes `baasicArticleClient` uses `baasicArticleRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { Utility } from 'common';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    BaasicArticleACLClient,
    BaasicArticleUtility,
    BaasicArticleRouteDefinition,
    BaasicArticleInstanceSubscriptionsClient,
    BaasicArticleInstanceCommentsClient,
    BaasicArticleInstanceFilesClient,
    BaasicArticleInstanceRatingsClient,
    BaasicArticleInstanceTagsClient,
    ArticleStatus,
    CommentStatus,
    TYPES as articleTypes
} from 'modules/article';
import { IArticle, IArticleOptions, IArticleStatus, ICommentStatus } from 'modules/article/contracts';

@injectable()
export class BaasicArticleClient {

    private utility: Utility = new Utility();

    /**
     * Provides direct access to `baasicArticleRouteDefinition`.
     * @method 
     * @example baasicArticleClient.routeDefinition.get();
     **/
    get routeDefinition(): BaasicArticleRouteDefinition {
        return this.baasicArticleRouteDefinition;
    }

    get comments(): BaasicArticleInstanceCommentsClient {
        return this.baasicArticleInstanceCommentsClient;
    }

    get files(): BaasicArticleInstanceFilesClient {
        return this.baasicArticleInstanceFilesClient;
    }

    get tags(): BaasicArticleInstanceTagsClient {
        return this.baasicArticleInstanceTagsClient;
    }

    get ratings(): BaasicArticleInstanceRatingsClient {
        return this.baasicArticleInstanceRatingsClient;
    }

    get subscriptions(): BaasicArticleInstanceSubscriptionsClient {
        return this.baasicArticleInstanceSubscriptionsClient;
    }

    get acl(): BaasicArticleACLClient {
        return this.baasicArticleACLClient;
    }

    public articleUtility: BaasicArticleUtility = new BaasicArticleUtility();

    constructor(
        @inject(articleTypes.BaasicArticleInstanceCommentsClient) protected baasicArticleInstanceCommentsClient: BaasicArticleInstanceCommentsClient,
        @inject(articleTypes.BaasicArticleInstanceFilesClient) protected baasicArticleInstanceFilesClient: BaasicArticleInstanceFilesClient,
        @inject(articleTypes.BaasicArticleInstanceRatingsClient) protected baasicArticleInstanceRatingsClient: BaasicArticleInstanceRatingsClient,
        @inject(articleTypes.BaasicArticleInstanceTagsClient) protected baasicArticleInstanceTagsClient: BaasicArticleInstanceTagsClient,
        @inject(articleTypes.BaasicArticleInstanceSubscriptionsClient) protected baasicArticleInstanceSubscriptionsClient: BaasicArticleInstanceSubscriptionsClient,
        @inject(articleTypes.BaasicArticleRouteDefinition) protected baasicArticleRouteDefinition: BaasicArticleRouteDefinition,
        @inject(articleTypes.BaasicArticleACLClient) protected baasicArticleACLClient: BaasicArticleACLClient,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    public statuses: IArticleStatus = ArticleStatus;
    protected commentStatuses: ICommentStatus = CommentStatus;

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article resources matching the given criteria.                 
     * @method
     * @param options A promise that is resolved once the find action has been performed.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example baasicArticleClient.find({  
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticle>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IArticle>>(this.baasicArticleRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns a single article resource.                 
     * @method 
     * @param id Article slug or id which uniquely identifies article resource that needs to be retrieved.
     * @param options Options object that contains embed items.
     * @returns a promise that is resolved once the get action has been performed.                       
     * @example baasicArticleClient.get('<article-id>')
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });                
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticle>> {
        return this.baasicApiClient.get<IArticle>(this.baasicArticleRouteDefinition.get(id, options));
    }

    /**                 
     * Returns a promise that is resolved once the create article action has been performed, this action creates a new article resource.                 
     * @method 
     * @param data An article object that needs to be inserted into the system.
     * @returns a promise that is resolved once the create article action has been performed.                        
     * @example baasicArticleClient.create({  
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
        return this.baasicApiClient.post<IArticle>(this.baasicArticleRouteDefinition.create(), this.baasicArticleRouteDefinition.createParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the update article action has been performed; this action updates an article resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(article); 
     * let uri = params['model'].links('put').href; 
     * ```                 
     * @method 
     * @param data An article object that needs to be updated into the system.                     
     * @returns A promise that is resolved once the update article action has been performed.
     * @example // article is a resource previously fetched using get action. 
                    article.title = '<title>'; 
                    baasicArticleClient.update(article)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });                
     **/
    update(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleRouteDefinition.update(data), this.baasicArticleRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the saveDraft article action has been performed. This action saves an article with "draft" status. If an article does not exist it will create a new article resource otherwise it will update an existing article resource.                 
     * @method
     * @param data An article object that needs to be inserted into the system.                        
     * @returns A promise that is resolved once the saveDraft article action has been performed.
     * @example // article is a resource previously fetched using get action. 
                        baasicArticleClient.saveDraft(article)
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
     * Returns a promise that is resolved once the remove article action has been performed. If the action is successfully completed, the article resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(article); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method
     * @param data An article object that needs to be removed from the system.
     * @returns A promise that is resolved once the remove article action has been performed.                          
     * @example // article is a resource previously fetched using get action.				 
                    baasicArticleClient.remove(article)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });		               
     **/
    remove(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleRouteDefinition.delete(data));
    }

    /**                 
     * Returns a promise that is resolved once the archive article action has been performed. This action sets the status of an article from "published" to "archive". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(article); 
     * let uri = params['model'].links('archive').href; 
     * ```                 
     * @method 
     * @param data An article object.                    
     * @param options Notification options.
     * @returns A promise that is resolved once the archive article action has been performed. 
     * @example // article is a resource previously fetched using get action.				 
                    baasicArticleClient.archive(article, articleOptions)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });		               
     **/
    archive(data: IArticle, options: IArticleOptions): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleRouteDefinition.archive(data), this.baasicArticleRouteDefinition.updateParams(options));
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
                        baasicArticleClient.restore(article)
                            .then(function (data) {  
                                // perform success action here 
                            },
                             function (response, status, headers, config) {  
                                 // perform error handling here 
                            });		               
     **/
    restore(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleRouteDefinition.restore(data), this.baasicArticleRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the unpublish article action has been performed. This action sets the status of an article from "published" to "draft". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(article); 
     * let uri = params['model'].links('unpublish').href; 
     * ```                 
     * @method 
     * @param data An article object.
     * @returns A promise that is resolved once the unpublish article action has been performed.                       
     * @example 	// article is a resource previously fetched using get action.				 
                        baasicArticleClient.unpublish(article)
                            .then(function (data) {  
                                // perform success action here 
                            },
                             function (response, status, headers, config) {  
                                 // perform error handling here 
                            });		               
     **/
    unpublish(data: IArticle): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleRouteDefinition.unpublish(data), this.baasicArticleRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the publish article action has been performed. This action sets the status of an article from "draft" to "published".                 
     * @method 
     * @param data An article object.
     * @param articleOptions Notification options.
     * @returns A promise that is resolved once the unpublish article action has been performed.                              
     * @example baasicArticleClient.publish(article, articleOptions)
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });		               
     **/
    publish(data: IArticle, articleOptions: IArticleOptions): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleRouteDefinition.publish(data), this.baasicArticleRouteDefinition.updateParams(articleOptions));
    }

    /**                 
     * Returns a promise that is resolved once the purge articles action has been performed. Please note that all article resources will be deleted from the system once the action is successfully completed and therefore it can only be executed by user assigned to account owner role.                 
     * @method                        
     * @example baasicArticleClient.purge({})
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });		               
     **/
    purge(options: Object): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleRouteDefinition.purge(options));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */