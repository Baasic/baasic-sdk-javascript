/* globals module */
/**  
 * @module skillBatchClient  
 * @description Baasic Skill Batch Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Skill Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { SkillBatchRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { ISkill } from 'modules/userProfile/contracts';

@injectable()
export class SkillBatchClient {

    get routeDefinition(): SkillBatchRouteDefinition {
        return this.skillBatchRouteDefinition;
    }

    constructor(
        @inject(userProfileTypes.SkillBatchRouteDefinition) protected skillBatchRouteDefinition: SkillBatchRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                   
     * Returns a promise that is resolved once the create skill action has been performed; this action creates new skill resources.                   
     * @method
     * @param data A collection of skill objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create skill action has been performed.                         
     * @example   skillClient.create([{     
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
    create(data: ISkill[]): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the update skill action has been performed; this action updates specified skill resources.                   
     * @method
     * @param data A collection of skill objects used to update specified skill resources.
     * @returns A promise that is resolved once the update skill action has been performed.                         
     * @example   skillBatchClient.update(companies)
                    .then(function (data) {     
                        // perform success action here   
                    }, 
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });                   
     **/
    update(data: ISkill[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**                   
     * Returns a promise that is resolved once the remove action has been performed. This action will remove skill resources from the system if successfully completed.                   
     * @method
     * @param ids Collection of skill ids which uniquely identifies skill resources that need to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.                        
     * @example skillBatchClient.remove(skillIds)
                    .then(function (data) {     
                        // perform success action here   
                    }, 
                     function (response, status, headers, config) {     
                         // perform error handling here   
                    });		                  
     **/
    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.skillBatchRouteDefinition.delete(), undefined, ids);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */