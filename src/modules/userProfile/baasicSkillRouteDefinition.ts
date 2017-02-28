/* globals module */
/**  
 * @module baasicSkillRouteDefinition  
 * @description Baasic Skill Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Skill Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { injectable, inject } from "inversify";
import { BaasicSkillBatchRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { ISkill } from 'modules/userProfile/contracts';

export class BaasicSkillRouteDefinition extends BaasicBaseRouteDefinition {

    get batch(): BaasicSkillBatchRouteDefinition {
        return this.baasicSkillBatchRouteDefinition;
    }

    constructor(
        @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper,
        @inject(userProfileTypes.BaasicSkillBatchRouteDefinition) protected baasicSkillBatchRouteDefinition: BaasicSkillBatchRouteDefinition
    ) { super(modelMapper); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing skill properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain skill subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the skill property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example baasicSkillRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind('profile/lookups/skills/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id Skill id which uniquely identifies skill resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example baasicSkillRouteDefinition.get(id, options);                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('profile/lookups/skills', id, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicSkillRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate('profile/lookups/skills', {});
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data A skill object used to update specified skill resource.                        
     * @example baasicSkillRouteDefinition.update(data);                              
     **/
    update(data: ISkill): any {
        return super.baseUpdate('profile/lookups/skills/{id}', data);
    }

    /**                 
     * Parses delete route; this URI template does not expose any additional options.                 
     * @method
     * @param data A skill object used to delete specified skill resource.                        
     * @example baasicSkillRouteDefinition.delete(data);                              
     **/
    delete(data: ISkill): any {
        return super.baseDelete('lookups/skills/{id}', data);
    }
}