/* globals module */
/**  
 * @module skillRouteDefinition  
 * @description Baasic Skill Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Skill Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition, TYPES as commonTypes } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { SkillBatchRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { ISkill } from 'modules/userProfile/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class SkillRouteDefinition extends BaseRouteDefinition {

    public readonly findRoute: string = 'profile/lookups/skills/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'profile/lookups/skills';

    public readonly createRoute: string = 'profile/lookups/skills';

    public readonly updateRoute: string = 'profile/lookups/skills/{id}';

    public readonly deleteRoute: string = 'lookups/skills/{id}';

    get batch(): SkillBatchRouteDefinition {
        return this.skillBatchRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(userProfileTypes.SkillBatchRouteDefinition) protected skillBatchRouteDefinition: SkillBatchRouteDefinition
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing skill properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain skill subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the skill property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example skillRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id Skill id which uniquely identifies skill resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example skillRouteDefinition.get(id, options);                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method                        
     * @example skillRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data A skill object used to update specified skill resource.                        
     * @example skillRouteDefinition.update(data);                              
     **/
    update(data: ISkill): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**                 
     * Parses delete route; this URI template does not expose any additional options.                 
     * @method
     * @param data A skill object used to delete specified skill resource.                        
     * @example skillRouteDefinition.delete(data);                              
     **/
    delete(data: ISkill): any {
        return super.baseDelete(this.deleteRoute, data);
    }
}