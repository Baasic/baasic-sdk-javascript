/* globals module */ 
/**  
 * @module baasicArticleRouteDefinition  
 * @description Baasic Article Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { BaasicBaseRouteDefinition } from '..';

export class BaasicArticleRouteDefinition extends BaasicBaseRouteDefinition {
    
     public readonly subscriptions: BaasicSubsciption = new BaasicSubsciption();
     public readonly ratings: BaasicRating = new BaasicRating();
     
     /**                 
      * Parses find article route which can be expanded with additional options. Supported items are:                 
      * - `searchQuery` - A string referencing article properties using the phrase or BQL (Baasic Query Language) search.                 
      * - `page` - A value used to set the page number, i.e. to retrieve certain article subset from the storage.                 
      * - `rpp` - A value used to limit the size of result set per page.                 * - `sort` - A string used to set the article property to sort the result collection by. 				
      * - `embed` - Comma separated list of resources to be contained within the current representation.                 
      * - `startDate` - A value used to specify the article creation, publish or archive date date starting from which article resource collection should be returned.                 
      * - `endDate` - A value used to specify the article creation, publish or archive date until (and including) which article resource collection should be returned.                 
      * - `statuses` - Comma separated list of article statuses that specify where search should be done (Allowed statuses: Published, Draft and Archived).                 
      * -  `tags` - A value used to restrict the search to article resources with these tags. Multiple tags should be comma separated.        				                
      * @method                        
      * @example baasicArticleRouteDefinition.find.expand({searchQuery: '<search-phrase>'});                               
      **/
    find(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{?searchQuery,page,rpp,sort,embed,fields,statuses,tags,startDate,endDate}');
    }

    /**                 
     * Parses get article route which must be expanded with the Id of the previously created article resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleRouteDefinition.get.expand({id: '<article-id>'});                               
     **/
    get(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{id}/{?embed,fields}');
    }

    /**                 
     * Parses publish article route which must be expanded with the Id of the previously created article resource in the system.                 
     * @method                        
     * @example baasicArticleRouteDefinition.publish.expand({id: '<article-id>'});                               
     **/
    publish(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{id}/publish/');
    }

     /**                 
      * Parses purge article route, this URI template doesn't expose any additional properties.                 
      * @method                        
      * @example baasicArticleRouteDefinition.purge.expand({});                               
      **/
    purge(): any {
        return this.baasicUriTemplateProcessor.parse('articles/purge/');
    }

    /**                 
     * Parses create article route; this URI template doesn't expose any additional properties.                 
     * @method                        
     * @example baasicArticleRouteDefinition.create.expand({});                               
     **/
    create(): any {
        return this.baasicUriTemplateProcessor.parse('articles');
    }
}

class BaasicSubsciption {

    public readonly articleModule: BaasicArticleModule = new BaasicArticleModule();
    public readonly article: BaasicArticle = new BaasicArticle();
    public readonly commentReported: BaasicCommentReported = new BaasicCommentReported();
    public readonly commentRequiresModeration: BaasicCommentRequiresModeration = new BaasicCommentRequiresModeration();
}

class BaasicArticleModule {

    /**                          
     * Parses article module subscribe route which doesn't support any additional options.                          
     * @method subscriptions.articleModule.subscribe                          
     * @example baasicArticleRouteDefinition.subscriptions.articleModule.subscribe.expand({});                           
     **/
    subscribe(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions');
    }

     /**                          
      * Parses article module isSubscribed route which must be expanded with subscriber Id                          
      * @method subscriptions.articleModule.isSubscribed                          
      * @example baasicArticleRouteDefinition.subscriptions.articleModule.isSubscribed.expand({subscriberId: '<subscriber-id>'});                           
      **/
    isSubscribed(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions/{subscriberId}');
    }

    /**                         
     * Parses article module unSubscribe route which doesn't support any additional options.                         
     * @method subscriptions.articleModule.unSubscribe                         
     * @example baasicArticleRouteDefinition.subscriptions.articleModule.unSubscribe.expand({});                          
     **/
    unSubscribe(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions');
    }
}

class BaasicArticle {

    /**                         
     * Parses article subscribe route which must be expanded with id of the article.                         
     * @method subscriptions.article.subscribe                         
     * @example baasicArticleRouteDefinition.subscriptions.article.subscribe.expand({id: '<article-id>'});                          
     **/
    subscribe(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{id}/subscriptions');
    }

    /**                          
     * Parses article isSubscribed route which must be expanded with subscriber Id and the id of the article.                          
     * @method subscriptions.article.isSubscribed                          
     * @example baasicArticleRouteDefinition.subscriptions.article.isSubscribed.expand({id: '<article-id>', subscriberId: '<subscriber-id>' });                           
     **/
    isSubscribed(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{id}/subscriptions/{subscriberId}');                             
    }

     /**                         
      * Parses article unSubscribe route which must be expanded with the id of the article.                         
      * @method subscriptions.articleModule.unSubscribe                         
      * @example baasicArticleRouteDefinition.subscriptions.article.unSubscribe.expand({id: '<article-id>'});                                                    
      **/
    unSubscribe(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{id}/subscriptions');
    }
}

class BaasicCommentReported {

     /**                         
      * Parses commentReported subscribe route which doesn't support any additional options.                         
      * @method subscriptions.commentReported.subscribe                         
      * @example baasicArticleRouteDefinition.subscriptions.commentReported.subscribe.expand({});                        
      **/
    subscribe(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions/comment-reported');
    }

