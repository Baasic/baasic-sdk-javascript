/* globals module */ 
/**  
 * @module baasicArticleCommentsClient  
 * @description Baasic Article Comments Client provides an easy way to consume Baasic Article Comments REST API end-points. `baasicArticleCommentsClient` functions enable performing standard CRUD operations directly on article comment resources, whereas the `baasicArticleClient` functions allow management between article and article comments. In order to obtain needed routes `baasicArticleCommentsClient` uses `baasicArticleCommentsRouteDefinition`. 
 */

import { BaasicArticleCommentsRouteDefinition } from './baasicArticleCommentsRouteDefinition';
import { IOptions } from '../IOptions';
import { IStatuses } from './IStatuses';
import { ModelMapper } from '../modelMapper';

export class BaasicArticleCommentClient {
    
    /**
    * Contains a reference to valid list of article comment states. It returns an object containing all article comment states.
    * @method
    * @example baasicArticleCommentsClient.statuses.approved;
    **/ 
    public statuses: IStatuses = {
        approved: 1,
        spam: 2,
        reported: 4,
        flagged: 8,
        unapproved: 16
    };

    constructor(
        private modelMapper: ModelMapper,
        private baasicArticleCommentsRouteDefinition: BaasicArticleCommentsRouteDefinition
    ) {}

    /**
     * Returns a promise that is resolved once the approve article comment action has been performed. This action sets the state of an article comment to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-approve').href; 
     * ```
     * @method
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.approve(articleComment, commentOptions)
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
        return this.baasicApiHttp.put(this.baasicArticleCommentsRouteDefinition.approve(params), commentOptions[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the unapprove article comment action has been performed. This action sets the state of an article comment to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unapprove').href; 
     * ```
     * @method 
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.unapprove(articleComment)
                        .success(function (data) { 
                            // perform success action here 
                        }).error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/	
    unapprove(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentsRouteDefinition.unapprove(params), params[this.baasicConstants.modelPropertyName]);                        
    }

    /**
     * Returns a promise that is resolved once the create article comment action has been performed; this action creates a new comment for an article.
     * @method
     * @example baasicArticleCommentsClient.create({ 
                        articleId : '<article-id>', 
                        comment : <comment>, 
                        userId : '<user-id>' })
                    .success(function (data) { 
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) { 
                        // perform error handling here 
                    });
     **/ 
    create(data: any): Promise<any> {
        return this.baasicApiHttp.post(this.baasicArticleCommentsRouteDefinition.create().expand(data), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment resources matching the given criteria.
     * @method 
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
    find(options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleCommentsRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

    /**
     * Returns a promise that is resolved once the flag article comment action has been performed. This action sets the state of an article comment to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-flag').href; 
     * ```                     
     * @method
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.flag(articleComment)
                        .success(function (data) { 
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });		                
     **/	
    flag(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentsRouteDefinition.flag(params), params[this.baasicConstants.modelPropertyName]); 
    }

    /**
     * Returns a promise that is resolved once the unflag article comment action has been performed. This action removes the "flagged" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unflag').href; 
     * ```
     * @method
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.unflag(articleComment)
                        .success(function (data) { 
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) { 
                            // perform error handling here 
                        });
     **/		                    
    unflag(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentsRouteDefinition.unflag(params), params[this.baasicConstants.modelPropertyName]);
    }

     /**
      * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment resource.
      * @method 
      * @example baasicArticleCommentsClient.get('<article-id>', '<comment-id>')
                    .success(function (data) { 
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) { 
                        // perform error handling here 
                    });
     **/ 	
    get(id: string, options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleCommentsRouteDefinition.get.expand(this.modelMapper.getParams(id, options)));
    }

     /**
      * Returns a promise that is resolved once the remove article comment action has been performed. If the action is successfully completed, the article comment resource and its replies will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
      ``` 
      let params = modelMapper.removeParams(articleComment); 
      let uri = params['model'].links('delete').href; 
      ```
      * @method
      * @example // articleComment is a resource previously fetched using get action. 
                        baasicArticleCommentsClient.remove(articleComment)
                            .success(function (data) { 
                                // perform success action here 
                            }).error(function (response, status, headers, config) { 
                                // perform error handling here 
                            });
     **/	
    remove(data: any): Promise<any> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicArticleCommentsRouteDefinition.delete(params));
    }

    /** 
     * Returns a promise that is resolved once the report article comment action has been performed. This action sets the state of an article comment to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-report').href; 
     * ```
     * @method 
     * @example // articleComment is a resource previously fetched using get action.
                    baasicArticleCommentsClient.report(articleComment, commentOptions)
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
        return this.baasicApiHttp.put(this.baasicArticleCommentsRouteDefinition.report(params), commentOptions[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the unreport article comment action has been performed. This action removes the "reported" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(articleComment); 
     * let uri = params['model'].links('comment-unreport').href; 
     * ```
     * @method 
     * @example // articleComment is a resource previously fetched using get action. 
                    baasicArticleCommentsClient.unreport(articleComment).success(function (data) { 
                        // perform success action here 
                    }).error(function (response, status, headers, config) { 
                        // perform error handling here 
                    });
     **/		 
    unreport(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleCommentsRouteDefinition.unreport(params), params[this.baasicConstants.modelPropertyName]);
    }
}