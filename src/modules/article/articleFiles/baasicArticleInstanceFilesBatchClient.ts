/* globals module */
/**  
 * @module articleInstanceFilesBatchClient  
 * @description  Article Instance Files Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    ArticleInstanceFilesBatchRouteDefinition,
    TYPES as articleTypes
} from 'modules/article';
import { IArticleFile } from 'modules/article/contracts';

@injectable()
export class ArticleInstanceFilesBatchClient {

    get routeDefinition(): ArticleInstanceFilesBatchRouteDefinition {
        return this.articleInstanceFilesBatchRouteDefinition;
    }

    constructor(
        @inject(articleTypes.ArticleInstanceFilesBatchRouteDefinition) protected articleInstanceFilesBatchRouteDefinition: ArticleInstanceFilesBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
     * @method
     * @param articleId Article file id of the original article file used to identify article files on which delete action should be performed.
     * @param data Collection of article delete requests which uniquely identifies article files that need to be deleted.
     * @returns A promise that is resolved once the unlink action has been performed.                           
     * @example // Remove original file resources                
                   articleInstanceFilesBatchClient.unlink([{ id: '<file-id>' }])
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       });		
               // Remove derived file resources  
                   articleInstanceFilesBatchClient.unlink([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                           // perform error handling here 
                       });		                    
    **/
    unlink(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.articleInstanceFilesBatchRouteDefinition.unlink(articleId), undefined, data);
    }

    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                  
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article file need to be updated.
     * @param data Article file object that need to be updated in the system.
     * @returns A promise that is resolved once the update action has been performed.                         
     * @example articleInstanceFilesBatchClient.update(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    update(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.articleInstanceFilesBatchRouteDefinition.update(articleId), this.articleInstanceFilesBatchRouteDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose article files need to be linked.
     * @param data A collection of article file objects that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                          
     * @example articleInstanceFilesBatchClient.link(files)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    link(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.articleInstanceFilesBatchRouteDefinition.link(articleId), this.articleInstanceFilesBatchRouteDefinition.createParams(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/
