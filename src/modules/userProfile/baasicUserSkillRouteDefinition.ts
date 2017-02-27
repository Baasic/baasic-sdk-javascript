/* globals module */
/**  
 * @module baasicUserSkillRouteDefinition  
 * @description Baasic User Skill Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Skill Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { injectable, inject } from "inversify";
import { IUserSkill } from 'modules/userProfile/contracts';

export class BaasicUserSkillRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper) { super(modelMapper); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing user skill properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain user skill subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the user skill property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method 
     * @param options Query resource options object.                       
     * @example baasicUserSkillRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind('profiles/{userId}/skills/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id User profile id or display name which uniquely identifies user profile whose skill resources need to be retrieved.
     * @param options Query resource options object.                        
     * @example baasicUserSkillRouteDefinition.get(id, options);                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('profiles/{userId}/skills/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method
     * @param data An user skill object that needs to be inserted into the system.                        
     * @example baasicUserSkillRouteDefinition.create(data);                              
     **/
    create(data: IUserSkill): any {
        return super.baseCreate('profiles/{userId}/skills', data);
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data An user skill object used to update specific user skill resource in the system.                
     * @example baasicUserSkillRouteDefinition.update(data);                              
     **/
    update(data: IUserSkill): any {
        return super.baseUpdate('profiles/{userId}/skills/{id}', data);
    }

    /**                 
     * Parses delete route; this URI template does not expose any additional options.                 
     * @method
     * @param data An user skill object used to delete specific user skill resource in the system.                
     * @example baasicUserSkillRouteDefinition.delete(data);                              
     **/
    delete(data: IUserSkill): any {
        return super.baseDelete('profiles/{userId}/skills/{id}', data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */