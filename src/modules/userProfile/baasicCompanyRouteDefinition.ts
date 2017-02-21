/* globals module */ 
/**  
 * @module baasicCompanyRouteDefinition  
 * @description Baasic Company Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Company Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, Utility } from 'common';
import { IOptions } from 'common/contracts';
import { BaasicCompanyBatchRouteDefinition } from 'modules/userProfile';
import { ICompany } from 'modules/userProfile/contracts';

export class BaasicCompanyRouteDefinition extends BaasicBaseRouteDefinition {

    get batch(): BaasicCompanyBatchRouteDefinition {
        return this.baasicCompanyBatchRouteDefinition;
    }
    
    constructor(
        protected modelMapper: ModelMapper,
        utility: Utility,
        protected baasicCompanyBatchRouteDefinition: BaasicCompanyBatchRouteDefinition
    ) { super(modelMapper, utility); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing company properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain company subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the company property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.       
     * @example baasicCompanyRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/ 
    find(options?: IOptions): any {
        return super.baseFind('lookups/companies/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicCompanyRouteDefinition.create();                              
     **/ 
    create(): any {
        return super.baseCreate('lookups/companies', {});
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id Company id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example baasicCompanyRouteDefinition.get();                               
     **/ 
    get(id: string, options?: IOptions): any {
        return super.baseGet('lookups/companies/{id}/{?embed,fields}', id, options);
    }

    update(data: ICompany): any {
        return super.baseUpdate('lookups/companies/{id}', data);
    }

    delete(data: ICompany): any {
        return super.baseDelete('lookups/companies/{id}', data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */