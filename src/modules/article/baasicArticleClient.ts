/* globals module */
/**  
 * @module baasicArticleClient  
 * @description Baasic Articles Client provides an easy way to consume Baasic Articles REST API end-points. In order to obtain needed routes `baasicArticleClient` uses `baasicArticleRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { ALPHABET, BaasicArticleRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticle, IArticleOptions } from 'modules/article/contracts';

@injectable()
export class BaasicArticleClient {

    /**
     * Provides direct access to `baasicArticleRouteDefinition`.
     * @method 
     * @example baasicArticleClient.routeDefinition.get();
     **/
    get routeDefinition(): BaasicArticleRouteDefinition {
        return this.baasicArticleRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleRouteDefinition) protected baasicArticleRouteDefinition: BaasicArticleRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    private replaceDiacritics(str: string): string {
        for (let letter in ALPHABET) {
            str = str.replace(ALPHABET[letter], letter);
        }
        return str;
    }

    public statuses: Object = {
        none: 0,
        published: 2,
        draft: 1,
        archive: 4
    };

    private commentStatuses: Object = {
        approved: 1,
        spam: 2,
        reported: 4,
        flagged: 8,
        unapproved: 16
    };

    private isUndefined(value: any): boolean {
        return typeof value === 'undefined';
    }

    private equals(value1: any, value2: any): boolean {
        if (value1 === value2) { return true; }
        if (value1 === null || value2 === null) { return false; }
        if (value1 !== value1 && value2 !== value2) return true; // NaN === NaN
        let t1 = typeof value1, t2 = typeof value2, length, key, keySet;

    }

    updateSlug(resource: any): any {
        let newSlug = this.toSlug(resource.slug);
        if (this.isUndefined(newSlug) || newSlug === null || newSlug === '') {
            newSlug = this.toSlug(resource.title);
        }
        if (this.isUndefined(newSlug) || newSlug !== null || newSlug !== '') {
            if (!this.equals(resource.slug, newSlug)) {
                resource.slug = newSlug;
            }
        }
    }

    toSlug(str: string): string {
        if (this.isUndefined(str) || str === null || str === '') {
            return str;
        }
        str = this.replaceDiacritics(str);
        str = str.toLowerCase();
        str = str.replace(/[^a-z0-9]+/g, '-');
        str = str.replace(/^-|-$/g, '');
        return str;
    }

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article resources matching the given criteria.                 
     * @method                        
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
        return this.baasicApiClient.get(this.baasicArticleRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns a single article resource.                 
     * @method                        
     * @example baasicArticleClient.get('<article-id>')
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });                
     **/
    get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IArticle>> {
        return this.baasicApiClient.get(this.baasicArticleRouteDefinition.get(id, options));
    }

    /**                 
     * Returns a promise that is resolved once the create article action has been performed, this action creates a new article resource.                 
     * @method                        
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
        return this.baasicApiClient.post(this.baasicArticleRouteDefinition.create(), this.baasicArticleRouteDefinition.createParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the update article action has been performed; this action updates an article resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(article); 
     * let uri = params['model'].links('put').href; 
     * ```                 
     * @method                        
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
        if (this.isUndefined(data.id)) {
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
     * @example // article is a resource previously fetched using get action.				 
                    baasicArticleClient.archive(article, articleOptions)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });		               
     **/
    archive(data: IArticle, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleRouteDefinition.archive(data), this.baasicArticleRouteDefinition.updateParams(options));
    }

    /**                 
     * Returns a promise that is resolved once the unpublish article action has been performed. This action sets the status of an article from "published" to "draft". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(article); 
     * let uri = params['model'].links('unpublish').href; 
     * ```                 
     * @method                        
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