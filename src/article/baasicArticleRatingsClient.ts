/* globals module */ 
/**  
 * @module baasicArticleRatingsClient  
 * @description Baasic Article Ratings Client provides an easy way to consume Baasic Article Ratings REST API end-points. `baasicArticleRatingsClient` functions enable performing standard CRUD operations directly on article rating resources, whereas the `baasicArticleService` functions allow management between article and article rating. In order to obtain needed routes `baasicArticleRatingsClient` uses `baasicArticleRatingsRouteDefinition`. 
*/

import { BaasicArticleRatingsRouteDefinition } from '.';
import { IOptions, ModelMapper } from '../IOptions';

export class BaasicArticleRatingsClient {

    /**                 
     * Provides direct access to `baasicArticleRatingsRouteDefinition`.                
     * @method                        
     * @example baasicArticleRatingsClient.routeDefinition.get.expand(expandObject);                 
     **/ 
    get routeDefinition(): BaasicArticleRatingsRouteDefinition {
        return this.baasicArticleRatingsRouteDefinition;
    }

    constructor(
        private modelMapper: ModelMapper,
        private baasicArticleRatingsRouteDefinition: BaasicArticleRatingsRouteDefinition
    ) {}

    /**       
     * Returns a promise that is resolved once the create article rating action has been performed; this action creates a new rating for an article.                   
     * @method                       
     * @example baasicArticleRatingsClient.create({ articleId : '<article-id>', rating : 5, userId : '<user-id>' })
                    .success(function (data) { 
                        // perform success action here 
                })
                .error(function (response, status, headers, config) { 
                    // perform error handling here 
                });                   
     **/ 						
    create(data: any): Promise<any> {
        return this.baasicApiHttp.post(this.baasicArticleRatingsRouteDefinition.create().expand(data), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article rating resources matching the given criteria.                  
     * @method                         
     * @example baasicArticleRatingsClient.find({ 
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
        return this.baasicApiHttp.get(this.baasicArticleRatingsRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

    /**                  
     * Returns a promise that is resolved once the findByUser action has been performed. Success response returns a list of article rating resources filtered by username.                  
     * @method                         
     * @example baasicArticleRatingsClient.find('<username>', {   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>'
                })
                .success(function (collection) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                     
     **/
    findByUser(username: string, options: IOptions): Promise<any> {
         let params = angular.extend({}, options); 
         params.username = username;
         
         return this.baasicApiHttp.get(this.baasicArticleRatingsRouteDefinition.findByUser().expand(this.modelMapper.findParams(params))); 
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article rating resource.                  
     * @method                         
     * @example baasicArticleRatingsClient.get('<articleRating-id>')
                    .success(function (data) {   
                        // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                 
     **/
    get(id: string, options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleRatingsRouteDefinition.get().expand(this.modelMapper.getParams(id, options)));
    }

    /**                  
     * Returns a promise that is resolved once the update article rating action has been performed; this action updates an article rating. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleRating); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method                         
     * @example // articleRating is a resource previously fetched using get action. 
                    articleRating.rating = 4; 
                    baasicArticleRatingsClient.update(articleRating)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/						
    update(data: any): Promise<any> {
         let params = this.modelMapper.updateParams(data);
         return this.baasicApiHttp.put(this.baasicArticleRatingsRouteDefinition.update(params), params[this.baasicConstants.modelPropertyName]);
    }

    /**                 
     * Returns a promise that is resolved once the remove article rating action has been performed. If the action is successfully completed, the article rating resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleRating); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method                        
     * @example // articleRating is a resource previously fetched using get action.				 
                    baasicArticleRatingsClient.remove(articleRating).success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });						
     **/					
    remove(data: any): Promise<any> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicArticleRatingsRouteDefinition.delete(params));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/