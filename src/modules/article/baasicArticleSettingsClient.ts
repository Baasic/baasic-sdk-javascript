/* globals module */
/**  
 * @module articleSettingsClient  
 * @description  Article Settings Client provides an easy way to consume  Article Settings REST API end-points. In order to obtain needed routes `articleSettingsClient` uses `articleSettingsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ArticleSettingsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSettings } from 'modules/article/contracts';

@injectable()
export class ArticleSettingsClient {

    /**                 
     * Provides direct access to `baasicArticleSettingsRouteService`.                 
     * @method                        
     * @example articleSettingsClient.routeDefinition.get().expand(expandObject);                 
     **/
    get routeDefinition(): ArticleSettingsRouteDefinition {
        return this.articleSettingsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleSettingsRouteDefinition) protected articleSettingsRouteDefinition: ArticleSettingsRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }


    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the article settings.                 
     * @method
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed.                          
     * @example articleSettingsClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.articleSettingsRouteDefinition.get(options));
    }


    /**                  
     * Returns a promise that is resolved once the update article settings action has been performed; this action updates article settings. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleSettings); 
     * let uri = params['model'].links('put').href; 
     * ```               
     * @method
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the update article settings action has been performed.                          
     * @example // articleSettings is a resource previously fetched using get action. 
                    articleSettings.allowArchive = true; 
                    articleSettingsClient.update(articleSettings)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IArticleSettings): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
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