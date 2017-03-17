/* globals module */
/**  
 * @module articleFilesBatchClient  
 * @description  Files Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    ArticleFilesBatchRouteDefinition,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class ArticleFilesBatchClient {

    get routeDefinition(): ArticleFilesBatchRouteDefinition {
        return this.baasicArticleFilesBatchRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleFilesBatchRouteDefinition) protected baasicArticleFilesBatchRouteDefinition: ArticleFilesBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
     * @method                         
     * @example // Remove original file resources                
                   articleFilesBatchClient.unlink([{ id: '<file-id>' }])
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       });		
               // Remove derived file resources  
                   articleFilesBatchClient.unlink([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       });		                    
    **/
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.baasicArticleFilesBatchRouteDefinition.unlink(), undefined, data);
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                  
     * @method                        
     * @example articleFilesClient.batch.update(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    update(data: IArticleFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.baasicArticleFilesBatchRouteDefinition.update(), this.baasicArticleFilesBatchRouteDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
     * @method                         
     * @example articleFilesClient.batch.link(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    link(data: IArticleFile[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.baasicArticleFilesBatchRouteDefinition.link(), this.baasicArticleFilesBatchRouteDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/
