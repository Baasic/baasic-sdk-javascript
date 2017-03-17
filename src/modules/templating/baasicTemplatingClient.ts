/* globals module */
/**  
 * @module templatingClient  
 * @description  Templating Client provides an easy way to consume  Templating REST API end-points. In order to obtain a needed routes `templatingClient` uses `templatingRouteDefinition`. 
 */

import { injectable, inject } from 'inversify';
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { TemplatingBatchClient, TemplatingRouteDefinition, TYPES as templatingTypes } from 'modules/templating';
import { ITemplate } from 'modules/templating/contracts';

@injectable()
export class TemplatingClient {

    get routeDefinition(): TemplatingRouteDefinition {
        return this.templatingRouteDefinition;
    }

    get batch(): TemplatingBatchClient {
        return this.templatingBatchClient;
    }

    constructor(
        @inject(templatingTypes.TemplatingRouteDefinition) protected templatingRouteDefinition: TemplatingRouteDefinition,
        @inject(templatingTypes.TemplatingBatchClient) protected templatingBatchClient: TemplatingBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of template resources matching the given criteria.                 
     * @method
     * @param options Query resource options.
     * @returns A promise that is resolved once the find action has been performed.                        
     * @example templatingClient.find({  
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<ITemplate>>> {
        return this.apiClient.get<IQueryModel<ITemplate>>(this.templatingRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified template resource.                 
     * @method
     * @param id Template id which uniquely identifies Template resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example templatingClient.get('<template-id>')
                   .then(function (data) {  
                       // perform success action here 
                   },
                    function (response, status, headers, config) {  
                        // perform error handling here 
                   });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ITemplate>> {
        return this.apiClient.get<ITemplate>(this.templatingRouteDefinition.get(id, options));
    }

    /**                 
     * Returns a promise that is resolved once the create template action has been performed; this action creates a new template resource.                 
     * @method
     * @param data An Template object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create template action has been performed.                       
     * @example templatingClient.create({  content : '<content>',  templateId : '<template-id>' })
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });                 
     **/
    create(data: ITemplate): PromiseLike<IHttpResponse<ITemplate>> {
        return this.apiClient.post<ITemplate>(this.templatingRouteDefinition.create(), this.templatingRouteDefinition.createParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the update template action has been performed; this action updates a template resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicTemplatingRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(template); 
     * let uri = params['model'].links('put').href; 
     * ```                 
     * @method 
     * @param data An template object used to update specified Template resource.
     * @returns A promise that is resolved once the update template action has been performed.                       
     * @example // template is a resource previously fetched using get action. 
                    template.content = '<new-content>'; 
                    templatingClient.update(template)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });                
     **/
    update(data: ITemplate): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.templatingRouteDefinition.update(data), this.templatingRouteDefinition.updateParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a template resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicTemplatingRouteDefiniton` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(template); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method 
     * @param data An template object used to delete specified Template resource.
     * @returns A promise that is resolved once the remove action has been performed.                       
     * @example // template is a resource previously fetched using get action.				 
                    templatingClient.remove(template)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });		               
     **/
    remove(data: ITemplate): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.templatingRouteDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */