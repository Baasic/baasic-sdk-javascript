/* globals module */ 
/**  
 * @module baasicUserProfileRouteDefinition  
 * @description Baasic User Profile Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Profile Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper } from 'common';
import { IOptions } from 'common/contracts';
import { IUserProfile } from 'modules/userProfile/contracts';

export class BaasicUserProfileRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(protected modelMapper: ModelMapper) { super(modelMapper); }

    /**                 
     * Parses find user profile route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify user profile resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain user profile subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the user profile property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example baasicUserProfileRouteDefinition.find.({searchQuery: '<search-phrase>'});                               
     **/  
    find(options?: IOptions): any {
        return super.baseFind('profiles/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id User profile id which uniquely identifies user profile resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example baasicUserProfileRouteDefinition.get(id, options);                               
     **/     
    get(id: string, options?: IOptions): any {
        return super.baseGet('profiles/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses create user profile route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicUserProfileRouteService.create();                              
     **/  				
    create(): any {
        return super.baseCreate('profiles', {});
    }

    /**                 
     * Parses update user profile route; this URI template does not expose any additional options.                 
     * @method 
     * @param data An user profile object used to update specified user profile resource.                       
     * @example baasicUserProfileRouteService.update(data);                              
     **/
    update(data: IUserProfile): any {
        return super.baseUpdate('profiles/{id}', data);
    }

    delete(data: IUserProfile): any {
        return super.baseDelete()
    }
}