/* globals module */
/**  
 * @module commerceProductInstanceFilesClient  
 * @description  Product Instance Files Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    CommerceProductInstanceFilesBatchClient,
    CommerceProductInstanceFilesRoute,
    TYPES as productTyipes
} from '../../';
import { IProductFile, IProductOptions } from '../../contracts';

@injectable()
export class CommerceProductInstanceFilesClient {

    get routeDefinition(): CommerceProductInstanceFilesRoute {
        return this.ProductInstanceFilesRoute;
    }

    get batch(): CommerceProductInstanceFilesBatchClient {
        return this.ProductInstanceFilesBatchClient;
    }

    constructor(
        @inject(productTyipes.CommerceProductInstanceFilesRoute) protected ProductInstanceFilesRoute: CommerceProductInstanceFilesRoute,
        @inject(productTyipes.CommerceProductInstanceFilesBatchClient) protected ProductInstanceFilesBatchClient: CommerceProductInstanceFilesBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
     * @method  
     * @param productId Productslug or id which uniquely identifies product whose product files need to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                        
     * @example productInstanceFilesClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',
                    ids: '1,2,3',
                    from: '',
                    to: '',                   
                    search : '<search-phrase>'
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    find(productId: string, options?: IProductOptions): PromiseLike<IHttpResponse<IQueryModel<IProductFile>>> {
        return this.apiClient.get<IQueryModel<IProductFile>>(this.ProductInstanceFilesRoute.find(productId, options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method
     * @param productId Product slug or id which uniquely identifies product whose product files need to be retrieved.
     * @param id Productfile id which uniquely identifies product file that needs to be retrieved.
     * @param options options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed.                         
     * @example productInstanceFilesClient.get('<file-id>')
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   });                 
    **/
    get(productId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IProductFile>> {
        return this.apiClient.get<IProductFile>(this.ProductInstanceFilesRoute.get(productId, id, options));
    }

    /**                  
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicProductFilesRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                  
     * @method
     * @param productId Product slug or id which uniquely identifies product whose product files need to be deleted.
     * @param data
     * @param options
     * @returns A promise that is resolved once the unlink action has been performed.                         
     * @example // fileEntry is a file resource previously fetched using get action. The following action will unlink the original file resource and all accompanying derived file resources.			 
                    productInstanceFilesClient.unlink(fileEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    unlink(productId: string, data: IProductFile, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.ProductInstanceFilesRoute.unlink(productId, data, options));
    }

    /**                      
     * Returns a promise that is resolved once the unlink by product action has been performed. This action will remove all file resources from the system related to the requested Product if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicProductService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink-by-product').href; 
     * ```                     
     * @method
     * @param productId Productslug or id which uniquely identifies product whose product files need to be deleted.
     * @param data
     * @param options
     * @returns A promise that is resolved once the unlink by product action has been performed.                           
     * @example // fileEntry is a file resource previously fetched using get action.		 
                    productInstanceFilesClient.unlinkByProduct(fileEntry)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                             // perform error handling here 
                        });                     
     **/
    unlinkByProduct(productId: string, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.ProductInstanceFilesRoute.unlinkByProduct(productId, options));
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicProductFilesRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     ``` 
     let params = modelMapper.updateParams(fileEntry); 
     let uri = params['model'].links('put').href; 
     ```                  
     * @method
     * @param productId An Product object used to update specified product resource.
     * @param data ProductFile object used to update specific product file data in the system.
     * @returns A promise that is resolved once the update file action has been performed.                          
     * @example // fileEntry is a file resource previously fetched using get action. 
                   fileEntry.description = '<description>'; 
                   ProductInstanceFilesClient.update(fileEntry)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       }); 				
    **/
    update(productId: string, data: IProductFile): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(productId, data), this.routeDefinition.updateParams(data));
    }

    /** 
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the ProductFiles module (For example: file resources from the Media Vault module can be linked directly into the ProductFiles module).                  
     * @method
     * @param productId Product id which uniquely identifies product whose product files need to be linked.
     * @param data A Product file object that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                        
     * @example ProductInstanceFilesClient.link(fileObject)
                    .then(function (response, status, headers, config) {   
                        // perform success handling here 
                    },
                        function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    link(productId: string, data: IProductFile): PromiseLike<IHttpResponse<IProductFile>> {
        return this.apiClient.post<IProductFile>(this.routeDefinition.link(productId, data), this.routeDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/