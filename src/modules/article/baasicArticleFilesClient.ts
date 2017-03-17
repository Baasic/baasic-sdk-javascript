/* globals module */
/**  
 * @module baasicArticleFilesClient  
 * @description  Files Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    ArticleFilesBatchClient,
    BaasicArticleFilesRouteDefinition,
    ArticleFilesStreamsClient,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class ArticleFilesClient {

    get routeDefinition(): BaasicArticleFilesRouteDefinition {
        return this.baasicArticleFilesRouteDefinition;
    }

    get streams(): ArticleFilesStreamsClient {
        return this.baasicArticleFilesStreamsClient;
    }

    get batch(): ArticleFilesBatchClient {
        return this.ArticleFilesBatchClient;
    }

    constructor(
        @inject(articleTypes.BaasicArticleFilesRouteDefinition) protected baasicArticleFilesRouteDefinition: BaasicArticleFilesRouteDefinition,
        @inject(articleTypes.ArticleFilesStreamsClient) protected baasicArticleFilesStreamsClient: ArticleFilesStreamsClient,
        @inject(articleTypes.ArticleFilesBatchClient) protected ArticleFilesBatchClient: ArticleFilesBatchClient,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
     * @method 
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example baasicArticleFilesClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleFile>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IArticleFile>>(this.baasicArticleFilesRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method
     * @param id Article file id which uniquely identifies article resource that needs to be retrieved.                       
     * @param options Options object that contains embed data.
     * @returns A promise that is resolved once the get action has been performed. 
     * @example baasicArticleFilesClient.get('<file-id>')
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleFile>> {
        return this.baasicApiClient.get(this.baasicArticleFilesRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleFilesRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                  
     * @method
     * @param data Article file object.
     * @param options options object.
     * @returns A promise that is resolved once the unlink action has been performed.                          
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                    baasicArticleFilesRouteDefinition.remove(fileEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    unlink(data: IArticleFile, options: Object): PromiseLike<IHttpResponse<void>> {
        if (!options) {
            options = {};
        }
        return this.baasicApiClient.delete<void>(this.baasicArticleFilesRouteDefinition.unlink(data, options));
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleFilesRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     ``` 
     let params = modelMapper.updateParams(fileEntry); 
     let uri = params['model'].links('put').href; 
     ```                  
     * @method
     * @param data Article file object that need to be updated in the system.
     * @returns A promise that is resolved once the update file action has been performed.                          
     * @example // fileEntry is a file resource previously fetched using get action. 
                   fileEntry.description = '<description>'; 
                   baasicArticleFilesClient.update(fileEntry)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       }); 				
    **/
    update(data: IArticleFile): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleFilesRouteDefinition.update(data), this.baasicArticleFilesRouteDefinition.updateParams(data));
    }

    /** 
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Article Files module (For example: file resources from the Media Vault module can be linked directly into the Article Files module).                  
     * @method
     * @param data Article file object.
     * @returns A promise that is resolved once the link action has been performed.                          
     * @example baasicArticleFilesClient.link(fileObject)
                    .then(function (response, status, headers, config) {   
                        // perform success handling here 
                    },
                        function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    link(data: IArticleFile): PromiseLike<IHttpResponse<IArticleFile>> {
        return this.baasicApiClient.post(this.baasicArticleFilesRouteDefinition.link(), this.baasicArticleFilesRouteDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/