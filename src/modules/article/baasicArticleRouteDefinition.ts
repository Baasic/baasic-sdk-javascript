/* globals module */
/**  
 * @module baasicArticleRouteDefinition  
 * @description Baasic Article Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticle } from 'modules/article/contracts';

@injectable()
export class BaasicArticleRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }


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
    find(options?: IOptions): any {
        return super.baseFind('articles/{?searchQuery,page,rpp,sort,embed,fields,statuses,tags,startDate,endDate}', options);
    }

    /**                 
     * Parses get article route which must be expanded with the Id of the previously created article resource in the system. Additional expand supported items are: 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method                        
     * @example baasicArticleRouteDefinition.get({id: '<article-id>'});                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('articles/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses publish article route which must be expanded with the Id of the previously created article resource in the system.                 
     * @method                        
     * @example baasicArticleRouteDefinition.publish.expand({id: '<article-id>'});                               
     **/
    publish(data: IArticle): any {
        return super.baseGet('articles/{id}/publish/', data);
    }

    /**                 
     * Parses purge article route, this URI template doesn't expose any additional properties.                 
     * @method                        
     * @example baasicArticleRouteDefinition.purge();                               
     **/
    purge(options: Object): any {
        return super.baseCreate('articles/purge/', options);
    }

    /**                 
     * Parses create article route; this URI template doesn't expose any additional properties.                 
     * @method                        
     * @example baasicArticleRouteDefinition.create();                               
     **/
    create(): any {
        return super.baseCreate('articles', {});
    }

    /**                 
     * Parses update article route; this URI template doesn't expose any additional properties.                 
     * @method                        
     * @example baasicArticleRouteDefinition.update(data);                               
     **/
    update(data: IArticle): any {
        return super.baseUpdate('articles/{id}', data);
    }

    /**                 
     * Parses delete article route; this URI template doesn't expose any additional properties.                 
     * @method                        
     * @example baasicArticleRouteDefinition.delete(data);                               
     **/
    delete(data: IArticle): any {
        return super.baseDelete('articles/{id}', data);
    }

    /**                 
     * Parses archive article route; this URI template doesn't expose any additional properties.                 
     * @method                        
     * @example baasicArticleRouteDefinition.archive(data);                               
     **/
    archive(data: IArticle): any {
        return super.baseUpdate('articles/{id}/archive', data, undefined, 'archive');
    }

    /**                 
     * Parses restore article route; this URI template doesn't expose any additional properties.                 
     * @method                        
     * @example baasicArticleRouteDefinition.restore(data);                               
     **/
    restore(data: IArticle): any {
        return super.baseUpdate('articles/{id}/archive', data, undefined, 'archive');
    }

    /**                 
     * Returns a promise that is resolved once the unpublish article action has been performed. This action sets the status of an article from "published" to "draft". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(article); 
     * let uri = params['model'].links('unpublish').href; 
     * ```                 
     * @method                        
     * @example // article is a resource previously fetched using get action.				 
                    baasicArticleClient.unpublish(article)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });		               
     **/
    unpublish(data: IArticle): any {
        return super.baseUpdate('articles/{id}/restore', data, undefined, 'unpublish');
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