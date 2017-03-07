/* globals module */
/**  
 * @module baasicArticleSettingsClient  
 * @description Baasic Article Settings Client provides an easy way to consume Baasic Article Settings REST API end-points. In order to obtain needed routes `baasicArticleSettingsClient` uses `baasicArticleSettingsRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicArticleSettingsRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticleSettings } from 'modules/article/contracts';

@injectable()
export class BaasicArticleSettingsClient {

    /**                 
     * Provides direct access to `baasicArticleSettingsRouteService`.                 
     * @method                        
     * @example baasicArticleSettingsClient.routeDefinition.get().expand(expandObject);                 
     **/
    get routeDefinition(): BaasicArticleSettingsRouteDefinition {
        return this.baasicArticleSettingsRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleSettingsRouteDefinition) protected baasicArticleSettingsRouteDefinition: BaasicArticleSettingsRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }


    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the article settings. 
     * @param options options object                 
     * @method                         
     * @example baasicArticleSettingsClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicArticleSettingsRouteDefinition.get(options));
    }


    /**                  
     * Returns a promise that is resolved once the update article settings action has been performed; this action updates article settings. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(articleSettings); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data data object                  
     * @method                         
     * @example // articleSettings is a resource previously fetched using get action. 
                    articleSettings.allowArchive = true; 
                    baasicArticleSettingsClient.update(articleSettings)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IArticleSettings): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleSettingsRouteDefinition.update(data), this.baasicArticleSettingsRouteDefinition.updateParams(data));
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