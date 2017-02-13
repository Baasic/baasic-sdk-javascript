/* globals module */ 
/**  
 * @module baasicArticleCommentRepliesClient
 * @description Baasic Article Comment Replies Client provides an easy way to consume Baasic Article Comment Replies REST API end-points. `baasicArticleCommentRepliesService` functions enable performing standard CRUD operations directly on article comment reply resources, whereas the `baasicArticleClient` functions allow management between article and article comment reply. In order to obtain needed routes `baasicArticleCommentRepliesService` uses `baasicArticleCommentRepliesRouteDefinition`. 
*/

import { BaasicArticleCommentRepliesRouteDefinition } from './baasicArticleCommentRepliesRouteDefinition';
import { IOptions } from '../IOptions';
import { IStatuses } from './IStatuses';
import { ModelMapper } from '../modelMapper';

export class BaasicArticleCommentRepliesClient {
    
    
    /**
     * Contains a reference to valid list of article comment reply states. It returns an object containing all article comment reply states.
     * @method 
     * @example baasicArticleCommentRepliesClient.statuses.approved;
     **/                     
    public statuses: IStatuses = {
        approved: 1,
        spam: 2,
        reported: 4,
        flagged: 8,
        unapproved: 16
    };

    /**
     * Provides direct access to `baasicArticleCommentRepliesRouteDefinition`.
     * @method 
     * @example baasicArticleCommentRepliesClient.routeService.get().expand(expandObject);
     **/ 
    get routeDefinition(): BaasicArticleCommentRepliesRouteDefinition {
        return this.baasicArticleCommentRepliesRouteDefinition;
    }

    constructor(
        private modelMapper: ModelMapper, 
        private baasicArticleCommentRepliesRouteDefinition: BaasicArticleCommentRepliesRouteDefinition
    ) {}

    /**
     * Returns a promise that is resolved once the approve article comment reply action has been performed. This action sets the state of an article comment reply to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-approve').href; 
     * ```
     * @method
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.approve(articleCommentReply, commentOptions)
                        .success(function (data) { 
                            // perform success action here 
                    })
                    .error(function (response, status, headers, config) { 
                        // perform error handling here 
                    });
     **/	
    approve(data: any, options: IOptions): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        let commentOptions = this.modelMapper.updateParams(options);
        return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.approve(params), commentOptions[this.baasicConstants.modelPropertyName]);  
    }

    /**
     * Returns a promise that is resolved once the unapprove article comment reply action has been performed. This action sets the state of an article comment reply to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unapprove').href; 
     * ```
     * @method 
     * @example // articleCommentReply is a resource previously fetched using get action.
                    baasicArticleCommentRepliesClient.unapprove(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/	
    unapprove(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.unnaprove(params), params[this.baasicConstants.modelPropertyName]);  
    }

    /**
     * Returns a promise that is resolved once the create article comment reply action has been performed; this action creates a new comment reply for an article.
     * @method
     * @example baasicArticleCommentRepliesClient.create('<article-id>', { 
                    commentId : '<comment-id>', 
                    comment : <comment>, 
                    userId : '<user-id>' })
                .success(function (data) { 
                    // perform success action here 
                }).error(function (response, status, headers, config) { 
                    // perform error handling here 
                });
     **/ 
    create(data: any): Promise<any> {
        return this.baasicApiHttp.post(this.baasicArticleCommentRepliesRouteDefinition.create().expand(data), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment reply resources matching the given criteria.
     * @method
     * @example baasicArticleCommentRepliesClient.find({ 
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
    find(options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleCommentRepliesRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

    /**
     * Returns a promise that is resolved once the flag article comment reply action has been performed. This action sets the state of an article comment reply to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-flag').href; 
     * ```
     * @method
     * @example     // articleCommentReply is a resource previously fetched using get action.
                        baasicArticleCommentRepliesClient.flag(articleCommentReply)
                            .success(function (data) { 
                                // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/	
    flag(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.flag(params), params[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the unflag article comment reply action has been performed. This action removes the "flagged" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unflag').href; 
     * ```
     * @method 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.unflag(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        }).error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/	
    unflag(data:any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.unflag(params), params[this.baasicConstants.modelPropertyName]); 
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment reply resource.
     * @method
     * @example baasicArticleCommentRepliesClient.get('<comment-reply-id>')
                    .success(function (data) { 
                        // perform success action here 
                    }).error(function (response, status, headers, config) {
                         // perform error handling here 
                    });
     **/
    get(id: string, options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleCommentRepliesRouteDefinition.get().expand(this.modelMapper.getParams(id, options)));
    }

    /**
     * Returns a promise that is resolved once the remove article comment reply action has been performed. If the action is successfully completed, the article comment reply resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = baasicApiClient.removeParams(articleCommentReply); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @method
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.remove(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        }).error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/					
    remove(data: any): Promise<any> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicArticleCommentRepliesRouteDefinition.delete(params));
    }

    /**
     * Returns a promise that is resolved once the report article comment reply action has been performed. This action sets the state of an article comment reply to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-report').href; 
     * ```
     * @method 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.report(articleCommentReply, commentOptions)
                        .success(function (data) { 
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/		                    
    report(data: any, options: IOptions): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        let commentOptions = this.modelMapper.updateParams(options);
        return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.report(params), commentOptions[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the unreport article comment reply action has been performed. This action removes the "reported" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unreport').href; 
     * ```
     * @method
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.unreport(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/	
    unreport(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.unreport(params), params[this.baasicConstants.modelPropertyName]);   
    }

    /**
     * Returns a promise that is resolved once the mark as spam article comment reply action has been performed. This action sets the state of an article comment reply to "spam". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-spam').href; 
     * ```
     * @method
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.spam(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        }).error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/	
    spam(data: any): Promise<any> {
         let params = this.modelMapper.updateParams(data);
         return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.spam(params), params[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the unspam article comment reply action has been performed. This action removes the "spam" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('comment-unspam').href; 
     * ```
     * @method 
     * @example // articleCommentReply is a resource previously fetched using get action. 
                      baasicArticleCommentRepliesClient.unspam(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        }).error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/	
    unspam(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.unspam(params), params[this.baasicConstants.modelPropertyName]); 
    }

    /**
     * Returns a promise that is resolved once the update article comment reply action has been performed; this action updates an article comment reply resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleCommentReply); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @method
     * @example // articleCommentReply is a resource previously fetched using get action. 
                    baasicArticleCommentRepliesClient.update(articleCommentReply)
                        .success(function (data) { 
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/	
    update(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentRepliesRouteDefinition.update(params), params[this.baasicConstants.modelPropertyName]);
    } 
}