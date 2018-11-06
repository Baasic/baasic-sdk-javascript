/* globals module */
/**  
 * @module commerceProductSettingsClient  
 * @description  Product Settings Client provides an easy way to consume  Product Settings REST API end-points. In order to obtain needed routes `productSettingsClient` uses `productSettingsRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { CommerceProductSettingsRoute, TYPES as productTypes } from '.././';
import { IProductSettings } from '.././contracts';

@injectable()
export class CommerceProductSettingsClient {

    /**                 
     * Provides direct access to `baasicProductSettingsRouteService`.                 
     * @method                        
     * @example productSettingsClient.routeDefinition.get().expand(expandObject);                 
     **/
    get routeDefinition(): CommerceProductSettingsRoute {
        return this.productSettingsRoute;
    }

    constructor(
        @inject(productTypes.CommerceProductSettingsRoute) protected productSettingsRoute: CommerceProductSettingsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }


    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the product settings.                 
     * @method
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed.                          
     * @example productSettingsClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.routeDefinition.get(options));
    }


    /**                  
     * Returns a promise that is resolved once the update product settings action has been performed; this action updates product settings. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `productSettingsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(productSettings); 
     * let uri = params['model'].links('put').href; 
     * ```               
     * @method
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the update product settings action has been performed.                          
     * @example // productSettings is a resource previously fetched using get action. 
                    productSettings.allowArchive = true; 
                    productSettingsClient.update(productSettings)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IProductSettings): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.update(data));
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