    /**                          
     * Parses commentReported isSubscribed route which must be expanded with subscriber Id.                          
     * @method subscriptions.commentReported.isSubscribed                          
     * @example baasicArticleRouteDefinition.subscriptions.article.isSubscribed.expand({subscriberId: '<subscriber-id>'});                           
     **/
    isSubscribed(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions/comment-reported/{subscriberId}');
    }

     /**                         
      * Parses commentReported unSubscribe route which doesn't support any additional options.                         
      * @method subscriptions.commentReported.unSubscribe                         
      * @example baasicArticleRouteDefinition.subscriptions.article.unSubscribe.expand({})                        
      **/
    unSubscribe(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions/comment-reported');
    }
}

class BaasicCommentRequiresModeration {

     /**                          
      * Parses commentRequiresModeration subscribe route which doesn't support any additional options.                          
      * @method subscriptions.commentRequiresModeration.subscribe                          
      * @example baasicArticleRouteDefinition.subscriptions.commentRequiresModeration.subscribe.expand({});                         
      **/
    subscribe(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions/comment-requires-moderation');
    }

    /**                          
     * Parses commentRequiresModeration isSubscribed route which must be expanded with subscriber Id.                          
     * @method subscriptions.commentRequiresModeration.isSubscribed                          
     * @example baasicArticleRouteDefinition.subscriptions.commentRequiresModeration.isSubscribed.expand({subscriberId: '<subscriber-id>'});                           
     **/
    isSubscribed(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions/comment-requires-moderation/{subscriberId}');
    }

    /**                         
     * Parses commentRequiresModeration unSubscribe route which doesn't support any additional options.                         
     * @method subscriptions.commentRequiresModeration.unSubscribe                         
     * @example baasicArticleRouteDefinition.subscriptions.commentRequiresModeration.unSubscribe.expand({})                        
     **/
    unSubscribe(): any {
        return this.baasicUriTemplateProcessor.parse('articles/subscriptions/comment-requires-moderation');
    }
}

class BaasicRating extends BaasicBaseRouteDefinition {

     /**                     
      * Parses get article rating route which must be expanded with the Id of the previously created article rating resource in the system and the ArticleId. Additional expand supported items are:                     
      * - `embed` - Comma separated list of resources to be contained within the current representation.                     
      * @method                            
      * @example     baasicArticleRouteDefinition.ratings.get().expand({articleId: '<article-id>', id: '<articleRating-id>'});                                   
      **/
    get(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{articleId}/ratings/{id}/{?embed,fields}');                       
    }

    /** 					
     * Parses find article rating route which can be expanded with additional options. Supported items are: 					
     * - `articleId` - Id of the article. 					
     * - `page` - A value used to set the page number, i.e. to retrieve certain article rating subset from the storage. 					
     * - `rpp` - A value used to limit the size of result set per page. 					
     * - `sort` - A string used to set the article rating property to sort the result collection by. 					
     * - `embed` - Comma separated list of resources to be contained within the current representation. 					
     * @method ratings.find       					
     * @example baasicArticleRouteDefinition.ratings.find.expand({articleId: '<article-id>'});               					
     **/
    find(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{articleId}/ratings{?page,rpp,sort,embed,fields}');
    }

    /** 					
     * Parses findByUser article rating route which can be expanded with additional options. Supported items are: 					
     * - `articleId` - Id of the article. 					
     * - `username` - A value that uniquely identifies a user which has created an article rating. 					
     * - `embed` - Comma separated list of resources to be contained within the current representation. 					
     * @method ratings.findByUsername       					
     * @example baasicArticleRouteDefinition.ratings.findByUsername.expand({articleId: '<article-id>', username: '<username>' }); 					
     **/
    findByUsername(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{articleId}/users/{username}/ratings/{?embed,fields}');
    }

    /** 					
     * Parses create article rating route; this URI template should be expanded with the Id of the article. 					
     * @method ratings.create       					
     * @example baasicArticleRouteDefinition.ratings.create().expand({articleId: '<article-id>'}); 					
     **/
    create(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{articleId}/ratings/');
    }
}

class BaasicTag extends BaasicBaseRouteDefinition {
    
    /** 				
     * Parses find article tags route which can be expanded with additional options. Supported items are: 					
     * - `id` - Id of the article. 					
     * - `searchQuery` - A string value used to identify article tag resources using the phrase search. 					
     * - `page` - A value used to set the page number, i.e. to retrieve certain article tag subset from the storage. 					
     * - `rpp` - A value used to limit the size of result set per page. 					
     * - `sort` - A string used to set the article tag property to sort the result collection by. 					
     * - `embed` - Comma separated list of resources to be contained within the current representation. 					
     * @method tags.find       					
     * @example baasicArticleRouteDefinition.tags.find().expand({id: '<article-id>',searchQuery: '<search-phrase>'}); 					
     **/
    find(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{id}/tags/{?searchQuery,page,rpp,sort,embed,fields}');
    }

    /** 					
     * Parses get article tags route which can be expanded with additional options. Supported items are: 					
     * - `id` - Id of the article.										
     * - `tag` - Article slug which uniquely identifies article tag resource that needs to be retrieved. 					
     * - `embed` - Comma separated list of resources to be contained within the current representation. 					
     * @method tags.get       					
     * @example baasicArticleRouteDefinition.tags.get().expand({id: '<article-id>',tag: '<tag>'}); 					
     **/
    get(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{id}/tags/{tag}/{?embed,fields}');
    }

    create(): any {
        return this.baasicUriTemplateProcessor.parse('articles/{id}/tags/{tag}/');
    }
}