/* globals module */
/**  
 * @module templatingBatchClient  
 * @description  Templating Batch Client provides an easy way to consume  Templating REST API end-points. In order to obtain a needed routes `templatingBatchClient` uses `templatingBatchRoute`. 
 */

import { injectable, inject } from 'inversify';
import { IResponse } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { TemplatingBatchRoute, TYPES as templatingTypes } from 'modules/templating';
import { ITemplate } from 'modules/templating/contracts';

@injectable()
export class TemplatingBatchClient {

    constructor(
        @inject(templatingTypes.TemplatingBatchRoute) protected templatingBatchRoute: TemplatingBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    get routeDefinition(): TemplatingBatchRoute {
        return this.templatingBatchRoute;
    }

    /**                     
     * Returns a promise that is resolved once the create action has been performed; this action creates new template resources.                     
     * @method
     * @param data An Template objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create action has been performed.
     * @example templatingBatchClient.create([{ content : '<content>', templateId : '<template-id>' }])
                    .then(function (data) {       
                        // perform success action here     
                    },
                     function (response, status, headers, config) {       
                        // perform error handling here     
                    });                     
    **/
    create(data: ITemplate[]): PromiseLike<IHttpResponse<IResponse[]>> {
        return this.apiClient.post<IResponse[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the update action has been performed; this action updates specified template resources.                     
     * @method 
     * @param data An Template objects that need to be inserted into the system.
     * @returns A promise that is resolved once the update action has been performed.                         
     * @example templatingBatchClient.update(templates)
                    .then(function (data) {       
                        // perform success action here     
                    },
                     function (response, status, headers, config) {       
                         // perform error handling here     
                    });                     
     **/
    update(data: ITemplate[]): PromiseLike<IHttpResponse<IResponse[]>> {
        return this.apiClient.put<IResponse[]>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the remove action has been performed. This action will remove template resources from the system if successfully completed.                     
     * @method 
     * @param ids Template ids which uniquely identify Template resources that need to be deleted.
     * @returns A promise that is resolved once the update action has been performed.                           
     * @example templatingBatchClient.remove(companyIds)
                    .then(function (data) {       
                        // perform success action here     
                    },
                     function (response, status, headers, config) {       
                         // perform error handling here     
                    });		                    
     **/
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.templatingBatchRoute.delete(), undefined, ids);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */