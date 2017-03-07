/* globals module */
/**  
 * @module baasicArticleInstanceFilesClient  
 * @description Baasic Article Instance Files Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import {
    BaasicArticleInstanceFilesBatchClient,
    BaasicArticleInstanceFilesRouteDefinition,
    BaasicArticleInstanceFilesStreamsClient,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceFilesClient {

    get routeDefinition(): BaasicArticleInstanceFilesRouteDefinition {
        return this.baasicArticleInstanceFilesRouteDefinition;
    }

    get streams(): BaasicArticleInstanceFilesStreamsClient {
        return this.baasicArticleInstanceFilesStreamsClient;
    }

    get batch(): BaasicArticleInstanceFilesBatchClient {
        return this.BaasicArticleInstanceFilesBatchClient;
    }

    constructor(
        @inject(articleTypes.BaasicArticleInstanceFilesRouteDefinition) protected baasicArticleInstanceFilesRouteDefinition: BaasicArticleInstanceFilesRouteDefinition,
        @inject(articleTypes.BaasicArticleInstanceFilesStreamsClient) protected baasicArticleInstanceFilesStreamsClient: BaasicArticleInstanceFilesStreamsClient,
        @inject(articleTypes.BaasicArticleInstanceFilesBatchClient) protected BaasicArticleInstanceFilesBatchClient: BaasicArticleInstanceFilesBatchClient,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
     * @method                         
     * @example baasicArticleInstanceFilesClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    search : '<search-phrase>' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleFile>>> {
        return this.baasicApiClient.get(this.baasicArticleInstanceFilesRouteDefinition.find(articleId, options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method                        
     * @example baasicArticleInstanceFilesClient.get('<file-id>')
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   });                 
    **/
    get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleFile>> {
        return this.baasicApiClient.get(this.baasicArticleInstanceFilesRouteDefinition.get(articleId, id, options));
    }

    /**                  
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleFilesRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                  
     * @method                         
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                    baasicArticleInstanceFilesRouteDefinition.remove(fileEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    unlink(articleId: string, data: any, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceFilesRouteDefinition.unlink(articleId, data, options));
    }

    /**                      
     * Returns a promise that is resolved once the unlink by article action has been performed. This action will remove all file resources from the system related to the requested article if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink-by-article').href; 
     * ```                     
     * @method                         
     * @example // fileEntry is a file resource previously fetched using get action.		 
                    baasicArticleInstanceFilesClient.unlinkByArticle(fileEntry)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                             // perform error handling here 
                        });                     
     **/
    unlinkByArticle(articleId: string, data: any, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceFilesRouteDefinition.unlink(articleId, data, options));
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleFilesRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     ``` 
     let params = modelMapper.updateParams(fileEntry); 
     let uri = params['model'].links('put').href; 
     ```                  
     * @method                         
     * @example // fileEntry is a file resource previously fetched using get action. 
                   fileEntry.description = '<description>'; 
                   baasicArticleInstanceFilesClient.update(fileEntry)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       }); 				
    **/
    update(articleId: string, data: IArticleFile): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleInstanceFilesRouteDefinition.update(articleId, data), this.baasicArticleInstanceFilesRouteDefinition.updateParams(data));
    }

    /** 
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Article Files module (For example: file resources from the Media Vault module can be linked directly into the Article Files module).                  
     * @method                         
     * @example baasicArticleInstanceFilesClient.link(fileObject)
                    .then(function (response, status, headers, config) {   
                        // perform success handling here 
                    },
                        function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    link(articleId: string, data: IArticleFile): PromiseLike<IHttpResponse<IArticleFile>> {
        return this.baasicApiClient.post(this.baasicArticleInstanceFilesRouteDefinition.link(articleId, data), this.baasicArticleInstanceFilesRouteDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/