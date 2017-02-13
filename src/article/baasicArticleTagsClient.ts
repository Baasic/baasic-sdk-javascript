/* globals module */ 
/**  
 * @module baasicArticleTagsDefinition  
 * @description Baasic Article Tags Definition provides an easy way to consume Baasic Article Tags REST API end-points. `baasicArticleTagsDefinition` functions enable performing standard CRUD operations directly on article tag resources, whereas the `baasicArticleClient` functions allow management between article and article tag. In order to obtain needed routes `baasicArticleTagsDefinition` uses `baasicArticleTagsRouteDefinition`. 
*/

import { BaasicArticleTagsRouteDefinition } from './baasicArticleTagsRouteDefinition':
import { IOptions } from '../IOptions';
import { ModelMapper } from '../modelMapper';

export class BaasicArticleTagsClient {

    public readonly subscriptions: BaasicSubscriptionsClient = new BaasicSubscriptionsClient(this.modelMapper, this.baasicArticleTagsRouteDefinition);
    
    get routeDefinition(): BaasicArticleTagsRouteDefinition {
        return this.baasicArticleTagsRouteDefinition;
    } 
    
    constructor(
        private modelMapper: ModelMapper,
        private baasicArticleTagsRouteDefinition: BaasicArticleTagsRouteDefinition
    ) {}

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article tag resources matching the given criteria.                 
     * @method                        
     * @example baasicArticleTagsClient.find({  
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
        return this.baasicApiHttp.get(this.baasicArticleTagsRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

     /**                 
      * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article tag resource.  
      * @param id tag id
      * @param options options object               
      * @method                        
      * @example baasicArticleTagsClient.get('<articleTag-id>')
                    .success(function (data) {  
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {  
                        // perform error handling here 
                    });                
     **/
    get(id: string, options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleTagsRouteDefinition.get().expand(this.modelMapper.getParams(id, options)));
    }

    /**                 
     * Returns a promise that is resolved once the update article tag action has been performed; this action updates a tag. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleTagsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleTag); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data data object                 
     * @method                        
     * @example // articleTag is a resource previously fetched using get action. 
                    articleTag.tag = '<new-tag>'; 
                    baasicArticleTagsClient.update(articleTag)
                        .success(function (data) {  
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {  
                            // perform error handling here 
                        });                
     **/
    update(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleTagsRouteDefinition.update(params), params[this.baasicConstants.modelPropertyName]);
    }

    /**                 
     * Returns a promise that is resolved once the remove article tag action has been performed. If the action is successfully completed, the article tag resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleTagsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleTag); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method                        
     * @example // articleTag is a resource previously fetched using get action.
                    baasicArticleTagsClient.remove(articleTag)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: any): Promise<any> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicArticleTagsRouteDefinition.delete(params));
    }
}


class BaasicSubscriptionsClient {

    constructor(
        private modelMapper: ModelMapper,
        private baasicArticleTagsRouteDefinition: BaasicArticleTagsRouteDefinition
    ) {}

    /**                     
     * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the specified tag.                     
     * @method subscriptions.subscribe                     
     * @example baasicArticleTagsClient.subscriptions.subscribe(tag, user) 
                    .success(function (data) { 
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    subscribe(tag: any, data: any): Promise<any> {
        let params = angular.extend(tag, data);
        return this.baasicApiHttp.post(this.baasicArticleTagsRouteDefinition.subscriptions.subscribe().expand(params), params);
    }

    /**                    
     * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the specified tag.
     * @param                     
     * @method subscriptions.isSubscribed                     
     * @example baasicArticleTagsClient.subscriptions.isSubscribed(tag, user)
                    .success(function (data) { 
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    isSubscribed(tag: any, data: any): Promise<any> {
        let params = angular.extend(tag, data);                         
        return this.baasicApiHttp.get(this.baasicArticleTagsRouteDefinition.subscriptions.isSubscribed().expand(params));
    }

     /**                     
      * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the specified tag.
      * @param tag tag object
      * @param data data object                     
      * @method subscriptions.unSubscribe                     
      * @example baasicArticleTagsClient.subscriptions.unSubscribe(tag, user)
                    .success(function (data) { 
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) { 
                        // perform error handling here 
                    });                     
     **/
    unSubscribe(tag: any, data: any): Promise<any> {
        let params = angular.extend(tag, data);
        return this.baasicApiHttp({
            url: this.baasicArticleTagsRouteDefinition.subscriptions.unSubscribe().expand(params),
            method: 'DELETE', 
            data: params                       
        });
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