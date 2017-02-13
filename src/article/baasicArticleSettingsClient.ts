/* globals module */ 
/**  
 * @module baasicArticleSettingsClient  
 * @description Baasic Article Settings Client provides an easy way to consume Baasic Article Settings REST API end-points. In order to obtain needed routes `baasicArticleSettingsClient` uses `baasicArticleSettingsRouteDefinition`. 
 */

import { BaasicArticleSettingsRouteDefinition } from './baasicArticleSettingsRouteDefinition';
import { IOptions } from '../IOptions';
import { ModelMapper } from '../modelMapper';

export class baasicArticleSettingsClient {

    /**                 
     * Provides direct access to `baasicArticleSettingsRouteService`.                 
     * @method                        
     * @example baasicArticleSettingsClient.routeDefinition.get().expand(expandObject);                 
     **/
    get routeDefinition(): BaasicArticleSettingsRouteDefinition {
        return this.baasicArticleSettingsRouteDefinition;
    }

    constructor(
        private modelMapper: ModelMapper,
        private baasicArticleSettingsRouteDefinition: BaasicArticleSettingsRouteDefinition
    ) {}

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the article settings. 
     * @param options options object                 
     * @method                         
     * @example baasicArticleSettingsClient.get()
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleSettingsRouteDefinition.get().expand(this.modelMapper.getParams(options)));
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
                        .success(function (data) {   
                            // perform success action here 
                    }).error(function (response, status, headers, config) {   
                        // perform error handling here 
                    }); 				
     **/	
    update(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicArticleSettingsRouteDefinition.update(params), params[this.baasicConstants.modelPropertyName]);
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