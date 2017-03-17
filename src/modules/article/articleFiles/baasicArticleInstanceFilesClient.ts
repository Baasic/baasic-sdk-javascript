/* globals module */
/**  
 * @module baasicArticleInstanceFilesClient  
 * @description  Article Instance Files Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    ArticleInstanceFilesBatchClient,
    ArticleInstanceFilesRouteDefinition,
    ArticleInstanceFilesStreamsClient,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class ArticleInstanceFilesClient {

    get routeDefinition(): ArticleInstanceFilesRouteDefinition {
        return this.baasicArticleInstanceFilesRouteDefinition;
    }

    get streams(): ArticleInstanceFilesStreamsClient {
        return this.baasicArticleInstanceFilesStreamsClient;
    }

    get batch(): ArticleInstanceFilesBatchClient {
        return this.ArticleInstanceFilesBatchClient;
    }

    constructor(
        @inject(articleTypes.ArticleInstanceFilesRouteDefinition) protected baasicArticleInstanceFilesRouteDefinition: ArticleInstanceFilesRouteDefinition,
        @inject(articleTypes.ArticleInstanceFilesStreamsClient) protected baasicArticleInstanceFilesStreamsClient: ArticleInstanceFilesStreamsClient,
        @inject(articleTypes.ArticleInstanceFilesBatchClient) protected ArticleInstanceFilesBatchClient: ArticleInstanceFilesBatchClient,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
     * @method  
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                        
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
        return this.baasicApiClient.get<IQueryModel<IArticleFile>>(this.baasicArticleInstanceFilesRouteDefinition.find(articleId, options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be retrieved.
     * @param id Article file id which uniquely identifies article file that needs to be retrieved.
     * @param options options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed.                         
     * @example baasicArticleInstanceFilesClient.get('<file-id>')
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   });                 
    **/
    get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleFile>> {
        return this.baasicApiClient.get<IArticleFile>(this.baasicArticleInstanceFilesRouteDefinition.get(articleId, id, options));
    }

    /**                  
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleFilesRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                  
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be deleted.
     * @param data
     * @param options
     * @returns A promise that is resolved once the unlink action has been performed.                         
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                    baasicArticleInstanceFilesRouteDefinition.remove(fileEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    unlink(articleId: string, data: IArticleFile, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceFilesRouteDefinition.unlink(articleId, data, options));
    }

    /**                      
     * Returns a promise that is resolved once the unlink by article action has been performed. This action will remove all file resources from the system related to the requested article if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink-by-article').href; 
     * ```                     
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be deleted.
     * @param data
     * @param options
     * @returns A promise that is resolved once the unlink by article action has been performed.                           
     * @example // fileEntry is a file resource previously fetched using get action.		 
                    baasicArticleInstanceFilesClient.unlinkByArticle(fileEntry)
                        .then(function (data) { 
                            // perform success action here 
                        },
                         function (response, status, headers, config) { 
                             // perform error handling here 
                        });                     
     **/
    unlinkByArticle(articleId: string, data: IArticleFile, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleInstanceFilesRouteDefinition.unlink(articleId, data, options));
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleFilesRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     ``` 
     let params = modelMapper.updateParams(fileEntry); 
     let uri = params['model'].links('put').href; 
     ```                  
     * @method
     * @param articleId An article object used to update specified article resource.
     * @param data Article File object used to update specific article file data in the system.
     * @returns A promise that is resolved once the update file action has been performed.                          
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
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be linked.
     * @param data
     * @returns A promise that is resolved once the link action has been performed.                        
     * @example baasicArticleInstanceFilesClient.link(fileObject)
                    .then(function (response, status, headers, config) {   
                        // perform success handling here 
                    },
                        function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    link(articleId: string, data: IArticleFile): PromiseLike<IHttpResponse<IArticleFile>> {
        return this.baasicApiClient.post<IArticleFile>(this.baasicArticleInstanceFilesRouteDefinition.link(articleId, data), this.baasicArticleInstanceFilesRouteDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/