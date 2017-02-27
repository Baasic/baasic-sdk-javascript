/* globals module */ 
/**  
 * @module baasicTemplatingBatchClient  
 * @description Baasic Templating Batch Client provides an easy way to consume Baasic Templating REST API end-points. In order to obtain a needed routes `baasicTemplatingBatchClient` uses `baasicTemplatingBatchRouteDefinition`. 
 */

import { IBaasicResponse } from 'common/contracts';
import { BaasicTemplatingBatchRouteDefinition } from 'modules/templating';
import { ITemplate } from 'modules/templating/contracts';

export class BaasicTemplatingBatchClient {

    get routeDefinition(): BaasicTemplatingBatchRouteDefinition {
        return this.baasicTemplatingBatchRouteDefinition;
    }
    
    constructor(protected baasicTemplatingBatchRouteDefinition: BaasicTemplatingBatchRouteDefinition) {}

    /**                     
     * Returns a promise that is resolved once the create action has been performed; this action creates new template resources.                     
     * @method
     * @param data An Template objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create action has been performed.
     * @example baasicTemplatingBatchClient.create([{ content : '<content>', templateId : '<template-id>' }])
                    .then(function (data) {       
                        // perform success action here     
                    },
                     function (response, status, headers, config) {       
                        // perform error handling here     
                    });                     
    **/
    create(data: ITemplate[]): Promise<IBaasicResponse[]> {
        return this.baasicApiHttp.post(this.baasicTemplatingBatchRouteDefinition.create(), this.baasicTemplatingBatchRouteDefinition.createParams(data));
    }

    /**                     
     * Returns a promise that is resolved once the update action has been performed; this action updates specified template resources.                     
     * @method 
     * @param data An Template objects that need to be inserted into the system.
     * @returns A promise that is resolved once the update action has been performed.                         
     * @example baasicTemplatingBatchClient.update(templates)
                    .then(function (data) {       
                        // perform success action here     
                    },
                     function (response, status, headers, config) {       
                         // perform error handling here     
                    });                     
     **/
    update(data: ITemplate[]): Promise<IBaasicResponse[]> {
        return this.baasicApiHttp.post(this.baasicTemplatingBatchRouteDefinition.update(), this.baasicTemplatingBatchRouteDefinition.updateParams(data)); 
    }

    /**                     
     * Returns a promise that is resolved once the remove action has been performed. This action will remove template resources from the system if successfully completed.                     
     * @method 
     * @param ids Template ids which uniquely identify Template resources that need to be deleted.
     * @returns A promise that is resolved once the update action has been performed.                           
     * @example baasicTemplatingBatchClient.remove(companyIds)
                    .then(function (data) {       
                        // perform success action here     
                    },
                     function (response, status, headers, config) {       
                         // perform error handling here     
                    });		                    
     **/
    remove(ids: string[]): Promise<any> {
        return this.baasicApiHttp({ 
            url: this.baasicTemplatingRouteDefinition.remove(),                             
            method: 'DELETE',                             
            data: ids                         
        });
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */