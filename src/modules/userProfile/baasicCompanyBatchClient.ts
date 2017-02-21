/* globals module */ 
/**  
 * @module baasicCompanyBatchClient  
 * @description Baasic Company Batch Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Company Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicCompanyBatchRouteDefinition } from 'modules/userProfile';
import { ICompany } from 'modules/userProfile/contracts';

export class BaasicCompanyBatchClient {
    
    constructor(protected baasicCompanyBatchRouteDefinition: BaasicCompanyBatchRouteDefinition) {}

    /**                   
     * Returns a promise that is resolved once the create company action has been performed; this action creates new company resources.                   
     * @method
     * @param data A collection of company objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create company action has been performed.                          
     * @example  baasicCompanyBatchClient.create([{     
                    description : '<description>',     
                    name : '<name>',     
                    slug: '<slug>'   
                 }])
                 .then(function (data) {     
                     // perform success action here   
                  },
                   function (response, status, headers, config) {     
                       // perform error handling here   
                 });                   
     **/ 				
    create(data: ICompany[]): Promise<any> {
        return this.baasicApiHttp.post(this.baasicCompanyBatchRouteDefinition.create(), this.baasicCompanyBatchRouteDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the update company action has been performed; this action updates specified company resources.                   
     * @method
     * @param data A collection of company objects used to update specified company resources.
     * @returns A promise that is resolved once the update company action has been performed.                         
     * @example   baasicCompanyBatchClient.update(companies)
                    .then(function (data) {     
                        // perform success action here   
                    },
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });                   
     **/ 				
    update(data: ICompany[]): Promise<any> {
        return this.baasicApiHttp.put(this.baasicCompanyBatchRouteDefinition.update(), this.baasicCompanyBatchRouteDefinition.updateParams(data));
    }

     /**                   
      * Returns a promise that is resolved once the remove action has been performed. This action will remove company resources from the system if successfully completed.                   
      * @method
      * @param ids Collection of company ids which uniquely identifies company resources that need to be deleted.
      * @returns A promise that is resolved once the remove action has been performed.                          
      * @example baasicCompanyBatchClient.remove(companyIds)
                    .then(function (data) {     
                        // perform success action here   
                    }, 
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });		                  
     **/	
    remove(ids: string[]): Promise<void> {
        return this.baasicApiHttp({                         
                url: this.baasicCompanyBatchRouteDefinition.delete(),                         
                method: 'DELETE',                         
                data: ids                     
        });  
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */